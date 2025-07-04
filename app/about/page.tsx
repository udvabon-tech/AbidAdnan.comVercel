"use client"

import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-bg)" }}>
      <header className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-12 md:space-x-16">
            <Link
              href="/"
              className="ui-text text-sm md:text-base tracking-wider hover:opacity-80 transition-colors"
              style={{ color: "var(--color-muted)", fontSize: "16px" }}
            >
              Home
            </Link>
            <Link
              href="#writing"
              className="ui-text text-sm md:text-base tracking-wider hover:opacity-80 transition-colors"
              style={{ color: "var(--color-muted)", fontSize: "16px" }}
            >
              WRITING
            </Link>
            <Link
              href="/about"
              className="ui-text text-sm md:text-base tracking-wider pb-1 transition-colors"
              style={{
                color: "var(--color-primary)",
                borderBottom: "2px solid var(--color-primary)",
                fontSize: "16px",
              }}
            >
              ABOUT
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 pb-16">
        <div
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center rounded-lg overflow-hidden"
          style={{
            backgroundColor: "var(--color-surface)",
            boxShadow: `0 4px 6px -1px var(--color-shadow), 0 2px 4px -1px var(--color-shadow)`,
          }}
        >
          <div className="order-2 md:order-1 p-8 md:p-12">
            <h1
              className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight"
              style={{ color: "var(--color-text)", fontSize: "clamp(36px, 4vw, 48px)" }}
            >
              About Abid
            </h1>
            <p className="leading-relaxed" style={{ color: "var(--color-muted)", fontSize: "18px" }}>
              Abid Adnan is a technologist based in Bangladesh. He focuses on AI-driven
              solutions to build a future-ready society. This site shares his projects,
              thoughts and insights.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/images/Abidadnan.com-about-us-sideview-aiready-aibangladesh-futureready.webp"
              alt="Abid Adnan side portrait"
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
