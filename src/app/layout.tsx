import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const siteUrl = "https://esantiye.com"
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "E-Şantiye",
      url: siteUrl,
      logo: `${siteUrl}/logo/logo.png`,
      email: "hello@esantiye.com",
      telephone: "+90 535 763 19 07",
      address: {
        "@type": "PostalAddress",
        addressLocality: "İstanbul",
        addressCountry: "TR",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      name: "E-Şantiye",
      url: siteUrl,
      inLanguage: "tr-TR",
      publisher: {
        "@type": "Organization",
        name: "E-Şantiye",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "E-Şantiye",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      url: siteUrl,
      description:
        "Şantiye fire takibi, mobil saha girişi ve CEO dashboard'u tek platformda birleştiren inşaat yönetim yazılımı.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "TRY",
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
    default: "E-Şantiye | İnşaat Şantiye Yönetim Platformu",
    template: "%s | E-Şantiye",
  },
  description:
    "E-Şantiye ile şantiyenizde beton ve demir fire kayıplarını anlık takip edin. Mobil saha girişi, CEO dashboard ve 5 dakikada dijital raporlama. Türkiye'nin inşaat yönetim platformu.",
  keywords: [
    "şantiye yönetim yazılımı",
    "inşaat takip programı",
    "beton fire takibi",
    "demir fire analizi",
    "santiye yönetim sistemi",
    "mobil şantiye uygulaması",
    "inşaat proje yönetimi",
    "E-Şantiye",
    "dijital şantiye",
    "KVKK uyumlu inşaat yazılımı",
    "şantiye raporlama",
    "inşaat yazılımı Türkiye",
  ],
  icons: {
    icon: "/logo/favicon.ico",
    shortcut: "/logo/favicon.ico",
  },
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
    },
  },
  openGraph: {
    title: "E-Şantiye | Şantiyenizin Kontrolü Artık Elinizde",
    description:
      "Gecikmiş raporlar, kayıp fişler ve takip edilemeyen fireler tarihe karışıyor. 10+ şantiyeyi tek ekranda yönetin, anlık fire analizi yapın.",
    url: siteUrl,
    siteName: "E-Şantiye",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/logo/logo.png",
        alt: "E-Şantiye - İnşaat Şantiye Yönetim Platformu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Şantiye | İnşaat Şantiye Yönetim Platformu",
    description:
      "Beton ve demir fire takibi, mobil saha girişi ve CEO dashboard'u tek platformda. Türkiye'nin inşaat teknolojisi.",
    images: ["/logo/logo.png"],
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
