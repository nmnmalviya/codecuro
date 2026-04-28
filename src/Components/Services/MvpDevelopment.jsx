import Header from "../Header";
import Footer from "../Footer";

const mvpHighlights = [
  {
    eyebrow: "Speed To Market",
    title: "Launch a focused MVP in 8 to 10 weeks",
    text: "Build the core product experience quickly with a roadmap shaped around validation, clarity, and early user value."
  },
  {
    eyebrow: "Product Design",
    title: "Interactive prototypes and user experience design",
    text: "Move from concept to flow, screens, and interactions with enough fidelity to guide product decisions before full build-out."
  },
  {
    eyebrow: "Delivery Rhythm",
    title: "Daily stand-ups and biweekly feature releases",
    text: "Ship in visible increments so product direction, engineering quality, and stakeholder feedback stay aligned throughout the build."
  }
];

const mvpDeliverables = [
  "Core product scope shaped around the strongest early value proposition",
  "Clickable flows and UX decisions before heavy engineering investment",
  "Agile sprints with regular demos and rapid iteration loops",
  "Testing, deployment, and post-launch support built into delivery",
  "A lean architecture that is ready to evolve after market validation",
  "A practical balance between product polish, cost control, and launch speed"
];

const mvpStories = [
  {
    type: "AI MVP",
    title: "AI Presentations",
    text: "AI-powered presentation creation tool."
  },
  {
    type: "Trust Platform",
    title: "Identity Authentication",
    text: "Trusted platform for news authentication."
  },
  {
    type: "Consumer App",
    title: "Astro Matchmaking",
    text: "Astrology-based dating app."
  },
  {
    type: "IoT Product",
    title: "Heating Automation",
    text: "Smart heating and HVAC control."
  },
  {
    type: "Analytics Tool",
    title: "Groundwater Automation",
    text: "Automated groundwater analysis system."
  },
  {
    type: "Workflow Product",
    title: "Immigration Platform",
    text: "Automated visa processing platform."
  },
  {
    type: "Fintech MVP",
    title: "Cryptocurrency Payment",
    text: "Crypto payments with AML integration."
  },
  {
    type: "Automation",
    title: "Jira Integration",
    text: "Automating third-party Jira issues."
  },
  {
    type: "XR Experience",
    title: "Device Control",
    text: "Creating immersive virtual worlds combining augmented reality."
  },
  {
    type: "Operations Suite",
    title: "Customer Portal",
    text: "Unified customer portal for operations."
  },
  {
    type: "Restaurant Tech",
    title: "Restaurant Intelligence",
    text: "Streamlining restaurant operations with tech."
  },
  {
    type: "Security Ops",
    title: "Payment Monitoring",
    text: "AWS-based secure file monitoring."
  },
  {
    type: "Social Impact",
    title: "Digital Donation Platform",
    text: "QR-based donation platform app."
  },
  {
    type: "Sports Platform",
    title: "Match Reporting Platform",
    text: "Digital platform for match reporting."
  },
  {
    type: "Workspace Tool",
    title: "Smart Workspace",
    text: "Smart tool for project workflows."
  },
  {
    type: "Travel Product",
    title: "Island Tourism",
    text: "All-in-one tourism solution app."
  },
  {
    type: "Modernization",
    title: "Digital Healthcare / Legacy Modernization",
    text: "Upgrading outdated systems to improve performance and security."
  }
];

const mvpFlow = [
  {
    step: "01",
    title: "Product scope and validation planning",
    text: "We clarify the product goal, define the smallest useful release, and align the feature set to the strongest early market signal."
  },
  {
    step: "02",
    title: "Design, build, and sprint releases",
    text: "We create the prototype, develop the core journeys, and release features incrementally through a visible sprint cadence."
  },
  {
    step: "03",
    title: "Test, deploy, and support launch",
    text: "We complete QA, deployment, and post-launch support so the product is ready for users, demos, and next-step iteration."
  }
];

export default function MvpDevelopmentPage() {
  return (
    <>
      <Header />

      <main className="mvp-page">
        <section className="mvp-hero">
          <div className="mvp-hero-bg" />
          <div className="mvp-hero-inner">
            <div className="mvp-hero-copy">
              <div className="hero-eyebrow fade-up">MVP Development</div>
              <h1 className="mvp-hero-title fade-up fade-up-d1">
                Turn a promising product idea into a market-ready MVP without wasting early momentum.
              </h1>
              <p className="mvp-hero-sub fade-up fade-up-d2">
                We help startups and innovation teams ship lean, usable MVPs that capture the core value proposition,
                reduce time-to-market, and create a strong base for feedback, traction, and investor conversations.
              </p>
              <div className="mvp-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Book a free POC</a>
                <a className="mvp-secondary-link" href="https://codecuro.in/mvp/" target="_blank" rel="noreferrer">
                  View source page {"\u2192"}
                </a>
              </div>
            </div>

            <div className="mvp-hero-panel fade-up fade-up-d4">
              <div className="mvp-panel-shell">
                <div className="mvp-panel-header">
                  <div className="mock-row">
                    <div className="mock-dot red" />
                    <div className="mock-dot yellow" />
                    <div className="mock-dot green" />
                  </div>
                  <span>MVP delivery tracker</span>
                </div>

                <div className="mvp-metric-grid">
                  <div className="mvp-metric-card">
                    <span>Launch Window</span>
                    <strong>8-10 weeks</strong>
                  </div>
                  <div className="mvp-metric-card">
                    <span>Release Cadence</span>
                    <strong>Biweekly</strong>
                  </div>
                  <div className="mvp-metric-card">
                    <span>Product Shape</span>
                    <strong>Lean core</strong>
                  </div>
                  <div className="mvp-metric-card">
                    <span>Support</span>
                    <strong>Post-launch</strong>
                  </div>
                </div>

                <div className="mvp-flow">
                  <div className="mvp-flow-node">Idea and scope</div>
                  <div className="mvp-flow-line" />
                  <div className="mvp-flow-node accent">Prototype and design</div>
                  <div className="mvp-flow-line" />
                  <div className="mvp-flow-node">Sprint development</div>
                  <div className="mvp-flow-line" />
                  <div className="mvp-flow-node">Launch and learn</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mvp-capabilities">
          <div className="section-inner">
            <div className="section-label">What You Get</div>
            <h2 className="section-title">A lean product build that is fast, intentional, and ready for real users.</h2>
            <p className="section-sub">
              This page focuses only on MVP Development: rapid product shaping, prototype-led delivery, sprint execution,
              testing, deployment, and launch support.
            </p>

            <div className="mvp-capability-grid">
              {mvpHighlights.map((item) => (
                <article className="mvp-capability-card" key={item.title}>
                  <span>{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mvp-deliverables-band">
          <div className="section-inner mvp-deliverables-layout">
            <div>
              <div className="section-label" style={{ color: "rgba(99,91,255,.82)" }}>Delivery Scope</div>
              <h2 className="section-title" style={{ color: "#fff" }}>Everything needed to get a serious first version into the market.</h2>
              <p className="section-sub" style={{ color: "rgba(255,255,255,.68)" }}>
                We keep the build focused on what matters most at the MVP stage: product clarity, speed, feedback, and a foundation you can extend.
              </p>
            </div>
            <div className="mvp-deliverable-list">
              {mvpDeliverables.map((item) => (
                <div className="mvp-deliverable-item" key={item}>
                  <span>{"\u25CF"}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mvp-stories">
          <div className="section-inner">
            <div className="section-label">MVP Success Stories</div>
            <h2 className="section-title">Examples pulled from the live MVP page across different product categories.</h2>
            <div className="mvp-story-grid">
              {mvpStories.map((item, index) => (
                <article className={`mvp-story-card tone-${index % 4}`} key={item.title}>
                  <div className="mvp-story-top">
                    <span className="mvp-story-type">{item.type}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mvp-process">
          <div className="section-inner">
            <div className="section-label">How We Work</div>
            <h2 className="section-title">A straightforward path from concept to launch-ready product.</h2>
            <div className="mvp-process-grid">
              {mvpFlow.map((item) => (
                <article className="mvp-process-card" key={item.step}>
                  <span className="mvp-process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mvp-cta-strip">
          <div className="mvp-cta-inner">
            <div>
              <div className="section-label">Ready To Launch</div>
              <h2>Need a fast first version of your product that still feels credible and usable?</h2>
            </div>
            <div className="mvp-cta-actions">
              <a className="btn-primary" href="mailto:sales@codecuro.in">Talk to our team</a>
              <a className="btn-ghost mvp-outline-btn" href="https://codecuro.in/contact/" target="_blank" rel="noreferrer">
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
