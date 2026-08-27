import { useEffect, useState } from "react";
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

type NavItem = { label: string; href: string; icon: typeof Home };

const items: NavItem[] = [
  { label: "Início", href: "#topo", icon: Home },
  { label: "Serviços", href: "#servicos", icon: Truck },
  { label: "Busca e apreensão", href: "#apreensao", icon: FileSearch },
  { label: "Zona Leste", href: "#zona-leste", icon: MapPin },
  { label: "Dúvidas", href: "#faq", icon: HelpCircle },
];

/**
 * Mobile navigation: an animated hamburger→X button (stroke-dasharray morph,
 * see styles.css) that opens a full-screen panel with a pure opacity/visibility
 * fade — the pattern used on upsites.digital, adapted to the WM Guincho palette.
 * A single button toggles open/close; it stays above the panel so there is no
 * duplicate close control.
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

  return (
    <>
      <button
        type="button"
        data-open={open ? "true" : "false"}
        aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 flex h-11 w-11 shrink-0 items-center justify-center text-primary lg:hidden"
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
        className={`fixed inset-0 z-40 flex flex-col bg-background pt-24 transition-[opacity,visibility] duration-500 ease-out lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="hazard-bar h-1 w-full" aria-hidden="true" />
        <nav aria-label="Navegação mobile" className="flex-1 overflow-y-auto py-3">
          {items.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              tabIndex={open ? undefined : -1}
              onClick={() => setOpen(false)}
              className="group flex min-h-14 items-center gap-4 px-5 py-2.5 text-[1.0625rem] font-semibold text-foreground transition-colors hover:bg-surface"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-primary transition-colors group-hover:border-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex-1">{label}</span>
              <ChevronRight
                className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          ))}

          <a
            href={whatsappUrl}
            rel="noopener"
            tabIndex={open ? undefined : -1}
            onClick={() => {
              onLead("whatsapp");
              setOpen(false);
            }}
            className="group mt-2 flex min-h-14 items-center gap-4 border-t border-border px-5 py-2.5 text-[1.0625rem] font-bold uppercase tracking-wide text-primary"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex-1">Chamar no WhatsApp</span>
            <ChevronRight className="h-5 w-5 shrink-0" aria-hidden="true" />
          </a>
        </nav>

        <div className="shrink-0 border-t border-border bg-surface px-5 py-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Plantão 24h</p>
          <p className="mt-1 text-sm text-muted-foreground">Operador pronto na Zona Leste</p>
          <a
            href={`tel:${phoneTel}`}
            tabIndex={open ? undefined : -1}
            onClick={() => {
              onLead("call");
              setOpen(false);
            }}
            className="btn-emergency mt-3 flex min-h-14 items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-bold uppercase tracking-wide"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Ligar {phone}
          </a>
        </div>
      </div>
    </>
  );
}
