"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[95%] max-w-[88rem] rounded-xl px-5 sm:px-8 py-3 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border border-[#f3d98b] shadow-[0_8px_30px_rgba(244,197,66,0.18)]"
          : "bg-transparent",
      )}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex cursor-pointer items-center">
          <Image
            src="/logo/logo.png"
            alt="E-Şantiye"
            width={120}
            height={48}
            className="h-10 w-auto object-contain sm:h-14"
            priority
          />
        </Link>
        <div>
          <Link
            href="/iletisim"
            className="cursor-pointer rounded-xl bg-[#f4c542] px-5 py-2.5 text-sm font-bold text-black transition-all shadow-[0_10px_25px_rgba(244,197,66,0.28)] hover:bg-[#e0ae1a] sm:px-6"
          >
            Demo Talep Et
          </Link>
        </div>
      </div>
    </nav>
  )
}
