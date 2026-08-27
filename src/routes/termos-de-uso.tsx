import { createFileRoute } from "@tanstack/react-router";

const SITE_URL = "https://wmguinchodaleste.com.br";
const PAGE_URL = `${SITE_URL}/termos-de-uso`;
const PAGE_TITLE = "Termos de Uso | WM Guincho 24HR";
const PAGE_DESCRIPTION =
  "Condições de uso do site da WM Guincho 24HR e regras gerais do atendimento de guincho, reboque e socorro automotivo solicitado por telefone ou WhatsApp.";

export const Route = createFileRoute("/termos-de-uso")({
  component: TermosDeUso,
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

function TermosDeUso() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
        <a href="/" className="text-sm text-primary hover:underline">
          ← Voltar ao início
        </a>

        <h1 className="mt-6 font-display text-4xl uppercase sm:text-5xl">Termos de Uso</h1>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: 27/08/2026</p>

        <div className="prose-invert mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:uppercase [&_h2]:text-foreground [&_h2]:tracking-wide [&_li]:mb-1.5 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5">
          <section>
            <h2>1. Aceitação</h2>
            <p>
              Estes Termos regem o uso do site <strong>wmguinchodaleste.com.br</strong>, mantido por{" "}
              <strong>WM Guincho 24HR</strong> (
              <em>[razão social completa], CNPJ [00.000.000/0000-00], [endereço completo]</em>). Ao
              navegar no site ou acionar nossos canais de contato, você concorda com estas
              condições. Se não concordar, não utilize o site.
            </p>
          </section>

          <section>
            <h2>2. O que o site faz</h2>
            <p>
              Este site é institucional e serve para apresentar os serviços da WM Guincho 24HR e
              disponibilizar canais de contato (telefone e WhatsApp). <strong>Não há</strong>{" "}
              contratação, agendamento ou pagamento concluídos pelo site: todo atendimento é
              combinado diretamente com um operador pelos canais informados.
            </p>
          </section>

          <section>
            <h2>3. Serviços prestados</h2>
            <ul>
              <li>
                Remoção de veículos com guincho asa-delta (rodas dianteiras suspensas, traseiras no
                solo) para carros de passeio, SUVs e utilitários leves;
              </li>
              <li>
                Socorro no local: troca de pneu, carga de bateria, pane seca e abertura de veículo;
              </li>
              <li>
                Atendimento em locais de difícil acesso (garagens baixas, vielas, ruas estreitas);
              </li>
              <li>
                Remoção de veículos em busca e apreensão, prestada a bancos, financeiras,
                escritórios de advocacia e pátios, mediante ordem judicial e documentação regular.
              </li>
            </ul>
            <p>
              A execução depende de condições de segurança, acesso e trânsito no local, e da
              disponibilidade de equipamento compatível com o veículo.
            </p>
          </section>

          <section>
            <h2>4. Orçamento, preço e pagamento</h2>
            <p>
              O valor do serviço é informado e fechado com o cliente antes do envio do guincho,
              calculado pela distância e pelo tipo de veículo. O pagamento é feito no momento do
              atendimento, diretamente com o operador, nas formas aceitas (Pix, dinheiro, débito e
              crédito). Eventuais custos de pedágio, pátio ou serviços adicionais solicitados no
              local são informados antes da execução.
            </p>
          </section>

          <section>
            <h2>5. Responsabilidades do cliente</h2>
            <ul>
              <li>
                Fornecer informações corretas sobre localização, veículo e natureza da ocorrência;
              </li>
              <li>
                Retirar objetos pessoais e de valor do veículo antes da remoção e informar condições
                especiais (veículo rebaixado, importado, sem chave, blindado etc.);
              </li>
              <li>
                Nos casos de busca e apreensão, apresentar a ordem judicial e a documentação que
                autoriza a remoção.
              </li>
            </ul>
          </section>

          <section>
            <h2>6. Limitação de responsabilidade</h2>
            <p>
              As informações do site são fornecidas de boa-fé, mas podem ser alteradas sem aviso e
              não constituem garantia de disponibilidade imediata, tempo de chegada ou preço, que
              são confirmados apenas no contato direto. A WM Guincho 24HR não se responsabiliza por
              indisponibilidades do site, por conteúdos de sites de terceiros eventualmente
              vinculados, nem por danos preexistentes no veículo ou por vícios ocultos não
              informados no acionamento. A responsabilidade pela prestação do serviço observa o
              Código de Defesa do Consumidor e a legislação aplicável ao transporte.
            </p>
          </section>

          <section>
            <h2>7. Propriedade intelectual</h2>
            <p>
              A marca, o logotipo, os textos, as imagens e o layout deste site pertencem à WM
              Guincho 24HR ou a seus licenciantes. É vedada a reprodução, cópia ou uso comercial sem
              autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h2>8. Proteção de dados</h2>
            <p>
              O tratamento de dados pessoais coletados por meio do site e do atendimento é descrito
              na{" "}
              <a href="/politica-de-privacidade" className="text-primary underline">
                Política de Privacidade
              </a>{" "}
              e na{" "}
              <a href="/politica-de-cookies" className="text-primary underline">
                Política de Cookies
              </a>
              , que integram estes Termos.
            </p>
          </section>

          <section>
            <h2>9. Alterações</h2>
            <p>
              Estes Termos podem ser atualizados a qualquer momento. A data no topo da página indica
              a versão vigente; o uso continuado do site após a alteração significa concordância com
              a nova versão.
            </p>
          </section>

          <section>
            <h2>10. Legislação e foro</h2>
            <p>
              Aplica-se a legislação brasileira. Fica eleito o foro da comarca de{" "}
              <em>[comarca / cidade]</em>, São Paulo, para dirimir controvérsias, sem prejuízo de o
              consumidor optar pelo foro do seu domicílio.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
