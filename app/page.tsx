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
              href="#about"
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
          {/* Project Card */}
          <div
            className="rounded-lg p-8 md:p-12"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: `0 4px 6px -1px var(--color-shadow), 0 2px 4px -1px var(--color-shadow)`,
            }}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Project Content */}
              <div className="text-center md:text-left">
                <h2
                  className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight"
                  style={{
                    color: "var(--color-text)",
                    fontSize: "clamp(36px, 4vw, 48px)",
                  }}
                >
                  UBER MAGIC 2.0
                </h2>
                <p
                  className="leading-relaxed mb-6"
                  style={{
                    color: "var(--color-muted)",
                    fontSize: "18px",
                  }}
                >
                  Led redesign of the pickup experience to launch the Uber Rider App 2.0. Reduced average driver
                  wait-time (-20%) and pickup error distance (-34%).
                </p>

                {/* Gradient Text Link */}
                <a
                  href="#"
                  className="ui-text font-normal inline-block transition-opacity hover:opacity-80 cursor-pointer"
                  style={{
                    background: "linear-gradient(90deg, #4F46E5 0%, #7C3AED 25%, #EC4899 75%, #EF4444 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontSize: "16px",
                    textDecoration: "underline",
                    textDecorationColor: "#EC4899",
                    textUnderlineOffset: "4px",
                    textDecorationThickness: "2px",
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    // Add your click handler here
                    console.log("Read More clicked!")
                  }}
                >
                  Read More
                </a>
              </div>

              {/* Project Image */}
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-lg overflow-hidden">
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
          </div>
        </div>
      </main>
    </div>
  )
}
