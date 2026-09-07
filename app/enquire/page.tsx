"use client";

import { useState } from "react";
import Link from "next/link";

const sans =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, Helvetica, Arial, sans-serif';

export default function EnquirePage() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <Link
                href="/#services"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#122230]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Our Services
              </Link>
              <Link
                href="/#why-choose-us"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#122230]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Why Choose Us
              </Link>
              <Link
                href="/#areas"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#122230]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Areas We Cover
              </Link>
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
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#122230]/80 hover:text-[#122230]"
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#122230]/80 hover:text-[#122230]"
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
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#122230] hover:text-[#2e506d]"
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

      {/* ENQUIRE CONTENT SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#345d7e]">
            Get in touch
          </p>
          <h1 className="mt-3 font-serif text-4xl font-normal tracking-tight text-[#0f1d2b] md:text-5xl">
            Start Your Property Assessment
          </h1>
          <p className="mt-4 text-sm text-[#2a455c] leading-relaxed font-medium">
            Fill out the form below to tell us about your requirements on the Côte d’Azur, or chat with us instantly on WhatsApp.
          </p>
        </div>

        {/* LUXURY SPLIT CONTAINER: FORM (LEFT) & WHATSAPP CARD (RIGHT) */}
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] items-start">
          
          {/* MAIN FORM CARD (MEDITERRANEAN BLUE THEME) */}
          <div className="rounded-[2.5rem] bg-[#d7e7f4] p-8 md:p-12 shadow-2xl border border-[#b8d4e9] backdrop-blur-xl">
            {submitted ? (
              <div className="py-20 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#0f1d2b] text-white text-2xl mb-6 shadow-md">
                  ✓
                </div>
                <h3 className="font-serif text-3xl font-normal text-[#0f1d2b]">
                  Thank You for Your Enquiry
                </h3>
                <p className="mt-4 text-sm text-[#274358] max-w-md mx-auto leading-relaxed">
                  We have received your details and will be in touch with you shortly to discuss your property needs.
                </p>
                <div className="mt-8">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-3 rounded-full bg-[#0f1d2b] px-8 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white transition-transform hover:scale-105 shadow-md"
                  >
                    Return Home
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="block text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#0f1d2b] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="Jean Dupont"
                      className="w-full rounded-2xl bg-white/90 border border-[#a6cceb] px-5 py-4 text-sm text-[#0f1d2b] placeholder:text-[#274358]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#345d7e] shadow-sm transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#0f1d2b] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="jean@example.com"
                      className="w-full rounded-2xl bg-white/90 border border-[#a6cceb] px-5 py-4 text-sm text-[#0f1d2b] placeholder:text-[#274358]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#345d7e] shadow-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#0f1d2b] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+33 6 00 00 00 00"
                      className="w-full rounded-2xl bg-white/90 border border-[#a6cceb] px-5 py-4 text-sm text-[#0f1d2b] placeholder:text-[#274358]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#345d7e] shadow-sm transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#0f1d2b] mb-2">
                      Property Location / City *
                    </label>
                    <input
                      type="text"
                      id="location"
                      required
                      placeholder="Valbonne, Mougins, Cannes..."
                      className="w-full rounded-2xl bg-white/90 border border-[#a6cceb] px-5 py-4 text-sm text-[#0f1d2b] placeholder:text-[#274358]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#345d7e] shadow-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#0f1d2b] mb-3">
                    Services Required (Select all that apply)
                  </label>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {["Pool Care", "Garden Maintenance", "Property Management", "Security & Keyholding", "Pre-arrival Prep", "Other Services"].map((service, idx) => (
                      <label key={idx} className="flex items-center gap-3 rounded-xl bg-white/70 border border-[#a6cceb] p-4 cursor-pointer hover:bg-white transition-all shadow-xs">
                        <input type="checkbox" className="h-4 w-4 rounded border-[#345d7e] text-[#0f1d2b] focus:ring-[#345d7e]" />
                        <span className="text-xs font-bold text-[#0f1d2b]">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#0f1d2b] mb-2">
                    Tell us about your property & needs *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Please provide details about your property size, frequency of care needed, or specific requests..."
                    className="w-full rounded-2xl bg-white/90 border border-[#a6cceb] px-5 py-4 text-sm text-[#0f1d2b] placeholder:text-[#274358]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#345d7e] shadow-sm transition-all"
                  ></textarea>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full bg-[#0f1d2b] px-10 py-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#1d334a] hover:scale-105 shadow-xl cursor-pointer"
                  >
                    Submit Enquiry
                    <span>→</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* WHATSAPP ALTERNATIVE CARD */}
          <div className="rounded-[2.5rem] bg-[#0f1d2b] p-8 md:p-10 text-white shadow-2xl border border-[#192f44] flex flex-col justify-between h-full">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg mb-6">
                <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#86cbef]">
                Instant Response
              </span>
              <h2 className="mt-2 font-serif text-3xl font-normal leading-tight text-white">
                Prefer to message directly?
              </h2>
              <p className="mt-4 text-sm text-white/70 leading-relaxed font-medium">
                Skip the form and chat straight with our Côte d’Azur management team on WhatsApp for immediate assistance.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full rounded-full bg-[#25D366] px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#22bf5b] hover:scale-105 shadow-xl"
              >
                <span>Chat on WhatsApp</span>
                <span>→</span>
              </a>
              <p className="mt-4 text-center text-[10px] uppercase tracking-wider text-white/40">
                Typically replies within minutes
              </p>
            </div>
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