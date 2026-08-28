import { createFileRoute } from "@tanstack/react-router";
import { openCookiePreferences } from "@/components/cookie-consent";

const SITE_URL = "https://wmguinchodaleste.com.br";
const PAGE_URL = `${SITE_URL}/politica-de-privacidade`;
const PAGE_TITLE = "Política de Privacidade | WM Guincho 24HR";
const PAGE_DESCRIPTION =
  "Como a WM Guincho 24HR coleta, usa e protege dados pessoais, e como você exerce seus direitos como titular sob a LGPD.";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PoliticaDePrivacidade,
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

function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
        <a href="/" className="text-sm text-primary hover:underline">
          ← Voltar ao início
        </a>

        <h1 className="mt-6 font-display text-3xl uppercase sm:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: 20/08/2026</p>

        <div className="prose-invert mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-xl [&_h2]:uppercase [&_h2]:text-foreground [&_h2]:tracking-wide [&_li]:mb-1.5 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5">
          <section>
            <h2>1. Quem somos</h2>
            <p>
              Esta Política se aplica ao site <strong>wmguinchodaleste.com.br</strong>, operado por{" "}
              <strong>WM Guincho 24HR</strong> (
              <em>
                [razão social completa], CNPJ [00.000.000/0000-00], endereço: [endereço completo]
              </em>
              ), doravante "nós". Esta é a controladora dos dados tratados por meio deste site, nos
              termos da Lei nº 13.709/2018 (LGPD).
            </p>
          </section>

          <section>
            <h2>2. Quais dados coletamos</h2>
            <p>Coletamos dados pessoais de duas formas:</p>
            <ul>
              <li>
                <strong>Diretamente de você</strong>, quando entra em contato por telefone ou
                WhatsApp para solicitar um serviço: nome, telefone, endereço ou local de coleta do
                veículo, e dados do veículo (placa, modelo). Em atendimentos de busca e apreensão,
                também podemos tratar dados relacionados ao contrato de financiamento e à ordem
                judicial que autoriza a remoção.
              </li>
              <li>
                <strong>Automaticamente, por cookies</strong>, apenas quando você consente:
                identificadores de navegador, páginas visitadas e origem do acesso, usados para
                medir o desempenho do site e de campanhas. Veja a seção 6.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Para que usamos esses dados</h2>
            <ul>
              <li>
                Viabilizar o atendimento de guincho, reboque e serviços correlatos solicitados;
              </li>
              <li>
                Executar remoções de busca e apreensão a pedido de bancos, financeiras ou
                escritórios de advocacia, mediante ordem judicial;
              </li>
              <li>Emitir cobrança e processar o pagamento do serviço prestado;</li>
              <li>Cumprir obrigações legais e regulatórias aplicáveis ao serviço prestado;</li>
              <li>
                Com seu consentimento, medir o uso do site e a performance de campanhas de
                publicidade (cookies analíticos e de marketing).
              </li>
            </ul>
          </section>

          <section>
            <h2>4. Base legal</h2>
            <p>
              Tratamos seus dados com base na{" "}
              <strong>execução de contrato ou procedimentos preliminares</strong> (quando você
              solicita um atendimento), no{" "}
              <strong>cumprimento de obrigação legal ou judicial</strong> (nos casos de busca e
              apreensão) e, para cookies não essenciais, no seu <strong>consentimento</strong>, que
              pode ser revogado a qualquer momento (seção 6).
            </p>
          </section>

          <section>
            <h2>5. Por quanto tempo guardamos e com quem compartilhamos</h2>
            <p>
              Guardamos os dados pelo tempo necessário para prestar o serviço contratado e cumprir
              obrigações legais, fiscais e, quando aplicável, judiciais — e pelo prazo de prescrição
              legal correspondente após o fim do atendimento. Nos casos de busca e apreensão,
              compartilhamos os dados estritamente necessários com o banco, financeira, escritório
              de advocacia ou pátio credenciado que solicitou a remoção. Não vendemos dados pessoais
              a terceiros.
            </p>
          </section>

          <section id="cookies">
            <h2>6. Cookies</h2>
            <p>
              Usamos três categorias de cookies. Você decide quais aceitar no banner exibido na
              primeira visita, e pode alterar sua escolha a qualquer momento clicando em{" "}
              <button
                type="button"
                onClick={() => openCookiePreferences()}
                className="text-primary underline"
              >
                Gerenciar preferências de cookies
              </button>
              .
            </p>
            <ul>
              <li>
                <strong>Necessários</strong> — indispensáveis para o site funcionar. Não podem ser
                desativados e não dependem de consentimento.
              </li>
              <li>
                <strong>Analíticos</strong> — usados para entender como o site é usado (páginas mais
                vistas, tempo de permanência). Só são carregados se você aceitar.
              </li>
              <li>
                <strong>Marketing</strong> — usados para medir e melhorar o desempenho de campanhas
                de anúncios. Só são carregados se você aceitar.
              </li>
            </ul>
            <p>
              Nenhum cookie analítico ou de marketing é carregado antes da sua escolha explícita no
              banner. Rejeitar todos não bloqueia o acesso a nenhum conteúdo do site. O detalhamento
              de cada categoria, prazos e serviços de terceiros está na{" "}
              <a href="/politica-de-cookies" className="text-primary underline">
                Política de Cookies
              </a>
              .
            </p>
          </section>

          <section>
            <h2>7. Seus direitos como titular</h2>
            <p>Nos termos da LGPD, você pode solicitar, a qualquer momento:</p>
            <ul>
              <li>Confirmação de que tratamos seus dados e acesso a eles;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>
                Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em
                desacordo com a lei;
              </li>
              <li>Portabilidade dos dados a outro fornecedor;</li>
              <li>Eliminação dos dados tratados com base no seu consentimento;</li>
              <li>
                Revogação do consentimento a qualquer momento, sem afetar atendimentos já
                concluídos.
              </li>
            </ul>
            <p>
              Para exercer esses direitos, entre em contato pelo canal do encarregado abaixo.
              Respondemos em prazo razoável e, quando aplicável, dentro dos prazos exigidos pela
              ANPD.
            </p>
          </section>

          <section>
            <h2>8. Encarregado de proteção de dados (DPO)</h2>
            <p>
              <em>
                [Nome do encarregado ou área responsável] — [e-mail de contato do encarregado] —{" "}
                [telefone, se houver]
              </em>
              .
            </p>
          </section>

          <section>
            <h2>9. Menores de idade</h2>
            <p>
              Nossos serviços são destinados a maiores de 18 anos. Não coletamos intencionalmente
              dados de menores de idade. Se um menor entrar em contato solicitando atendimento (ex:
              em nome de um responsável), tratamos apenas os dados estritamente necessários à
              prestação do socorro veicular.
            </p>
          </section>

          <section>
            <h2>10. Alterações desta política</h2>
            <p>
              Podemos atualizar esta Política periodicamente. A data no topo desta página indica a
              versão mais recente.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
