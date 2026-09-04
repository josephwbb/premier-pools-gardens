"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sans =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, Helvetica, Arial, sans-serif';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const standardRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hero = heroRef.current;

      if (hero) {
        gsap.from(".hero-logo", {
          opacity: 0,
          scale: 0.96,
          duration: 1.2,
          delay: 0.15,
          ease: "power3.out",
        });

        gsap.from(".hero-copy", {
          opacity: 0,
          y: 18,
          duration: 0.8,
          delay: 0.5,
          ease: "power3.out",
        });

        gsap.from(".hero-bottom", {
          opacity: 0,
          y: 15,
          duration: 0.8,
          delay: 0.65,
          ease: "power3.out",
        });

        gsap.to(".hero-scroll-line", {
          scaleY: 0.5,
          opacity: 0.4,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      if (introRef.current) {
        gsap.from(".intro-eyebrow", {
          opacity: 0,
          y: 20,
          duration: 0.7,
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 78%",
          },
        });

        gsap.from(".intro-line", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 72%",
          },
        });

        gsap.from(".intro-heading", {
          opacity: 0,
          y: 70,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 68%",
          },
        });

        gsap.from(".intro-copy", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.15,
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 58%",
          },
        });

        gsap.to(".intro-image-inner", {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: ".intro-image",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (servicesRef.current) {
        gsap.from(".services-eyebrow", {
          opacity: 0,
          y: 20,
          duration: 0.7,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 78%",
          },
        });

        gsap.from(".services-heading", {
          opacity: 0,
          y: 60,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 70%",
          },
        });

        gsap.from(".service-card", {
          opacity: 0,
          y: 80,
          stagger: 0.16,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 58%",
          },
        });

        gsap.utils.toArray<HTMLElement>(".service-image").forEach((image) => {
          gsap.to(image, {
            yPercent: 8,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
              trigger: image.closest(".service-card"),
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        });

        gsap.from(".service-footer", {
          opacity: 0,
          y: 20,
          duration: 0.7,
          scrollTrigger: {
            trigger: ".service-footer",
            start: "top 85%",
          },
        });
      }

      if (standardRef.current) {
        gsap.from(".standard-number", {
          opacity: 0,
          y: 30,
          duration: 0.7,
          scrollTrigger: {
            trigger: standardRef.current,
            start: "top 78%",
          },
        });

        gsap.from(".standard-heading", {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: standardRef.current,
            start: "top 68%",
          },
        });

        gsap.to(".standard-image", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: standardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.from(".standard-detail", {
          opacity: 0,
          x: 35,
          stagger: 0.12,
          duration: 0.7,
          scrollTrigger: {
            trigger: standardRef.current,
            start: "top 55%",
          },
        });
      }

      if (pricingRef.current) {
        gsap.from(".pricing-heading", {
          opacity: 0,
          y: 60,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pricingRef.current,
            start: "top 72%",
          },
        });

        gsap.from(".pricing-card", {
          opacity: 0,
          y: 70,
          stagger: 0.15,
          duration: 0.9,
          scrollTrigger: {
            trigger: pricingRef.current,
            start: "top 60%",
          },
        });
      }

      if (contactRef.current) {
        gsap.from(".contact-eyebrow", {
          opacity: 0,
          y: 20,
          duration: 0.7,
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 78%",
          },
        });

        gsap.from(".contact-heading", {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 70%",
          },
        });

        gsap.from(".contact-actions", {
          opacity: 0,
          y: 35,
          duration: 0.8,
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 60%",
          },
        });
      }

      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      style={{ fontFamily: sans }}
      className="min-h-screen overflow-x-hidden bg-[#0d1612] text-[#16221b] selection:bg-[#203427] selection:text-white"
    >
      {menuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 flex min-h-screen w-[88%] max-w-md flex-col bg-[#f4f6f2] px-6 py-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#16221b]/10 pb-6">
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-[10px] font-extrabold uppercase tracking-[0.18em]"
              >
                Premier Pools & Gardens
              </a>

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
              <a
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#16221b]/10 py-5 text-4xl font-extrabold tracking-[-0.05em]"
              >
                Services
              </a>

              <a
                href="/#pricing"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#16221b]/10 py-5 text-4xl font-extrabold tracking-[-0.05em]"
              >
                Pricing
              </a>

              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#16221b]/10 py-5 text-4xl font-extrabold tracking-[-0.05em]"
              >
                Contact
              </a>
            </nav>

            <div className="mt-auto border-t border-[#16221b]/10 pt-6">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#6e7d74]">
                Pool & Garden Maintenance
              </p>

              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#8e9a93]">
                South West France
              </p>

              <div className="mt-5 flex gap-2">
                <a
                  href="mailto:webbhuw@gmail.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#16221b]/15 text-sm"
                >
                  ✉
                </a>

                <a
                  href="https://wa.me/447591284463"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#16221b]/15 text-[9px] font-extrabold"
                >
                  WA
                </a>

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#16221b]/15"
                >
                  ◎
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-7 md:px-12 md:py-8">
        <a
          href="/"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-white drop-shadow-sm transition-opacity hover:opacity-75"
        >
          Premier Pools & Gardens
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/20 p-1.5 backdrop-blur-md lg:flex">
          <a
            href="/services"
            className="rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 transition-all hover:bg-white/10 hover:text-white"
          >
            Services
          </a>

          <a
            href="/#pricing"
            className="rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 transition-all hover:bg-white/10 hover:text-white"
          >
            Pricing
          </a>

          <a
            href="/contact"
            className="rounded-full bg-white px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1b2b21] transition-all hover:bg-[#f0f4ef]"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          className="flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md lg:hidden"
        >
          Menu

          <span className="flex flex-col gap-[3px]">
            <span className="block h-px w-3 bg-white/80" />
            <span className="block h-px w-3 bg-white/80" />
          </span>
        </button>
      </header>

      {/* HERO */}

      <section
        ref={heroRef}
        className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden px-6 pb-24 pt-32 [contain:paint] md:px-12"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero-pool.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
          <img
            src="/logo.png"
            alt="Premier Pools & Gardens"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="hero-logo w-[280px] object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] md:w-[420px] lg:w-[500px]"
          />

          <div className="hero-copy mt-10">
            <p className="font-serif text-2xl font-semibold tracking-[0.03em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] md:text-3xl">
              Pool & Garden Maintenance
            </p>

            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/90 drop-shadow-[0_1px_5px_rgba(0,0,0,0.4)] md:text-xs">
              Tarn-et-Garonne · Gers · South West France
            </p>
          </div>
        </div>

        <div className="hero-bottom relative z-10 flex items-end justify-between pt-12">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/80 md:text-[10px]">
            Private Pools · Estates · Holiday Homes
          </p>

          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
            <span className="hidden sm:inline">Scroll to explore</span>

            <span className="hero-scroll-line h-8 w-px bg-white/70" />
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section
        ref={introRef}
        className="relative overflow-hidden bg-[#f3f5ef] px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="intro-line mb-7 h-px w-full bg-[#16221b]/15" />

          <div className="intro-eyebrow flex items-center justify-between">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#6e7d74]">
              Premier Pools & Gardens
            </p>

            <p className="hidden text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#8e9a93] sm:block">
              Tarn-et-Garonne · Gers
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <h2
              className="intro-heading max-w-6xl text-[13vw] font-extrabold leading-[0.84] tracking-[-0.07em] text-[#16221b] md:text-[8vw]"
              style={{ fontFamily: sans }}
            >
              Pool & garden
              <br />
              <span className="text-[#688273]">care.</span>
            </h2>

            <div className="intro-copy max-w-sm">
              <p className="text-sm font-bold leading-6 text-[#425247] md:text-base">
                Professional pool and garden care for private properties,
                holiday homes and estates.
              </p>

              <a
                href="/services"
                className="mt-7 inline-flex items-center gap-4 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#16221b] transition-all hover:gap-6"
              >
                Explore services
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="intro-image overflow-hidden rounded-[24px]">
              <img
                src="/aboutme1.jpg"
                alt="Premier Pools & Gardens"
                className="intro-image-inner h-[360px] w-full scale-[1.08] object-cover object-center md:h-[460px]"
              />
            </div>

            <div className="intro-image overflow-hidden rounded-[24px]">
              <img
                src="/aboutme2.jpg"
                alt="Premier Pools & Gardens"
                className="intro-image-inner h-[360px] w-full scale-[1.08] object-cover object-center md:h-[460px]"
              />
            </div>

            <div className="intro-image overflow-hidden rounded-[24px]">
              <img
                src="/aboutme3.jpg"
                alt="Premier Pools & Gardens"
                className="intro-image-inner h-[360px] w-full scale-[1.08] object-cover object-center md:h-[460px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section
        ref={servicesRef}
        className="relative overflow-hidden bg-[#e8ede7] px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="services-eyebrow flex items-center justify-between">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#627368]">
              What we do
            </p>

            <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#84938a]">
              01 — 02
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_0.45fr] md:items-end">
            <h2
              className="services-heading text-[12vw] font-extrabold leading-[0.84] tracking-[-0.07em] text-[#16221b] md:text-[7.5vw]"
              style={{ fontFamily: sans }}
            >
              Our services.
            </h2>

            <p className="max-w-xs text-sm font-bold leading-6 text-[#4e5e54]">
              Simple, consistent care.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {/* POOL VIDEO CARD */}

            <a
              href="/services"
              className="service-card group relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#1a2e22] text-white"
            >
              <div className="absolute inset-0 overflow-hidden">
                <video
                  className="service-image absolute -inset-[5%] h-[110%] w-[110%] object-cover"
                  src="/premierpoolsvideo.mp4"
                  poster="/poolservices.jpg.webp"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-hidden="true"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1a13] via-[#0e1a13]/20 to-transparent" />
              </div>

              <div className="relative z-10 flex min-h-[520px] flex-col justify-between p-7 md:p-9">
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[8px] font-extrabold uppercase tracking-[0.18em] backdrop-blur-sm">
                    01 / Pool
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1a2e22] transition-transform duration-500 group-hover:rotate-45">
                    ↗
                  </span>
                </div>

                <div>
                  <h3
                    className="text-6xl font-extrabold leading-[0.82] tracking-[-0.07em] md:text-7xl"
                    style={{ fontFamily: sans }}
                  >
                    Pool
                    <br />
                    maintenance.
                  </h3>

                  <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/80">
                      Clean · Balanced · Ready
                    </p>

                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/60">
                      View →
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* GARDEN IMAGE CARD */}

            <a
              href="/services"
              className="service-card group relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#687f69] text-white"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/gardenservices.jpg.webp"
                  alt=""
                  className="service-image absolute -inset-[5%] h-[110%] w-[110%] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1d2d22] via-[#1d2d22]/15 to-transparent" />
              </div>

              <div className="relative z-10 flex min-h-[520px] flex-col justify-between p-7 md:p-9">
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[8px] font-extrabold uppercase tracking-[0.18em] backdrop-blur-sm">
                    02 / Garden
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1d2d22] transition-transform duration-500 group-hover:rotate-45">
                    ↗
                  </span>
                </div>

                <div>
                  <h3
                    className="text-6xl font-extrabold leading-[0.82] tracking-[-0.07em] md:text-7xl"
                    style={{ fontFamily: sans }}
                  >
                    Garden
                    <br />
                    care.
                  </h3>

                  <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/80">
                      Neat · Healthy · Ready
                    </p>

                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/60">
                      View →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="service-footer mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#16221b]/15 pt-5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#65756c]">
            <span>Private properties</span>
            <span>Holiday homes</span>
            <span>Estates</span>
            <span>South West France</span>
          </div>
        </div>
      </section>

      {/* STANDARD */}

      <section
        ref={standardRef}
        className="overflow-hidden bg-[#eef2ec] px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.3fr_1.7fr]">
            <div className="standard-number">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#75847b]">
                The standard
              </p>

              <p className="mt-5 text-5xl font-extrabold tracking-[-0.07em] text-[#16221b]">
                20+
              </p>

              <p className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#78887e]">
                Years experience
              </p>
            </div>

            <div>
              <h2
                className="standard-heading max-w-6xl text-[11vw] font-extrabold leading-[0.84] tracking-[-0.07em] text-[#16221b] md:text-[7vw]"
                style={{ fontFamily: sans }}
              >
                A reliable standard.
                <br />
                <span className="text-[#688273]">Every visit.</span>
              </h2>

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                <div className="standard-detail border-t border-[#16221b]/15 pt-5">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#78857d]">
                    About Huw
                  </p>

                  <p className="mt-4 max-w-md text-sm font-bold leading-6 text-[#425247]">
                    With over 20 years of experience in garden and pool
                    maintenance, Huw provides dependable, hands-on care for
                    private properties, holiday homes and estates across South
                    West France.
                  </p>
                </div>

                <div className="standard-detail border-t border-[#16221b]/15 pt-5">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#78857d]">
                    Experience & care
                  </p>

                  <p className="mt-4 max-w-md text-sm font-bold leading-6 text-[#425247]">
                    Every property is treated with the same attention to
                    detail, with a focus on keeping gardens healthy, pools
                    maintained and outdoor spaces looking their best throughout
                    the year.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="overflow-hidden rounded-[28px]">
                  <img
                    src="/before1.jpg"
                    alt="Garden before maintenance"
                    className="standard-image h-[430px] w-full scale-[1.08] object-cover md:h-[560px]"
                  />
                </div>

                <div className="overflow-hidden rounded-[28px]">
                  <img
                    src="/after1.jpg"
                    alt="Garden after maintenance"
                    className="standard-image h-[430px] w-full scale-[1.08] object-cover md:h-[560px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}

      <section
        id="pricing"
        ref={pricingRef}
        className="bg-[#e1e8e1] px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="pricing-heading flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#627368]">
                Pricing
              </p>

              <h2
                className="mt-5 text-[12vw] font-extrabold leading-[0.84] tracking-[-0.07em] text-[#16221b] md:text-[7vw]"
                style={{ fontFamily: sans }}
              >
                Straightforward.
              </h2>
            </div>

            <p className="max-w-xs text-sm font-bold leading-6 text-[#4e5e54]">
              Every property is different. Quotes are tailored to the work
              required.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="pricing-card rounded-[26px] bg-white p-7 md:p-9">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#76857c]">
                    01
                  </p>

                  <h3
                    className="mt-4 text-4xl font-extrabold tracking-[-0.06em] text-[#16221b]"
                    style={{ fontFamily: sans }}
                  >
                    Garden
                  </h3>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e1e8e1]">
                  ↗
                </span>
              </div>

              <div className="mt-12 border-t border-[#16221b]/10 pt-5">
                <p className="text-sm font-bold leading-6 text-[#4e5e54]">
                  Regular garden maintenance, tailored to your property.
                </p>

                <a
                  href="/contact"
                  className="mt-7 inline-flex rounded-full bg-[#15241b] px-5 py-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-white transition-transform hover:scale-[1.02]"
                >
                  Get a quote
                </a>
              </div>
            </div>

            <div className="pricing-card rounded-[26px] bg-[#203427] p-7 text-white md:p-9">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/60">
                    02
                  </p>

                  <h3
                    className="mt-4 text-4xl font-extrabold tracking-[-0.06em]"
                    style={{ fontFamily: sans }}
                  >
                    Pool
                  </h3>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#203427]">
                  ↗
                </span>
              </div>

              <div className="mt-12 border-t border-white/15 pt-5">
                <p className="text-sm font-bold leading-6 text-white/80">
                  Professional pool maintenance, tailored to your pool.
                </p>

                <a
                  href="/contact"
                  className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#15241b] transition-transform hover:scale-[1.02]"
                >
                  Get a quote
                </a>
              </div>
            </div>
          </div>

          <div className="mt-7 border-t border-[#16221b]/15 pt-5">
            <a
              href="/contact"
              className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#4f5f56] transition-colors hover:text-[#16221b]"
            >
              Need something more specific? Talk to us →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section
        ref={contactRef}
        className="bg-[#25362b] px-6 py-24 text-white md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="contact-eyebrow text-[9px] font-extrabold uppercase tracking-[0.2em] text-white/60">
            Get in touch
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <h2
              className="contact-heading text-[14vw] font-extrabold leading-[0.82] tracking-[-0.08em] md:text-[8vw]"
              style={{ fontFamily: sans }}
            >
              Let’s look after
              <br />
              <span className="text-[#8ab097]">your property.</span>
            </h2>

            <div className="contact-actions">
              <p className="max-w-sm text-sm font-bold leading-6 text-white/80">
                Tell us what you need and we'll take it from there.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href="mailto:webbhuw@gmail.com"
                  className="group relative inline-flex items-center justify-between overflow-hidden rounded-full bg-white px-7 py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#25362b] shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-[#f1f4ef]"
                >
                  <span className="relative z-10">Email Huw</span>

                  <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#e1e8e1] transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                  href="https://wa.me/447591284463"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-between overflow-hidden rounded-full border border-white/25 bg-white/10 px-7 py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-white/40 hover:bg-white/15"
                >
                  <span className="relative z-10">WhatsApp Chat</span>

                  <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/80 transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 border-t border-white/15 pt-7 sm:grid-cols-3">
            <div>
              <p className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-white/50">
                Phone
              </p>

              <a
                href="tel:+447591284463"
                className="mt-3 block text-sm font-bold text-white"
              >
                +44 (0)7591 284463
              </a>
            </div>

            <div>
              <p className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-white/50">
                Email
              </p>

              <a
                href="mailto:webbhuw@gmail.com"
                className="mt-3 block text-sm font-bold text-white"
              >
                webbhuw@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-white/50">
                Coverage
              </p>

              <p className="mt-3 text-sm font-bold text-white">
                Tarn-et-Garonne & Gers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#17231b] px-6 py-7 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a
            href="/"
            className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/70"
          >
            Premier Pools & Gardens
          </a>

          <div className="flex flex-wrap gap-6 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/50">
            <a
              href="/services"
              className="transition-colors hover:text-white"
            >
              Services
            </a>

            <a
              href="/#pricing"
              className="transition-colors hover:text-white"
            >
              Pricing
            </a>

            <a
              href="/contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>

          <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/40">
            South West France
          </span>
        </div>
      </footer>
    </main>
  );
}