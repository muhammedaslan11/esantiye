"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-reveal",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 88%",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      className="border-t border-[#f3d98b] bg-[#fffaf0] pb-10 pt-10 sm:pb-12 sm:pt-12"
      ref={containerRef}
    >
      <div className="container mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="footer-reveal flex min-h-20 flex-col items-center justify-between gap-6 text-xs font-semibold text-saha-gray sm:min-h-24 sm:text-sm md:flex-row">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <Image
              src="/logo/logo.png"
              alt="E-Şantiye"
              width={100}
              height={40}
              className="h-8 w-auto object-contain sm:h-12"
            />
            <span className="opacity-70">© 2026 Tüm hakları saklıdır.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <Link
              href="/kvkk"
              className="hover:text-[#e0ae1a] transition-colors"
            >
              KVKK
            </Link>
            <Link
              href="/kullanim-kosullari"
              className="hover:text-[#e0ae1a] transition-colors"
            >
              Kullanım Koşulları
            </Link>
            <Link
              href="/iletisim"
              className="hover:text-[#e0ae1a] transition-colors"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
