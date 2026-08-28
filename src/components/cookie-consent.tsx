import { useEffect, useState } from "react";

type ConsentState = { analytics: boolean; marketing: boolean };

const STORAGE_KEY = "wm_cookie_consent";
const GTM_ID = "GTM-PCZK8549";
const REOPEN_EVENT = "wm:open-cookie-preferences";

function readStoredConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.analytics === "boolean" && typeof parsed?.marketing === "boolean") {
      return { analytics: parsed.analytics, marketing: parsed.marketing };
    }
    return null;
  } catch {
    return null;
  }
}

function pushConsentUpdate(consent: ConsentState) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
  });
}

let gtmInjected = false;

// GTM itself is only ever requested from the browser once the visitor has
// granted analytics or marketing consent — never on page load. This is what
// closes the "tags fire before consent" gap flagged in the audit.
function injectGtmIfNeeded(consent: ConsentState) {
  if (gtmInjected || typeof document === "undefined") return;
  if (!consent.analytics && !consent.marketing) return;
  gtmInjected = true;

  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}&l=dataLayer`;
  document.head.appendChild(script);
}

const btnPrimary =
  "rounded-md bg-primary px-4 py-2 text-[0.82rem] font-bold text-primary-foreground transition-[filter] hover:brightness-110";
const btnGhost =
  "rounded-md border-[1.5px] border-border bg-transparent px-4 py-2 text-[0.82rem] font-bold text-foreground transition-colors hover:border-muted-foreground";

function Switch({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative h-[26px] w-[46px] shrink-0 rounded-full transition-colors ${
        checked ? "bg-primary" : "bg-border"
      } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      <span
        className={`absolute left-[3px] top-[3px] h-5 w-5 rounded-full transition-transform ${
          checked ? "translate-x-5 bg-white" : "translate-x-0 bg-foreground"
        }`}
      />
    </button>
  );
}

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [bannerShown, setBannerShown] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = readStoredConsent();
    if (stored) {
      pushConsentUpdate(stored);
      injectGtmIfNeeded(stored);
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
    } else {
      setBannerVisible(true);
    }

    const reopen = () => {
      const current = readStoredConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setModalOpen(true);
    };
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  useEffect(() => {
    if (!bannerVisible) return;
    const id = requestAnimationFrame(() => setBannerShown(true));
    return () => cancelAnimationFrame(id);
  }, [bannerVisible]);

  function hideBanner() {
    setBannerShown(false);
    window.setTimeout(() => setBannerVisible(false), 350);
  }

  function commit(consent: ConsentState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...consent, ts: Date.now() }));
    pushConsentUpdate(consent);
    injectGtmIfNeeded(consent);
    setAnalytics(consent.analytics);
    setMarketing(consent.marketing);
    setModalOpen(false);
    hideBanner();
  }

  if (!mounted) return null;

  return (
    <>
      {bannerVisible && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Aviso de cookies"
          className={`fixed bottom-5 left-5 z-[70] flex max-w-[380px] flex-col gap-3 rounded-lg border border-border bg-surface p-4 shadow-[0_20px_70px_-24px_oklch(0_0_0/0.9)] transition-transform duration-[350ms] ease-out max-[640px]:inset-x-0 max-[640px]:bottom-0 max-[640px]:max-w-none max-[640px]:rounded-none max-[640px]:border-x-0 max-[640px]:border-b-0 max-[640px]:p-4 max-[640px]:pb-[calc(1rem+env(safe-area-inset-bottom))] ${
            bannerShown ? "translate-y-0" : "translate-y-[150%]"
          }`}
        >
          <p className="text-[0.82rem] leading-relaxed text-muted-foreground">
            Usamos cookies para melhorar sua experiência.{" "}
            <a href="/politica-de-cookies" className="text-primary underline">
              Saiba mais
            </a>
            .
          </p>
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => commit({ analytics: true, marketing: true })}
              className={`${btnPrimary} max-[480px]:flex-1`}
            >
              Aceitar
            </button>
            <button
              onClick={() => commit({ analytics: false, marketing: false })}
              className={`${btnGhost} max-[480px]:flex-1`}
            >
              Rejeitar
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="text-[0.85rem] font-semibold text-muted-foreground underline"
            >
              Personalizar
            </button>
          </div>
        </div>
      )}

      {modalOpen && (
        <div
          className="fixed inset-0 z-[75] flex items-center justify-center bg-[oklch(0.12_0.02_250/0.75)] p-5"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Preferências de cookies"
            className="max-h-[85vh] w-full max-w-[520px] overflow-y-auto rounded-lg border border-border bg-surface p-6 sm:p-8"
          >
            <h3 className="mb-2 font-display text-xl text-foreground">Preferências de cookies</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Escolha quais categorias de cookies deseja permitir. Cookies necessários não podem ser
              desativados pois garantem o funcionamento básico do site.
            </p>

            <div className="flex items-start justify-between gap-4 border-b border-border/60 py-4">
              <div>
                <h4 className="text-[0.98rem] font-semibold text-foreground">Necessários</h4>
                <p className="mt-1 text-[0.84rem] text-muted-foreground">
                  Essenciais para o funcionamento do site (navegação, segurança). Sempre ativos.
                </p>
              </div>
              <Switch checked disabled label="Cookies necessários, sempre ativos" />
            </div>

            <div className="flex items-start justify-between gap-4 border-b border-border/60 py-4">
              <div>
                <h4 className="text-[0.98rem] font-semibold text-foreground">Analíticos</h4>
                <p className="mt-1 text-[0.84rem] text-muted-foreground">
                  Ajudam a entender como o site é utilizado, de forma agregada e anônima.
                </p>
              </div>
              <Switch checked={analytics} onChange={setAnalytics} label="Cookies analíticos" />
            </div>

            <div className="flex items-start justify-between gap-4 border-b border-border/60 py-4">
              <div>
                <h4 className="text-[0.98rem] font-semibold text-foreground">Marketing</h4>
                <p className="mt-1 text-[0.84rem] text-muted-foreground">
                  Usados para personalizar anúncios e medir a eficácia de campanhas.
                </p>
              </div>
              <Switch checked={marketing} onChange={setMarketing} label="Cookies de marketing" />
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setModalOpen(false)}
                className={`${btnGhost} flex-1 py-3 text-sm`}
              >
                Cancelar
              </button>
              <button
                onClick={() => commit({ analytics, marketing })}
                className={`${btnPrimary} flex-1 py-3 text-sm`}
              >
                Salvar preferências
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(REOPEN_EVENT));
}
