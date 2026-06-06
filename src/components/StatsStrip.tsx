"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const stats = [
  { value: "%8", label: "ORTALAMA KAYIP" },
  { value: "15 Gün", label: "KURULUM SÜRESİ" },
  { value: "500+", label: "AKTİF ŞANTİYE" },
  { value: "%90", label: "VERİ DOĞRULUĞU" },
]

export default function StatsStrip() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stats-header > *",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".stats-item",
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 84%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#111111] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[88rem]">
        <div className="stats-header mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Türkiye&apos;de koordinasyon eksikliği yılda{" "}
            <span className="text-saha-accent-strong">4.7 Milyar TL&apos;ye</span> mal oluyor.
          </h2>
        </div>

        <div className="stats-grid mt-20 grid gap-10 text-center sm:grid-cols-2 xl:mt-24 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stats-item">
              <div className="text-7xl font-extrabold tracking-[-0.04em] text-saha-accent-strong sm:text-8xl">
                {stat.value}
              </div>
              <div className="mt-4 text-xs font-bold tracking-[0.25em] text-white/55">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
