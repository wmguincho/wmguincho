import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CookieConsent } from "../components/cookie-consent";
import logo from "../assets/wm-guincho-logo.webp";

const PHONE = "+55 11 96944-9568";
const PHONE_TEL = "+5511969449568";
const WHATS = "https://wa.me/5511969449568?text=Preciso%20de%20guincho%20agora";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="hazard-bar h-1.5 w-full" aria-hidden="true" />
      <div className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="max-w-lg text-center">
          <img
            src={logo}
            alt="WM Guincho 24H — Zona Leste, São Paulo"
            width={300}
            height={200}
            className="mx-auto h-auto w-32 object-contain"
          />
          <p className="mt-8 font-display text-7xl text-primary sm:text-8xl">404</p>
          <h1 className="mt-2 font-display text-3xl uppercase text-foreground sm:text-4xl">
            Página não encontrada
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            O endereço que você abriu não existe ou foi movido. Se precisa de guincho agora, fale
            com um operador — o plantão é 24 horas.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_TEL}`}
              className="btn-emergency inline-flex items-center justify-center gap-2 rounded-md px-6 py-4 text-sm font-bold uppercase tracking-wide"
            >
              Ligar {PHONE}
            </a>
            <a
              href={WHATS}
              rel="noopener"
              className="btn-blue inline-flex items-center justify-center gap-2 rounded-md px-6 py-4 text-sm font-bold uppercase tracking-wide"
            >
              Chamar no WhatsApp
            </a>
          </div>
          <nav
            aria-label="Atalhos"
            className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold"
          >
            <Link to="/" className="text-muted-foreground hover:text-primary">
              Início
            </Link>
            <a href="/#servicos" className="text-muted-foreground hover:text-primary">
              Serviços
            </a>
            <a href="/#zona-leste" className="text-muted-foreground hover:text-primary">
              Zona Leste
            </a>
            <a href="/#faq" className="text-muted-foreground hover:text-primary">
              Dúvidas
            </a>
          </nav>
        </div>
      </div>
      <div className="hazard-bar h-1.5 w-full" aria-hidden="true" />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado por aqui. Tente atualizar ou volte para a página inicial.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar de novo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "WM Guincho 24HR" },
      { name: "theme-color", content: "#0b1220" },
      { property: "og:site_name", content: "WM Guincho 24HR" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "text/javascript",
        script: {
          // Consent Mode v2 defaults, set before anything else runs. GTM
          // itself is only requested from the browser after the visitor
          // grants consent — see components/cookie-consent.tsx — so this
          // script sets no cookies on its own.
          text: `window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{'analytics_storage':'denied','ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','functionality_storage':'denied','personalization_storage':'denied','security_storage':'granted','wait_for_update':500});`,
        },
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <CookieConsent />
    </QueryClientProvider>
  );
}
