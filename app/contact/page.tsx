"use client";

import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function ContactPage() {
  return (
    <main
      className={`${sans.className} relative min-h-screen overflow-hidden bg-[#0e1310] text-[#e3e7e3]`}
    >
     
{/* =====================================================
    BACKGROUND
====================================================== */}
<div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
  {/* Main visual background */}
  <img
    src="/contact-background.jpg"
    alt=""
    className="absolute inset-0 h-full w-full object-cover opacity-75"
  />

  {/* Dark green colour overlay */}
  <div className="absolute inset-0 bg-[#14251a]/65" />

  {/* Deeper green vignette for readability */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(42,72,51,0.15),rgba(8,14,10,0.72)_75%)]" />

  {/* Subtle edge darkening */}
  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,14,10,0.35)_0%,rgba(14,19,16,0.15)_35%,rgba(8,14,10,0.6)_100%)]" />
</div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="relative z-20 flex items-center justify-between border-b border-white/5 bg-[#0e1310]/25 px-6 py-7 backdrop-blur-[2px] md:px-14">
        <a
          href="/"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70"
        >
          Premier Pools & Gardens
        </a>

        <a
          href="/"
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white"
        >
          Back to Home
        </a>
      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <section className="relative z-10 px-6 pb-24 pt-16 md:px-14 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-6xl">

          {/* =================================================
              INTRODUCTION
          ================================================== */}

          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9aa89c]">
              Get in touch
            </p>

            <h1
              className={`${cormorant.className} mt-4 text-5xl font-semibold leading-[0.95] text-white sm:text-6xl md:text-8xl`}
            >
              Let's look after
              <br />
              your property.
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#a1aca3] md:text-base">
              Whether you need regular pool maintenance, garden care, seasonal
              preparation, or support with a second home, get in touch to
              arrange a conversation or site visit.
            </p>
          </div>

          {/* =================================================
              CONTACT GRID
          ================================================== */}

          <div className="mt-20 grid gap-6 lg:grid-cols-12">

            {/* =================================================
                LEFT: WHATSAPP / DIRECT CONTACT
            ================================================== */}

            <div className="lg:col-span-5">
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#344438] bg-[#101711]/88 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-10">

                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#294b34]/20 blur-[90px]" />

                <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-[#213a29]/10 blur-[90px]" />

                {/* Header */}
                <div className="relative z-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9aa89c]">
                    Direct contact
                  </p>

                  <h2
                    className={`${cormorant.className} mt-3 text-4xl font-semibold leading-tight text-white md:text-5xl`}
                  >
                    Prefer to talk
                    <br />
                    directly?
                  </h2>

                  <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#8d998f]">
                    For a quick question, availability check, or to arrange a
                    visit, WhatsApp is often the easiest way to reach me.
                  </p>
                </div>

                {/* WhatsApp Card */}
                <div className="relative z-10 mt-10 rounded-2xl border border-[#35483a] bg-[#162019]/90 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.14)]">

                  <div className="flex items-center gap-4">

                    {/* WhatsApp icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#405844] bg-[#1c2b20]">
                      <svg
                        className="h-5 w-5 fill-[#c3d0c5]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12.04 2C6.5 2 2 6.5 2 12.04c0 1.77.46 3.49 1.33 5.01L2 22l5.1-1.3a10 10 0 0 0 4.94 1.3h.01c5.54 0 10.04-4.5 10.04-10.04C22.09 6.5 17.58 2 12.04 2Zm0 18.29h-.01c-1.53 0-3.03-.41-4.34-1.18l-.31-.18-3.03.77.81-2.95-.2-.32a8.3 8.3 0 0 1-1.28-4.39c0-4.58 3.73-8.31 8.32-8.31 2.22 0 4.3.86 5.87 2.43a8.25 8.25 0 0 1 2.44 5.88c0 4.58-3.73 8.31-8.27 8.31Zm4.55-6.23c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.13-.56.13-.16.25-.64.8-.78.96-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.52.12-.12.25-.29.38-.43.13-.14.17-.24.25-.41.08-.16.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.43.06-.65.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29Z" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#718073]">
                        WhatsApp
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        +44 (0)7591 284463
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/447591284463"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center rounded-full bg-[#dfe6df] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#101610] transition-all hover:bg-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
                  >
                    Message on WhatsApp
                  </a>
                </div>

                {/* Other contact information */}
                <div className="relative z-10 mt-auto pt-10">
                  <div className="border-t border-[#29382d] pt-7">

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#718073]">
                          Email
                        </p>

                        <a
                          href="mailto:webbhuw@gmail.com"
                          className="mt-2 block break-all text-sm font-medium text-white transition-colors hover:text-[#b8c8ba]"
                        >
                          webbhuw@gmail.com
                        </a>
                      </div>

                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#718073]">
                          Coverage
                        </p>

                        <p className="mt-2 text-sm font-medium text-white">
                          Tarn-et-Garonne
                          <br />
                          & Gers
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* =================================================
                RIGHT: ENQUIRY FORM
            ================================================== */}

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[#344438] bg-[#101711]/90 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-10">

                {/* Form header */}
                <div className="border-b border-[#29382d] pb-8">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9aa89c]">
                    Enquiry
                  </p>

                  <h2
                    className={`${cormorant.className} mt-3 text-4xl font-semibold leading-tight text-white md:text-5xl`}
                  >
                    Tell me about
                    <br />
                    your property.
                  </h2>

                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#879388]">
                    Fill in the details below and I'll get back to you to
                    discuss what you need.
                  </p>

                </div>

                {/* Form */}
                <form
                  action="mailto:webbhuw@gmail.com"
                  method="POST"
                  encType="text/plain"
                  className="mt-8 space-y-7"
                >

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#849186]"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="Name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-2 w-full border-b border-[#2a382d] bg-transparent px-0 py-3 text-sm font-medium text-white outline-none placeholder:text-[#4f5c51] transition-colors focus:border-[#9baa9c]"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid gap-7 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="email"
                        className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#849186]"
                      >
                        Email address
                      </label>

                      <input
                        id="email"
                        name="Email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="mt-2 w-full border-b border-[#2a382d] bg-transparent px-0 py-3 text-sm font-medium text-white outline-none placeholder:text-[#4f5c51] transition-colors focus:border-[#9baa9c]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#849186]"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="Phone"
                        type="tel"
                        placeholder="+33..."
                        className="mt-2 w-full border-b border-[#2a382d] bg-transparent px-0 py-3 text-sm font-medium text-white outline-none placeholder:text-[#4f5c51] transition-colors focus:border-[#9baa9c]"
                      />
                    </div>

                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#849186]"
                    >
                      What can I help with?
                    </label>

                    <select
                      id="service"
                      name="Service"
                      defaultValue=""
                      className="mt-2 w-full border-b border-[#2a382d] bg-transparent px-0 py-3 text-sm font-medium text-white outline-none transition-colors focus:border-[#9baa9c]"
                    >
                      <option
                        value=""
                        disabled
                        className="bg-[#111812]"
                      >
                        Select a service
                      </option>

                      <option
                        value="Pool Maintenance"
                        className="bg-[#111812]"
                      >
                        Pool Maintenance
                      </option>

                      <option
                        value="Garden Care"
                        className="bg-[#111812]"
                      >
                        Garden Care
                      </option>

                      <option
                        value="Pool & Garden"
                        className="bg-[#111812]"
                      >
                        Pool & Garden
                      </option>

                      <option
                        value="Seasonal Work"
                        className="bg-[#111812]"
                      >
                        Seasonal Work
                      </option>

                      <option
                        value="Other"
                        className="bg-[#111812]"
                      >
                        Something else
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#849186]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="Message"
                      rows={5}
                      placeholder="Tell me about the property, its location and what you need..."
                      className="mt-2 w-full resize-none border-b border-[#2a382d] bg-transparent px-0 py-3 text-sm font-medium leading-relaxed text-white outline-none placeholder:text-[#4f5c51] transition-colors focus:border-[#9baa9c]"
                    />
                  </div>

                  {/* Submit */}
                  <div className="border-t border-[#29382d] pt-7">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-full bg-[#e4e9e4] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#101610] transition-all hover:bg-white hover:shadow-[0_10px_35px_rgba(255,255,255,0.08)] sm:w-auto"
                    >
                      Send enquiry
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>

          {/* =================================================
              BOTTOM INFORMATION
          ================================================== */}

          <div className="mt-6 rounded-3xl border border-[#29382d] bg-[#0c120e]/80 px-7 py-6 shadow-[0_15px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl md:px-10">
            <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#718073]">
                Pool & Garden Maintenance · South West France
              </p>

              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#526053]">
                Private Pools · Estates · Holiday Homes
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="relative z-10 flex flex-col justify-between gap-3 border-t border-[#151c16] bg-[#050705]/95 px-6 py-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#526053] sm:flex-row md:px-14">
        <span>Premier Pools & Gardens</span>
        <span>South West France</span>
      </footer>

    </main>
  );
}