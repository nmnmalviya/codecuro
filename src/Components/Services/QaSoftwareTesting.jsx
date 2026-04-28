import Header from "../Header";
import Footer from "../Footer";

const qaCapabilities = [
  {
    eyebrow: "Strategy",
    title: "Test strategy development and QA consultation",
    text: "Define the testing roadmap, coverage model, risk areas, tooling, release gates, and quality standards before execution begins."
  },
  {
    eyebrow: "Coverage",
    title: "Functional, non-functional, and end-to-end quality assurance",
    text: "Validate user workflows, edge cases, integrations, performance, compatibility, reliability, and release readiness across the full product."
  },
  {
    eyebrow: "Automation",
    title: "Automated testing framework implementation",
    text: "Identify repeatable test opportunities and build automation that improves speed, consistency, and regression confidence."
  }
];

const qaProcess = [
  {
    step: "01",
    title: "Requirements Analysis and Test Planning",
    text: "We analyze project specifications and business requirements, then create a test strategy aligned with objectives, timelines, and quality standards."
  },
  {
    step: "02",
    title: "Test Case Development and Review",
    text: "Our QA team creates detailed test cases and scenarios covering normal user workflows, edge cases, and critical product behavior."
  },
  {
    step: "03",
    title: "Test Environment Setup",
    text: "We configure test environments that mirror production, including infrastructure, tools, data, and frameworks needed for effective validation."
  },
  {
    step: "04",
    title: "Test Execution and Defect Management",
    text: "Planned tests are executed systematically, results are documented, and defects are logged, tracked, prioritized, and verified after fixes."
  },
  {
    step: "05",
    title: "Automation Implementation",
    text: "We implement automation scripts and frameworks where they can increase test efficiency, coverage, consistency, and release speed."
  },
  {
    step: "06",
    title: "Quality Assurance and Reporting",
    text: "Final validation includes summary reports with coverage metrics, defect statistics, quality insights, and release-readiness recommendations."
  }
];

const qaProjects = [
  { type: "Booking QA", title: "Ferry Booking System", text: "A modernized ferry booking system with intuitive UI." },
  { type: "Trading Platform", title: "Trading Made Simple", text: "StratifyPro enables no-code trading strategy creation easily." },
  { type: "FinTech", title: "FinTech Platform", text: "A Swedish Fintech platform was enhanced with new features." },
  { type: "CMS Testing", title: "Content Management", text: "A scalable web platform with CMS functionality." },
  { type: "IoT QA", title: "IoT Climate Control", text: "IoT climate control platform with optimized subscriptions." },
  { type: "Portal QA", title: "Unified Customer Portal", text: "Streamlined operations, ensuring seamless functionality." },
  { type: "System Testing", title: "Ventilation System", text: "Comprehensive testing improved system reliability." },
  { type: "FoodTech QA", title: "Restaurant Solution", text: "Food-tech company optimized restaurant operations." },
  { type: "Rental Platform", title: "Rental Management", text: "A UK-based rental platform optimized tenant selection." },
  { type: "Construction SaaS", title: "Project Management", text: "A secure, scalable project management platform." },
  { type: "Heating Apps", title: "Heating System Apps", text: "User-friendly heating system apps enabling remote control." },
  { type: "Web App QA", title: "Web App Development", text: "Responsive web app optimized for performance and UX." }
];

const qaFocus = [
  "Test planning, test cases, and structured QA documentation",
  "Functional testing across user journeys and business workflows",
  "Non-functional validation for performance, compatibility, reliability, and usability",
  "Defect logging, tracking, retesting, and release-quality reporting",
  "Automation frameworks for faster regression and repeatable coverage",
  "Complete testing cycles delivered in 4 to 6 weeks"
];

const onboardingSteps = [
  {
    title: "Profile Selection & Interview",
    text: "Interview QA engineers to confirm testing experience, tool fit, product understanding, and communication style."
  },
  {
    title: "2 Weeks Free POC",
    text: "Run one sprint for two weeks to validate test coverage, defect reporting quality, collaboration, and delivery confidence."
  },
  {
    title: "Easy Onboard",
    text: "Onboard QA talent into your product workflow, environments, test tools, ceremonies, and release rhythm."
  }
];

const commercialCards = [
  { price: "USD 10K - 20K", title: "Mobile based MVP", timeline: "8 to 10 Weeks" },
  { price: "USD 20K - 25K", title: "Booking App", timeline: "12 to 15 Weeks" },
  { price: "USD 25K - 30K", title: "Business automation / Sales channel", timeline: "15 Weeks above" }
];

export default function QaSoftwareTestingPage() {
  return (
    <>
      <Header />

      <main className="web-page">
        <section className="web-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">Software Testing & QA</div>
              <h1 className="web-hero-title fade-up fade-up-d1">
                Release robust, reliable, user-ready software with structured QA and testing.
              </h1>
              <p className="web-hero-sub fade-up fade-up-d2">
                We deliver comprehensive quality assurance and testing solutions, from test strategy development to
                automated testing implementation, ensuring your product is dependable before it reaches users.
              </p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Book a Free POC</a>
                <a className="web-secondary-link" href="https://codecuro.in/software-testing-qa/" target="_blank" rel="noreferrer">
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
                  <span>QA delivery overview</span>
                </div>

                <div className="web-metric-grid">
                  <div className="web-metric-card">
                    <span>Cycle</span>
                    <strong>4-6 weeks</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Coverage</span>
                    <strong>E2E + UAT</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Automation</span>
                    <strong>Regression suites</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Reporting</span>
                    <strong>Defects + metrics</strong>
                  </div>
                </div>

                <div className="web-flow">
                  <div className="web-flow-node">Analyze requirements</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node accent">Plan + build test cases</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Execute + manage defects</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Report + release confidence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">QA Services</div>
            <h2 className="section-title">Testing coverage that protects product quality at every development stage.</h2>
            <p className="section-sub">
              The QA service covers test strategy, functional and non-functional testing, automation implementation,
              end-to-end validation, defect management, and complete testing cycles in 4 to 6 weeks.
            </p>

            <div className="web-capability-grid">
              {qaCapabilities.map((item) => (
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
            <div className="section-label" style={{ color: "rgba(99,91,255,.82)" }}>How We Work</div>
            <h2 className="section-title" style={{ color: "#fff" }}>A complete QA workflow from planning and environments to execution, automation, and reporting.</h2>
            <div className="web-process-grid">
              {qaProcess.map((item) => (
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
            <div className="section-label">Quality Focus</div>
            <h2 className="section-title">Practical QA coverage for releases that need measurable quality.</h2>
            <div className="web-capability-grid">
              {qaFocus.map((item) => (
                <article className="web-capability-card" key={item}>
                  <span>Testing</span>
                  <h3>{item}</h3>
                  <p>Structured to improve confidence, reduce escaped defects, and make release decisions clearer.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-stories">
          <div className="section-inner">
            <div className="section-label">Featured QA & Testing Projects</div>
            <h2 className="section-title">QA work across booking systems, fintech, CMS, IoT, customer portals, restaurants, rentals, and management platforms.</h2>
            <div className="web-story-grid">
              {qaProjects.map((item, index) => (
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
            <h2 className="section-title">Hire QA engineers and testing specialists with an interview, POC, and smooth onboarding flow.</h2>
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
            <div className="section-label">Hire the Right Developer</div>
            <h2 className="section-title">Build your dream tech team with flexible and cost-effective plans.</h2>
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
              <div className="section-label">Ready To Test</div>
              <h2>Need test planning, functional QA, automation, defect management, and release-ready reporting?</h2>
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
