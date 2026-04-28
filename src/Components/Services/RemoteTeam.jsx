import Header from "../Header";
import Footer from "../Footer";

const remoteHighlights = [
  {
    eyebrow: "Talent Pool",
    title: "Access 300+ engineers across product, frontend, backend, mobile, DevOps, AI/ML, and QA",
    text: "Scale your delivery capacity with vetted specialists who can join your existing product rituals, tools, and engineering standards."
  },
  {
    eyebrow: "Experience",
    title: "Experienced resources with 3-10+ years of practical delivery background",
    text: "Shortlist engineers by role, seniority, communication fit, and project context so your team gets useful capacity quickly."
  },
  {
    eyebrow: "Managed Setup",
    title: "Office, laptops, internet, attendance, and performance monitoring handled for you",
    text: "You focus on roadmap and product outcomes while we support the operational layer behind the remote team."
  }
];

const whyChoose = [
  {
    title: "About Code Curo",
    text: "A global technology partner with 300+ developers, focused on extended teams and tailored software solutions for business needs."
  },
  {
    title: "Payment Terms and Billing",
    text: "Monthly invoicing with 15-day payment terms creates a 45-day credit period for remote teams, with billing based on tracked actual man-hours."
  },
  {
    title: "2-Week POC for Onboarding",
    text: "Selected profiles complete assigned work or a sprint for two weeks so you can assess code quality, delivery style, and communication."
  },
  {
    title: "Strong Communication",
    text: "Teams align with your processes using Slack, Google Chat, Jira, Trello, daily stand-ups, sprint planning, and show-and-tell sessions."
  },
  {
    title: "Long-Term Engagement",
    text: "Start with a small skill set, build trust through delivery, and scale toward full teams across frontend, backend, DevOps, AI/ML, and mobile."
  },
  {
    title: "Time-Zone Alignment",
    text: "Remote teams work with customers in Sweden, the UK, UAE, USA, and India while aligning availability to project needs."
  }
];

const hiringProcess = [
  {
    step: "01",
    title: "Profile Selection",
    text: "We shortlist profiles based on role, seniority, domain experience, project requirements, and availability."
  },
  {
    step: "02",
    title: "Interview and Assignment",
    text: "You interview candidates, run technical checks, review portfolios, and evaluate culture and communication fit."
  },
  {
    step: "03",
    title: "2 Weeks Free POC",
    text: "The selected resource completes a focused sprint or assignment. If the fit works, you continue; if not, replacement support is provided."
  },
  {
    step: "04",
    title: "Onboard and Integrate",
    text: "The engineer joins your tools, stand-ups, sprint planning, code reviews, documentation flow, and delivery cadence."
  },
  {
    step: "05",
    title: "Track and Improve",
    text: "Work hours, progress, output quality, and communication are monitored so the engagement stays transparent and productive."
  },
  {
    step: "06",
    title: "Scale the Team",
    text: "Add more roles or form a cross-functional pod as product scope, roadmap pressure, and delivery confidence grow."
  }
];

const teamRoles = [
  { type: "Frontend", title: "React, Angular, Vue, Next.js", text: "Build polished, responsive product interfaces and complex frontend workflows." },
  { type: "Backend", title: "Node.js, Python, Java, .NET, Go", text: "Develop APIs, business logic, integrations, databases, and scalable services." },
  { type: "Mobile", title: "iOS, Android, Flutter, React Native", text: "Ship native and cross-platform mobile apps with reliable release support." },
  { type: "Cloud", title: "DevOps, AWS, Azure, GCP, Kubernetes", text: "Strengthen deployment, monitoring, CI/CD, cloud infrastructure, and reliability." },
  { type: "AI/ML", title: "AI engineers and automation specialists", text: "Build intelligent workflows, ML modules, custom GPTs, and data-driven features." },
  { type: "Quality", title: "QA and software testing engineers", text: "Add manual, automation, regression, performance, and release testing capacity." }
];

const onboardingSteps = [
  {
    title: "Profile Selection & Interview",
    text: "Interview candidates to confirm technical ability, cultural alignment, communication quality, and team fit."
  },
  {
    title: "2 Weeks Free POC",
    text: "Get one complete sprint for two weeks to validate quality, reliability, and delivery rhythm before scaling."
  },
  {
    title: "Easy Onboard",
    text: "Onboard developers into your workflow and scale your team as project needs grow."
  }
];

const commercialCards = [
  { price: "USD 10K - 20K", title: "Mobile based MVP", timeline: "8 to 10 Weeks" },
  { price: "USD 20K - 25K", title: "Booking App", timeline: "12 to 15 Weeks" },
  { price: "USD 25K - 30K", title: "Business automation / Sales channel", timeline: "15 Weeks above" }
];

export default function RemoteTeamPage() {
  return (
    <>
      <Header />

      <main className="remote-page">
        <section className="remote-hero">
          <div className="remote-hero-bg" />
          <div className="remote-hero-inner">
            <div className="remote-hero-copy">
              <div className="hero-eyebrow fade-up">Remote Team</div>
              <h1 className="remote-hero-title fade-up fade-up-d1">
                Build a dedicated remote engineering team that feels like part of your company.
              </h1>
              <p className="remote-hero-sub fade-up fade-up-d2">
                Enhance your development capabilities with dedicated engineers who integrate with your in-house team,
                align with your culture, and bring specialized skills to move projects forward.
              </p>
              <div className="remote-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Book a Free POC</a>
                <a className="remote-secondary-link" href="https://codecuro.in/remote/" target="_blank" rel="noreferrer">
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
                  <span>Remote hiring snapshot</span>
                </div>

                <div className="remote-metric-grid">
                  <div className="remote-metric-card">
                    <span>Engineers</span>
                    <strong>300+</strong>
                  </div>
                  <div className="remote-metric-card">
                    <span>Experience</span>
                    <strong>3-10+ yrs</strong>
                  </div>
                  <div className="remote-metric-card">
                    <span>POC</span>
                    <strong>2 weeks free</strong>
                  </div>
                  <div className="remote-metric-card">
                    <span>Billing</span>
                    <strong>Actual hours</strong>
                  </div>
                </div>

                <div className="remote-flow">
                  <div className="remote-flow-node">Shortlist profiles</div>
                  <div className="remote-flow-line" />
                  <div className="remote-flow-node accent">Interview + assignment</div>
                  <div className="remote-flow-line" />
                  <div className="remote-flow-node">Run POC sprint</div>
                  <div className="remote-flow-line" />
                  <div className="remote-flow-node">Onboard + scale</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="remote-capabilities">
          <div className="section-inner">
            <div className="section-label">Remote Team Extension</div>
            <h2 className="section-title">A flexible hiring model for product teams that need speed without losing control.</h2>
            <p className="section-sub">
              The remote-team model gives you access to vetted engineers, structured interviews, technical assignments,
              a free two-week POC, and managed operating support.
            </p>

            <div className="remote-capability-grid">
              {remoteHighlights.map((item) => (
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
              <div className="section-label" style={{ color: "rgba(99,91,255,.82)" }}>Why Choose This Model</div>
              <h2 className="section-title" style={{ color: "#fff" }}>A team-extension model built for transparency, communication, and long-term scaling.</h2>
              <p className="section-sub" style={{ color: "rgba(255,255,255,.68)" }}>
                Keep your roadmap moving while avoiding the operational burden of sourcing, infrastructure, attendance, and team administration.
              </p>
            </div>
            <div className="remote-benefit-list">
              {whyChoose.map((item) => (
                <div className="remote-benefit-item" key={item.title}>
                  <span>{"\u25CF"}</span>
                  <p><strong style={{ color: "#fff" }}>{item.title}:</strong> {item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="remote-onboarding">
          <div className="section-inner">
            <div className="section-label">Hiring Flow</div>
            <h2 className="section-title">From profile review to an integrated remote team in a controlled, low-risk path.</h2>
            <div className="remote-onboarding-grid">
              {hiringProcess.map((item) => (
                <article className="remote-onboarding-card" key={item.step}>
                  <span className="remote-step-badge">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="remote-collaboration">
          <div className="section-inner">
            <div className="section-label">Roles You Can Hire</div>
            <h2 className="section-title">Build a single-role extension or a complete cross-functional delivery pod.</h2>
            <div className="remote-collaboration-grid">
              {teamRoles.map((item) => (
                <article className="remote-collaboration-card" key={item.title}>
                  <span className="web-story-type">{item.type}</span>
                  <h3 style={{ marginTop: 18 }}>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-onboarding">
          <div className="section-inner">
            <div className="section-label">Easy Onboarding Process</div>
            <h2 className="section-title">Hire dedicated software engineers and remote developers with confidence.</h2>
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

        <section className="remote-cta-strip">
          <div className="remote-cta-inner">
            <div>
              <div className="section-label">Ready To Scale</div>
              <h2>Need experienced remote engineers who can join your team and start contributing fast?</h2>
            </div>
            <div className="remote-cta-actions">
              <a className="btn-primary" href="mailto:sales@codecuro.in">Talk to our team</a>
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
