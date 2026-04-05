import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const siteUrl = "https://esantiye.com"
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "E-SANTIYE",
      url: siteUrl,
      email: "hello@esantiye.com",
      telephone: "+90 535 763 19 07",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressCountry: "TR",
      },
    },
    {
      "@type": "WebSite",
      name: "E-SANTIYE",
      url: siteUrl,
      inLanguage: "tr-TR",
      publisher: {
        "@type": "Organization",
        name: "E-SANTIYE",
      },
    },
  ],
}

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "E-SANTIYE | Santiyede Gorunmez Kayiplara Son",
    template: "%s | E-SANTIYE",
  },
  description:
    "E-Santiye, saha ekipleri ve merkez ofis icin gelistirilmis insaat yonetim platformudur. Is programi, gorev, raporlama ve saha koordinasyonunu tek noktada toplar.",
  keywords: [
    "insaat yonetim platformu",
    "santiye yonetimi",
    "saha takibi",
    "insaat yazilimi",
    "proje yonetimi",
    "is programi",
    "mobil santiye",
    "E-Santiye",
  ],
  icons: {
    icon: "/logo/favicon.ico",
    shortcut: "/logo/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "E-SANTIYE | Santiyede Gorunmez Kayiplara Son",
    description:
      "Saha-first insaat yonetim platformu ile ekiplerinizi hizlandirin, hatalari azaltin ve proje kontrolunu artirin.",
    url: siteUrl,
    siteName: "E-SANTIYE",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "E-SANTIYE",
    description:
      "Insaat projeleri icin saha odakli yonetim, raporlama ve koordinasyon platformu.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="tr"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-saha-bg text-saha-text font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
