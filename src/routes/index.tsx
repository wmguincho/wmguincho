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
} from "lucide-react";
import heroImg from "@/assets/hero-guincho.jpg";
import operadorImg from "@/assets/operador.jpg";

const PHONE = "(11) 91234-5678";
const PHONE_TEL = "+5511912345678";
const WHATS = "https://wa.me/5511912345678?text=Preciso%20de%20guincho%20agora";

const services = [
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
  { n: "02", t: "Enviamos sua localização ao guincho mais próximo", d: "Confirmação de preço fechado antes de sair." },
  { n: "03", t: "Chegada rápida e veículo a salvo", d: "Carregamento seguro e entrega no destino combinado." },
];

const faqs = [
  {
    q: "Qual o tempo médio de chegada do guincho?",
    a: "Na região metropolitana, o tempo médio de chegada é de 25 a 40 minutos, dependendo do trânsito e da localização exata do veículo.",
  },
  {
    q: "Vocês atendem 24 horas, inclusive feriados?",
    a: "Sim. A WM Guincho 24HR opera 24 horas por dia, 7 dias por semana, incluindo finais de semana e feriados.",
  },
  {
    q: "Como funciona o preço do reboque?",
    a: "O valor é fechado antes do envio do guincho, calculado pela distância e pelo tipo de veículo. Sem taxa surpresa na chegada.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Pix, dinheiro, débito e crédito. O pagamento é feito no momento do atendimento, direto com o operador.",
  },
  {
    q: "Vocês rebocam motos e carros rebaixados?",
    a: "Sim. Temos plataforma com rampa estendida e acessórios específicos para motos, veículos rebaixados e importados.",
  },
];

const areas = [
  "São Paulo",
  "Guarulhos",
  "Osasco",
  "Santo André",
  "São Bernardo",
  "Diadema",
  "Barueri",
  "Rodovias e marginais",
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WM Guincho 24HR | Guincho 24 Horas e Socorro na Estrada" },
      {
        name: "description",
        content:
          "Guincho 24 horas com chegada rápida: reboque, troca de pneu, carga de bateria, pane seca e chaveiro. Preço fechado antes de sair. Ligue agora.",
      },
      {
        name: "keywords",
        content: "guincho 24 horas, reboque, socorro na estrada, troca de pneu, carga de bateria, pane seca",
      },
      { property: "og:title", content: "WM Guincho 24HR | Guincho 24 Horas e Socorro na Estrada" },
      {
        property: "og:description",
        content:
          "Reboque, troca de pneu, bateria, pane seca e chaveiro 24h. Preço fechado e chegada rápida em toda a região.",
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
            "Serviço de guincho e reboque 24 horas, troca de pneu, carga de bateria, pane seca e chaveiro automotivo.",
          telephone: PHONE_TEL,
          areaServed: areas,
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

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#topo" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-sm btn-emergency font-display text-lg">
              WM
            </span>
            <span className="font-display text-2xl tracking-wide">
              GUINCHO <span className="text-gradient-amber">24HR</span>
            </span>
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a className="text-muted-foreground transition-colors hover:text-primary" href="#servicos">
              Serviços
            </a>
            <a className="text-muted-foreground transition-colors hover:text-primary" href="#como-funciona">
              Como funciona
            </a>
            <a className="text-muted-foreground transition-colors hover:text-primary" href="#area">
              Área de atendimento
            </a>
            <a className="text-muted-foreground transition-colors hover:text-primary" href="#faq">
              Dúvidas
            </a>
          </nav>
          <a
            href={`tel:${PHONE_TEL}`}
            className="btn-emergency inline-flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-bold uppercase tracking-wide hover:brightness-105"
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
            alt="Guincho plataforma da WM com sinalizadores âmbar rebocando um carro em via molhada à noite"
            width={1600}
            height={1104}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 md:py-28">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="pulse-ring inline-block h-2 w-2 rounded-full bg-primary" />
                Atendimento agora — 24h
              </p>
              <h1 className="font-display text-5xl uppercase sm:text-7xl">
                Guincho 24 horas
                <br />
                <span className="text-gradient-amber">chegando rápido até você</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Reboque, troca de pneu, bateria, pane seca e chaveiro automotivo. Preço fechado antes do
                guincho sair e operador treinado no local em poucos minutos.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="btn-emergency inline-flex items-center justify-center gap-2 rounded-sm px-7 py-4 text-base font-bold uppercase tracking-wide hover:-translate-y-0.5"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Ligar {PHONE}
                </a>
                <a
                  href={WHATS}
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-surface px-7 py-4 text-base font-bold uppercase tracking-wide transition-colors hover:border-primary hover:text-primary"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
                {[
                  ["25 min", "chegada média"],
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

        {/* SERVIÇOS */}
        <section id="servicos" className="mx-auto max-w-6xl px-4 py-20">
          <header className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Serviços</p>
            <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">
              Socorro completo para o seu veículo
            </h2>
            <p className="mt-4 text-muted-foreground">
              Uma única chamada resolve. Nossa equipe avalia o problema por telefone e envia o
              equipamento certo para cada situação.
            </p>
          </header>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <li
                key={title}
                className="group rounded-md border border-border bg-surface p-6 transition-colors hover:border-primary/60"
              >
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-sm bg-surface-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl uppercase">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </li>
            ))}
          </ul>
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
              className="rounded-md border border-border object-cover"
            />
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="font-display text-4xl uppercase sm:text-5xl">Por que a WM</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, t: "Plantão real 24h", d: "Telefone atendido de madrugada, feriado e domingo." },
              { icon: ShieldCheck, t: "Veículo segurado", d: "Transporte com cobertura durante todo o percurso." },
              { icon: Car, t: "Frota própria", d: "Plataformas revisadas e equipamento para cada porte." },
              { icon: CheckCircle2, t: "Preço fechado", d: "Valor combinado antes da saída, sem surpresa." },
            ].map(({ icon: Icon, t, d }) => (
              <li key={t} className="rounded-md border border-border bg-surface p-6">
                <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl uppercase">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ÁREA */}
        <section id="area" className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Cobertura</p>
            <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">Área de atendimento</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Atendemos a capital, o ABC, a Grande São Paulo e as principais rodovias e marginais. Não
              encontrou sua cidade? Ligue e confirmamos em segundos.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {areas.map((a) => (
                <li
                  key={a}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm"
                >
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
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
              ["Furei o pneu na marginal às 2h e o guincho chegou em 20 minutos. Atendimento educado e rápido.", "Rafael M."],
              ["Bateria arriada no estacionamento. Resolveram no local sem precisar rebocar. Preço justo.", "Camila S."],
              ["Levaram meu carro rebaixado sem um arranhão. Combinaram o valor antes e cumpriram.", "Diego A."],
            ].map(([txt, autor]) => (
              <li key={autor} className="rounded-md border border-border bg-surface p-6">
                <div className="flex gap-1 text-primary" aria-label="5 de 5 estrelas">
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

        {/* FAQ */}
        <section id="faq" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-3xl px-4 py-20">
            <h2 className="font-display text-4xl uppercase sm:text-5xl">Dúvidas frequentes</h2>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    {f.q}
                    <span className="text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
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
              Parado na estrada? <span className="text-gradient-amber">Chame agora.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Atendimento imediato, 24 horas por dia. Fale com um operador de verdade e resolva em
              minutos.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_TEL}`}
                className="btn-emergency inline-flex items-center justify-center gap-2 rounded-sm px-8 py-4 text-base font-bold uppercase tracking-wide hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {PHONE}
              </a>
              <a
                href={WHATS}
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-surface px-8 py-4 text-base font-bold uppercase tracking-wide transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
          <div className="hazard-bar h-1.5 w-full" aria-hidden="true" />
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl tracking-wide">
              WM GUINCHO <span className="text-gradient-amber">24HR</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Reboque e socorro na estrada 24 horas — São Paulo e região.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WM Guincho 24HR. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Barra fixa mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-border bg-border md:hidden">
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
          className="flex items-center justify-center gap-2 bg-surface py-4 text-sm font-bold uppercase"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
      <div className="h-14 md:hidden" aria-hidden="true" />
    </div>
  );
}
