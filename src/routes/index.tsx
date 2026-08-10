import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  ShieldCheck,
  Truck,
  BatteryCharging,
  KeyRound,
  Fuel,
  CircleDot,
  Bike,
  Car,
  CheckCircle2,
  Star,
  FileSearch,
  Ruler,
  Navigation,
} from "lucide-react";
import heroImg from "@/assets/hero-guincho.jpg";
import operadorImg from "@/assets/operador.jpg";
import logo from "@/assets/wm-logo.png.asset.json";

const PHONE = "(11) 91234-5678";
const PHONE_TEL = "+5511912345678";
const WHATS = "https://wa.me/5511912345678?text=Preciso%20de%20guincho%20agora";

const services = [
  {
    icon: FileSearch,
    title: "Busca e apreensão",
    desc: "Recuperação de veículos financiados com apoio jurídico e documental, sigilo total e relatório do atendimento.",
    highlight: true,
  },
  {
    icon: Ruler,
    title: "Locais de difícil acesso",
    desc: "Garagens baixas, vielas, ruas estreitas e subsolos onde o guincho grande não entra. Equipamento compacto próprio.",
    highlight: true,
  },
  {
    icon: Truck,
    title: "Reboque 24h",
    desc: "Plataforma e asa-delta para carros de passeio, SUVs e utilitários leves.",
  },
  {
    icon: CircleDot,
    title: "Troca de pneu",
    desc: "Socorro no local com troca do estepe em minutos, dia ou noite.",
  },
  {
    icon: BatteryCharging,
    title: "Carga de bateria",
    desc: "Bateria arriada? Fazemos a partida auxiliar e testamos o sistema.",
  },
  {
    icon: Fuel,
    title: "Pane seca",
    desc: "Levamos combustível suficiente para você chegar ao posto mais próximo.",
  },
  {
    icon: KeyRound,
    title: "Chaveiro automotivo",
    desc: "Abertura de veículo sem danos quando a chave fica trancada dentro.",
  },
  {
    icon: Bike,
    title: "Moto e veículo baixo",
    desc: "Equipamento próprio para motos, rebaixados e carros importados.",
  },
];

const steps = [
  { n: "01", t: "Você liga ou chama no WhatsApp", d: "Atendimento humano, sem robô, 24 horas por dia." },
  { n: "02", t: "Saímos da Zona Leste para o seu endereço", d: "Base própria na Zona Leste: menos trânsito, chegada mais rápida." },
  { n: "03", t: "Chegada rápida e veículo a salvo", d: "Carregamento seguro e entrega no destino combinado." },
];

const faqs = [
  {
    q: "Vocês ficam na Zona Leste de São Paulo?",
    a: "Sim. Nossa base fica na Zona Leste de São Paulo, o que garante chegada mais rápida em bairros como Itaquera, Penha, Tatuapé, São Mateus, Itaim Paulista, Guaianases e São Miguel Paulista. Também atendemos toda a capital e a Grande São Paulo.",
  },
  {
    q: "Vocês fazem recuperação de veículo financiado (busca e apreensão)?",
    a: "Sim. Atendemos bancos, financeiras, escritórios de advocacia e pátios com remoção de veículos em busca e apreensão, mediante ordem judicial e documentação em ordem, com discrição e registro fotográfico do atendimento.",
  },
  {
    q: "O guincho entra em garagem baixa ou rua estreita?",
    a: "Sim. Temos equipamento compacto e acessórios de arraste para subsolos, garagens com pé-direito baixo, vielas e ruas estreitas onde caminhões-guincho maiores não conseguem entrar nem manobrar.",
  },
  {
    q: "Qual o tempo médio de chegada do guincho?",
    a: "Na Zona Leste, o tempo médio é de 15 a 30 minutos. Nas demais regiões da capital e Grande São Paulo, de 25 a 40 minutos, dependendo do trânsito.",
  },
  {
    q: "Como funciona o preço do reboque?",
    a: "O valor é fechado antes do envio do guincho, calculado pela distância e pelo tipo de veículo. Sem taxa surpresa na chegada.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Pix, dinheiro, débito e crédito. O pagamento é feito no momento do atendimento, direto com o operador.",
  },
];

const bairrosZL = [
  "Itaquera",
  "Tatuapé",
  "Penha",
  "São Miguel Paulista",
  "Itaim Paulista",
  "Guaianases",
  "São Mateus",
  "Cidade Tiradentes",
  "Vila Matilde",
  "Artur Alvim",
  "Ermelino Matarazzo",
  "Aricanduva",
];

const areas = [
  "Zona Leste de São Paulo",
  "São Paulo (capital)",
  "Guarulhos",
  "Osasco",
  "Santo André",
  "São Bernardo",
  "Barueri",
  "Rodovias e marginais",
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WM Guincho 24HR Zona Leste | Guincho 24h e Busca e Apreensão" },
      {
        name: "description",
        content:
          "Guincho 24 horas na Zona Leste de São Paulo: reboque, busca e apreensão de veículos financiados e acesso a garagens e ruas estreitas. Preço fechado. Ligue agora.",
      },
      {
        name: "keywords",
        content:
          "guincho zona leste, guincho 24 horas são paulo, busca e apreensão, recuperação de veículo financiado, reboque garagem baixa, guincho rua estreita",
      },
      { property: "og:title", content: "WM Guincho 24HR Zona Leste | Guincho 24h e Busca e Apreensão" },
      {
        property: "og:description",
        content:
          "Base na Zona Leste de SP: reboque 24h, recuperação de veículos financiados e atendimento em locais de difícil acesso.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutomotiveBusiness",
          name: "WM Guincho 24HR",
          description:
            "Guincho e reboque 24 horas na Zona Leste de São Paulo, busca e apreensão de veículos financiados, atendimento em locais de difícil acesso, troca de pneu, carga de bateria, pane seca e chaveiro automotivo.",
          telephone: PHONE_TEL,
          address: {
            "@type": "PostalAddress",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            addressCountry: "BR",
            areaServed: "Zona Leste de São Paulo",
          },
          areaServed: [...areas, ...bairrosZL],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          ],
        }),
      },

      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="hazard-bar h-1.5 w-full" aria-hidden="true" />

      <header className="sticky top-0 z-50 border-b border-light-border bg-light text-light-foreground shadow-sm">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4">
          <a href="#topo" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="WM Guincho 24H — Zona Leste, São Paulo"
              width={220}
              height={148}
              fetchPriority="high"
              decoding="async"
              className="h-12 w-auto sm:h-14"
            />
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            <a className="text-light-muted transition-colors hover:text-primary" href="#servicos">
              Serviços
            </a>
            <a className="text-light-muted transition-colors hover:text-primary" href="#apreensao">
              Busca e apreensão
            </a>
            <a className="text-light-muted transition-colors hover:text-primary" href="#zona-leste">
              Zona Leste
            </a>
            <a className="text-light-muted transition-colors hover:text-primary" href="#faq">
              Dúvidas
            </a>
          </nav>
          <a
            href={`tel:${PHONE_TEL}`}
            className="btn-emergency inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-bold uppercase tracking-wide hover:brightness-105"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Ligar</span>
          </a>
        </div>
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <img
            src={heroImg}
            alt="Guincho plataforma da WM rebocando um carro em via molhada à noite na Zona Leste de São Paulo"
            width={1600}
            height={1104}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 md:py-28">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="pulse-ring inline-block h-2 w-2 rounded-full bg-primary" />
                Base na Zona Leste — 24h
              </p>
              <h1 className="font-display text-5xl uppercase sm:text-7xl">
                Guincho 24 horas na
                <br />
                <span className="text-gradient-blue">Zona Leste de São Paulo</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Estamos na Zona Leste e saímos daqui para você: reboque, recuperação de veículos
                financiados em busca e apreensão e atendimento em garagens e ruas onde caminhões-guincho
                maiores não entram.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="btn-emergency inline-flex items-center justify-center gap-2 rounded-md px-7 py-4 text-base font-bold uppercase tracking-wide hover:-translate-y-0.5"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Ligar {PHONE}
                </a>
                <a
                  href={WHATS}
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-7 py-4 text-base font-bold uppercase tracking-wide transition-colors hover:border-primary hover:text-primary"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
                {[
                  ["15 min", "na Zona Leste"],
                  ["24/7", "todos os dias"],
                  ["+12 mil", "atendimentos"],
                ].map(([k, v]) => (
                  <div key={v}>
                    <dt className="font-display text-3xl text-primary">{k}</dt>
                    <dd className="text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* SERVIÇOS — container branco */}
        <section id="servicos" className="panel-light border-y">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <header className="mb-12 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Serviços</p>
              <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">
                Socorro completo para o seu veículo
              </h2>
              <p className="mt-4 text-light-muted">
                Uma única chamada resolve. Avaliamos o problema por telefone e enviamos o equipamento
                certo — inclusive para casos que outros guinchos recusam.
              </p>
            </header>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, desc, highlight }) => (
                <li
                  key={title}
                  className={`group rounded-lg border p-6 transition-shadow hover:shadow-md ${
                    highlight
                      ? "border-primary/40 bg-primary/5"
                      : "border-light-border bg-light"
                  }`}
                >
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-2xl uppercase">{title}</h3>
                  <p className="mt-2 text-sm text-light-muted">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* BUSCA E APREENSÃO + DIFÍCIL ACESSO */}
        <section id="apreensao" className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-lg border border-border bg-surface p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                <FileSearch className="h-4 w-4" aria-hidden="true" />
                Frota, bancos e financeiras
              </span>
              <h2 className="mt-5 font-display text-4xl uppercase">
                Recuperação de veículos <span className="text-gradient-blue">financiados</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Executamos remoções de busca e apreensão com ordem judicial, atuando junto a bancos,
                financeiras, escritórios de advocacia e pátios credenciados.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Atendimento discreto e sigiloso, 24 horas",
                  "Registro fotográfico e relatório de retirada",
                  "Remoção sem chave, com equipamento de arraste",
                  "Entrega direta no pátio ou depositário indicado",
                ].map((i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg border border-border bg-surface p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                <Ruler className="h-4 w-4" aria-hidden="true" />
                Onde o guincho grande não entra
              </span>
              <h2 className="mt-5 font-display text-4xl uppercase">
                Locais de <span className="text-gradient-amber">difícil acesso</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Nosso equipamento compacto manobra onde caminhões-guincho maiores não conseguem entrar
                nem dar meia-volta.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Garagens de subsolo e pé-direito baixo",
                  "Vielas, becos e ruas estreitas sem saída",
                  "Ladeiras, terrenos irregulares e estacionamentos",
                  "Condomínios com rampa curta e curva fechada",
                ].map((i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Como funciona</p>
              <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">Três passos e pronto</h2>
              <ol className="mt-8 space-y-6">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-5">
                    <span className="font-display text-4xl text-primary/50">{s.n}</span>
                    <div>
                      <h3 className="font-display text-2xl uppercase">{s.t}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <img
              src={operadorImg}
              alt="Operador da WM Guincho com colete refletivo prendendo a cinta em um carro à noite"
              width={1024}
              height={768}
              loading="lazy"
              decoding="async"
              className="rounded-lg border border-border object-cover"
            />
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="font-display text-4xl uppercase sm:text-5xl">Por que a WM</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Navigation, t: "Base na Zona Leste", d: "Saída imediata de Itaquera, Penha e região." },
              { icon: Clock, t: "Plantão real 24h", d: "Telefone atendido de madrugada, feriado e domingo." },
              { icon: ShieldCheck, t: "Veículo segurado", d: "Transporte com cobertura durante todo o percurso." },
              { icon: Car, t: "Preço fechado", d: "Valor combinado antes da saída, sem surpresa." },
            ].map(({ icon: Icon, t, d }) => (
              <li key={t} className="rounded-lg border border-border bg-surface p-6">
                <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl uppercase">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ZONA LESTE — container branco */}
        <section id="zona-leste" className="panel-light border-y">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Zona Leste • São Paulo
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">
              Somos da Zona Leste, atendemos toda a região
            </h2>
            <p className="mt-4 max-w-2xl text-light-muted">
              Nossa base fica na Zona Leste de São Paulo — por isso chegamos mais rápido em Itaquera,
              Penha, Tatuapé, São Mateus e vizinhança. Também atendemos a capital inteira, a Grande São
              Paulo e as principais rodovias e marginais.
            </p>

            <h3 className="mt-10 font-display text-2xl uppercase">Bairros da Zona Leste</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {bairrosZL.map((b) => (
                <li
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-2xl uppercase">Também atendemos</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {areas.map((a) => (
                <li
                  key={a}
                  className="inline-flex items-center gap-2 rounded-full border border-light-border bg-light px-4 py-2 text-sm text-light-muted"
                >
                  <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="font-display text-4xl uppercase sm:text-5xl">Quem já foi socorrido</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Furei o pneu na Radial Leste às 2h e o guincho chegou em 20 minutos. Atendimento educado e rápido.", "Rafael M."],
              ["Meu carro estava na garagem do subsolo e nenhum guincho entrava. A WM tirou sem arranhar nada.", "Camila S."],
              ["Trabalho com financeira e uso a WM em apreensões. Sempre com documentação e relatório em ordem.", "Diego A."],
            ].map(([txt, autor]) => (
              <li key={autor} className="rounded-lg border border-border bg-surface p-6">
                <div className="flex gap-1 text-accent" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">“{txt}”</p>
                <p className="mt-4 font-display text-xl uppercase">{autor}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ — container branco */}
        <section id="faq" className="panel-light border-y">
          <div className="mx-auto max-w-3xl px-4 py-20">
            <h2 className="font-display text-4xl uppercase sm:text-5xl">Dúvidas frequentes</h2>
            <div className="mt-8 divide-y divide-light-border overflow-hidden rounded-lg border border-light-border px-5">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    {f.q}
                    <span className="text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-light-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden">
          <div className="hazard-bar h-1.5 w-full" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-4 py-20 text-center">
            <h2 className="font-display text-4xl uppercase sm:text-6xl">
              Parado na estrada? <span className="text-gradient-blue">Chame agora.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Guincho 24 horas com base na Zona Leste de São Paulo. Fale com um operador de verdade e
              resolva em minutos.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_TEL}`}
                className="btn-emergency inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 text-base font-bold uppercase tracking-wide hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {PHONE}
              </a>
              <a
                href={WHATS}
                rel="noopener"
                className="btn-blue inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 text-base font-bold uppercase tracking-wide hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
          <div className="hazard-bar h-1.5 w-full" aria-hidden="true" />
        </section>
      </main>

      <footer className="panel-light border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center">
          <div>
            <img
              src={logo.url}
              alt="WM Guincho 24H — Zona Leste, São Paulo"
              width={220}
              height={148}
              loading="lazy"
              decoding="async"
              className="h-14 w-auto"
            />
            <p className="mt-3 text-sm text-light-muted">
              Reboque e socorro 24 horas — Zona Leste, São Paulo e região.
            </p>
          </div>
          <p className="text-sm text-light-muted">
            © {new Date().getFullYear()} WM Guincho 24HR. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Barra fixa mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px overflow-hidden rounded-t-xl border-t border-border bg-border md:hidden">
        <a
          href={`tel:${PHONE_TEL}`}
          className="btn-emergency flex items-center justify-center gap-2 py-4 text-sm font-bold uppercase"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Ligar agora
        </a>
        <a
          href={WHATS}
          rel="noopener"
          className="btn-blue flex items-center justify-center gap-2 py-4 text-sm font-bold uppercase"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
      <div className="h-14 md:hidden" aria-hidden="true" />
    </div>
  );
}
