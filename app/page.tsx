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
  const pageRef = useRef<HTMLDivElement>(null);

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
      className="min-h-screen overflow-x-hidden bg-[#eaf4f0] text-[#16221b] selection:bg-[#203427] selection:text-white"
    >
      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 flex min-h-screen w-[88%] max-w-md flex-col bg-[#eef4f1] px-6 py-6 text-[#16221b] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#16221b]/10 pb-6">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em]">
                Premier Pools & Gardens
              </span>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#16221b]/15"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-px w-4 rotate-45 bg-[#16221b]" />
                  <span className="absolute left-0 top-1/2 h-px w-4 -rotate-45 bg-[#16221b]" />
                </span>
              </button>
            </div>

            <nav className="mt-12 flex flex-col">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#16221b]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Home
              </Link>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#16221b]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Our Services
              </a>
              <a
                href="#why-choose-us"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#16221b]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Why Choose Us
              </a>
              <a
                href="#areas"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#16221b]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Areas We Cover
              </a>
              <Link
                href="/enquire"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#16221b]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Enquire
              </Link>
            </nav>

            <div className="mt-auto pt-6">
              <Link
                href="/enquire"
                onClick={() => setMenuOpen(false)}
                className="block w-full rounded-full bg-[#16221b] py-4 text-center text-xs font-extrabold uppercase tracking-[0.15em] text-white"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-4 shadow-sm md:px-12 md:py-5 border-b border-[#16221b]/10">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Premier Pools & Gardens"
            className="h-9 w-auto object-contain"
          />
          <div className="hidden flex-col sm:flex">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#16221b]">
              Premier
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#486b58]">
              Pools & Gardens
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#16221b] hover:text-[#486b58]"
          >
            Home
          </Link>
          <a
            href="#services"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#16221b]/80 hover:text-[#16221b]"
          >
            Our Services
          </a>
          <a
            href="#why-choose-us"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#16221b]/80 hover:text-[#16221b]"
          >
            Why Choose Us
          </a>
          <a
            href="#areas"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#16221b]/80 hover:text-[#16221b]"
          >
            Areas We Cover
          </a>
          <Link
            href="/enquire"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#16221b]/80 hover:text-[#16221b]"
          >
            Enquire
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/enquire"
            className="hidden rounded-full bg-[#16221b] px-6 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#2c4c3b] sm:inline-block"
          >
            Enquire
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            className="flex items-center gap-2 rounded-full border border-[#16221b]/15 bg-[#eaf4f0]/60 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#16221b] backdrop-blur-md lg:hidden"
          >
            Menu
            <span className="flex flex-col gap-[3px]">
              <span className="block h-px w-3 bg-[#16221b]" />
              <span className="block h-px w-3 bg-[#16221b]" />
            </span>
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex min-h-[92vh] w-full flex-col justify-between overflow-hidden px-6 pb-16 pt-20 md:px-12 md:pb-24 md:pt-28">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/poolgardencleanvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#16221b]/70" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl my-auto text-center md:text-left">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#71efb3] drop-shadow-md">
            Your property, our priority
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.08] tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:max-w-4xl">
            Complete Property Care <br className="hidden sm:inline" />
            on the Côte d’Azur
          </h1>

          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#a4f5ce] drop-shadow-md md:justify-start">
            <span>Pool</span>
            <span className="text-white/50">·</span>
            <span>Garden</span>
            <span className="text-white/50">·</span>
            <span>Property</span>
            <span className="text-white/50">·</span>
            <span>Security</span>
          </div>

          <p className="mt-3 text-sm font-bold text-white/90 drop-shadow">
            Year-round care for villas, second homes and primary residences.
          </p>

          <div className="mt-8">
            <a
              href="#services"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#16221b] transition-all hover:bg-[#eaf4f0] shadow-xl"
            >
              Discover our services
              <span>→</span>
            </a>
          </div>
        </div>

        {/* HERO ICON BAR */}
        <div className="relative z-10 mx-auto mt-16 mb-4 grid w-full max-w-7xl grid-cols-2 gap-4 rounded-2xl bg-white/95 p-4 text-[#16221b] backdrop-blur-md sm:grid-cols-5 md:p-6 shadow-2xl border border-white/40">
          <div className="flex flex-col items-center justify-center text-center p-2">
            <span className="text-xl mb-1">🌊</span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em]">Pool Care</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-2 border-l border-[#16221b]/10">
            <span className="text-xl mb-1">🌿</span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em]">Garden Maintenance</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-2 sm:border-l border-[#16221b]/10">
            <span className="text-xl mb-1">🏡</span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em]">Property Management</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-2 border-l border-[#16221b]/10">
            <span className="text-xl mb-1">🔒</span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em]">Security & Keyholding</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center text-center p-2 border-t sm:border-t-0 sm:border-l border-[#16221b]/10">
            <span className="text-xl mb-1">✨</span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em]">Peace of Mind</span>
          </div>
        </div>
      </section>

      {/* MORE THAN MAINTENANCE */}
      <section id="why-choose-us" className="bg-[#dcf2e8] px-6 py-20 text-[#16221b] md:px-12 md:py-28 border-t border-[#c5e2d4]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-xl border border-[#b8dfcd]">
            <img
              src="/aboutme1.jpg"
              alt="Beautiful property and olive tree landscape"
              className="h-[400px] w-full object-cover md:h-[500px]"
            />
          </div>

          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#3b6650]">
              More than maintenance
            </p>
            <h2 className="mt-3 font-serif text-3xl font-normal leading-tight md:text-5xl text-[#12241b]">
              A Complete Service for a Beautifully Cared for Property
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-[#355243]">
              We provide a personalised, reliable and discreet property care service across the Côte d’Azur, ensuring your home, garden and pool are always in perfect condition — whether you are in residence or away.
            </p>

            <div className="mt-8">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-3 rounded-full bg-[#12241b] px-8 py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white transition-transform hover:scale-105"
              >
                Find out more
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* CHECKLIST HIGHLIGHTS */}
          <div className="lg:col-span-2 grid gap-4 rounded-3xl bg-[#cbeade] p-6 md:p-8 sm:grid-cols-2 lg:grid-cols-4 border border-[#b4d6c2]">
            <div className="flex items-start gap-3">
              <span className="text-[#3b6650] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#12241b]">Regular property inspections</h4>
                <p className="text-[11px] text-[#3b6650] mt-1">Detailed checks inside and out.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#3b6650] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#12241b]">Pool maintenance & water management</h4>
                <p className="text-[11px] text-[#3b6650] mt-1">Crystal clear balancing year-round.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#3b6650] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#12241b]">Garden & grounds care</h4>
                <p className="text-[11px] text-[#3b6650] mt-1">Pruning, lawn care and landscaping.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#3b6650] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#12241b]">Keyholding & security checks</h4>
                <p className="text-[11px] text-[#3b6650] mt-1">Secure local oversight and response.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#3b6650] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#12241b]">Pre-arrival & departure preparation</h4>
                <p className="text-[11px] text-[#3b6650] mt-1">Your home ready the moment you land.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#3b6650] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#12241b]">Storm & weather checks</h4>
                <p className="text-[11px] text-[#3b6650] mt-1">Immediate post-storm inspections.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#3b6650] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#12241b]">Contractor access & supervision</h4>
                <p className="text-[11px] text-[#3b6650] mt-1">Managing local trades on-site.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#3b6650] font-bold">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#12241b]">Photographic reports</h4>
                <p className="text-[11px] text-[#3b6650] mt-1">Transparent updates sent directly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES CARDS */}
      <section id="services" className="bg-[#d0ebd6] px-6 py-20 text-[#16221b] md:px-12 md:py-28 border-t border-[#afd9c3]/60">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#426653]">
            Our services
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl font-normal md:text-5xl text-[#12241b]">
            Everything Your Property Needs
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* CARD 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-[#bde3cb] border border-[#a2d3bc] flex flex-col justify-between">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/poolservices.jpg.webp"
                  alt="Pool Care"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#bde3cb] via-transparent to-transparent" />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#12241b]">Pool Care</h3>
                  <p className="mt-2 text-sm text-[#315241]">
                    Crystal clear. All year round. Complete chemical balancing, cleaning, equipment monitoring, and winterisation.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#12241b]/10 flex items-center justify-between">
                  <Link href="/enquire" className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#3b6650]">Learn more</Link>
                  <span className="text-lg text-[#12241b]">→</span>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-[#bde3cb] border border-[#a2d3bc] flex flex-col justify-between">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/gardenservices.jpg.webp"
                  alt="Garden Maintenance"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#bde3cb] via-transparent to-transparent" />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#12241b]">Garden Maintenance</h3>
                  <p className="mt-2 text-sm text-[#315241]">
                    Beautiful, healthy outdoor spaces. Lawn care, pruning, hedge trimming, irrigation management, and seasonal planting.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#12241b]/10 flex items-center justify-between">
                  <Link href="/enquire" className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#3b6650]">Learn more</Link>
                  <span className="text-lg text-[#12241b]">→</span>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-[#bde3cb] border border-[#a2d3bc] flex flex-col justify-between">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/aboutme2.jpg"
                  alt="Property Care"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#bde3cb] via-transparent to-transparent" />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#12241b]">Property Care</h3>
                  <p className="mt-2 text-sm text-[#315241]">
                    Security, management and total peace of mind. Regular physical inspections, storm checks, and concierge oversight.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#12241b]/10 flex items-center justify-between">
                  <Link href="/enquire" className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#3b6650]">Learn more</Link>
                  <span className="text-lg text-[#12241b]">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL BANNER */}
      <section className="bg-[#c5e6d4] px-6 py-16 md:px-12 md:py-20 border-t border-b border-[#aed9c4]">
        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <blockquote className="font-serif text-2xl italic leading-relaxed text-[#12241b] sm:text-3xl">
              “Reliable, professional and completely trustworthy. Our property has never looked better.”
            </blockquote>
            <p className="mt-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#3b6650]">
              Villa Owner, Valbonne
            </p>
          </div>
          <div className="rounded-2xl bg-[#daf2e7] p-6 border border-[#aed9c4] flex flex-col justify-center shadow-sm">
            <div className="flex items-center gap-2 text-[#3b6650] text-sm mb-2">🌿</div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#12241b]">
              Locally Based. Personally Invested.
            </h4>
            <p className="mt-2 text-xs text-[#315241] leading-relaxed">
              We live and work in the Côte d’Azur and take pride in looking after a select number of properties with the highest standards of care.
            </p>
          </div>
        </div>
      </section>

      {/* AREAS WE COVER */}
      <section id="areas" className="bg-[#b6dfcc] px-6 py-20 text-[#12241b] md:px-12 border-t border-[#92ceb3]/60">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#365948]">
            Areas We Cover
          </p>
          <h2 className="mt-3 font-serif text-3xl font-normal md:text-4xl">
            Serving the Côte d’Azur
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Grasse", "Valbonne", "Mougins", "Cannes", "Antibes", "and surrounding areas"].map((area, i) => (
              <span
                key={i}
                className="rounded-full bg-[#daf2e7] border border-[#9ed4bd] px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#12241b] shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LET'S LOOK AFTER YOUR PROPERTY CALLOUT */}
      <section id="contact" className="relative overflow-hidden bg-[#a5d5be] px-6 py-24 text-[#12241b] md:px-12 md:py-32 border-t border-[#8cc6ab]">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img
            src="/aboutme3.jpg"
            alt="Landscape background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#a5d5be]/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-serif text-4xl font-normal md:text-6xl text-[#12241b]">
              Let’s Look After <br />
              Your Property
            </h2>
            <p className="mt-4 text-sm text-[#244031] max-w-md font-medium">
              Get in touch to arrange a friendly, no-obligation property assessment.
            </p>
          </div>

          <div>
            <Link
              href="/enquire"
              className="inline-flex items-center gap-3 rounded-full bg-[#12241b] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-white transition-transform hover:scale-105 shadow-xl"
            >
              Enquire Now
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#12241b] px-6 py-12 text-white md:px-12 border-t border-[#1f3d2f]">
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

          <div className="text-xs text-white/60 flex flex-wrap gap-x-6 gap-y-2">
            <span>Grasse</span>
            <span>Valbonne</span>
            <span>Mougins</span>
            <span>Cannes</span>
            <span>Antibes</span>
            <span>and surrounding areas</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs text-white hover:bg-white/10"
            >
              📷
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs text-white hover:bg-white/10"
            >
              f
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs text-white hover:bg-white/10"
            >
              in
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