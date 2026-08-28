import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ChevronRight,
  FileSearch,
  HelpCircle,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  Truck,
} from "lucide-react";
import logo from "@/assets/wm-guincho-logo.webp";

type NavItem = { label: string; href: string; icon: typeof Home };

const items: NavItem[] = [
  { label: "Início", href: "#topo", icon: Home },
  { label: "Serviços", href: "#servicos", icon: Truck },
  { label: "Busca e apreensão", href: "#apreensao", icon: FileSearch },
  { label: "Zona Leste", href: "#zona-leste", icon: MapPin },
  { label: "Dúvidas", href: "#faq", icon: HelpCircle },
];

/**
 * Mobile navigation, upsites.digital style: a single animated button that
 * morphs hamburger → X (stroke-dasharray, see styles.css) and toggles a
 * full-screen panel that fades in. The same button opens and closes — it is
 * never covered, because both the button and the panel are rendered through a
 * portal on <body>, above the blur-backed header's stacking context.
 */
export function MobileNav({
  phone,
  phoneTel,
  whatsappUrl,
  onLead,
}: {
  phone: string;
  phoneTel: string;
  whatsappUrl: string;
  onLead: (type: "call" | "whatsapp") => void;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  if (!mounted) return null;

  return createPortal(
    <>
      <button
        type="button"
        data-open={open ? "true" : "false"}
        aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((v) => !v)}
        className="fixed right-4 top-5 z-[90] flex h-11 w-11 items-center justify-center text-primary lg:hidden"
      >
        <svg width="30" height="30" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          <path
            className="menu-icon-line menu-icon-line-1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="menu-icon-line menu-icon-line-2" d="M 20,50 H 80" />
          <path
            className="menu-icon-line menu-icon-line-3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>

      <div
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Navegação"
        className={`fixed inset-0 z-[80] flex flex-col bg-background transition-[opacity,visibility] duration-300 ease-out lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="hazard-bar h-1 w-full" aria-hidden="true" />

        <div className="px-5 py-4">
          <img
            src={logo}
            alt="WM Guincho 24H"
            width={300}
            height={200}
            className="h-auto w-24 object-contain"
          />
        </div>

        <nav
          aria-label="Navegação mobile"
          className="flex-1 overflow-y-auto py-2"
        >
          {items.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              tabIndex={open ? undefined : -1}
              onClick={close}
              className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex-1 text-base font-semibold text-foreground">{label}</span>
              <ChevronRight
                className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="space-y-3 px-5 pb-[calc(env(safe-area-inset-bottom)+1.25rem)] pt-5">
          <a
            href={whatsappUrl}
            rel="noopener"
            tabIndex={open ? undefined : -1}
            onClick={() => {
              onLead("whatsapp");
              close();
            }}
            className="btn-whats flex min-h-14 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold uppercase tracking-wide"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chamar no WhatsApp
          </a>
          <a
            href={`tel:${phoneTel}`}
            tabIndex={open ? undefined : -1}
            onClick={() => {
              onLead("call");
              close();
            }}
            className="btn-emergency flex min-h-14 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold uppercase tracking-wide"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Ligar {phone}
          </a>
          <p className="pt-1 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Plantão 24h · Base na Zona Leste
          </p>
        </div>
      </div>
    </>,
    document.body,
  );
}
