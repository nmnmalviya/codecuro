import Header from "../Header";
import Footer from "../Footer";

const fintechCapabilities = [
  {
    eyebrow: "Trading Platforms",
    title: "No-code strategy builders and trader workspaces",
    text: "Create intuitive fintech products where users can build, test, compare, and manage trading strategies without heavy technical friction."
  },
  {
    eyebrow: "Market Data",
    title: "Real-time data flows, charting, and portfolio visibility",
    text: "Connect market feeds, broker APIs, order history, holdings, watchlists, and analytics into clear dashboards for faster decisions."
  },
  {
    eyebrow: "Secure Finance",
    title: "Compliance-ready architecture for sensitive financial workflows",
    text: "Design fintech systems with secure authentication, audit trails, role access, encrypted data flows, QA coverage, and cloud reliability."
  }
];

const platformFeatures = [
  "No-code trading strategy creation and configuration",
  "Backtesting, simulation, and performance comparison",
  "Portfolio dashboards, watchlists, and market insights",
  "Broker, payment, CRM, and notification integrations",
  "Risk controls, audit logs, and secure user management",
  "Automated QA, regression testing, and release support"
];

const tradingJourney = [
  {
    step: "01",
    title: "Product and compliance discovery",
    text: "We clarify the trading workflow, user roles, regulatory expectations, data sources, integrations, and the launch roadmap."
  },
  {
    step: "02",
    title: "Experience, architecture, and API planning",
    text: "We design the trader experience, admin workflows, data models, broker links, notification services, and cloud architecture."
  },
  {
    step: "03",
    title: "Build, test, and modernize",
    text: "We develop frontend, backend, data, and QA layers while improving scalability, documentation, and release confidence."
  },
  {
    step: "04",
    title: "Launch and ongoing optimization",
    text: "We monitor performance, improve onboarding, reduce defects, and support new fintech features as the product grows."
  }
];

const fintechStories = [
  {
    type: "Trading Product",
    title: "Trading made simple",
    text: "A strategy-first trading experience that helps users create and evaluate trading logic through a cleaner no-code workflow."
  },
  {
    type: "Investment Platform",
    title: "Swedish fintech modernization",
    text: "A digital investment platform was improved with scalable backend services, frontend enhancements, and stronger QA cycles."
  },
  {
    type: "Broker Integration",
    title: "Connected investment workflows",
    text: "Notification and brokerage-linking services helped synchronize user activity, account data, and platform communication."
  },
  {
    type: "Finance UX",
    title: "Better onboarding and dashboards",
    text: "User journeys, localized views, and dashboard interactions were refined to make complex financial workflows easier to manage."
  },
  {
    type: "Quality Engineering",
    title: "Lower defect release cycles",
    text: "Regression testing, validation flows, and automation improved confidence across frequent fintech product releases."
  },
  {
    type: "Secure Scale",
    title: "Cloud-ready financial systems",
    text: "Modern API, database, and cloud patterns helped strengthen uptime, data synchronization, and maintainability."
  }
];

const metrics = [
  { label: "Platform Uptime Target", value: "99.9%" },
  { label: "Onboarding Lift", value: "35%" },
  { label: "Defect Reduction", value: "40%" },
  { label: "Delivery Model", value: "Agile" }
];

export default function FintechPage() {
  return (
    <>
      <Header />

      <main className="web-page fintech-page">
        <section className="web-hero fintech-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">FinTech Industry</div>
              <h1 className="web-hero-title fade-up fade-up-d1">
                Build secure fintech products that make trading, investing, and money movement simpler.
              </h1>
              <p className="web-hero-sub fade-up fade-up-d2">
                Code Curo designs and modernizes trading platforms, investment portals, dashboards, broker integrations,
                QA systems, and cloud-ready fintech products for teams that need reliability and speed.
              </p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Build a fintech product</a>
                <a className="web-secondary-link" href="#fintech-stories">View success stories {"\u2192"}</a>
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
                  <span>Trading platform snapshot</span>
                </div>

                <div className="web-metric-grid">
                  {metrics.map((item) => (
                    <div className="web-metric-card" key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="web-flow">
                  <div className="web-flow-node">Strategy builder</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node accent">Backtest and risk rules</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Broker and market data</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Portfolio insights</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">FinTech Solutions</div>
            <h2 className="section-title">Trading and investment software built around trust, speed, and usability.</h2>
            <p className="section-sub">
              Inspired by the Trading Made Simple case study, this page focuses on practical fintech delivery:
              no-code trading workflows, investment platform modernization, integrations, QA, and secure scale.
            </p>

            <div className="web-capability-grid">
              {fintechCapabilities.map((item) => (
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
            <div className="section-label" style={{ color: "rgba(99,91,255,.82)" }}>What We Build</div>
            <h2 className="section-title" style={{ color: "#fff" }}>From trading strategy tools to secure investment platforms and finance dashboards.</h2>
            <div className="fintech-feature-grid">
              {platformFeatures.map((item) => (
                <article className="fintech-feature-card" key={item}>
                  <span>{"\u25CF"}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">Delivery Process</div>
            <h2 className="section-title">A fintech delivery path from product clarity to secure launch.</h2>
            <div className="web-process-grid fintech-process-grid">
              {tradingJourney.map((item) => (
                <article className="web-process-card fintech-process-card" key={item.step}>
                  <span className="web-process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-stories" id="fintech-stories">
          <div className="section-inner">
            <div className="section-label">FinTech Success Stories</div>
            <h2 className="section-title">Practical finance products across trading, investment, integrations, QA, and cloud modernization.</h2>
            <div className="web-story-grid">
              {fintechStories.map((item, index) => (
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

        <section className="web-cta-strip fintech-cta">
          <div className="web-cta-inner">
            <div>
              <div className="section-label">Ready To Build</div>
              <h2>Need a trading platform, investment portal, broker integration, or fintech modernization team?</h2>
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
