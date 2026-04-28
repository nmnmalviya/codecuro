import Header from "../Header";
import Footer from "../Footer";

const webCapabilities = [
  {
    eyebrow: "Custom Build",
    title: "Tailored web applications shaped around your business model",
    text: "From product planning to full-stack implementation, we build user-focused web platforms designed for your workflows, customers, and growth goals."
  },
  {
    eyebrow: "Modern Stack",
    title: "React, Angular, Vue, Node, Django, Java, and robust databases",
    text: "Use a modern frontend and backend stack with PostgreSQL, MySQL, or MongoDB to support scale, maintainability, and strong product performance."
  },
  {
    eyebrow: "Launch Support",
    title: "Testing, deployment, maintenance, and ongoing refinement",
    text: "We stay through launch and beyond with QA, environment setup, release support, maintenance, and iterative improvements."
  }
];

const webProcess = [
  {
    step: "01",
    title: "Discovery and Requirements Gathering",
    text: "We work closely with you to define the scope, target audience, core features, user experience expectations, business objectives, and technical requirements."
  },
  {
    step: "02",
    title: "UI/UX Design and Prototyping",
    text: "We create wireframes and mockups to visualize the product, focusing on intuitive navigation, strong layouts, and a consistent brand identity."
  },
  {
    step: "03",
    title: "Frontend Development",
    text: "Using the approved designs, our frontend team builds responsive interfaces with React, Angular, or Vue while keeping code quality and performance in focus."
  },
  {
    step: "04",
    title: "Backend Development",
    text: "We build the server-side logic, database layer, and APIs with technologies such as Node.js, Python/Django, or Java/Spring for dependable functionality."
  },
  {
    step: "05",
    title: "Testing and Quality Assurance",
    text: "Before release, the app goes through functional testing, cross-browser validation, performance checks, and user acceptance testing."
  },
  {
    step: "06",
    title: "Deployment and Maintenance",
    text: "After approval, we deploy the application smoothly and provide ongoing support so the product remains stable, secure, and ready to evolve."
  }
];

const webStories = [
  { type: "Restaurant Tech", visual: "restaurant", title: "Restaurant Automation", text: "AI-powered restaurant management system." },
  { type: "Finance Automation", visual: "accounting", title: "Accounting Solutions", text: "AI-driven automated accounting workflows." },
  { type: "IoT Web App", visual: "climate", title: "Heating Automation", text: "Smart Heating and HVAC Control." },
  { type: "FinTech Platform", visual: "investment", title: "Investment Platform", text: "Full-cycle investment platform upgrade." },
  { type: "Operations Suite", visual: "portal", title: "Customer Portal", text: "Unified customer portal for operations." },
  { type: "Workflow Product", visual: "passport", title: "Immigration Platform", text: "Automated visa processing platform." },
  { type: "Travel Stack", visual: "booking", title: "Booking Ecosystem", text: "Unified travel booking and support platform." },
  { type: "Content Platform", visual: "content", title: "Content Management", text: "Connects professionals with eco-friendly employers." },
  { type: "Fintech MVP", visual: "crypto", title: "Cryptocurrency Payment", text: "Crypto payments with AML integration." },
  { type: "Legacy Upgrade", visual: "print", title: "Global Print Platforms", text: "Modernized systems with improved performance." },
  { type: "AI Product", visual: "slides", title: "AI Presentations", text: "AI-powered presentation creation tool." },
  { type: "Service Ops", visual: "contact", title: "Contact Centre Solution", text: "AI finance assistant enhances data interactions and experience." },
  { type: "Sports Platform", visual: "score", title: "Match Reporting Platform", text: "Digital platform for match reporting." },
  { type: "Data Platform", visual: "data", title: "Data Management", text: "Modern platform for data integration." }
];

const onboardingSteps = [
  {
    title: "Profile Selection & Interview",
    text: "Review profiles, assess cultural fit, and interview candidates aligned to your product and delivery environment."
  },
  {
    title: "2 Weeks Free POC",
    text: "Run one complete sprint for two weeks to validate quality, communication, and delivery confidence before scaling."
  },
  {
    title: "Easy Onboard",
    text: "Bring developers into your workflow smoothly and expand the team as product scope and delivery needs grow."
  }
];

const commercialCards = [
  { price: "USD 10K - 20K", title: "Mobile based MVP", timeline: "8 to 10 Weeks" },
  { price: "USD 20K - 25K", title: "Booking App", timeline: "12 to 15 Weeks" },
  { price: "USD 25K - 30K", title: "Business automation / Sales channel", timeline: "15 Weeks above" }
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Header />

      <main className="web-page">
        <section className="web-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">Web App Development</div>
              <h1 className="web-hero-title fade-up fade-up-d1">
                Build scalable web applications that feel sharp for users and solid for teams.
              </h1>
              <p className="web-hero-sub fade-up fade-up-d2">
                We deliver end-to-end web app development services, from concept and planning to full-stack engineering,
                testing, deployment, maintenance, and long-term product evolution.
              </p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Book a Free POC</a>
                <a className="web-secondary-link" href="https://fiftyfivetech.io/web-app/" target="_blank" rel="noreferrer">
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
                  <span>Web product delivery overview</span>
                </div>

                <div className="web-metric-grid">
                  <div className="web-metric-card">
                    <span>Frontend Stack</span>
                    <strong>React / Angular / Vue</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Backend Stack</span>
                    <strong>Node / Django / Java</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Databases</span>
                    <strong>Postgres / MySQL / MongoDB</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Support</span>
                    <strong>Deploy + Maintain</strong>
                  </div>
                </div>

                <div className="web-flow">
                  <div className="web-flow-node">Discovery</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node accent">Design + Prototype</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Build + Test</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Deploy + Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">Core Offering</div>
            <h2 className="section-title">A complete web app delivery stack, not just coded screens.</h2>
            <p className="section-sub">
              This page includes the full shape of the live Web App Development page: service scope, process, success stories,
              onboarding, and practical commercial framing, with a cleaner product presentation layered on top.
            </p>

            <div className="web-capability-grid">
              {webCapabilities.map((item) => (
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
            <h2 className="section-title" style={{ color: "#fff" }}>The full web app development process, from discovery to ongoing support.</h2>
            <div className="web-process-grid">
              {webProcess.map((item) => (
                <article className="web-process-card" key={item.step}>
                  <span className="web-process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-stories">
          <div className="section-inner">
            <div className="section-label">Web App Development Success Stories</div>
            <h2 className="section-title">See how FiftyFive builds powerful web apps for clients.</h2>
            <div className="web-story-grid">
              {webStories.map((item, index) => (
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
            <h2 className="section-title">Hire dedicated software engineers and remote developers with a clear starting path.</h2>
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
            <h2 className="section-title">Build your dream tech team with practical engagement starting points.</h2>
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
              <div className="section-label">Ready To Build</div>
              <h2>Need a product-grade web application with design, engineering, testing, and launch support in one flow?</h2>
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
