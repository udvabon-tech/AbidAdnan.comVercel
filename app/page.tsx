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
            className="relative rounded-lg p-8 md:p-12 flex flex-col items-center text-center"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: `0 4px 6px -1px var(--color-shadow), 0 2px 4px -1px var(--color-shadow)`,
            }}
          >
            <p
              className="ui-text self-start mb-4"
              style={{ color: "var(--color-muted)", fontSize: "16px" }}
            >
              2024 – Present
            </p>
            <img
              src="/images/My_journey_logo/OEL-abid-adnan-head-of-ai.png"
              alt="OnnoRokom EdTech Logo"
              className="w-32 h-auto mb-6"
            />
            <h2
              className="text-xl md:text-2xl font-semibold mb-6 tracking-tight"
              style={{
                color: "var(--color-text)",
              }}
            >
              Head of AI
            </h2>
            <p
              className="leading-relaxed"
              style={{ color: "var(--color-muted)", fontSize: "16px" }}
            >
              Leading and reshaping workflows around AI initiatives, building custom AI agents for internal use.
            </p>
          </div>
          <div
            className="relative rounded-lg p-8 md:p-12 flex flex-col items-center text-center mt-8"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: `0 4px 6px -1px var(--color-shadow), 0 2px 4px -1px var(--color-shadow)`,
            }}
          >
            <p
              className="ui-text self-start mb-4"
              style={{ color: "var(--color-muted)", fontSize: "16px" }}
            >
              2022 – June 2025
            </p>
            <img
              src="/images/My_journey_logo/bigganbaksho-logo-abid-adnan-lighting.png"
              alt="BigganBaksho Logo"
              className="w-32 h-auto mb-6"
            />
            <h2
              className="text-xl md:text-2xl font-semibold tracking-tight mb-6"
              style={{
                color: "var(--color-text)",
              }}
            >
              Chief Marketing & Sales Officer
            </h2>
            <p
              className="leading-relaxed"
              style={{
                color: "var(--color-muted)",
                fontSize: "16px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Doubled BigganBaksho’s yearly sales within just 1 year. Turned the School Affairs Team from a cash-burning unit into a steady revenue stream. Also visualized the entire design philosophy behind Onnorokom Projonmo. This product is very close to my heart — and always will be.
            </p>
          </div>
          <div
            className="relative rounded-lg p-8 md:p-12 flex flex-col items-center text-center mt-8"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: `0 4px 6px -1px var(--color-shadow), 0 2px 4px -1px var(--color-shadow)`,
            }}
          >
            <p
              className="ui-text self-start mb-4"
              style={{ color: "var(--color-muted)", fontSize: "16px" }}
            >
              2022 – 2024
            </p>
            <img
              src="/images/My_journey_logo/utkorsho-logo-abid-adnan.jpeg"
              alt="Utkorsho Logo"
              className="w-32 h-auto mb-6"
            />
            <h2
              className="text-xl md:text-2xl font-semibold tracking-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Chief Marketing Officer
            </h2>
            <p
              className="leading-relaxed"
              style={{
                color: "var(--color-muted)",
                fontSize: "16px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Built the entire enrollment funnel from scratch for Utkorsho’s first course targeting the HSC '25 batch. Led the Utkorsho Poribar Facebook group from 0 to 100,000+ members in just 1 month.
            </p>
          </div>
          <div
            className="relative rounded-lg p-8 md:p-12 flex flex-col items-center text-center mt-8"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: `0 4px 6px -1px var(--color-shadow), 0 2px 4px -1px var(--color-shadow)`,
            }}
          >
            <p
              className="ui-text self-start mb-4"
              style={{ color: "var(--color-muted)", fontSize: "16px" }}
            >
              2023 – 2024
            </p>
            <img
              src="/images/My_journey_logo/GPTBangla Logo-abid-adnan-openai-com.png"
              alt="GPTBangla.com Logo"
              className="w-32 h-auto mb-6"
            />
            <h2
              className="text-xl md:text-2xl font-semibold tracking-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Founder
            </h2>
            <p
              className="leading-relaxed"
              style={{
                color: "var(--color-muted)",
                fontSize: "16px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Launched Bangladesh’s first Bangla LLM tool powered by ChatGPT & OpenAI. The mission was to make generative AI truly usable in our own language. Currently on pause for the AI Ready project.
            </p>
          </div>
          <div
            className="relative rounded-lg p-8 md:p-12 flex flex-col items-center text-center mt-8"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: `0 4px 6px -1px var(--color-shadow), 0 2px 4px -1px var(--color-shadow)`,
            }}
          >
            <p
              className="ui-text self-start mb-4"
              style={{ color: "var(--color-muted)", fontSize: "16px" }}
            >
              2020 – 2021
            </p>
            <img
              src="/images/My_journey_logo/fiverr-logo.webp"
              alt="Fiverr Logo"
              className="w-32 h-auto mb-6"
            />
            <h2
              className="text-xl md:text-2xl font-semibold tracking-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Fiverr Growth Hack & Course
            </h2>
            <p
              className="leading-relaxed"
              style={{
                color: "var(--color-muted)",
                fontSize: "16px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Started freelancing on Fiverr during mid-COVID, reached Level 2 in just 2 months. Launched a course as an experiment — scaled it to 10+ Lacs revenue in 1 month using smart sales strategy, CAPI-optimized Facebook ads, and an authentic, trust-driven community.
            </p>
          </div>
          <div
            className="relative rounded-lg p-8 md:p-12 flex flex-col items-center text-center mt-8"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: `0 4px 6px -1px var(--color-shadow), 0 2px 4px -1px var(--color-shadow)`,
            }}
          >
            <p
              className="ui-text self-start mb-4"
              style={{ color: "var(--color-muted)", fontSize: "16px" }}
            >
              2020
            </p>
            <img
              src="/images/My_journey_logo/bektitto.com-logo-founder-abid-adnan.jpg"
              alt="Bektitto.com Logo"
              className="w-32 h-auto mb-6"
            />
            <h2
              className="text-xl md:text-2xl font-semibold tracking-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Founder
            </h2>
            <p
              className="leading-relaxed"
              style={{
                color: "var(--color-muted)",
                fontSize: "16px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Created Bangladesh’s first Bangla personality testing platform (based on Myers-Briggs). Started as a side project, but couldn’t continue due to job focus. Will resume soon, In Sha Allah.
            </p>
          </div>
          <div
            className="relative rounded-lg p-8 md:p-12 flex flex-col items-center text-center mt-8"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: `0 4px 6px -1px var(--color-shadow), 0 2px 4px -1px var(--color-shadow)`,
            }}
          >
            <p
              className="ui-text self-start mb-4"
              style={{ color: "var(--color-muted)", fontSize: "16px" }}
            >
              2017 – 2021
            </p>
            <img
              src="/images/My_journey_logo/onnorokom-electornics-logo.png"
              alt="Onnorokom Electronics Logo"
              className="w-32 h-auto mb-6"
            />
            <h2
              className="text-xl md:text-2xl font-semibold tracking-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Content Writer → Growth Lead
            </h2>
            <p
              className="leading-relaxed"
              style={{
                color: "var(--color-muted)",
                fontSize: "16px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Started as a content writer, then took lead in the company’s early growth hack initiatives — launching multiple experiments and strategic plays.
            </p>
          </div>
          <div
            className="relative rounded-lg p-8 md:p-12 flex flex-col items-center text-center mt-8"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: `0 4px 6px -1px var(--color-shadow), 0 2px 4px -1px var(--color-shadow)`,
            }}
          >
            <p
              className="ui-text self-start mb-4"
              style={{ color: "var(--color-muted)", fontSize: "16px" }}
            >
              2015 – 2018
            </p>
            <img
              src="/images/My_journey_logo/app-store-logo-abid-adnan-com.jpg"
              alt="App Store Logo"
              className="w-32 h-auto mb-6"
            />
            <h2
              className="text-xl md:text-2xl font-semibold tracking-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              App Store Publisher
            </h2>
            <p
              className="leading-relaxed"
              style={{
                color: "var(--color-muted)",
                fontSize: "16px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Published several iOS apps as a side project, thanks to a push from a close friend. Within 3 years, it turned into a passive income stream, generating over 1 Crore BDT from the App Store alone. Some of those apps are still live.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
