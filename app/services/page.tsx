"use client";

import { useState } from "react";
import Link from "next/link";

const sans =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, Helvetica, Arial, sans-serif';

// Define explicit TypeScript interfaces for service item structures
interface BaseService {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  features: string[];
  secondaryImages: string[];
  hasSlider: boolean;
  beforeImage?: string;
  afterImage?: string;
}

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<"property" | "pool" | "garden">("property");
  
  // State for the Before/After Sliders (percentage 0 to 100)
  const [poolSliderPos, setPoolSliderPos] = useState(50);
  const [gardenSliderPos, setGardenSliderPos] = useState(50);

  const servicesData: Record<"property" | "pool" | "garden", BaseService> = {
    property: {
      title: "PROPERTY CARE",
      subtitle: "Complete oversight. Wherever you are.",
      description: "Scheduled property inspections, keyholding, security checks, weather checks, contractor access, pre-arrival preparation, and photographic reporting to ensure total security and smooth management of your Côte d’Azur villa.",
      image: "/propertycare1.jpg",
      badge: "Core Service",
      features: [
        "Scheduled property inspections & security patrols",
        "Keyholding & trusted vendor/contractor access",
        "Comprehensive post-storm & weather checks",
        "Detailed photographic reporting & pre-arrival staging"
      ],
      secondaryImages: ["/propertycare2.jpg", "/propertycare3.jpg"],
      hasSlider: false
    },
    pool: {
      title: "POOL CARE",
      subtitle: "Immaculate, professionally maintained pools throughout the year.",
      description: "Routine cleaning, water testing and balancing, filtration and equipment monitoring, seasonal preparation, and fast problem diagnosis so your swimming pool is always crystal clear and ready to enjoy.",
      image: "/poolcare1.jpg",
      badge: "Specialist Care",
      features: [
        "Routine skimming, vacuuming & tile scrubbing",
        "Precise water chemistry testing & balancing",
        "Filtration system checks & pump maintenance",
        "Full seasonal opening, winterization & closing"
      ],
      secondaryImages: [],
      hasSlider: true,
      beforeImage: "/poolcarebefore.jpg",
      afterImage: "/poolcareafter.jpg"
    },
    garden: {
      title: "GARDEN & GROUNDS",
      subtitle: "Beautiful outdoor spaces, cared for throughout the seasons.",
      description: "Lawns, expert pruning, hedges, specialized planting, irrigation monitoring, seasonal maintenance, and complete grounds care tailored to the Mediterranean climate.",
      image: "/gardengrounds1.jpg",
      badge: "Landscape Care",
      features: [
        "Lawns, formal hedges & expert botanical pruning",
        "Smart irrigation system programming & monitoring",
        "Seasonal Mediterranean planting & soil health",
        "Complete estate grounds maintenance & waste clearing"
      ],
      secondaryImages: [],
      hasSlider: true,
      beforeImage: "/Villagardenbefore.jpg",
      afterImage: "/Villagardenafter.jpg"
    }
  };

  const current = servicesData[activeService];

  return (
    <main
      style={{ fontFamily: sans }}
      className="min-h-screen overflow-x-hidden bg-[#f4f7f9] text-[#122230] selection:bg-[#132c3d] selection:text-white"
    >
      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 flex min-h-screen w-[88%] max-w-md flex-col bg-[#f5f8fa] px-6 py-6 text-[#122230] shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#122230]/10 pb-6">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em]">
                Riviera House and Grounds
              </span>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#122230]/15"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-px w-4 rotate-45 bg-[#122230]" />
                  <span className="absolute left-0 top-1/2 h-px w-4 -rotate-45 bg-[#122230]" />
                </span>
              </button>
            </div>

            <nav className="mt-8 flex flex-col">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#122230]/10 py-4 text-2xl font-extrabold tracking-[-0.05em]"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#122230]/10 py-4 text-2xl font-extrabold tracking-[-0.05em]"
              >
                Our Services
              </Link>
              <Link
                href="/#why-choose-us"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#122230]/10 py-4 text-2xl font-extrabold tracking-[-0.05em]"
              >
                Why Choose Us
              </Link>
              <Link
                href="/#areas"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#122230]/10 py-4 text-2xl font-extrabold tracking-[-0.05em]"
              >
                Areas We Cover
              </Link>
              <Link
                href="/enquire"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#122230]/10 py-4 text-2xl font-extrabold tracking-[-0.05em]"
              >
                Enquire
              </Link>
            </nav>

            <div className="mt-8">
              <Link
                href="/enquire"
                onClick={() => setMenuOpen(false)}
                className="block w-full rounded-full bg-[#132c3d] py-4 text-center text-xs font-extrabold uppercase tracking-[0.15em] text-white shadow-md"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/90 px-6 py-4 shadow-sm backdrop-blur-md md:px-12 md:py-5 border-b border-[#122230]/10">
        <Link href="/" className="flex items-center gap-3">
          <div className="overflow-hidden rounded-full h-9 w-9 flex items-center justify-center bg-[#f4f7f9] border border-[#122230]/10 shrink-0">
            <img
              src="/newlogoriviera.jpg"
              alt="Riviera House and Grounds"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#122230]">
              Riviera House
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#2e506d]">
              and Grounds
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#122230]/80 hover:text-[#122230]"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#122230] hover:text-[#2e506d]"
          >
            Our Services
          </Link>
          <Link
            href="/#why-choose-us"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#122230]/80 hover:text-[#122230]"
          >
            Why Choose Us
          </Link>
          <Link
            href="/#areas"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#122230]/80 hover:text-[#122230]"
          >
            Areas We Cover
          </Link>
          <Link
            href="/enquire"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#122230]/80 hover:text-[#122230]"
          >
            Enquire
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/enquire"
            className="hidden rounded-full bg-[#132c3d] px-6 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#1d3e54] shadow-sm sm:inline-block"
          >
            Enquire
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            className="flex items-center gap-2 rounded-full border border-[#122230]/15 bg-[#f4f7f9]/60 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#122230] backdrop-blur-md lg:hidden"
          >
            Menu
            <span className="flex flex-col gap-[3px]">
              <span className="block h-px w-3 bg-[#122230]" />
              <span className="block h-px w-3 bg-[#122230]" />
            </span>
          </button>
        </div>
      </header>

      {/* SERVICES HERO HEADER */}
      <section className="relative bg-[#122230] px-6 py-20 text-white md:px-12 md:py-28 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/propertycare1.jpg" alt="Mediterranean background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#86cbef]">
            Tailored Excellence
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight md:text-6xl text-white">
            Comprehensive Property, Pool & Garden Care
          </h1>
          <p className="mt-4 text-sm font-light text-white/80 max-w-xl mx-auto tracking-wide">
            Explore our specialized divisions crafted to look after exceptional properties across the Côte d’Azur.
          </p>
        </div>
      </section>

      {/* INTERACTIVE SELECTOR SECTION WITH DETAILED INDIVIDUAL PAGES */}
      <section className="bg-[#d7e7f4] px-6 py-20 md:px-12 md:py-28 border-t border-[#b8d4e9]">
        <div className="mx-auto max-w-6xl">
          
          {/* THE NICE SELECTOR BUTTON IN THE MIDDLE */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex rounded-full bg-white/80 p-1.5 shadow-lg backdrop-blur-md border border-[#b8d4e9]">
              <button
                onClick={() => setActiveService("property")}
                className={`rounded-full px-6 py-3 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeService === "property"
                    ? "bg-[#0f1d2b] text-white shadow-md scale-105"
                    : "text-[#122230] hover:text-[#345d7e]"
                }`}
              >
                Property Care
              </button>
              <button
                onClick={() => setActiveService("pool")}
                className={`rounded-full px-6 py-3 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeService === "pool"
                    ? "bg-[#0f1d2b] text-white shadow-md scale-105"
                    : "text-[#122230] hover:text-[#345d7e]"
                }`}
              >
                Pool Care
              </button>
              <button
                onClick={() => setActiveService("garden")}
                className={`rounded-full px-6 py-3 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeService === "garden"
                    ? "bg-[#0f1d2b] text-white shadow-md scale-105"
                    : "text-[#122230] hover:text-[#345d7e]"
                }`}
              >
                Garden & Grounds
              </button>
            </div>
          </div>

          {/* DYNAMIC SHORT PAGE DISPLAY CONTAINER */}
          <div className="bg-[#c5def2] rounded-3xl p-6 sm:p-12 shadow-2xl border-2 border-[#345d7e]/30 transition-all duration-500">
            
            {/* PAGE HEADER */}
            <div className="border-b border-[#345d7e]/20 pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="inline-block rounded-full bg-[#0f1d2b] px-3.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.15em] text-white shadow mb-3">
                  {current.badge}
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#0f1d2b]">
                  {current.title}
                </h2>
                <p className="mt-2 text-sm sm:text-base font-bold uppercase tracking-wider text-[#284c6c]">
                  {current.subtitle}
                </p>
              </div>
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0f1d2b] px-6 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white transition-transform hover:scale-105 shadow-md shrink-0"
              >
                Book This Service <span>→</span>
              </Link>
            </div>

            {/* MAIN GRID CONTENT FOR THE SELECTED SERVICE PAGE */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: DESCRIPTION & FEATURES */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm border border-[#a6cceb]">
                  <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0f1d2b] mb-3">
                    Overview & Scope
                  </h4>
                  <p className="text-sm sm:text-base text-[#274358] leading-relaxed">
                    {current.description}
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm border border-[#a6cceb]">
                  <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0f1d2b] mb-4">
                    Key Features Included
                  </h4>
                  <div className="space-y-3">
                    {current.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0f1d2b]">
                        <span className="h-2 w-2 rounded-full bg-[#345d7e] mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: HERO IMAGE SLOT & EXTRA PICTURE SLOTS */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Main Hero Image Slot */}
                <div className="relative h-[280px] sm:h-[340px] overflow-hidden rounded-2xl shadow-lg border border-[#a6cceb]">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Additional Picture Slots / Before & After Slider */}
                {activeService !== "property" && current.afterImage && current.beforeImage ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#0f1d2b]">
                        Interactive Before & After Transformation
                      </h4>
                      <span className="text-[10px] font-bold text-[#345d7e] uppercase tracking-wider">Drag Slider</span>
                    </div>

                    {/* Before/After Interactive Slider */}
                    <div className="relative h-[220px] sm:h-[260px] overflow-hidden rounded-2xl shadow-lg select-none border border-[#a6cceb]">
                      {/* After Image (Background) */}
                      <img
                        src={current.afterImage}
                        alt="After maintenance"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute bottom-3 right-3 z-10 rounded bg-[#0f1d2b]/80 px-2.5 py-1 text-[9px] font-extrabold tracking-widest text-white uppercase backdrop-blur-sm">
                        After
                      </div>

                      {/* Before Image (Clipped container) */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${activeService === "pool" ? poolSliderPos : gardenSliderPos}%` }}
                      >
                        <img
                          src={current.beforeImage}
                          alt="Before maintenance"
                          className="absolute inset-0 h-full w-full object-cover max-w-none"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <div className="absolute bottom-3 left-3 z-10 rounded bg-[#0f1d2b]/80 px-2.5 py-1 text-[9px] font-extrabold tracking-widest text-white uppercase backdrop-blur-sm">
                          Before
                        </div>
                      </div>

                      {/* Slider Input / Handle */}
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={activeService === "pool" ? poolSliderPos : gardenSliderPos}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          if (activeService === "pool") setPoolSliderPos(val);
                          if (activeService === "garden") setGardenSliderPos(val);
                        }}
                        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
                      />

                      {/* Visual Divider Line */}
                      <div
                        className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
                        style={{ left: `${activeService === "pool" ? poolSliderPos : gardenSliderPos}%` }}
                      >
                        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0f1d2b] shadow-md text-xs font-bold">
                          ↔
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard Extra Gallery Slots for Property Care */
                  <div className="grid grid-cols-2 gap-4">
                    {current.secondaryImages.map((imgSrc, i) => (
                      <div key={i} className="relative h-[160px] overflow-hidden rounded-xl shadow-md border border-[#a6cceb]">
                        <img
                          src={imgSrc}
                          alt={`${current.title} detail ${i + 1}`}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* BESPOKE ANNUAL PROPERTY CARE SECTION */}
      <section className="bg-[#e9f2f8] px-6 py-20 text-[#122230] md:px-12 md:py-24 border-t border-[#cce0ee]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#345d7e]">
            Tailored Solutions
          </p>
          <h2 className="mt-3 font-serif text-3xl font-normal md:text-4xl text-[#0f1d2b]">
            Bespoke Annual Property Care
          </h2>
          <p className="mt-4 text-sm text-[#2a455c] max-w-2xl mx-auto leading-relaxed">
            Every care plan is individually prepared following an initial property assessment. Contractor Access • Regular Reporting • Tailored annual plans • Paid monthly
          </p>

          <div className="mt-8">
            <Link
              href="/enquire"
              className="inline-flex items-center gap-3 rounded-full bg-[#0f1d2b] px-8 py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white transition-transform hover:scale-105 shadow-md"
            >
              Request a property assessment
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* AREAS WE COVER */}
      <section id="areas" className="bg-[#bedbf3] px-6 py-20 text-[#0f1d2b] md:px-12 border-t border-[#9ac2e8]/60">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#284c6c]">
            Areas We Cover
          </p>
          <h2 className="mt-3 font-serif text-3xl font-normal md:text-4xl">
            Serving the Côte d’Azur
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Grasse", "Valbonne", "Mougins", "Cannes", "Antibes", "and surrounding areas"].map((area, i) => (
              <span
                key={i}
                className="rounded-full bg-[#e3f0fb] border border-[#a0c5e7] px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#0f1d2b] shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f1d2b] px-6 py-12 text-white md:px-12 border-t border-[#192f44]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="overflow-hidden rounded-full h-8 w-8 flex items-center justify-center bg-white/10 border border-white/20 shrink-0">
              <img
                src="/newlogoriviera.jpg"
                alt="Riviera House and Grounds"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/80">
              Riviera House and Grounds
            </span>
          </div>

          <div className="text-sm font-bold text-white/90 flex flex-wrap gap-x-6 gap-y-2">
            <span>Grasse</span>
            <span>Valbonne</span>
            <span>Mougins</span>
            <span>Cannes</span>
            <span>Antibes</span>
            <span>and surrounding areas</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm text-white transition-all hover:bg-white/15 hover:border-white/40 shadow-sm"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm text-white transition-all hover:bg-white/15 hover:border-white/40 shadow-sm"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm text-white transition-all hover:bg-white/15 hover:border-white/40 shadow-sm"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="mailto:info@example.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm text-white transition-all hover:bg-white/15 hover:border-white/40 shadow-sm"
            >
              <svg className="h-5 w-5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center md:flex md:justify-between text-[10px] uppercase tracking-[0.15em] text-white/40">
          <p>© {new Date().getFullYear()} Riviera House and Grounds. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Properties cared for, so you can enjoy them.</p>
        </div>
      </footer>
    </main>
  );
}