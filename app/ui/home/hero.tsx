import Image from "next/image";

export default function Hero(props: {
  title: string;
  description: string;
  buttonText: string;
  onClick: (value: string) => void;
  onClickMsg: string;
}) {
  return (
  <section id="inicio" className="hero-gradient text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-5 pb-18 pt-24 md:grid-cols-[1.2fr_.8fr] md:pb-18 md:pt-24 rounded-b-[36px] overflow-hidden">
        <div>
          <h1 className="mb-3 text-balance text-[clamp(2.2rem,4vw,3.4rem)] leading-tight tracking-[0.2px]">Transforme seu corpo com Pilates</h1>
          <p className="mb-7 text-[1.05rem] opacity-95">Fortaleça, alongue e respire em um ambiente acolhedor. Métodos seguros, progressivos e personalizados para o seu ritmo.</p>
          <div className="flex flex-wrap gap-3.5">
            <a className="rounded-[12px] bg-white px-4.5 py-3.5 font-bold text-primary-700 no-underline shadow-[0_10px_24px_rgba(255,255,255,.2)]" href="#contato">Faça uma aula experimental</a>
            <a className="rounded-[12px] border border-white/70 px-4.5 py-[13px] font-bold text-white no-underline backdrop-blur-sm" href="#aulas">Ver modalidades</a>
          </div>
        </div>

        <div className="relative h-[380px] overflow-hidden rounded-[22px] shadow-[var(--shadow-elev)] md:h-[380px]" aria-hidden>
          {/* Background image */}
          <Image
            src=""
            alt="Ambiente de Pilates"
            fill
            className="object-cover opacity-55"
            priority
          />
          <div className="absolute right-[18px] bottom-[18px] rounded-[14px] border border-white/35 px-4 py-3 font-semibold glass-panel">Ambiente calmo • Profissionais certificados</div>
        </div>
      </div>
    </section>
  );
}
