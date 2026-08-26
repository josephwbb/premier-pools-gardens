"use client";

import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { useRef, useState } from "react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

function BeforeAfterSlider({
  before,
  after,
  title,
  subtitle,
}: {
  before: string;
  after: string;
  title: string;
  subtitle: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  function updatePosition(clientX: number) {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((clientX - rect.left) / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, newPosition)));
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#1e2921] bg-[#121914] transition-all duration-300">
      <div
        ref={containerRef}
        className="relative h-[360px] w-full cursor-ew-resize select-none overflow-hidden touch-none md:h-[440px]"
        onMouseMove={(e) => {
          if (e.buttons === 1) updatePosition(e.clientX);
        }}
        onMouseDown={(e) => updatePosition(e.clientX)}
        onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
      >
        <img
          src={after}
          alt="After maintenance"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt="Before maintenance"
            className="absolute inset-y-0 left-0 h-full max-w-none object-cover"
            style={{
              width: containerRef.current?.offsetWidth || "100%",
            }}
            draggable={false}
          />
        </div>

        <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm">
          Before
        </div>

        <div className="pointer-events-none absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm">
          After
        </div>

        <div
          className="absolute inset-y-0 z-20 w-px bg-white/70"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white backdrop-blur-sm transition-transform duration-200 group-hover:scale-105">
            <div className="flex items-center gap-0.5 text-xs">
              <span>‹</span>
              <span>›</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3
          className={`${cormorant.className} text-2xl font-light text-[#f0f3f0]`}
        >
          {title}
        </h3>

        <p className="mt-1 text-xs text-[#829183]">{subtitle}</p>
      </div>
    </div>
  );
}

export default function Home() {
 
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <main
      className={`${sans.className} relative min-h-screen overflow-x-hidden bg-[#0e1310] text-[#e3e7e3] selection:bg-[#1a2e22] selection:text-white`}
    >
      {/* =====================================================
          GLOBAL BACKGROUND TEXTURE

          One image sits behind the entire page after the hero.
          It is intentionally subtle so it adds depth without
          competing with the content.
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          src="/background-texture.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.10] mix-blend-luminosity"
        />

        {/* Dark green veil */}
        <div className="absolute inset-0 bg-[#0e1711]/90" />

        {/* Soft natural light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(110,140,115,0.10),transparent_32%),radial-gradient(circle_at_80%_65%,rgba(75,105,82,0.07),transparent_35%)]" />

        {/* Fine grain */}
        <div className="absolute inset-0 opacity-[0.025] [background-image:radial-gradient(rgba(255,255,255,0.8)_0.5px,transparent_0.5px)] [background-size:5px_5px]" />
      </div>

      {/* =====================================================
          PAGE CONTENT
      ====================================================== */}

      <div className="relative z-10">
        
<header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-8 md:px-14">
  {/* Logo / Brand */}
  <a
    href="#"
    onClick={() => setMenuOpen(false)}
    className="text-xs font-medium uppercase tracking-[0.2em] text-white drop-shadow-sm transition-opacity hover:opacity-80"
  >
    Premier Pools & Gardens
  </a>

  {/* Desktop Navigation */}
  <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/20 p-1.5 backdrop-blur-md md:flex">
    <a
      href="/services"
      className="rounded-full px-5 py-2 text-[11px] uppercase tracking-[0.1em] text-white/80 transition-all hover:text-white"
    >
      Services
    </a>

    <a
      href="#work"
      className="rounded-full px-5 py-2 text-[11px] uppercase tracking-[0.1em] text-white/80 transition-all hover:text-white"
    >
      Pricing
    </a>

    <a
      href="/contact"
      className="rounded-full bg-white/10 px-5 py-2 text-[11px] uppercase tracking-[0.1em] text-white transition-all hover:bg-white/20"
    >
      Contact
    </a>
  </nav>

  {/* Mobile / Tablet Menu Button */}
  <button
    type="button"
    onClick={() => setMenuOpen(true)}
    aria-label="Open navigation menu"
    className="flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all hover:bg-black/40 lg:hidden"
  >
    <span>Menu</span>

    <span className="flex flex-col gap-[3px]">
      <span className="block h-px w-3 bg-white/80" />
      <span className="block h-px w-3 bg-white/80" />
    </span>
  </button>
</header>

{/* =====================================================
    HERO
====================================================== */}

<section
  className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#0e1310] px-6 pb-24 pt-32 [contain:paint] md:px-12"
>
  {/* Hero image + static overlays */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <img
      src="/hero-pool.jpg"
      alt=""
      loading="eager"
      fetchPriority="high"
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover"
    />

    {/* Dark green overlay */}
    <div className="absolute inset-0 bg-[#10251f]/32" />

    {/* Soft central light */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,rgba(16,37,31,0.04)_35%,rgba(16,37,31,0.3)_100%)]" />

    {/* Bottom fade */}
    <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#0e1310] via-[#0e1310]/80 to-transparent" />
  </div>

  {/* Hero content */}
  <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
    <img
      src="/logo.png"
      alt="Premier Pools & Gardens"
      loading="eager"
      fetchPriority="high"
      decoding="async"
      className="w-[280px] object-contain md:w-[420px] lg:w-[500px]"
    />

    <div className="mt-10">
      <p
        className={`${cormorant.className} text-2xl font-medium tracking-[0.03em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] md:text-3xl`}
      >
        Pool & Garden Maintenance
      </p>

      <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white/85 drop-shadow-[0_1px_5px_rgba(0,0,0,0.4)] md:text-xs">
        Tarn-et-Garonne · Gers · South West France
      </p>
    </div>
  </div>

  {/* Bottom information */}
  <div className="relative z-10 flex items-end justify-between pt-12">
    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/70 md:text-[10px]">
      Private Pools · Estates · Holiday Homes
    </p>

    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/80">
      <span className="hidden sm:inline">Scroll to explore</span>

      <span className="hero-scroll-line h-8 w-px bg-white/60" />
    </div>
  </div>

  {/* Curved bottom edge */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 leading-none">
    <svg
      className="relative block h-12 w-full text-[#0e1310] md:h-20"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      fill="currentColor"
    >
      <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z" />
    </svg>
  </div>

  <style jsx>{`
    .hero-scroll-line {
      animation: scrollLine 2.8s ease-in-out infinite;
      transform-origin: top center;
    }

    @keyframes scrollLine {
      0%,
      100% {
        transform: scaleY(0.55);
        opacity: 0.45;
      }

      50% {
        transform: scaleY(1);
        opacity: 1;
      }
    }
  `}</style>
</section>

       {/* =====================================================
    ABOUT
====================================================== */}
<section className="relative border-b border-[#1b251d] px-5 py-16 sm:px-6 sm:py-20 md:px-14 md:py-28">
  <div className="mx-auto max-w-6xl">

    {/* Top label */}
    <div className="mb-10 flex items-center justify-between border-b border-[#1b251d] pb-5 md:mb-14">
      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8e9c8f] sm:text-[10px]">
        About the service
      </p>

      <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#526053] sm:text-[10px]">
        Owner Operated
      </p>
    </div>

    {/* Main content */}
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">

      {/* =================================================
          TEXT
      ================================================== */}
      <div className="lg:col-span-7">

        <h2
          className={`${cormorant.className} max-w-3xl text-4xl font-light leading-[0.98] text-[#f4f6f4] sm:text-5xl md:text-6xl`}
        >
          Experience that keeps
          <br />
          your property cared for.
        </h2>

        <div className="mt-7 max-w-2xl space-y-4 text-xs leading-relaxed text-[#8e9c8f] sm:text-sm md:mt-8 md:text-base">

          <p>
            My background began in remote North Wales, managing woodland and
            lake ecosystems as a countryside ranger. That work built a
            practical understanding of land maintenance, drainage and natural
            water systems.
          </p>

          <p>
            Since relocating to South West France, I’ve brought that experience
            to private châteaux, expansive grounds, holiday properties and
            residential pools of all configurations.
          </p>

          <p>
            Today, Premier Pools & Gardens is deliberately owner-operated.
            Every visit, pool assessment and garden job is handled personally,
            giving you a consistent service and one point of contact.
          </p>

        </div>

        {/* Small information strip */}
        <div className="mt-9 grid grid-cols-3 border-y border-[#29382d] py-5 sm:mt-10 sm:py-6">

          <div>
            <p className="text-lg font-semibold text-white sm:text-xl">
              20+
            </p>
            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#657366] sm:text-[9px]">
              Years experience
            </p>
          </div>

          <div className="border-l border-[#29382d] pl-4 sm:pl-6">
            <p className="text-lg font-semibold text-white sm:text-xl">
              Direct
            </p>
            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#657366] sm:text-[9px]">
              Owner operated
            </p>
          </div>

          <div className="border-l border-[#29382d] pl-4 sm:pl-6">
            <p className="text-lg font-semibold text-white sm:text-xl">
              SW France
            </p>
            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#657366] sm:text-[9px]">
              Local coverage
            </p>
          </div>

        </div>

      </div>

      {/* =================================================
          IMAGE
      ================================================== */}
      <div className="lg:col-span-5">

        <div className="group relative overflow-hidden rounded-2xl border border-[#29382d] bg-[#121813]">

          <img
            src="/huwaboutme.jpg"
            alt="Huw - Premier Pools & Gardens"
            className="h-[320px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] sm:h-[400px] md:h-[460px]"
          />

          {/* Dark green image treatment */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e1310]/70 via-[#0e1310]/10 to-transparent" />

          {/* Image caption */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
              Premier Pools & Gardens
            </p>

            <p className={`${cormorant.className} mt-1 text-2xl text-white sm:text-3xl`}>
              Personal care. Every visit.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section
          id="services"
          className="relative border-b border-t border-[#212d23] bg-[#0c120e]/75 px-6 py-24 backdrop-blur-[1px] md:px-14"
        >
         <div className="mx-auto max-w-6xl">
  <div className="mb-16 border-b border-[#212d23] pb-8">
    <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8e9c8f] md:text-base">
      What I Offer
    </p>

    <h2
      className={`${cormorant.className} mt-2 text-3xl font-light text-white sm:text-4xl md:text-5xl`}
    >
      Pool & Garden Care
    </h2>
  </div>

            <div className="grid gap-10 lg:grid-cols-2">
              {/* POOL */}

              <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#233126] bg-[#121a14]/90 p-8 transition-all hover:border-[#334637] md:p-12">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <img
                    src="/poolservices.jpg.webp"
                    alt=""
                    className="h-full w-full object-cover opacity-25 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-[#121a14]/40 via-[#121a14]/75 to-[#121a14]" />
                </div>

                <div className="relative z-10">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#8e9c8f]">
                    01 / Water
                  </span>

                  <h3
                    className={`${cormorant.className} mt-3 text-4xl font-light text-white md:text-5xl`}
                  >
                    Pool Maintenance
                  </h3>

                  <p className="mt-4 text-base font-normal leading-relaxed text-[#c7d1c8]">
                    Complete seasonal and routine water management to keep your
                    pool crystal clear, balanced, and running reliably.
                  </p>

                  <div className="mt-10 border-t border-[#212d23]/80 pt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8e9c8f]">
                      Core Tasks
                    </p>

                    <ul className="mt-6 space-y-5 text-sm md:text-base">
                      <li className="flex items-baseline gap-3 text-[#e2e8e3]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8e9c8f]" />
                        <span>
                          <strong className="font-semibold text-white">
                            Water Chemistry:
                          </strong>{" "}
                          Chemical testing, salt level management, and precision
                          dosing.
                        </span>
                      </li>

                      <li className="flex items-baseline gap-3 text-[#e2e8e3]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8e9c8f]" />
                        <span>
                          <strong className="font-semibold text-white">
                            System Operations:
                          </strong>{" "}
                          Filter backwashing, pump clearing, and plant room
                          inspections.
                        </span>
                      </li>

                      <li className="flex items-baseline gap-3 text-[#e2e8e3]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8e9c8f]" />
                        <span>
                          <strong className="font-semibold text-white">
                            Surface Care:
                          </strong>{" "}
                          Full vacuuming, wall brushing, and skimmer basket
                          clearing.
                        </span>
                      </li>

                      <li className="flex items-baseline gap-3 text-[#e2e8e3]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8e9c8f]" />
                        <span>
                          <strong className="font-semibold text-white">
                            Seasonal Transitions:
                          </strong>{" "}
                          Spring openings, green pool turnarounds, and winter
                          shutdowns.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* GARDEN */}

              <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#233126] bg-[#121a14]/90 p-8 transition-all hover:border-[#334637] md:p-12">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <img
                    src="/gardenservices.jpg.webp"
                    alt=""
                    className="h-full w-full object-cover opacity-25 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-[#121a14]/40 via-[#121a14]/75 to-[#121a14]" />
                </div>

                <div className="relative z-10">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#8e9c8f]">
                    02 / Grounds
                  </span>

                  <h3
                    className={`${cormorant.className} mt-3 text-4xl font-light text-white md:text-5xl`}
                  >
                    Garden Care
                  </h3>

                  <p className="mt-4 text-base font-normal leading-relaxed text-[#c7d1c8]">
                    Grounds maintenance designed for large gardens, châteaux
                    estates, and private holiday rentals.
                  </p>

                  <div className="mt-10 border-t border-[#212d23]/80 pt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8e9c8f]">
                      Core Tasks
                    </p>

                    <ul className="mt-6 space-y-5 text-sm md:text-base">
                      <li className="flex items-baseline gap-3 text-[#e2e8e3]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8e9c8f]" />
                        <span>
                          <strong className="font-semibold text-white">
                            Lawn Management:
                          </strong>{" "}
                          Mowing, strimming, and sharp border edging for large
                          grounds.
                        </span>
                      </li>

                      <li className="flex items-baseline gap-3 text-[#e2e8e3]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8e9c8f]" />
                        <span>
                          <strong className="font-semibold text-white">
                            Hedges & Pruning:
                          </strong>{" "}
                          Structural hedge trimming, bush shaping, and growth
                          control.
                        </span>
                      </li>

                      <li className="flex items-baseline gap-3 text-[#e2e8e3]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8e9c8f]" />
                        <span>
                          <strong className="font-semibold text-white">
                            Terraces & Paths:
                          </strong>{" "}
                          Power washing, leaf clearing, and keeping hard
                          surfaces weed-free.
                        </span>
                      </li>

                      <li className="flex items-baseline gap-3 text-[#e2e8e3]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8e9c8f]" />
                        <span>
                          <strong className="font-semibold text-white">
                            Arrival Readiness:
                          </strong>{" "}
                          Ground preparation prior to owner or rental guest
                          visits.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* =====================================================
    PRICING & SERVICES
====================================================== */}
<section className="relative px-4 py-20 sm:px-6 md:px-14 md:py-32">
  <div className="mx-auto max-w-6xl">

    {/* Section heading */}
    <div className="mb-10 max-w-2xl md:mb-14">
      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8e9c8f] sm:text-[10px]">
        Services & Pricing
      </p>

      <h2
        className={`${cormorant.className} mt-3 text-4xl font-semibold leading-[0.95] text-white sm:text-5xl md:text-6xl`}
      >
        Care for every
        <br />
        part of your property.
      </h2>

      <p className="mt-5 max-w-xl text-xs leading-relaxed text-[#8e9c8f] sm:text-sm md:text-base">
        From keeping your garden looking its best to making sure your pool is
        always ready to enjoy, choose the service you need below.
      </p>
    </div>

    {/* =================================================
        TWO SERVICE CARDS
    ================================================== */}
    <div className="grid grid-cols-2 gap-3 sm:gap-5">

      {/* =================================================
          GARDENING
      ================================================== */}
      <div className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-[#29382d] bg-[#101711]/90 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#405644] sm:min-h-[500px] sm:rounded-3xl sm:p-7 md:min-h-[520px] md:p-9">

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#294b34]/15 blur-[65px] transition-all duration-500 group-hover:bg-[#294b34]/25 sm:h-56 sm:w-56" />

        <div className="relative z-10 flex h-full flex-1 flex-col">

          {/* Number */}
          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#718073] sm:text-[9px]">
            01
          </p>

          {/* Title */}
          <h3
            className={`${cormorant.className} mt-2 text-2xl font-semibold leading-none text-white sm:mt-3 sm:text-4xl md:text-5xl`}
          >
            General
            <br />
            Gardening
          </h3>

          {/* Description */}
          <p className="mt-4 text-[10px] leading-relaxed text-[#849185] sm:mt-6 sm:text-sm">
            Keeping your outdoor spaces tidy, healthy and beautifully
            maintained throughout the year.
          </p>

          {/* Divider */}
          <div className="my-5 border-t border-[#29382d] sm:my-7" />

          {/* Services */}
          <div className="space-y-2.5 text-[9px] text-[#aab5ab] sm:space-y-3 sm:text-xs">

            <div className="flex items-start gap-2">
              <span className="mt-[1px] text-[#829582]">+</span>
              <span>Strimming</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="mt-[1px] text-[#829582]">+</span>
              <span>Flower & Plant Care</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="mt-[1px] text-[#829582]">+</span>
              <span>Tree Cutting</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="mt-[1px] text-[#829582]">+</span>
              <span>Hedge Trimming</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="mt-[1px] text-[#829582]">+</span>
              <span>Weeding</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="mt-[1px] text-[#829582]">+</span>
              <span>General Garden Care</span>
            </div>

          </div>

          {/* Pricing spacer / panel */}
          <div className="mt-auto pt-6 sm:pt-8">

            <div className="mb-4 border-t border-[#29382d] pt-4 sm:mb-5 sm:pt-5">

              <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#718073] sm:text-[9px]">
                Pricing
              </p>

              <p
                className={`${cormorant.className} mt-1.5 text-lg font-semibold leading-tight text-white sm:text-2xl`}
              >
                Tailored to your property.
              </p>

            </div>

            {/* Button */}
            <a
              href="/contact"
              className="flex w-full items-center justify-center rounded-full bg-[#dfe6df] px-3 py-3 text-center text-[8px] font-semibold uppercase tracking-[0.12em] text-[#101610] transition-all hover:bg-white sm:px-5 sm:py-3.5 sm:text-[9px] sm:tracking-[0.18em]"
            >
              View Pricing
            </a>

          </div>

        </div>
      </div>

      {/* =================================================
          POOL MAINTENANCE
      ================================================== */}
      <div className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-[#29382d] bg-[#101711]/90 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#405644] sm:min-h-[500px] sm:rounded-3xl sm:p-7 md:min-h-[520px] md:p-9">

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-44 w-44 rounded-full bg-[#35543d]/15 blur-[70px] transition-all duration-500 group-hover:bg-[#35543d]/25 sm:h-60 sm:w-60" />

        <div className="relative z-10 flex h-full flex-1 flex-col">

          {/* Number */}
          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#718073] sm:text-[9px]">
            02
          </p>

          {/* Title */}
          <h3
            className={`${cormorant.className} mt-2 text-2xl font-semibold leading-none text-white sm:mt-3 sm:text-4xl md:text-5xl`}
          >
            Pool
            <br />
            Maintenance
          </h3>

          {/* Description */}
          <p className="mt-4 text-[10px] leading-relaxed text-[#849185] sm:mt-6 sm:text-sm">
            Professional pool care to keep your pool clean, balanced and
            ready to enjoy throughout the season.
          </p>

          {/* Divider */}
          <div className="my-5 border-t border-[#29382d] sm:my-7" />

          {/* Pool pricing information */}
          <div className="rounded-xl border border-[#29382d] bg-[#162019]/60 p-3.5 sm:rounded-2xl sm:p-5">

            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#718073] sm:text-[9px]">
              Pricing
            </p>

            <p
              className={`${cormorant.className} mt-2 text-xl font-semibold leading-tight text-white sm:text-3xl`}
            >
              Tailored to your pool.
            </p>

            <p className="mt-2 text-[9px] leading-relaxed text-[#7f8d81] sm:text-xs">
              Click below to see the relevant costs for your property.
            </p>

          </div>

          {/* Spacer + Button */}
          <div className="mt-auto pt-6 sm:pt-8">

            {/* Invisible matching area to keep button perfectly aligned */}
            <div className="mb-4 border-t border-[#29382d] pt-4 sm:mb-5 sm:pt-5">

              <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#718073] sm:text-[9px]">
                Service
              </p>

              <p
                className={`${cormorant.className} mt-1.5 text-lg font-semibold leading-tight text-white sm:text-2xl`}
              >
                Professional pool care.
              </p>

            </div>

            {/* Button */}
            <a
              href="/contact"
              className="flex w-full items-center justify-center rounded-full bg-[#dfe6df] px-3 py-3 text-center text-[8px] font-semibold uppercase tracking-[0.12em] text-[#101610] transition-all hover:bg-white sm:px-5 sm:py-3.5 sm:text-[9px] sm:tracking-[0.18em]"
            >
              View Pricing
            </a>

          </div>

        </div>
      </div>

    </div>

    {/* Bottom note */}
    <div className="mt-6 flex flex-col gap-2 border-t border-[#29382d] pt-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-[8px] font-semibold uppercase tracking-[0.17em] text-[#657366] sm:text-[9px]">
        South West France
      </p>

      <p className="text-[9px] text-[#657366] sm:text-xs">
        Private properties · Estates · Holiday homes
      </p>
    </div>

  </div>
</section>
       
        {/* =====================================================
            CONTACT
        ====================================================== */}

        <section
          id="contact"
          className="relative border-t border-[#1a231b] bg-[#070a08]/85 px-6 py-24 text-[#f7f6f1] md:px-14"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8e9c8f]">
              Get in Touch
            </p>

            <h2
              className={`${cormorant.className} mt-3 text-4xl font-light text-white md:text-5xl`}
            >
              Let's discuss your property
            </h2>

            <p className="mt-4 text-xs leading-relaxed text-[#8e9c8f] md:text-sm">
              Whether you need routine garden visits or seasonal pool care,
              drop me an email or a WhatsApp message to arrange a site visit.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="mailto:webbhuw@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1c291e] bg-[#0f1611] px-7 py-3.5 text-xs font-medium text-[#c0ccc1] transition-all hover:border-[#2b3e2e] hover:bg-[#141d17] hover:text-white"
              >
                <svg
                  className="h-4 w-4 fill-current text-[#8e9c8f]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M1.5 4.5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-15zm3-1.5a1.5 1.5 0 0 0-1.5 1.5v.692l9.75 6.094 9.75-6.094v-.692a1.5 1.5 0 0 0-1.5-1.5h-15zm16.5 4.058l-9.219 5.762a.75.75 0 0 1-.812 0l-9.219-5.762v11.942a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-11.942z" />
                </svg>

                <span>Email Huw</span>
              </a>

              <a
                href="https://wa.me/447591284463"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1c291e] bg-[#0f1611] px-7 py-3.5 text-xs font-medium text-[#c0ccc1] transition-all hover:border-[#2b3e2e] hover:bg-[#141d17] hover:text-white"
              >
                <svg
                  className="h-4 w-4 fill-current text-[#8e9c8f]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>

                <span>WhatsApp Message</span>
              </a>
            </div>

            <div className="mt-12 flex flex-col gap-6 border-t border-[#1a231b] pt-8 text-xs text-[#8e9c8f] sm:flex-row">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-white">
                  Phone & WhatsApp
                </p>

                <a
                  href="tel:+447591284463"
                  className="mt-1 block transition-colors hover:text-white"
                >
                  +44 (0)7591 284463
                </a>
              </div>

              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-white">
                  Email
                </p>

                <a
                  href="mailto:webbhuw@gmail.com"
                  className="mt-1 block transition-colors hover:text-white"
                >
                  webbhuw@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-white">
                  Coverage Area
                </p>

                <p className="mt-1">Tarn-et-Garonne & Gers</p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOOTER
        ====================================================== */}

        <footer className="flex justify-between border-t border-[#151c16] bg-[#050705] px-6 py-6 text-[10px] uppercase tracking-[0.15em] text-[#526053] md:px-14">
          <span>Premier Pools & Gardens</span>
          <span>South West France</span>
        </footer>
      </div>
    
    {menuOpen && (
  <div className="fixed inset-0 z-[100] md:hidden">
    {/* Background */}
    <div
      className="absolute inset-0 bg-[#07100a]/96 backdrop-blur-2xl"
      onClick={() => setMenuOpen(false)}
    />

    {/* Subtle background glow */}
    <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#294b34]/20 blur-[110px]" />
    <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#1d3926]/15 blur-[120px]" />

    {/* Menu */}
    <div className="relative flex min-h-screen flex-col px-6 py-6">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <a
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white"
        >
          Premier Pools & Gardens
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
        >
          <span className="relative block h-5 w-5">
            <span className="absolute left-1/2 top-1/2 block h-px w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white/80 transition-transform duration-300 group-hover:rotate-[135deg]" />
            <span className="absolute left-1/2 top-1/2 block h-px w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/80 transition-transform duration-300 group-hover:-rotate-[135deg]" />
          </span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col justify-center">

        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-8 bg-[#718073]" />
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#718073]">
            Navigation
          </p>
        </div>

<div className="flex flex-col">
  <a
    href="/services"
    onClick={() => setMenuOpen(false)}
    className="border-b border-white/10 py-5 text-4xl font-light text-white transition-opacity hover:opacity-60"
  >
    Services
  </a>

  <a
    href="/#pricing"
    onClick={() => setMenuOpen(false)}
    className="border-b border-white/10 py-5 text-4xl font-light text-white transition-opacity hover:opacity-60"
  >
    Pricing
  </a>

  <a
    href="/contact"
    onClick={() => setMenuOpen(false)}
    className="border-b border-white/10 py-5 text-4xl font-light text-white transition-opacity hover:opacity-60"
  >
    Contact
  </a>
</div>
       
      </nav>
      {/* Bottom section */}
      <div className="border-t border-white/10 pt-6">

        <div className="flex items-end justify-between gap-6">

          {/* Business info */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8e9c8f]">
              Pool & Garden Maintenance
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#526053]">
              South West France
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">

            {/* Email */}
            <a
              href="mailto:webbhuw@gmail.com"
              aria-label="Email"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#8e9c8f] transition-all duration-300 hover:border-[#718073]/50 hover:bg-[#294331]/40 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[15px] w-[15px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/447591284463"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#8e9c8f] transition-all duration-300 hover:border-[#718073]/50 hover:bg-[#294331]/40 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[16px] w-[16px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M20 11.5a8.5 8.5 0 0 1-12.8 7.35L4 20l1.2-3.1A8.5 8.5 0 1 1 20 11.5Z" />
                <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.5c.1.2.1.4-.1.6l-.5.6c-.1.1-.1.3 0 .5.5.8 1.2 1.5 2 2 .2.1.4.1.5 0l.6-.5c.2-.2.4-.2.6-.1l1.5.6c.2.1.3.3.3.5v.5c0 .3-.1.5-.4.7-.4.3-1 .4-1.5.2-1.2-.4-2.4-1.1-3.4-2.1s-1.7-2.2-2.1-3.4c-.2-.6-.1-1.1.2-1.6Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#8e9c8f] transition-all duration-300 hover:border-[#718073]/50 hover:bg-[#294331]/40 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[15px] w-[15px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                <circle cx="12" cy="12" r="3.5" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.75"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

          </div>
        </div>

        {/* Small bottom detail */}
        <div className="mt-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-[8px] uppercase tracking-[0.22em] text-[#3f4d42]">
            Private Pools · Estates · Holiday Homes
          </span>
        </div>

      </div>
    </div>
  </div>
)}
    
  {/* Mobile / Tablet Menu Button */}
<button
  type="button"
  onClick={() => setMenuOpen(true)}
  aria-label="Open navigation menu"
  className="flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all hover:bg-black/40 lg:hidden"
>
  <span>Menu</span>

  <span className="flex flex-col gap-[3px]">
    <span className="block h-px w-3 bg-white/80" />
    <span className="block h-px w-3 bg-white/80" />
  </span>
</button>

    </main>
  );
}
    
   