"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const sans =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, Helvetica, Arial, sans-serif';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const pageRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "“Reliable, professional and completely trustworthy. Our property has never looked better.”",
      author: "Villa Owner, Valbonne",
    },
    {
      quote: "“Exceptional pool care and attention to detail. We never have to worry about a thing while away.”",
      author: "Homeowner, Mougins",
    },
    {
      quote: "“The garden maintenance and general oversight are top-tier. Highly recommended for any Côte d’Azur villa.”",
      author: "Estate Owner, Cannes",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
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

          <div className="absolute right-0 top-0 flex min-h-screen w-[88%] max-w-md flex-col bg-[#f5f8fa] px-6 py-6 text-[#122230] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#122230]/10 pb-6">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em]">
                Premier Pools & Gardens
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

            <nav className="mt-12 flex flex-col">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#122230]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Home
              </Link>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#122230]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Our Services
              </a>
              <a
                href="#why-choose-us"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#122230]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Why Choose Us
              </a>
              <a
                href="#areas"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#122230]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Areas We Cover
              </a>
              <Link
                href="/enquire"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#122230]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Enquire
              </Link>
            </nav>

            <div className="mt-auto pt-6">
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
          <img
            src="/logo.png"
            alt="Premier Pools & Gardens"
            className="h-9 w-auto object-contain"
          />
          <div className="hidden flex-col sm:flex">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#122230]">
              Premier
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#2e506d]">
              Pools & Gardens
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#122230] hover:text-[#2e506d]"
          >
            Home
          </Link>
          <a
            href="#services"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#122230]/80 hover:text-[#122230]"
          >
            Our Services
          </a>
          <a
            href="#why-choose-us"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#122230]/80 hover:text-[#122230]"
          >
            Why Choose Us
          </a>
          <a
            href="#areas"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#122230]/80 hover:text-[#122230]"
          >
            Areas We Cover
          </a>
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

      {/* HERO SECTION */}
      <section className="relative flex min-h-[92vh] w-full flex-col justify-between overflow-hidden px-6 pb-8 pt-12 md:px-12 md:pb-16 md:pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/poolgardennicevideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#122230]/75" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl pt-12 md:pt-16 text-center md:text-left">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#86cbef] drop-shadow-md">
            Your property, our priority
          </p>
          <h1 className="mt-4 font-serif text-3xl font-normal leading-[1.08] tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:max-w-4xl">
            Complete Property Care <br className="hidden sm:inline" />
            on the Côte d’Azur
          </h1>

          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#b6e1fc] drop-shadow-md md:justify-start">
            <span>Pool</span>
            <span className="text-white/50">·</span>
            <span>Garden</span>
            <span className="text-white/50">·</span>
            <span>Property</span>
            <span className="text-white/50">·</span>
            <span>Security</span>
          </div>

          <p className="mt-3 text-xs sm:text-sm font-bold text-white/90 drop-shadow">
            Year-round care for villas, second homes and primary residences.
          </p>

          <div className="mt-6">
            <a
              href="#services"
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#122230] transition-all hover:bg-[#f4f7f9] shadow-xl"
            >
              Discover our services
              <span>→</span>
            </a>
          </div>
        </div>

        {/* HERO ICON BAR (4 items, luxury modern look without emojis, positioned lower) */}
        <div className="relative z-10 mx-auto mt-16 mb-2 grid w-full max-w-7xl grid-cols-4 gap-1.5 sm:gap-6 rounded-2xl bg-white/90 px-3 py-4 sm:px-6 sm:py-5 text-[#122230] backdrop-blur-md shadow-2xl border border-white/60">
          <div className="flex flex-col items-center justify-center text-center px-1">
            <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-[#122230]">Pool Care</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-1 border-l border-[#122230]/10">
            <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-[#122230]">Garden Care</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-1 border-l border-[#122230]/10">
            <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-[#122230]">Property</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-1 border-l border-[#122230]/10">
            <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-[#122230]">Peace of Mind</span>
          </div>
        </div>
      </section>

      {/* MORE THAN MAINTENANCE */}
      <section id="why-choose-us" className="bg-[#e4edf4] px-6 py-20 text-[#122230] md:px-12 md:py-28 border-t border-[#cce0ee]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-xl border border-[#b8d4e9]">
            <img
              src="/beautifulpool.jpg"
              alt="Beautiful property and olive tree landscape"
              className="h-[400px] w-full object-cover md:h-[500px]"
            />
          </div>

          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#345d7e]">
              More than maintenance
            </p>
            <h2 className="mt-3 font-serif text-3xl font-normal leading-tight md:text-5xl text-[#0f1d2b]">
              A Complete Service for a Beautifully Cared for Property
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-[#2a455c]">
              We provide a personalised, reliable and discreet property care service across the Côte d’Azur, ensuring your home, garden and pool are always in perfect condition — whether you are in residence or away.
            </p>

            <div className="mt-8">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-3 rounded-full bg-[#0f1d2b] px-8 py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white transition-transform hover:scale-105 shadow-md"
              >
                Find out more
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* CHECKLIST HIGHLIGHTS */}
          <div className="lg:col-span-2 grid gap-4 rounded-3xl bg-[#d2e4f2] p-6 md:p-8 sm:grid-cols-2 lg:grid-cols-4 border border-[#b8d4e9]">
            <div className="flex items-start gap-3">
              <span className="text-[#345d7e] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f1d2b]">Regular property inspections</h4>
                <p className="text-[11px] text-[#345d7e] mt-1">Detailed checks inside and out.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#345d7e] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f1d2b]">Pool maintenance & water management</h4>
                <p className="text-[11px] text-[#345d7e] mt-1">Crystal clear balancing year-round.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#345d7e] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f1d2b]">Garden & grounds care</h4>
                <p className="text-[11px] text-[#345d7e] mt-1">Pruning, lawn care and landscaping.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#345d7e] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f1d2b]">Keyholding & security checks</h4>
                <p className="text-[11px] text-[#345d7e] mt-1">Secure local oversight and response.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#345d7e] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f1d2b]">Pre-arrival & departure preparation</h4>
                <p className="text-[11px] text-[#345d7e] mt-1">Your home ready the moment you land.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#345d7e] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f1d2b]">Storm & weather checks</h4>
                <p className="text-[11px] text-[#345d7e] mt-1">Immediate post-storm inspections.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#345d7e] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f1d2b]">Contractor access & supervision</h4>
                <p className="text-[11px] text-[#345d7e] mt-1">Managing local trades on-site.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#345d7e] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f1d2b]">Photographic reports</h4>
                <p className="text-[11px] text-[#345d7e] mt-1">Transparent updates sent directly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES CARDS */}
      <section id="services" className="bg-[#d7e7f4] px-6 py-20 text-[#122230] md:px-12 md:py-28 border-t border-[#b8d4e9]/60">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#345d7e]">
            Our services
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl font-normal md:text-5xl text-[#0f1d2b]">
            Everything Your Property Needs
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* CARD 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-[#c5def2] border border-[#a6cceb] flex flex-col justify-between shadow-sm">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/poolservices.jpg.webp"
                  alt="Pool Care"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c5def2] via-transparent to-transparent" />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#0f1d2b]">Pool Care</h3>
                  <p className="mt-2 text-sm text-[#274358]">
                    Crystal clear. All year round. Complete chemical balancing, cleaning, equipment monitoring, and winterisation.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#0f1d2b]/10 flex items-center justify-between">
                  <Link href="/enquire" className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#345d7e]">Learn more</Link>
                  <span className="text-lg text-[#0f1d2b]">→</span>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-[#c5def2] border border-[#a6cceb] flex flex-col justify-between shadow-sm">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/gardenservices.jpg.webp"
                  alt="Garden Maintenance"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c5def2] via-transparent to-transparent" />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#0f1d2b]">Garden Maintenance</h3>
                  <p className="mt-2 text-sm text-[#274358]">
                    Beautiful, healthy outdoor spaces. Lawn care, pruning, hedge trimming, irrigation management, and seasonal planting.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#0f1d2b]/10 flex items-center justify-between">
                  <Link href="/enquire" className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#345d7e]">Learn more</Link>
                  <span className="text-lg text-[#0f1d2b]">→</span>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-[#c5def2] border border-[#a6cceb] flex flex-col justify-between shadow-sm">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/aboutme2.jpg"
                  alt="Property Care"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c5def2] via-transparent to-transparent" />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#0f1d2b]">Property Care</h3>
                  <p className="mt-2 text-sm text-[#274358]">
                    Security, management and total peace of mind. Regular physical inspections, storm checks, and concierge oversight.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#0f1d2b]/10 flex items-center justify-between">
                  <Link href="/enquire" className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#345d7e]">Learn more</Link>
                  <span className="text-lg text-[#0f1d2b]">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SCROLLER BANNER */}
      <section className="bg-[#cbe2f4] px-6 py-16 md:px-12 md:py-20 border-t border-b border-[#aaccf0]">
        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <div className="min-h-[110px] sm:min-h-[90px] flex flex-col justify-center">
              <blockquote className="font-serif text-xl italic leading-relaxed text-[#0f1d2b] sm:text-3xl transition-all duration-300">
                {testimonials[currentTestimonial].quote}
              </blockquote>
              <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#345d7e]">
                {testimonials[currentTestimonial].author}
              </p>
            </div>

            {/* Scroller Dots / Navigation */}
            <div className="mt-6 flex items-center gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentTestimonial === idx
                      ? "w-8 bg-[#0f1d2b]"
                      : "w-2.5 bg-[#0f1d2b]/20 hover:bg-[#0f1d2b]/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#e3f0fb] p-6 border border-[#aaccf0] flex flex-col justify-center shadow-sm">
            <div className="flex items-center gap-2 text-[#345d7e] text-sm mb-2">🌊</div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#0f1d2b]">
              Locally Based. Personally Invested.
            </h4>
            <p className="mt-2 text-xs text-[#274358] leading-relaxed">
              We live and work in the Côte d’Azur and take pride in looking after a select number of properties with the highest standards of care.
            </p>
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

      {/* LET'S LOOK AFTER YOUR PROPERTY CALLOUT */}
      <section id="contact" className="relative overflow-hidden bg-[#add3f0] px-6 py-24 text-[#0f1d2b] md:px-12 md:py-32 border-t border-[#8dbbe2]">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img
            src="/aboutme3.jpg"
            alt="Landscape background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#add3f0]/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-serif text-4xl font-normal md:text-6xl text-[#0f1d2b]">
              Let’s Look After <br />
              Your Property
            </h2>
            <p className="mt-4 text-sm text-[#1d374c] max-w-md font-medium">
              Get in touch to arrange a friendly, no-obligation property assessment.
            </p>
          </div>

          <div>
            <Link
              href="/enquire"
              className="inline-flex items-center gap-3 rounded-full bg-[#0f1d2b] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-white transition-transform hover:scale-105 shadow-xl"
            >
              Enquire Now
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f1d2b] px-6 py-12 text-white md:px-12 border-t border-[#192f44]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Premier Pools & Gardens"
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/80">
              Premier Pools & Gardens
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
          <p>© {new Date().getFullYear()} Premier Pools & Gardens. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Properties cared for, so you can enjoy them.</p>
        </div>
      </footer>
    </main>
  );
}