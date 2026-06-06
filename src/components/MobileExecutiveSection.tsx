"use client"

import { useEffect, useRef } from "react"
import { Boxes, Zap } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const features = [
  {
    title: "3D İlerleme Çubuğu",
    description: "Projenin fiziksel ilerlemesini 3D model üzerinde görün.",
  },
  {
    title: "Gömülü Excel Teknolojisi",
    description: "Alışık olduğunuz Excel esnekliği, veritabanı gücüyle birleşti.",
  },
  {
    title: "Log Kayıtları",
    description: "Kim, ne zaman, hangi veriyi girdi? Geriye dönük %100 izlenebilirlik.",
  },
]

export default function MobileExecutiveSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mobile-exec-reveal",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-[88rem] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="mobile-exec-reveal rounded-2xl border border-slate-100 bg-[#f9f8f6] p-7 sm:p-10">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-[#fff1c9] text-saha-accent-strong">
              <Boxes className="size-4" />
            </div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Teknik Üstünlük
            </div>
          </div>

          <div className="space-y-7">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#fff1c9] text-saha-accent-strong">
                  <Zap className="size-3.5" />
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-[-0.01em] text-black">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mobile-exec-reveal">
          <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.03em] text-black sm:text-5xl lg:text-6xl">
            Saha Şefi için Mobil,
            <br />
            <span className="text-saha-accent-strong">CEO için Dashboard.</span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-500">
            Veri sahadan girilir, karar ofisten verilir. Sahatakip bu iki dünyayı
            saniyeler içinde birleştirir.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="size-11 rounded-full border-2 border-white bg-[linear-gradient(135deg,#a8a29e,#57534e)]" />
              <div className="size-11 rounded-full border-2 border-white bg-[linear-gradient(135deg,#fcd34d,#d97706)]" />
              <div className="size-11 rounded-full border-2 border-white bg-[linear-gradient(135deg,#6ee7b7,#059669)]" />
            </div>

            <div>
              <div className="text-base font-bold tracking-[-0.01em] text-black">
                60+ Firma
              </div>
              <div className="text-sm text-slate-400">
                Sahatakip ile kontrolü ele aldı.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
