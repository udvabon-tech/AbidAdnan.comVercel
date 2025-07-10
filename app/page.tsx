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

      {/* Journey Timeline */}
      <main className="container mx-auto px-4 pb-16">
        <section className="max-w-3xl mx-auto mt-16">
          <div
            className="rounded-lg p-8 md:p-12"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <h2
              className="text-3xl font-semibold mb-8"
              style={{ color: "var(--color-text)" }}
            >
              My Journey: Experiments That Keep Growing
            </h2>
            <div className="relative pl-8">
              <div
                className="absolute left-4 top-0 bottom-0 w-px"
                style={{ backgroundColor: "var(--color-border)" }}
              ></div>
              <div className="space-y-16">
              {/* 2024 – Present */}
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="sm:w-24 mb-4 sm:mb-0 flex-shrink-0">
                  <div
                    className="h-16 w-16 p-2 rounded"
                    style={{ backgroundColor: "var(--color-surface)", border: `1px solid var(--color-border)` }}
                  >
                    <img
                      src="/images/My_journey_logo/becb6b33-b06b-43b8-a022-ab72aa70a5af (1).png"
                      alt="OnnoRokom logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="sm:ml-8">
                  <p className="ui-text text-sm mb-1" style={{ color: "var(--color-muted)" }}>
                    2024 – Present
                  </p>
                  <h3 className="text-xl font-semibold" style={{ color: "var(--color-text)" }}>
                    Head of AI & Agents, OnnoRokom AI
                  </h3>
                  <p className="mt-2" style={{ color: "var(--color-muted)" }}>
                    Leading and Reshaping workflows around AI initiatives, building custom AI agents for Shohag Vai, OnnRokom Uddokta, Rokomari.com
                  </p>
                </div>
              </div>

              {/* 2022 – 2024 */}
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="sm:w-24 mb-4 sm:mb-0 flex-shrink-0 flex space-x-2">
                  <div
                    className="h-16 w-16 p-2 rounded"
                    style={{ backgroundColor: "var(--color-surface)", border: `1px solid var(--color-border)` }}
                  >
                    <img
                      src="/images/My_journey_logo/utkorsho-logo-abid-adnan.jpeg"
                      alt="Utkorsho logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div
                    className="h-16 w-16 p-2 rounded"
                    style={{ backgroundColor: "var(--color-surface)", border: `1px solid var(--color-border)` }}
                  >
                    <img
                      src="/images/My_journey_logo/bigganbaksho-logo-abid-adnan-head-of-marketing.png"
                      alt="BigganBaksho logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="sm:ml-8">
                  <p className="ui-text text-sm mb-1" style={{ color: "var(--color-muted)" }}>
                    2022 – 2024
                  </p>
                  <h3 className="text-xl font-semibold" style={{ color: "var(--color-text)" }}>
                    Chief Marketing & Chief Sales Officer, OnnoRokom EdTech (Utkorsho &amp; Bigganbaksho)
                  </h3>
                  <p className="mt-2" style={{ color: "var(--color-muted)" }}>
                    Led the Utkorsho Poribar Facebook group to 100K+ members in 1 month, building an automated enrollment funnel.
                    Doubled BigganBaksho total yearly sales in 1 year. Turned School Affairs Team from cash-burner to steady revenue stream.
                  </p>
                </div>
              </div>

              {/* 2023 */}
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="sm:w-24 mb-4 sm:mb-0 flex-shrink-0">
                  <div
                    className="h-16 w-16 p-2 rounded"
                    style={{ backgroundColor: "var(--color-surface)", border: `1px solid var(--color-border)` }}
                  >
                    <img
                      src="/images/My_journey_logo/becb6b33-b06b-43b8-a022-ab72aa70a5af (1).png"
                      alt="GPTBangla logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="sm:ml-8">
                  <p className="ui-text text-sm mb-1" style={{ color: "var(--color-muted)" }}>
                    2023
                  </p>
                  <h3 className="text-xl font-semibold" style={{ color: "var(--color-text)" }}>
                    Founded, GPTBangla.com
                  </h3>
                  <p className="mt-2" style={{ color: "var(--color-muted)" }}>
                    Founded Bangladesh’s first Bangla LLM tool powered by ChatGPT &amp; OpenAI. Making generative AI usable in our own language.
                  </p>
                </div>
              </div>

              {/* 2021 */}
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="sm:w-24 mb-4 sm:mb-0 flex-shrink-0">
                  <div
                    className="h-16 w-16 p-2 rounded"
                    style={{ backgroundColor: "var(--color-surface)", border: `1px solid var(--color-border)` }}
                  >
                    <img
                      src="/images/My_journey_logo/fiverr-logo.webp"
                      alt="Fiverr logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="sm:ml-8">
                  <p className="ui-text text-sm mb-1" style={{ color: "var(--color-muted)" }}>
                    2021
                  </p>
                  <h3 className="text-xl font-semibold" style={{ color: "var(--color-text)" }}>
                    Fiverr Growth Hacking Course
                  </h3>
                  <p className="mt-2" style={{ color: "var(--color-muted)" }}>
                    Launched a course experiment — scaled it to 10 Lacs+ in 1 month through smart sales, CAPI-optimized Facebook ads &amp; authentic community.
                  </p>
                </div>
              </div>

              {/* 2020 */}
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="sm:w-24 mb-4 sm:mb-0 flex-shrink-0">
                  <div
                    className="h-16 w-16 p-2 rounded"
                    style={{ backgroundColor: "var(--color-surface)", border: `1px solid var(--color-border)` }}
                  >
                    <img
                      src="/images/My_journey_logo/bektitto.com-logo-founder-abid-adnan.jpg"
                      alt="Bektitto.com logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="sm:ml-8">
                  <p className="ui-text text-sm mb-1" style={{ color: "var(--color-muted)" }}>
                    2020
                  </p>
                  <h3 className="text-xl font-semibold" style={{ color: "var(--color-text)" }}>
                    Founded, Bektitto.com
                  </h3>
                  <p className="mt-2" style={{ color: "var(--color-muted)" }}>
                    Built Bangladesh’s first Bangla personality testing site (Myers-Briggs based). as a side project.
                  </p>
                </div>
              </div>

              {/* 2017 – 2021 */}
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="sm:w-24 mb-4 sm:mb-0 flex-shrink-0">
                  <div
                    className="h-16 w-16 p-2 rounded"
                    style={{ backgroundColor: "var(--color-surface)", border: `1px solid var(--color-border)` }}
                  >
                    <img
                      src="/images/My_journey_logo/onnorokom-electornics logo.png"
                      alt="OnnoRokom Electronics logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="sm:ml-8">
                  <p className="ui-text text-sm mb-1" style={{ color: "var(--color-muted)" }}>
                    2017 – 2021
                  </p>
                  <h3 className="text-xl font-semibold" style={{ color: "var(--color-text)" }}>
                    Growth Lead, OnnoRokom Bigganbaksho
                  </h3>
                  <p className="mt-2" style={{ color: "var(--color-muted)" }}>
                    Helped Take Bigganbaksho’s online sales from 30K/year to 2 Crore/year. Smallest channel became biggest.
                  </p>
                </div>
              </div>

              {/* 2015 – 2018 */}
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="sm:w-24 mb-4 sm:mb-0 flex-shrink-0">
                  <div
                    className="h-16 w-16 p-2 rounded"
                    style={{ backgroundColor: "var(--color-surface)", border: `1px solid var(--color-border)` }}
                  >
                    <img
                      src="/images/My_journey_logo/app-store-logo.jpg"
                      alt="Apple Appstore logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="sm:ml-8">
                  <p className="ui-text text-sm mb-1" style={{ color: "var(--color-muted)" }}>
                    2015 – 2018
                  </p>
                  <h3 className="text-xl font-semibold" style={{ color: "var(--color-text)" }}>
                    Co-Founder, Apekkhik Technology
                  </h3>
                  <p className="mt-2" style={{ color: "var(--color-muted)" }}>
                    Started as a side project thanks to the push from a close friend, then grew to generate 1 Crore+ in pure passive revenue on the Apple App Store within 3 years.
                    some of the apps are still live here
                    https://apps.apple.com/fr/developer/abid-adnan/id1042184103?l=en&see-all=i-phonei-pad-apps
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
