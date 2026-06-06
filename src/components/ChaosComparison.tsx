"use client"

import { useEffect, useRef } from "react"
import { AlertCircle, CircleX, ShieldCheck, ShieldCheckIcon } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const painPoints = [
  "1 hafta gecikmiş WhatsApp mesajları",
  "Takip edilemeyen beton ve demir fireleri",
  "Şantiyede kaybolan kağıt fişler",
  "Proje bitince öğrenilen zarar",
]

const controlPoints = [
  "Anlık beton ve demir fire analizi",
  "Tek ekranda 10+ şantiye takibi",
  "5 dakikalık dijital raporlama",
  "%100 KVKK uyumlu dijital arşiv",
]

export default function ChaosComparison() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".chaos-header > *",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        },
      )

      gsap.fromTo(
        ".chaos-card",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".chaos-grid",
            start: "top 82%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#f5f5f5] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[88rem]">
        <div className="chaos-header mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-black sm:text-5xl lg:text-6xl">
            Patron kararlarını bir haftalık{" "}
            <span className="text-saha-accent-strong">WhatsApp mesajlarıyla</span> alıyor.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Gecikmiş raporlar, kayıp fişler ve takip edilemeyen fireler...
            <br />
            İnşaatın kaosu kâr marjınızı eritiyor.
          </p>
        </div>

        <div className="chaos-grid mt-14 grid gap-5 lg:grid-cols-2">
          <article className="chaos-card rounded-2xl bg-white p-8 shadow-sm sm:p-10">
            <div className="flex items-center gap-4">
              <div className="flex size-11 items-center justify-center rounded-full bg-[#fff1f2] text-[#ef4444]">
                <CircleX className="size-5" />
              </div>
              <p className="text-2xl font-bold tracking-[-0.02em] text-black">
                Eski Dünya (Kaos)
              </p>
            </div>

            <ul className="mt-8 space-y-5">
              {painPoints.map((item) => (
                <li key={item} className="flex items-center gap-4 text-base text-slate-600">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#fff1f2] text-[#ef4444]">
                    <AlertCircle className="size-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="chaos-card rounded-2xl bg-[#fdf6e3] p-8 shadow-sm sm:p-10">
            <div className="flex items-center gap-4">
              <div className="flex size-11 items-center justify-center rounded-full bg-[#fde68a] text-[#b45309]">
                <ShieldCheckIcon className="size-5" />
              </div>
              <p className="text-2xl font-bold tracking-[-0.02em] text-[#b45309]">
                SahaTakip (Kontrol)
              </p>
            </div>

            <ul className="mt-8 space-y-5">
              {controlPoints.map((item) => (
                <li key={item} className="flex items-center gap-4 text-base text-slate-700">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#fde68a] text-[#b45309]">
                    <ShieldCheck className="size-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
