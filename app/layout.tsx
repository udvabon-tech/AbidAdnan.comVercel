import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_Bengali } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
})
const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-bengali",
})

export const metadata: Metadata = {
  title: "Abid Adnan — AI Visionary from Bangladesh",
  description:
    "Founder of GPTBangla and AIReady, building Bangladesh's AI future through education, tools, and thought leadership.",
  generator: "v0.dev",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abid Adnan",
  jobTitle: "AI Visionary from Bangladesh",
  url: "https://abid-adnan.com",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoBengali.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
