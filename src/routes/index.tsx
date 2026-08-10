import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  BadgeCheck,
  CreditCard,
} from "lucide-react";
import heroImg from "@/assets/hero-guincho.jpg";
import operadorImg from "@/assets/operador.jpg";
import logo from "@/assets/wm-guincho-logo.png";

const SITE_URL = "https://wmguincho.lovable.app";
const HOME_URL = `${SITE_URL}/`;
const PHONE = "(11) 91234-5678";
const PHONE_TEL = "+5511912345678";
const WHATS = "https://wa.me/5511912345678?text=Preciso%20de%20guincho%20agora";
const PAGE_TITLE = "Guincho 24h Zona Leste SP | WM Guincho 24HR";
const PAGE_DESCRIPTION =
  "Guincho 24h na Zona Leste SP com WhatsApp, preço fechado, reboque, busca e apreensão, garagem baixa e rua estreita.";

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
  {
    n: "01",
    t: "Você liga ou chama no WhatsApp",
    d: "Atendimento humano, sem robô, 24 horas por dia.",
  },
  {
    n: "02",
    t: "Saímos da Zona Leste para o seu endereço",
    d: "Base própria na Zona Leste: menos trânsito, chegada mais rápida.",
  },
  {
    n: "03",
    t: "Chegada rápida e veículo a salvo",
    d: "Carregamento seguro e entrega no destino combinado.",
  },
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

const trustWidgets = [
  { icon: Clock, label: "Chegada rápida", value: "15 a 30 min na ZL" },
  { icon: MessageCircle, label: "WhatsApp humano", value: "Orçamento na hora" },
  { icon: CreditCard, label: "Preço fechado", value: "Pix, débito e crédito" },
  { icon: BadgeCheck, label: "Plantão seguro", value: "24h, todos os dias" },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      {
        name: "description",
        content: PAGE_DESCRIPTION,
      },
      {
        name: "keywords",
        content:
          "guincho zona leste, guincho 24 horas são paulo, busca e apreensão, recuperação de veículo financiado, reboque garagem baixa, guincho rua estreita",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: HOME_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: new URL(heroImg, SITE_URL).toString() },
      {
        property: "og:image:alt",
        content: "Guincho plataforma da WM Guincho atendendo veículo à noite em São Paulo",
      },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: new URL(heroImg, SITE_URL).toString() },
    ],
    links: [
      { rel: "canonical", href: HOME_URL },
      { rel: "alternate", hrefLang: "pt-BR", href: HOME_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AutomotiveBusiness",
              "@id": `${SITE_URL}/#business`,
              name: "WM Guincho 24HR",
              url: HOME_URL,
              image: new URL(heroImg, SITE_URL).toString(),
              logo: new URL(logo, SITE_URL).toString(),
              description: PAGE_DESCRIPTION,
              telephone: PHONE_TEL,
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              areaServed: [...areas, ...bairrosZL],
              serviceArea: {
                "@type": "AdministrativeArea",
                name: "Zona Leste de São Paulo e Grande São Paulo",
              },
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
              contactPoint: {
                "@type": "ContactPoint",
                telephone: PHONE_TEL,
                contactType: "Atendimento de emergência",
                areaServed: "BR-SP",
                availableLanguage: "Portuguese",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de guincho e socorro automotivo",
                itemListElement: services.map((service) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: service.title,
                    description: service.desc,
                    areaServed: "São Paulo",
                    provider: { "@id": `${SITE_URL}/#business` },
                  },
                })),
              },
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: HOME_URL,
              name: "WM Guincho 24HR",
              inLanguage: "pt-BR",
              publisher: { "@id": `${SITE_URL}/#business` },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${SITE_URL}/#breadcrumbs`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Início",
                  item: HOME_URL,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/#faq`,
              inLanguage: "pt-BR",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b text-foreground backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? "border-border bg-background/95 shadow-[0_18px_55px_-28px_oklch(0_0_0/0.85)]"
            : "border-white/10 bg-background/35"
        }`}
      >
        <div className="hazard-bar h-1 w-full" aria-hidden="true" />
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4">
          <a href="#topo" className="flex items-center gap-3">
            <img
              src={logo}
              alt="WM Guincho 24H — Zona Leste, São Paulo"
              width={300}
              height={200}
              fetchPriority="high"
              decoding="async"
              className="h-auto max-h-16 w-28 object-contain drop-shadow-[0_5px_18px_oklch(0_0_0/0.45)] sm:w-32"
            />
          </a>
          <nav
            aria-label="Principal"
            className="hidden items-center gap-7 text-sm font-semibold lg:flex"
          >
            <a className="text-white/80 transition-colors hover:text-primary" href="#servicos">
              Serviços
            </a>
            <a className="text-white/80 transition-colors hover:text-primary" href="#apreensao">
              Busca e apreensão
            </a>
            <a className="text-white/80 transition-colors hover:text-primary" href="#zona-leste">
              Zona Leste
            </a>
            <a className="text-white/80 transition-colors hover:text-primary" href="#faq">
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
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-20 pt-32 md:pb-24 md:pt-40">
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
                financiados em busca e apreensão e atendimento em garagens e ruas onde
                caminhões-guincho maiores não entram.
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

        <section
          aria-label="Destaques do atendimento WM Guincho"
          className="border-y border-border bg-surface"
        >
          <div className="mx-auto grid max-w-6xl gap-px overflow-hidden px-4 py-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustWidgets.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-md border border-border bg-background/70 p-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="font-semibold text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVIÇOS — container branco */}
        <section id="servicos" className="panel-light scroll-mt-24 border-y">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <header className="mb-12 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Serviços</p>
              <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">
                Socorro completo para o seu veículo
              </h2>
              <p className="mt-4 text-light-muted">
                Uma única chamada resolve. Avaliamos o problema por telefone e enviamos o
                equipamento certo — inclusive para casos que outros guinchos recusam.
              </p>
            </header>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, desc, highlight }) => (
                <li
                  key={title}
                  className={`group rounded-lg border p-6 transition-shadow hover:shadow-md ${
                    highlight ? "border-primary/40 bg-primary/5" : "border-light-border bg-light"
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
        <section id="apreensao" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20">
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
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
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
                Nosso equipamento compacto manobra onde caminhões-guincho maiores não conseguem
                entrar nem dar meia-volta.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Garagens de subsolo e pé-direito baixo",
                  "Vielas, becos e ruas estreitas sem saída",
                  "Ladeiras, terrenos irregulares e estacionamentos",
                  "Condomínios com rampa curta e curva fechada",
                ].map((i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
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
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Como funciona
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">
                Três passos e pronto
              </h2>
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
              {
                icon: Navigation,
                t: "Base na Zona Leste",
                d: "Saída imediata de Itaquera, Penha e região.",
              },
              {
                icon: Clock,
                t: "Plantão real 24h",
                d: "Telefone atendido de madrugada, feriado e domingo.",
              },
              {
                icon: ShieldCheck,
                t: "Veículo segurado",
                d: "Transporte com cobertura durante todo o percurso.",
              },
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
        <section id="zona-leste" className="panel-light scroll-mt-24 border-y">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Zona Leste • São Paulo
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">
              Somos da Zona Leste, atendemos toda a região
            </h2>
            <p className="mt-4 max-w-2xl text-light-muted">
              Nossa base fica na Zona Leste de São Paulo — por isso chegamos mais rápido em
              Itaquera, Penha, Tatuapé, São Mateus e vizinhança. Também atendemos a capital inteira,
              a Grande São Paulo e as principais rodovias e marginais.
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
              [
                "Furei o pneu na Radial Leste às 2h e o guincho chegou em 20 minutos. Atendimento educado e rápido.",
                "Rafael M.",
              ],
              [
                "Meu carro estava na garagem do subsolo e nenhum guincho entrava. A WM tirou sem arranhar nada.",
                "Camila S.",
              ],
              [
                "Trabalho com financeira e uso a WM em apreensões. Sempre com documentação e relatório em ordem.",
                "Diego A.",
              ],
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
        <section id="faq" className="panel-light scroll-mt-24 border-y">
          <div className="mx-auto max-w-3xl px-4 py-20">
            <h2 className="font-display text-4xl uppercase sm:text-5xl">Dúvidas frequentes</h2>
            <div className="mt-8 divide-y divide-light-border overflow-hidden rounded-lg border border-light-border px-5">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    {f.q}
                    <span className="text-primary transition-transform group-open:rotate-45">
                      +
                    </span>
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
              Guincho 24 horas com base na Zona Leste de São Paulo. Fale com um operador de verdade
              e resolva em minutos.
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
              src={logo}
              alt="WM Guincho 24H — Zona Leste, São Paulo"
              width={300}
              height={200}
              loading="lazy"
              decoding="async"
              className="h-auto w-36 object-contain sm:w-40"
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

      <div
        className={`fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl overflow-hidden rounded-t-lg rounded-b-md border border-white/10 bg-background/95 shadow-[0_20px_70px_-24px_oklch(0_0_0/0.9)] backdrop-blur-xl transition-all duration-300 ${
          isScrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
        }`}
        aria-label="Contato rápido"
      >
        <div className="hazard-bar h-1 w-full" aria-hidden="true" />
        <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-[1fr_1.1fr_1.1fr]">
          <div className="hidden bg-surface px-4 py-3 sm:block">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Plantão 24h
            </p>
            <p className="text-sm text-muted-foreground">Operador pronto na Zona Leste</p>
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className="btn-emergency flex min-h-14 items-center justify-center gap-2 px-4 py-3 text-sm font-bold uppercase"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Ligar agora
          </a>
          <a
            href={WHATS}
            rel="noopener"
            className="btn-blue flex min-h-14 items-center justify-center gap-2 px-4 py-3 text-sm font-bold uppercase"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span className="hidden min-[430px]:inline">Chamar no WhatsApp</span>
            <span className="min-[430px]:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
      <div className="h-20 sm:h-0" aria-hidden="true" />
    </div>
  );
}
