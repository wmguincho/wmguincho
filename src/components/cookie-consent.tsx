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

const choiceButton =
  "rounded-md border border-border px-4 py-2 text-xs font-bold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary";

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
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
      setVisible(true);
    }

    const reopen = () => {
      const current = readStoredConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setCustomizing(true);
      setVisible(true);
    };
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  function commit(consent: ConsentState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...consent, ts: Date.now() }));
    pushConsentUpdate(consent);
    injectGtmIfNeeded(consent);
    setVisible(false);
    setCustomizing(false);
  }

  if (!mounted || !visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferências de cookies"
      className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-xl rounded-lg border border-border bg-surface p-5 text-sm shadow-[0_20px_70px_-24px_oklch(0_0_0/0.9)] sm:inset-x-auto sm:right-4"
    >
      <p className="font-semibold text-foreground">Usamos cookies</p>
      <p className="mt-1 text-muted-foreground">
        Usamos cookies necessários para o site funcionar e, apenas com sua permissão, cookies
        analíticos e de marketing. Veja detalhes na{" "}
        <a href="/politica-de-cookies" className="text-primary underline">
          Política de Cookies
        </a>
        .
      </p>

      {customizing && (
        <div className="mt-4 space-y-3 border-t border-border pt-4">
          <label className="flex items-center justify-between gap-3">
            <span>
              <span className="block font-medium text-foreground">Necessários</span>
              <span className="block text-xs text-muted-foreground">
                Sempre ativos — indispensáveis para o site funcionar.
              </span>
            </span>
            <input
              type="checkbox"
              checked
              disabled
              aria-label="Cookies necessários, sempre ativos"
            />
          </label>
          <label className="flex items-center justify-between gap-3">
            <span>
              <span className="block font-medium text-foreground">Analíticos</span>
              <span className="block text-xs text-muted-foreground">
                Ajudam a entender como o site é usado.
              </span>
            </span>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              aria-label="Cookies analíticos"
            />
          </label>
          <label className="flex items-center justify-between gap-3">
            <span>
              <span className="block font-medium text-foreground">Marketing</span>
              <span className="block text-xs text-muted-foreground">
                Usados para anúncios mais relevantes.
              </span>
            </span>
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              aria-label="Cookies de marketing"
            />
          </label>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {customizing ? (
          <button onClick={() => commit({ analytics, marketing })} className={choiceButton}>
            Salvar preferências
          </button>
        ) : (
          <>
            <button
              onClick={() => commit({ analytics: true, marketing: true })}
              className={choiceButton}
            >
              Aceitar todos
            </button>
            <button
              onClick={() => commit({ analytics: false, marketing: false })}
              className={choiceButton}
            >
              Rejeitar todos
            </button>
            <button onClick={() => setCustomizing(true)} className={choiceButton}>
              Personalizar
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(REOPEN_EVENT));
}
