import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import frotaPatio from "@/assets/frota-patio.webp";
import frotaMotoRua from "@/assets/frota-moto-rua.webp";
import frotaMotoLadeira from "@/assets/frota-moto-ladeira.webp";
import frotaAsaDelta from "@/assets/frota-asa-delta.webp";

type Shot = { src: string; alt: string; caption: string };

const shots: Shot[] = [
  {
    src: frotaPatio,
    alt: "Guincho asa-delta da WM Guincho no pátio, pronto para atendimento 24 horas",
    caption: "Reboque operacional 24h — base na Zona Leste",
  },
  {
    src: frotaMotoRua,
    alt: "Guincho da WM rebocando uma moto presa com cintas em reboque na Zona Leste de São Paulo",
    caption: "Remoção de moto com equipamento próprio",
  },
  {
    src: frotaMotoLadeira,
    alt: "Guincho da WM transportando uma moto em rua estreita e inclinada de São Paulo",
    caption: "Atendimento em rua estreita e ladeira",
  },
  {
    src: frotaAsaDelta,
    alt: "Guincho asa-delta da WM Guincho em operação em rua residencial de São Paulo",
    caption: "Asa-delta: dianteira suspensa, traseira no chão",
  },
];

export function FrotaGallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || reducedMotion) return;
    const node = api.rootNode();
    let paused = false;
    const timer = window.setInterval(() => {
      if (!paused && document.visibilityState === "visible") api.scrollNext();
    }, 5500);
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };
    node.addEventListener("pointerenter", pause);
    node.addEventListener("pointerleave", resume);
    node.addEventListener("focusin", pause);
    node.addEventListener("focusout", resume);
    return () => {
      window.clearInterval(timer);
      node.removeEventListener("pointerenter", pause);
      node.removeEventListener("pointerleave", resume);
      node.removeEventListener("focusin", pause);
      node.removeEventListener("focusout", resume);
    };
  }, [api, reducedMotion]);

  const goTo = useCallback((i: number) => api?.scrollTo(i), [api]);

  return (
    <div className="mt-10">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "center" }}
        className="mx-auto max-w-3xl px-1 sm:px-0"
        aria-label="Fotos reais de atendimentos da WM Guincho"
      >
        <CarouselContent>
          {shots.map((shot, i) => (
            <CarouselItem key={shot.src}>
              <figure className="overflow-hidden rounded-xl border border-border bg-surface">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-black sm:aspect-[4/3]">
                  <img
                    src={shot.src}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl"
                  />
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    decoding="async"
                    className="relative z-[1] h-full w-full object-contain"
                  />
                  <span className="absolute right-2 top-2 z-[2] rounded-full bg-black/60 px-2 py-0.5 text-xs font-medium tabular-nums text-white/90 backdrop-blur-sm">
                    {i + 1}/{shots.length}
                  </span>
                </div>
                <figcaption className="flex items-start gap-2 px-4 py-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {shot.caption}
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden border-white/20 bg-background/70 text-foreground hover:bg-background sm:flex sm:-left-12" />
        <CarouselNext className="hidden border-white/20 bg-background/70 text-foreground hover:bg-background sm:flex sm:-right-12" />
      </Carousel>

      <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="Selecionar foto">
        {shots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            role="tab"
            aria-selected={current === i}
            aria-label={`Foto ${i + 1}: ${shot.caption}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              current === i ? "w-6 bg-primary" : "w-2 bg-white/25 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
