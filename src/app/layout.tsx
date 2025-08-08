import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ClientToaster from '../componentes/Toaster'


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://mapterra.com"),           // dominio raíz
  title: {
    default: "MAPTERRA | Drones y datos geoespaciales RTK & LiDAR",
    template: "%s | MAPTERRA",
  },
  description:
    "Soluciones integrales con drones de última generación: RTK, LiDAR, nube de puntos 3D y ortofotos de precisión centimétrica en Latinoamérica.",
  keywords: [
    "drones RTK",
    "LiDAR",
    "topografía",
    "orto­fotomapa",
    "nube de puntos",
    "cartografía catastral",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_SV",
    url: "/",
    title: "MAPTERRA | Drones y datos geoespaciales",
    description:
      "Datos geoespaciales de precisión centimétrica que transforman proyectos de ingeniería, urbanismo y medio ambiente.",
    siteName: "MAPTERRA",
    images: [
      {
        url: "/og-default.webp",
        width: 1200,
        height: 630,
        alt: "Vista aérea generada por dron con malla LiDAR superpuesta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mapterra",
    creator: "@mapterra",
  },
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MAPTERRA",
    url: "https://mapterra.com",
    logo: "https://mapterra.com/logo.webp",
    sameAs: [
      "https://facebook.com/mapterra",
      "https://instagram.com/mapterra",
      "https://www.linkedin.com/company/mapterra",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Escalón",
      addressLocality: "San Salvador",
      addressCountry: "SV",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+503 7346-7800",
      email: "contacto@mapterra.com",
    },
  }

  return (
    <html lang="es">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-clip`}
      >
        <ClientToaster />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLD) }}
        />
        {children}
      </body>
    </html>
  )
}
