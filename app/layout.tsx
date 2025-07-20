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
  title: "Abid Adnan - Personal Site",
  description: "Islam First Future Readiness",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoBengali.variable}`}>
      <body>
        {children}
        <footer
          className="text-center py-6 text-sm ui-text"
          style={{ color: "var(--color-muted)" }}
        >
          01234564509
        </footer>
      </body>
    </html>
  )
}
