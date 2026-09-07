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
              <Link
                href="/#services"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#16221b]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Our Services
              </Link>
              <Link
                href="/#why-choose-us"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#16221b]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Why Choose Us
              </Link>
              <Link
                href="/#areas"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#16221b]/10 py-5 text-3xl font-extrabold tracking-[-0.05em]"
              >
                Areas We Cover
              </Link>
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
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#16221b]/80 hover:text-[#16221b]"
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#16221b]/80 hover:text-[#16221b]"
          >
            Our Services
          </Link>
          <Link
            href="/#why-choose-us"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#16221b]/80 hover:text-[#16221b]"
          >
            Why Choose Us
          </Link>
          <Link
            href="/#areas"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#16221b]/80 hover:text-[#16221b]"
          >
            Areas We Cover
          </Link>
          <Link
            href="/enquire"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#16221b] hover:text-[#486b58]"
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

      {/* ENQUIRE CONTENT SECTION */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#3b6650]">
            Get in touch
          </p>
          <h1 className="mt-3 font-serif text-4xl font-normal tracking-tight text-[#12241b] md:text-5xl">
            Start Your Property Assessment
          </h1>
          <p className="mt-4 text-sm text-[#355243] leading-relaxed">
            Fill out the form below to tell us about your requirements on the Côte d’Azur, and we will get back to you shortly.
          </p>
        </div>

        <div className="rounded-3xl bg-[#dcf2e8] p-8 md:p-12 shadow-xl border border-[#c5e2d4]">
          {submitted ? (
            <div className="py-16 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#12241b] text-white text-2xl mb-6 shadow-md">
                ✓
              </div>
              <h3 className="font-serif text-3xl font-normal text-[#12241b]">
                Thank You for Your Enquiry
              </h3>
              <p className="mt-4 text-sm text-[#355243] max-w-md mx-auto leading-relaxed">
                We have received your details and will be in touch with you shortly to discuss your property needs.
              </p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 rounded-full bg-[#12241b] px-8 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white transition-transform hover:scale-105"
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
                  <label htmlFor="fullName" className="block text-xs font-extrabold uppercase tracking-[0.15em] text-[#12241b] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    placeholder="Jean Dupont"
                    className="w-full rounded-2xl bg-white/80 border border-[#b8dfcd] px-5 py-4 text-sm text-[#12241b] placeholder:text-[#355243]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3b6650]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-extrabold uppercase tracking-[0.15em] text-[#12241b] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="jean@example.com"
                    className="w-full rounded-2xl bg-white/80 border border-[#b8dfcd] px-5 py-4 text-sm text-[#12241b] placeholder:text-[#355243]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3b6650]"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-xs font-extrabold uppercase tracking-[0.15em] text-[#12241b] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+33 6 00 00 00 00"
                    className="w-full rounded-2xl bg-white/80 border border-[#b8dfcd] px-5 py-4 text-sm text-[#12241b] placeholder:text-[#355243]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3b6650]"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-xs font-extrabold uppercase tracking-[0.15em] text-[#12241b] mb-2">
                    Property Location / City *
                  </label>
                  <input
                    type="text"
                    id="location"
                    required
                    placeholder="Valbonne, Mougins, Cannes..."
                    className="w-full rounded-2xl bg-white/80 border border-[#b8dfcd] px-5 py-4 text-sm text-[#12241b] placeholder:text-[#355243]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3b6650]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-[0.15em] text-[#12241b] mb-3">
                  Services Required (Select all that apply)
                </label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {["Pool Care", "Garden Maintenance", "Property Management", "Security & Keyholding", "Pre-arrival Prep", "Other Services"].map((service, idx) => (
                    <label key={idx} className="flex items-center gap-3 rounded-xl bg-white/60 border border-[#b8dfcd] p-4 cursor-pointer hover:bg-white/90 transition-colors">
                      <input type="checkbox" className="h-4 w-4 rounded border-[#3b6650] text-[#12241b] focus:ring-[#3b6650]" />
                      <span className="text-xs font-bold text-[#12241b]">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-extrabold uppercase tracking-[0.15em] text-[#12241b] mb-2">
                  Tell us about your property & needs *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Please provide details about your property size, frequency of care needed, or specific requests..."
                  className="w-full rounded-2xl bg-white/80 border border-[#b8dfcd] px-5 py-4 text-sm text-[#12241b] placeholder:text-[#355243]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3b6650]"
                ></textarea>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-[#12241b] px-10 py-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white transition-transform hover:scale-105 shadow-xl cursor-pointer"
                >
                  Submit Enquiry
                  <span>→</span>
                </button>
              </div>
            </form>
          )}
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