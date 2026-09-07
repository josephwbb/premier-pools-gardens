"use client";

import { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Bullet() {
  return (
    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9aa89c]" />
  );
}

export default function ServicesPage() {
  const [active, setActive] = useState<"garden" | "pool">("garden");

  return (
    <main
      className={`${sans.className} relative min-h-screen overflow-hidden bg-[#0d120a] text-[#e3e7e3] font-semibold`}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <img
          src="/services-background.jpg"
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
          className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-white/20 hover:text-white backdrop-blur-md"
        >
          Back to Home
        </a>
      </header>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <section className="relative z-10 px-6 pb-24 pt-16 md:px-14 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-6xl">
          {/* Intro Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b4c4b6]">
              Services & Care
            </p>

            <h1
              className="mt-4 text-5xl font-bold tracking-tight leading-[1.05] text-white sm:text-6xl md:text-7xl"
            >
              Looking after
              <br />
              every detail.
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-sm font-bold leading-relaxed text-[#c4ccd0] md:text-base">
              From well-kept grounds to clear, inviting pools, every service
              is built around your property and how you actually use it.
            </p>
          </div>

          {/* Centered Segmented Selector */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center rounded-2xl border border-white/20 bg-black/40 p-2 shadow-[0_15px_35px_rgba(0,0,0,0.4)] backdrop-blur-xl">
              <button
                onClick={() => setActive("garden")}
                className={`relative rounded-xl px-10 py-4 text-xs font-bold uppercase tracking-[0.22em] transition-all duration-300 ${
                  active === "garden"
                    ? "bg-white text-[#0d120a] shadow-lg scale-[1.02]"
                    : "text-[#a0b0a2] hover:text-white"
                }`}
              >
                Garden Care
              </button>

              <button
                onClick={() => setActive("pool")}
                className={`relative rounded-xl px-10 py-4 text-xs font-bold uppercase tracking-[0.22em] transition-all duration-300 ${
                  active === "pool"
                    ? "bg-white text-[#0d120a] shadow-lg scale-[1.02]"
                    : "text-[#a0b0a2] hover:text-white"
                }`}
              >
                Pool Care
              </button>
            </div>
          </div>

          {/* =====================================================
              EXPANDED SERVICE SECTIONS
          ====================================================== */}
          <div className="mt-16">
            {active === "garden" ? (
              <div className="space-y-12">
                {/* Intro Overview Card */}
                <div className="rounded-3xl border border-white/15 bg-black/40 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl md:p-12">
                  <div className="max-w-3xl">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b4c4b6]">
                      Full Garden Care
                    </p>
                    <h2
                      className="mt-3 text-3xl font-bold tracking-tight leading-tight text-white md:text-4xl"
                    >
                      Garden Maintenance
                    </h2>
                    <p className="mt-4 text-sm font-bold leading-relaxed text-[#c4ccd0] md:text-base">
                      A beautiful garden doesn&apos;t happen by accident — it
                      takes steady, season-by-season care. We look after
                      everything your grounds need, so they stay healthy,
                      tidy, and ready to enjoy all year round.
                    </p>
                  </div>
                </div>

                {/* Garden Section 1: Photo Left, Text Right */}
                <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-12 md:gap-12">
                  <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/40 p-3 md:col-span-6 shadow-xl backdrop-blur-xl">
                    <div className="relative h-72 w-full overflow-hidden rounded-2xl md:h-[380px]">
                      <img
                        src="/garden-lawn.jpg"
                        alt="Manicured lawn care and precision edging"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                        Lawn Care
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center md:col-span-6 md:pl-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b4c4b6]">
                      Lawn Care
                    </p>
                    <h3
                      className="mt-2 text-2xl font-bold tracking-tight leading-tight text-white md:text-3xl"
                    >
                      Healthy, Green Lawns
                    </h3>
                    <p className="mt-4 text-sm font-bold leading-relaxed text-[#c4ccd0]">
                      Big lawns need proper care to stay lush and green
                      through every season. We look after the whole process,
                      so your grass stays healthy no matter the weather.
                    </p>
                    <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Seasonal feeding and aeration to keep the grass
                          thick, healthy, and green.
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Regular mowing with neat stripes and sharp, tidy
                          edges along paths and borders.
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Weed control and treatments to stop moss building
                          up in shady spots.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Garden Section 2: Text Left, Photo Right */}
                <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-12 md:gap-12">
                  <div className="order-2 flex flex-col justify-center md:order-1 md:col-span-6 md:pr-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b4c4b6]">
                      Borders & Planting
                    </p>
                    <h3
                      className="mt-2 text-2xl font-bold tracking-tight leading-tight text-white md:text-3xl"
                    >
                      Colourful, Healthy Beds
                    </h3>
                    <p className="mt-4 text-sm font-bold leading-relaxed text-[#c4ccd0]">
                      Colourful borders bring a garden to life. We look after
                      your soil and plant beds so you get colour and
                      interest all year, with plants that really thrive.
                    </p>
                    <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Feeding the soil, laying fresh mulch, and regular
                          hand-weeding.
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Dividing overgrown plants, deadheading spent
                          flowers, and planting bulbs for colour through the
                          seasons.
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Keeping an eye on watering systems and using
                          gentle, eco-friendly pest control.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="order-1 relative overflow-hidden rounded-3xl border border-white/15 bg-black/40 p-3 md:order-2 md:col-span-6 shadow-xl backdrop-blur-xl">
                    <div className="relative h-72 w-full overflow-hidden rounded-2xl md:h-[380px]">
                      <img
                        src="/garden-edges.jpg"
                        alt="Detailed border planting and healthy soil maintenance"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                        Planting & Beds
                      </span>
                    </div>
                  </div>
                </div>

                {/* Garden Section 3: Photo Left, Text Right */}
                <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-12 md:gap-12">
                  <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/40 p-3 md:col-span-6 shadow-xl backdrop-blur-xl">
                    <div className="relative h-72 w-full overflow-hidden rounded-2xl md:h-[380px]">
                      <img
                        src="/garden-hedges1.jpg"
                        alt="Razor sharp hedge cutting and estate hardscape maintenance"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                        Hedges & Trees
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center md:col-span-6 md:pl-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b4c4b6]">
                      Hedges & Trees
                    </p>
                    <h3
                      className="mt-2 text-2xl font-bold tracking-tight leading-tight text-white md:text-3xl"
                    >
                      Sharp Hedges & Tidy Grounds
                    </h3>
                    <p className="mt-4 text-sm font-bold leading-relaxed text-[#c4ccd0]">
                      Neatly trimmed hedges make a garden feel cared for. We
                      keep your hedges, shaped bushes, and boundary screens
                      looking sharp and healthy.
                    </p>
                    <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Regular trimming for all common hedge types,
                          including box, yew, laurel, and leylandii.
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Light pruning, removing dead branches, and general
                          care for smaller trees.
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Clearing fallen leaves, jet washing patios, and
                          taking away all the green waste.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              /* =====================================================
                  POOL CARE SECTION
              ====================================================== */
              <div className="space-y-12">
                {/* Intro Overview Card */}
                <div className="rounded-3xl border border-white/15 bg-black/40 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl md:p-12">
                  <div className="max-w-3xl">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b4c4b6]">
                      Clear Water, Sorted
                    </p>
                    <h2
                      className="mt-3 text-3xl font-bold tracking-tight leading-tight text-white md:text-4xl"
                    >
                      Pool Maintenance
                    </h2>
                    <p className="mt-4 text-sm font-bold leading-relaxed text-[#c4ccd0] md:text-base">
                      Keeping a pool inviting takes regular attention — the
                      right chemical balance and equipment that&apos;s
                      running properly. We handle all of it, so your pool
                      stays safe, clear, and ready whenever you want to
                      swim.
                    </p>
                  </div>
                </div>

                {/* Pool Section 1: Photo Left, Text Right */}
                <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-12 md:gap-12">
                  <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/40 p-3 md:col-span-6 shadow-xl backdrop-blur-xl">
                    <div className="relative h-72 w-full overflow-hidden rounded-2xl md:h-[380px]">
                      <img
                        src="/pool-water.jpg"
                        alt="Crystal clear pool water chemical balancing"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                        Water Care
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center md:col-span-6 md:pl-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b4c4b6]">
                      Water Testing & Balance
                    </p>
                    <h3
                      className="mt-2 text-2xl font-bold tracking-tight leading-tight text-white md:text-3xl"
                    >
                      Clean, Balanced Water
                    </h3>
                    <p className="mt-4 text-sm font-bold leading-relaxed text-[#c4ccd0]">
                      Getting the water balance right makes swimming more
                      comfortable and protects your equipment. We test your
                      water every week and adjust it so it stays soft,
                      clear, and kind to your skin.
                    </p>
                    <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Careful adjustment of pH, chlorine (or salt)
                          levels, and mineral balance.
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Treatments to stop algae forming and keep the
                          water clear, especially in hot summer months.
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Cleaning and checking your salt chlorinator so it
                          keeps working properly.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Pool Section 2: Text Left, Photo Right */}
                <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-12 md:gap-12">
                  <div className="order-2 flex flex-col justify-center md:order-1 md:col-span-6 md:pr-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b4c4b6]">
                      Pumps & Filters
                    </p>
                    <h3
                      className="mt-2 text-2xl font-bold tracking-tight leading-tight text-white md:text-3xl"
                    >
                      Keeping Your Equipment Running
                    </h3>
                    <p className="mt-4 text-sm font-bold leading-relaxed text-[#c4ccd0]">
                      A clean pool depends on equipment that&apos;s working
                      well. We check your pump, clean your filters, and
                      keep an eye on your heating system, so small issues
                      get sorted before they turn into bigger problems.
                    </p>
                    <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Cleaning and topping up your filter, whether it&apos;s
                          sand, glass, or a cartridge type.
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Clearing out the pump basket, checking seals, and
                          making sure pressure is running properly.
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Checking your heating is working efficiently and
                          that any automatic dosing systems are set
                          correctly.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="order-1 relative overflow-hidden rounded-3xl border border-white/15 bg-black/40 p-3 md:order-2 md:col-span-6 shadow-xl backdrop-blur-xl">
                    <div className="relative h-72 w-full overflow-hidden rounded-2xl md:h-[380px]">
                      <img
                        src="/pool-equipment.jpg"
                        alt="Pool pump, filter plant room, and mechanical maintenance"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                        Pumps & Filters
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pool Section 3: Photo Left, Text Right */}
                <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-12 md:gap-12">
                  <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/40 p-3 md:col-span-6 shadow-xl backdrop-blur-xl">
                    <div className="relative h-72 w-full overflow-hidden rounded-2xl md:h-[380px]">
                      <img
                        src="/pool-cleaning.jpg"
                        alt="Pool tile scrubbing, leaf skimming, and cover maintenance"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                        Cleaning & Seasonal Care
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center md:col-span-6 md:pl-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b4c4b6]">
                      Cleaning & Seasonal Care
                    </p>
                    <h3
                      className="mt-2 text-2xl font-bold tracking-tight leading-tight text-white md:text-3xl"
                    >
                      Deep Cleans & Seasonal Cover
                    </h3>
                    <p className="mt-4 text-sm font-bold leading-relaxed text-[#c4ccd0]">
                      From everyday cleaning to closing the pool down for
                      winter, we protect it against build-up, debris, and
                      cold weather.
                    </p>
                    <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Vacuuming the pool floor, cleaning the waterline
                          tiles, and clearing out skimmer baskets.
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Opening up in spring: removing the cover, giving
                          the water a strong initial clean, and getting it
                          clear again quickly.
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-xs font-bold text-[#d0d8d2]">
                        <Bullet />
                        <span>
                          Closing down for winter: draining pipes,
                          protecting against frost, and fitting a winter
                          cover.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Info Banner */}
          <div className="mt-16 rounded-3xl border border-white/15 bg-black/40 px-7 py-6 shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl md:px-10">
            <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9cb09e]">
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