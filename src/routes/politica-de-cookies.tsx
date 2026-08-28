import { createFileRoute } from "@tanstack/react-router";
import { openCookiePreferences } from "@/components/cookie-consent";

const SITE_URL = "https://wmguinchodaleste.com.br";
const PAGE_URL = `${SITE_URL}/politica-de-cookies`;
const PAGE_TITLE = "Política de Cookies | WM Guincho 24HR";
const PAGE_DESCRIPTION =
  "Quais cookies o site da WM Guincho 24HR utiliza, para que servem, e como você aceita, recusa ou desativa cada categoria.";

export const Route = createFileRoute("/politica-de-cookies")({
  component: PoliticaDeCookies,
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
});

function PoliticaDeCookies() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
        <a href="/" className="text-sm text-primary hover:underline">
          ← Voltar ao início
        </a>

        <h1 className="mt-6 font-display text-3xl uppercase sm:text-4xl">Política de Cookies</h1>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: 27/08/2026</p>

        <div className="prose-invert mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-xl [&_h2]:uppercase [&_h2]:text-foreground [&_h2]:tracking-wide [&_li]:mb-1.5 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5">
          <section>
            <h2>1. O que são cookies</h2>
            <p>
              Cookies são pequenos arquivos de texto gravados no seu navegador quando você visita um
              site. Eles permitem que o site funcione corretamente, lembre preferências e, quando
              você autoriza, ajudam a medir o desempenho das páginas e das campanhas de publicidade.
              Tecnologias semelhantes (armazenamento local, pixels e tags) recebem o mesmo
              tratamento descrito nesta Política.
            </p>
          </section>

          <section>
            <h2>2. Categorias de cookies que usamos</h2>
            <ul>
              <li>
                <strong>Necessários</strong> — indispensáveis para o site carregar, manter a
                navegação segura e guardar a sua própria escolha de consentimento. Ficam sempre
                ativos e não dependem de autorização, nos termos do art. 7º, IX, da LGPD.
              </li>
              <li>
                <strong>Analíticos</strong> — medem, de forma agregada, quais páginas são mais
                visitadas, quanto tempo o visitante permanece e de onde veio o acesso. Usamos Google
                Analytics, carregado por meio do Google Tag Manager. Só são ativados se você
                aceitar.
              </li>
              <li>
                <strong>Marketing</strong> — medem o resultado de anúncios (por exemplo, quando uma
                ligação ou mensagem de WhatsApp partiu de uma campanha) e permitem exibir anúncios
                mais relevantes em outras plataformas. Usamos tags do Google Ads. Só são ativados se
                você aceitar.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Consentimento e Consent Mode</h2>
            <p>
              Na primeira visita, um banner pede a sua escolha. Enquanto você não decide, nenhum
              cookie analítico ou de marketing é carregado — o site aplica o modo de consentimento
              (Consent Mode v2) do Google com todas as categorias não essenciais negadas por padrão.
              O Google Tag Manager só é baixado do servidor depois que você aceita analíticos ou
              marketing.
            </p>
          </section>

          <section>
            <h2>4. Como alterar ou revogar sua escolha</h2>
            <p>
              Você pode rever a qualquer momento clicando em{" "}
              <button
                type="button"
                onClick={() => openCookiePreferences()}
                className="text-primary underline"
              >
                Gerenciar preferências de cookies
              </button>
              . A revogação passa a valer imediatamente para as próximas navegações; dados já
              coletados enquanto o consentimento estava ativo seguem o tratamento descrito na{" "}
              <a href="/politica-de-privacidade" className="text-primary underline">
                Política de Privacidade
              </a>
              .
            </p>
            <p>
              Você também pode bloquear ou apagar cookies diretamente no navegador. As instruções
              costumam ficar em <em>Configurações → Privacidade e segurança</em>. Bloquear cookies
              necessários pode fazer partes do site deixarem de funcionar; recusar analíticos e
              marketing não bloqueia nenhum conteúdo.
            </p>
          </section>

          <section>
            <h2>5. Cookies de terceiros</h2>
            <p>
              Quando ativados com o seu consentimento, os serviços do Google (Tag Manager, Analytics
              e Ads) podem gravar cookies próprios e tratar dados conforme as políticas do Google.
              Não vendemos nem compartilhamos esses dados com outros terceiros para finalidades
              distintas das descritas aqui.
            </p>
          </section>

          <section>
            <h2>6. Por quanto tempo duram</h2>
            <p>
              Cookies de sessão são apagados ao fechar o navegador. Cookies persistentes — inclusive
              o registro da sua escolha de consentimento e os cookies analíticos e de marketing —
              duram de alguns meses até cerca de dois anos, conforme a configuração de cada serviço,
              e são renovados a cada visita.
            </p>
          </section>

          <section>
            <h2>7. Contato</h2>
            <p>
              Dúvidas sobre esta Política ou sobre o tratamento de dados podem ser enviadas ao
              encarregado indicado na{" "}
              <a href="/politica-de-privacidade" className="text-primary underline">
                Política de Privacidade
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
