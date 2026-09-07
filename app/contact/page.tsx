"use client";

import { Plus_Jakarta_Sans } from "next/font/google";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ContactPage() {
  return (
    <main
      className={`${sans.className} relative min-h-screen overflow-hidden bg-[#0d120a] text-[#e3e7e3] font-bold`}
    >
     
{/* =====================================================
    BACKGROUND
====================================================== */}
<div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
  <img
    src="/contact-background.jpg"
    alt=""
    className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-luminosity brightness-75"
  />
  <div className="absolute inset-0 bg-black/50" />
</div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="relative z-20 flex items-center justify-between border-b border-white/10 bg-[#0d120a]/30 px-6 py-7 md:px-14">
        <a
          href="/"
          className="text-xs font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70"
        >
          Premier Pools & Gardens
        </a>

        <a
          href="/"
          className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all hover:bg-white/20 hover:text-white"
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
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b4c4b6]">
              Get in touch
            </p>

            <h1
              className="mt-4 text-5xl font-bold tracking-tight leading-[1.05] text-white sm:text-6xl md:text-7xl"
            >
              Let's look after
              <br />
              your property.
            </h1>

            <p className="mt-8 max-w-xl text-sm font-bold leading-relaxed text-[#c4ccd0] md:text-base">
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
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-black/40 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl md:p-10">

                {/* Header */}
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b4c4b6]">
                    Direct contact
                  </p>

                  <h2
                    className="mt-3 text-3xl font-bold tracking-tight leading-tight text-white md:text-4xl"
                  >
                    Prefer to talk
                    <br />
                    directly?
                  </h2>

                  <p className="mt-5 max-w-sm text-sm font-bold leading-relaxed text-[#c4ccd0]">
                    For a quick question, availability check, or to arrange a
                    visit, WhatsApp is often the easiest way to reach me.
                  </p>
                </div>

                {/* WhatsApp Card */}
                <div className="relative z-10 mt-10 rounded-2xl border border-white/15 bg-white/5 p-6 shadow-xl backdrop-blur-md">

                  <div className="flex items-center gap-4">

                    {/* WhatsApp icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                      <svg
                        className="h-5 w-5 fill-white"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12.04 2C6.5 2 2 6.5 2 12.04c0 1.77.46 3.49 1.33 5.01L2 22l5.1-1.3a10 10 0 0 0 4.94 1.3h.01c5.54 0 10.04-4.5 10.04-10.04C22.09 6.5 17.58 2 12.04 2Zm0 18.29h-.01c-1.53 0-3.03-.41-4.34-1.18l-.31-.18-3.03.77.81-2.95-.2-.32a8.3 8.3 0 0 1-1.28-4.39c0-4.58 3.73-8.31 8.32-8.31 2.22 0 4.3.86 5.87 2.43a8.25 8.25 0 0 1 2.44 5.88c0 4.58-3.73 8.31-8.27 8.31Zm4.55-6.23c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.13-.56.13-.16.25-.64.8-.78.96-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.52.12-.12.25-.29.38-.43.13-.14.17-.24.25-.41.08-.16.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.43.06-.65.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29Z" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#b4c4b6]">
                        WhatsApp
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        +44 (0)7591 284463
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/447591284463"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0d120a] transition-all hover:bg-[#e3e7e3] hover:shadow-lg"
                  >
                    Message on WhatsApp
                  </a>
                </div>

                {/* Other contact information */}
                <div className="relative z-10 mt-auto pt-10">
                  <div className="border-t border-white/15 pt-7">

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#b4c4b6]">
                          Email
                        </p>

                        <a
                          href="mailto:webbhuw@gmail.com"
                          className="mt-2 block break-all text-sm font-bold text-white transition-colors hover:text-[#b4c4b6]"
                        >
                          webbhuw@gmail.com
                        </a>
                      </div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#b4c4b6]">
                          Coverage
                        </p>

                        <p className="mt-2 text-sm font-bold text-white">
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
              <div className="rounded-3xl border border-white/15 bg-black/40 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl md:p-10">

                {/* Form header */}
                <div className="border-b border-white/15 pb-8">

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b4c4b6]">
                    Enquiry
                  </p>

                  <h2
                    className="mt-3 text-3xl font-bold tracking-tight leading-tight text-white md:text-4xl"
                  >
                    Tell me about
                    <br />
                    your property.
                  </h2>

                  <p className="mt-4 max-w-lg text-sm font-bold leading-relaxed text-[#c4ccd0]">
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
                      className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#b4c4b6]"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="Name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-sm font-bold text-white outline-none placeholder:text-[#6b7c6d] transition-colors focus:border-white focus:bg-white/10"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid gap-7 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="email"
                        className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#b4c4b6]"
                      >
                        Email address
                      </label>

                      <input
                        id="email"
                        name="Email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-sm font-bold text-white outline-none placeholder:text-[#6b7c6d] transition-colors focus:border-white focus:bg-white/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#b4c4b6]"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="Phone"
                        type="tel"
                        placeholder="+33..."
                        className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-sm font-bold text-white outline-none placeholder:text-[#6b7c6d] transition-colors focus:border-white focus:bg-white/10"
                      />
                    </div>

                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#b4c4b6]"
                    >
                      What can I help with?
                    </label>

                    <select
                      id="service"
                      name="Service"
                      defaultValue=""
                      className="mt-2 w-full rounded-xl border border-white/20 bg-[#121910] px-4 py-3.5 text-sm font-bold text-white outline-none transition-colors focus:border-white"
                    >
                      <option
                        value=""
                        disabled
                        className="bg-[#121910] text-[#6b7c6d]"
                      >
                        Select a service
                      </option>

                      <option
                        value="Pool Maintenance"
                        className="bg-[#121910]"
                      >
                        Pool Maintenance
                      </option>

                      <option
                        value="Garden Care"
                        className="bg-[#121910]"
                      >
                        Garden Care
                      </option>

                      <option
                        value="Pool & Garden"
                        className="bg-[#121910]"
                      >
                        Pool & Garden
                      </option>

                      <option
                        value="Seasonal Work"
                        className="bg-[#121910]"
                      >
                        Seasonal Work
                      </option>

                      <option
                        value="Other"
                        className="bg-[#121910]"
                      >
                        Something else
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#b4c4b6]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="Message"
                      rows={4}
                      placeholder="Tell me about the property, its location and what you need..."
                      className="mt-2 w-full resize-none rounded-xl border border-white/20 bg-white/5 p-4 text-sm font-bold leading-relaxed text-white outline-none placeholder:text-[#6b7c6d] transition-colors focus:border-white focus:bg-white/10"
                    />
                  </div>

                  {/* Submit */}
                  <div className="border-t border-white/15 pt-7">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0d120a] transition-all hover:bg-[#e3e7e3] hover:shadow-lg sm:w-auto"
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

          <div className="mt-6 rounded-3xl border border-white/15 bg-black/40 px-7 py-6 shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl md:px-10">
            <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b4c4b6]">
                Pool & Garden Maintenance · South West France
              </p>

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#869c88]">
                Private Pools · Estates · Holiday Homes
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="relative z-10 flex flex-col justify-between gap-3 border-t border-white/10 bg-black/80 px-6 py-6 text-[10px] font-bold uppercase tracking-[0.15em] text-[#869c88] sm:flex-row md:px-14 backdrop-blur-md">
        <span>Premier Pools & Gardens</span>
        <span>South West France</span>
      </footer>

    </main>
  );
}