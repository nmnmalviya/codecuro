import Header from "../Header";
import Footer from "../Footer";

const mobileCapabilities = [
  {
    eyebrow: "Native Apps",
    title: "iOS and Android apps with Swift, Objective-C, Kotlin, and Java",
    text: "Build platform-specific applications with smooth interactions, strong performance, and reliable access to native device capabilities."
  },
  {
    eyebrow: "Cross-Platform",
    title: "Flutter and React Native for fast multi-platform delivery",
    text: "Launch consistent experiences across iOS and Android while reducing duplicated effort and keeping product iteration quick."
  },
  {
    eyebrow: "Full Lifecycle",
    title: "UI/UX, QA, API integration, app support, maintenance, and market launch",
    text: "Move from idea to store release with design, backend integration, testing, submission support, and ongoing improvements in one flow."
  }
];

const buildProcess = [
  {
    step: "01",
    title: "Discovery Phase",
    text: "We run in-depth discussions to understand your business objectives, target audience, app goals, project scope, and detailed requirements."
  },
  {
    step: "02",
    title: "Design and Prototyping",
    text: "Our designers create intuitive, engaging interfaces and interactive prototypes that simulate functionality and gather early feedback."
  },
  {
    step: "03",
    title: "Development and Testing",
    text: "We follow agile development with continuous improvement, unit testing, integration testing, and user acceptance testing throughout the build."
  },
  {
    step: "04",
    title: "Launch and Support",
    text: "We handle app-store submission for iOS and Google Play, support a smooth release, and provide bug fixes and performance enhancements."
  }
];

const mobileStories = [
  { type: "IoT Climate", title: "Climate Optimization", text: "Real-time intelligent climate control." },
  { type: "Finance Automation", title: "Accounting Solutions", text: "AI-driven automated accounting workflows." },
  { type: "HealthTech", title: "Menstrual Health", text: "AI-powered menstrual health app." },
  { type: "Restaurant Tech", title: "Restaurant Automation", text: "AI-powered restaurant management system." },
  { type: "Mobility", title: "Car Rental Application", text: "Rent vehicles on weekly, monthly, or long-term bases." },
  { type: "Logistics", title: "Port Automation", text: "Automated port management system." },
  { type: "Legacy Upgrade", title: "Print Automation", text: "Modernizing global print platforms." },
  { type: "Hiring Platform", title: "Green Hiring", text: "Green industry hiring platform." },
  { type: "HVAC App", title: "Ventilation Modernization", text: "Modern ventilation control platform." },
  { type: "Travel App", title: "Island Tourism", text: "All-in-one tourism solution app." },
  { type: "Smart Home", title: "Device Control", text: "Unified smart home control app for all devices." },
  { type: "Commerce", title: "Unified E-commerce", text: "Multi-store cannabis commerce system." },
  { type: "Trust Platform", title: "Identity Authentication", text: "Trusted platform for news authentication." }
];

const techStack = [
  "Platforms: iOS with Swift and Objective-C, Android with Kotlin and Java",
  "Cross-platform development with Flutter and React Native",
  "Backend development with Node.js, Firebase, AWS, and Azure",
  "Design tools including Figma, Adobe XD, and Sketch",
  "Databases such as MySQL, MongoDB, and Realm",
  "App testing, QA, API integration, support, maintenance, and market launch"
];

const onboardingSteps = [
  {
    title: "Profile Selection & Interview",
    text: "Interview mobile developers to validate platform expertise, delivery maturity, communication, and culture fit."
  },
  {
    title: "2 Weeks Free POC",
    text: "Run one complete sprint for two weeks to assess implementation quality, collaboration, and product velocity."
  },
  {
    title: "Easy Onboard",
    text: "Bring the mobile team into your roadmap, tools, app-store workflow, API environment, and delivery rituals."
  }
];

const commercialCards = [
  { price: "USD 10K - 20K", title: "Mobile based MVP", timeline: "8 to 10 Weeks" },
  { price: "USD 20K - 25K", title: "Booking App", timeline: "12 to 15 Weeks" },
  { price: "USD 25K - 30K", title: "Business automation / Sales channel", timeline: "15 Weeks above" }
];

export default function MobileDevelopmentPage() {
  return (
    <>
      <Header />

      <main className="web-page">
        <section className="web-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">Mobile App Development</div>
              <h1 className="web-hero-title fade-up fade-up-d1">
                Transform ideas into powerful mobile apps for iOS, Android, and cross-platform growth.
              </h1>
              <p className="web-hero-sub fade-up fade-up-d2">
                We build native and hybrid mobile applications with UI/UX design, app testing, QA, API integration,
                app support, maintenance, and market launch services.
              </p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Book a Free POC</a>
                <a className="web-secondary-link" href="https://codecuro.in/custom-mobile-app/" target="_blank" rel="noreferrer">
                  View source page {"\u2192"}
                </a>
              </div>
            </div>

            <div className="web-hero-panel fade-up fade-up-d4">
              <div className="web-panel-shell">
                <div className="web-panel-header">
                  <div className="mock-row">
                    <div className="mock-dot red" />
                    <div className="mock-dot yellow" />
                    <div className="mock-dot green" />
                  </div>
                  <span>Mobile product delivery overview</span>
                </div>

                <div className="web-metric-grid">
                  <div className="web-metric-card">
                    <span>Apps Delivered</span>
                    <strong>100+</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Native</span>
                    <strong>Swift / Kotlin</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Hybrid</span>
                    <strong>Flutter / RN</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Backend</span>
                    <strong>Firebase / Cloud</strong>
                  </div>
                </div>

                <div className="web-flow">
                  <div className="web-flow-node">Discover app goals</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node accent">Design + prototype</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Build + test</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Store launch + support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">Mobile App Solutions</div>
            <h2 className="section-title">High-quality mobile applications built around usability, performance, and launch readiness.</h2>
            <p className="section-sub">
              The mobile service covers iOS, Android, and cross-platform apps with design, backend integration,
              database selection, QA, support, and app-store launch services.
            </p>

            <div className="web-capability-grid">
              {mobileCapabilities.map((item) => (
                <article className="web-capability-card" key={item.title}>
                  <span>{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-process-band">
          <div className="section-inner">
            <div className="section-label" style={{ color: "rgba(99,91,255,.82)" }}>How We Build</div>
            <h2 className="section-title" style={{ color: "#fff" }}>A practical path from app concept to store launch and long-term support.</h2>
            <div className="web-process-grid">
              {buildProcess.map((item) => (
                <article className="web-process-card" key={item.step}>
                  <span className="web-process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">Technology Stack</div>
            <h2 className="section-title">Mobile engineering choices matched to your product, users, and scale.</h2>
            <div className="web-capability-grid">
              {techStack.map((item) => (
                <article className="web-capability-card" key={item}>
                  <span>Stack</span>
                  <h3>{item}</h3>
                  <p>Selected to support a reliable app experience, maintainable codebase, and smoother post-launch iteration.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-stories">
          <div className="section-inner">
            <div className="section-label">Mobile App Success Stories</div>
            <h2 className="section-title">Hybrid and native app work across climate, finance, health, logistics, travel, commerce, and smart devices.</h2>
            <div className="web-story-grid">
              {mobileStories.map((item, index) => (
                <article className={`web-story-card tone-${index % 4}`} key={item.title}>
                  <div className="web-story-top">
                    <span className="web-story-type">{item.type}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-onboarding">
          <div className="section-inner">
            <div className="section-label">Easy Onboarding Process</div>
            <h2 className="section-title">Build the best team for your mobile app with a simple POC-led hiring flow.</h2>
            <div className="web-onboarding-grid">
              {onboardingSteps.map((item, index) => (
                <article className="web-onboarding-card" key={item.title}>
                  <span className="web-step-badge">{`0${index + 1}`}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-commercial">
          <div className="section-inner">
            <div className="section-label">Build a Mobile App for Your Business</div>
            <h2 className="section-title">Choose the right expertise with flexible and cost-effective plans.</h2>
            <div className="web-commercial-grid">
              {commercialCards.map((item) => (
                <article className="web-commercial-card" key={item.title}>
                  <span>{item.price}</span>
                  <h3>{item.title}</h3>
                  <p>{item.timeline}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-cta-strip">
          <div className="web-cta-inner">
            <div>
              <div className="section-label">Ready To Launch</div>
              <h2>Need a mobile app with design, backend integration, QA, store launch, and long-term support?</h2>
            </div>
            <div className="web-cta-actions">
              <a className="btn-primary" href="mailto:sales@codecuro.in">Talk to our team</a>
              <a className="btn-ghost web-outline-btn" href="https://codecuro.in/contact/" target="_blank" rel="noreferrer">
                Contact sales
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
