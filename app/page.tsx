"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-bg)" }}>
      {/* Header */}
      <header className="pt-20 pb-8 relative overflow-hidden">
        {/* Branch Image - Coming from left side naturally */}
        <div className="absolute top-0 left-0 z-20">
          <img
            src="/images/singleBranchtopSmall.png"
            alt="Decorative branch"
            className="w-80 h-auto sm:w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem]"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
              marginTop: "-40px",
              marginLeft: "-20px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Content - Name and Image */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            {/* Left Side - Name and Tagline */}
            <div className="text-left flex flex-col justify-center pl-4 sm:pl-6 md:pl-8">
              <h1
                className="font-semibold tracking-tight mb-2 leading-tight"
                style={{
                  color: "var(--color-text)",
                  fontSize: "clamp(32px, 4.5vw, 44px)",
                }}
              >
                Abid Adnan
              </h1>
              <h2
                className="text-base md:text-lg font-normal"
                style={{
                  color: "var(--color-muted)",
                }}
              >
                Islam | Future | Insight
              </h2>
            </div>

            {/* Right Side - Portrait Image */}
            <div className="flex justify-center md:justify-end items-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
                <img
                  src="/images/abid-adnan-hero-portrait.webp"
                  alt="Abid Adnan - Professional Portrait"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "center top",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center space-x-12 md:space-x-16">
            <Link
              href="#project"
              className="ui-text text-sm md:text-base tracking-wider pb-1 transition-colors"
              style={{
                color: "var(--color-primary)",
                borderBottom: "2px solid var(--color-primary)",
                fontSize: "16px",
              }}
            >
              Home
            </Link>
            <Link
              href="#writing"
              className="ui-text text-sm md:text-base tracking-wider hover:opacity-80 transition-colors"
              style={{
                color: "var(--color-muted)",
                fontSize: "16px",
              }}
            >
              WRITING
            </Link>
            <Link
              href="/about"
              className="ui-text text-sm md:text-base tracking-wider hover:opacity-80 transition-colors"
              style={{
                color: "var(--color-muted)",
                fontSize: "16px",
              }}
            >
              ABOUT
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Journey Milestone Card */}
          <div
            className="rounded-lg p-8 md:p-12 flex flex-col items-center text-center"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: `0 4px 6px -1px var(--color-shadow), 0 2px 4px -1px var(--color-shadow)`,
            }}
          >
            <img
              src="/images/My_journey_logo/onnorokom-Edtech-logo-abid-adnan.jpeg"
              alt="OnnoRokom EdTech Logo"
              className="w-32 h-auto mb-6"
            />
            <p
              className="ui-text mb-2"
              style={{ color: "var(--color-muted)", fontSize: "16px" }}
            >
              2024 – Present
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight"
              style={{
                color: "var(--color-text)",
                fontSize: "clamp(36px, 4vw, 48px)",
              }}
            >
              Head of AI, OnnoRokom EdTech
            </h2>
            <p
              className="leading-relaxed"
              style={{ color: "var(--color-muted)", fontSize: "18px" }}
            >
              Leading and reshaping workflows around AI initiatives, building custom AI agents for internal use.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
