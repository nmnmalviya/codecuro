import Header from "../Header";
import Footer from "../Footer";

const extensionHighlights = [
  {
    eyebrow: "Talent Access",
    title: "Extend your team with vetted engineers across core disciplines",
    text: "Access specialists in frontend, backend, mobile, DevOps, AI/ML, QA, and product engineering without slowing delivery."
  },
  {
    eyebrow: "Fast Onboarding",
    title: "Profiles, interviews, technical checks, and a free 2-week POC",
    text: "Shortlist strong candidates quickly, validate fit through real sprint work, and move into delivery with lower hiring friction."
  },
  {
    eyebrow: "Operational Support",
    title: "We manage workspace, hardware, internet, and performance systems",
    text: "Your extended team plugs into your workflow while we handle the operational layer needed for stable day-to-day execution."
  }
];

const engagementBenefits = [
  "300+ engineers available across multiple delivery functions",
  "3 to 10+ years of experience across product and platform work",
  "Daily stand-ups, sprint planning, and show-and-tell collaboration",
  "Monthly billing based on actual tracked man-hours",
  "45-day credit period structure for remote team engagements",
  "Scale from a single role to a full cross-functional pod over time"
];

const onboardingSteps = [
  {
    title: "Profile Selection & Interview",
    text: "Review shortlisted engineers, assess communication and technical fit, and align the right profiles to your team structure."
  },
  {
    title: "2 Weeks Free POC",
    text: "Run one focused sprint or set of tasks to validate quality, working style, and delivery confidence before long-term commitment."
  },
  {
    title: "Easy Onboard & Scale",
    text: "Bring the selected team into your tools, ceremonies, and roadmap, then expand smoothly as the scope grows."
  }
];

const collaborationPoints = [
  {
    title: "Strong Communication",
    text: "We align with your stack and rituals using Slack, Google Chat, Jira, Trello, and your preferred engineering process."
  },
  {
    title: "Long-Term Team Building",
    text: "Start lean, build trust, and expand into a broader team once the engagement proves value and delivery rhythm."
  },
  {
    title: "Global Delivery Presence",
    text: "Teams operate with customers across India, the UK, Sweden, the UAE, and other time-zone-aligned engagements."
  }
];

export default function RemoteTeamExtensionPage() {
  return (
    <>
      <Header />

      <main className="remote-page">
        <section className="remote-hero">
          <div className="remote-hero-bg" />
          <div className="remote-hero-inner">
            <div className="remote-hero-copy">
              <div className="hero-eyebrow fade-up">Remote Team Extension</div>
              <h1 className="remote-hero-title fade-up fade-up-d1">
                Add high-quality engineers to your team without slowing momentum.
              </h1>
              <p className="remote-hero-sub fade-up fade-up-d2">
                Build an extended delivery team that works inside your roadmap, communication flow, and engineering culture.
                We help you move faster with vetted developers, structured onboarding, and a low-friction proof-of-concept model.
              </p>
              <div className="remote-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Book a free POC</a>
                <a className="remote-secondary-link" href="https://fiftyfivetech.io/remote/" target="_blank" rel="noreferrer">
                  View source page {"\u2192"}
                </a>
              </div>
            </div>

            <div className="remote-hero-panel fade-up fade-up-d4">
              <div className="remote-panel-shell">
                <div className="remote-panel-header">
                  <div className="mock-row">
                    <div className="mock-dot red" />
                    <div className="mock-dot yellow" />
                    <div className="mock-dot green" />
                  </div>
                  <span>Team extension snapshot</span>
                </div>

                <div className="remote-metric-grid">
                  <div className="remote-metric-card">
                    <span>Available Talent Pool</span>
                    <strong>300+</strong>
                  </div>
                  <div className="remote-metric-card">
                    <span>Experience Range</span>
                    <strong>3-10+ yrs</strong>
                  </div>
                  <div className="remote-metric-card">
                    <span>POC Window</span>
                    <strong>2 weeks</strong>
                  </div>
                  <div className="remote-metric-card">
                    <span>Billing Model</span>
                    <strong>Actual hours</strong>
                  </div>
                </div>

                <div className="remote-flow">
                  <div className="remote-flow-node">Profile shortlist</div>
                  <div className="remote-flow-line" />
                  <div className="remote-flow-node accent">Interview & assignment</div>
                  <div className="remote-flow-line" />
                  <div className="remote-flow-node">2-week POC sprint</div>
                  <div className="remote-flow-line" />
                  <div className="remote-flow-node">Scale the team</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="remote-capabilities">
          <div className="section-inner">
            <div className="section-label">Why This Model Works</div>
            <h2 className="section-title">A practical way to expand delivery without taking on full hiring overhead.</h2>
            <p className="section-sub">
              This page focuses only on Remote Team Extension: rapid hiring support, delivery integration, free POC onboarding,
              and a model designed for long-term scaling.
            </p>

            <div className="remote-capability-grid">
              {extensionHighlights.map((item) => (
                <article className="remote-capability-card" key={item.title}>
                  <span>{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="remote-benefits-band">
          <div className="section-inner remote-benefits-layout">
            <div>
              <div className="section-label" style={{ color: "rgba(99,91,255,.82)" }}>Engagement Benefits</div>
              <h2 className="section-title" style={{ color: "#fff" }}>Support that covers both delivery quality and operating mechanics.</h2>
              <p className="section-sub" style={{ color: "rgba(255,255,255,.68)" }}>
                The model is built to help teams move quickly while keeping visibility, communication, and cost control intact.
              </p>
            </div>
            <div className="remote-benefit-list">
              {engagementBenefits.map((item) => (
                <div className="remote-benefit-item" key={item}>
                  <span>{"\u25CF"}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="remote-onboarding">
          <div className="section-inner">
            <div className="section-label">Easy Onboarding Process</div>
            <h2 className="section-title">A simple path from candidate review to a productive extended team.</h2>
            <div className="remote-onboarding-grid">
              {onboardingSteps.map((item, index) => (
                <article className="remote-onboarding-card" key={item.title}>
                  <span className="remote-step-badge">{`0${index + 1}`}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="remote-collaboration">
          <div className="section-inner">
            <div className="section-label">Working Style</div>
            <h2 className="section-title">Built for teams that care about fit, communication, and staying power.</h2>
            <div className="remote-collaboration-grid">
              {collaborationPoints.map((item) => (
                <article className="remote-collaboration-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="remote-cta-strip">
          <div className="remote-cta-inner">
            <div>
              <div className="section-label">Ready To Scale</div>
              <h2>Need extra hands on the roadmap without compromising quality or communication?</h2>
            </div>
            <div className="remote-cta-actions">
              <a className="btn-primary" href="mailto:sales@codecuro.in">Start the conversation</a>
              <a className="btn-ghost remote-outline-btn" href="https://codecuro.in/contact/" target="_blank" rel="noreferrer">
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
