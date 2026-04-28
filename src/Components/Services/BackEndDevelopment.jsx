import Header from "../Header";
import Footer from "../Footer";

const serviceCards = [
  {
    eyebrow: "Architecture",
    title: "Backend systems planned for scale, performance, and security",
    text: "We define the product goals, system requirements, security expectations, database needs, and architecture style before development begins."
  },
  {
    eyebrow: "API Engineering",
    title: "Secure REST, GraphQL, and gRPC APIs for modern products",
    text: "Build well-documented APIs with validation, authentication, error handling, pagination, filtering, and rate limiting."
  },
  {
    eyebrow: "Infrastructure",
    title: "Cloud-ready services with CI/CD, monitoring, and maintenance",
    text: "Deploy and maintain backend systems with Docker, Kubernetes, cloud services, automated pipelines, health checks, and alerting."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Planning and Research",
    text: "We begin with clear project goals, technical requirements, scalability needs, performance targets, and security priorities. This helps us choose the right backend structure, whether monolithic, microservices, or serverless."
  },
  {
    step: "02",
    title: "Tech Stack Selection",
    text: "Our team works with Node.js, Express, NestJS, Python, Django, Flask, Java, Spring Boot, and Go. We pair the backend with the right database, cache, queue, and authentication strategy."
  },
  {
    step: "03",
    title: "Database and API Development",
    text: "We design database schemas, indexing, migrations, and data access patterns. Then we develop secure APIs with robust validation, clean responses, and dependable integration behavior."
  },
  {
    step: "04",
    title: "Security and Authentication",
    text: "We implement JWT, OAuth2, secure password hashing, role-based access control, OWASP practices, encryption in transit and at rest, and compliance-aware data handling."
  },
  {
    step: "05",
    title: "Testing and Quality Assurance",
    text: "Unit tests, integration tests, performance tests, CI pipelines, and code reviews help confirm that backend systems remain reliable as features expand."
  },
  {
    step: "06",
    title: "Deployment and Maintenance",
    text: "We use Docker, Kubernetes, cloud platforms, infrastructure as code, monitoring, health checks, and alerting systems to keep the backend stable after launch."
  }
];

const stackItems = [
  {
    title: "Backend Frameworks",
    text: "Node.js, Express, NestJS, Django, Flask, Spring Boot, and Go for robust service development."
  },
  {
    title: "Databases and Caching",
    text: "PostgreSQL, MongoDB, Redis, schema design, indexing, migrations, caching layers, and performance tuning."
  },
  {
    title: "Authentication",
    text: "JWT, OAuth2, secure hashing, role-based permissions, session management, and protected API access."
  },
  {
    title: "API Standards",
    text: "REST, GraphQL, gRPC, validation, documentation, error handling, pagination, filtering, and rate limits."
  },
  {
    title: "DevOps and Cloud",
    text: "Docker, Kubernetes, CI/CD, Terraform, AWS, Azure, GCP, monitoring, logging, and alerting."
  },
  {
    title: "Quality Practices",
    text: "Unit testing, integration testing, performance testing, code reviews, and automated build validation."
  }
];

const successStories = [
  { type: "FinTech", title: "Investment Platform", text: "Full-cycle investment platform upgrade with dependable backend architecture." },
  { type: "Crypto", title: "Cryptocurrency Payment", text: "Crypto payment workflows with AML integration and secure transaction handling." },
  { type: "Print Tech", title: "Global Print Platforms", text: "Modernized legacy systems with improved performance and maintainability." },
  { type: "Logistics", title: "Port Automation", text: "Automated port management system with backend workflow orchestration." },
  { type: "Migration", title: "Upgrading .NET to Vue 3", text: "Successful modernization of a legacy .NET platform into a modern stack." },
  { type: "SaaS", title: "SaaS Platform", text: "Enhanced platform maintenance for a Swedish SaaS client." },
  { type: "IoT", title: "Device Control", text: "Remote heating system control supported by reliable connected services." },
  { type: "Accounting", title: "Accounting Solutions", text: "AI-driven accounting workflows powered by strong business logic." },
  { type: "HVAC", title: "Heating Automation", text: "Smart heating and HVAC control for connected environments." },
  { type: "CMS", title: "Content Management", text: "Scalable web platform with content-management workflows." },
  { type: "Immigration", title: "Immigration Platform", text: "Automated visa processing platform for structured user journeys." },
  { type: "Data Automation", title: "Groundwater Automation", text: "Automated groundwater analysis system for domain-specific operations." }
];

const onboardingSteps = [
  {
    title: "Profile Selection & Interview",
    text: "Review backend profiles and interview engineers for architecture ability, API quality, database experience, communication, and culture fit."
  },
  {
    title: "2 Weeks Free POC",
    text: "Run one focused sprint to evaluate code quality, system thinking, delivery speed, and collaboration before scaling."
  },
  {
    title: "Easy Onboard",
    text: "Bring backend developers into your repositories, cloud environments, documentation, sprint rituals, and release process."
  }
];

const commercialCards = [
  { price: "USD 10K - 20K", title: "Mobile based MVP", timeline: "8 to 10 Weeks" },
  { price: "USD 20K - 25K", title: "Booking App", timeline: "12 to 15 Weeks" },
  { price: "USD 25K - 30K", title: "Business automation / Sales channel", timeline: "15 Weeks above" }
];

export default function BackEndDevelopmentPage() {
  return (
    <>
      <Header />

      <main className="web-page">
        <section className="web-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">Back-end Development Services</div>
              <h1 className="web-hero-title fade-up fade-up-d1">
                Build secure, scalable backend systems for products that need to perform.
              </h1>
              <p className="web-hero-sub fade-up fade-up-d2">
                We develop backend platforms, APIs, databases, authentication, integrations, and cloud-ready services
                that support reliable product growth.
              </p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Book a Free POC</a>
                <a className="web-secondary-link" href="https://fiftyfivetech.io/back-end/" target="_blank" rel="noreferrer">
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
                  <span>Backend delivery snapshot</span>
                </div>

                <div className="web-metric-grid">
                  <div className="web-metric-card">
                    <span>Frameworks</span>
                    <strong>Node / Python / Java / Go</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Databases</span>
                    <strong>Postgres / Mongo / Redis</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>API Types</span>
                    <strong>REST / GraphQL / gRPC</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Delivery</span>
                    <strong>CI/CD + Monitoring</strong>
                  </div>
                </div>

                <div className="web-flow">
                  <div className="web-flow-node">Plan architecture</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node accent">Build APIs + database</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Secure + test</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Deploy + maintain</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">Core Offering</div>
            <h2 className="section-title">Backend development for secure APIs, clean data models, and stable product operations.</h2>
            <p className="section-sub">
              The service covers backend planning, stack selection, database engineering, API development, security,
              testing, cloud deployment, and ongoing maintenance.
            </p>

            <div className="web-capability-grid">
              {serviceCards.map((item) => (
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
            <div className="section-label" style={{ color: "rgba(99,91,255,.82)" }}>Our Back-end Development Process</div>
            <h2 className="section-title" style={{ color: "#fff" }}>A practical backend delivery path from discovery to production maintenance.</h2>
            <div className="web-process-grid">
              {processSteps.map((item) => (
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
            <h2 className="section-title">Backend tools and practices selected around your product needs.</h2>
            <div className="web-capability-grid">
              {stackItems.map((item) => (
                <article className="web-capability-card" key={item.title}>
                  <span>Stack</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-stories">
          <div className="section-inner">
            <div className="section-label">Back-end Success Stories</div>
            <h2 className="section-title">Backend engineering across fintech, crypto, logistics, SaaS, IoT, CMS, and automation.</h2>
            <div className="web-story-grid">
              {successStories.map((item, index) => (
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
            <h2 className="section-title">Hire backend developers through a clear interview, POC, and onboarding flow.</h2>
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
              <div className="section-label">Ready To Build</div>
              <h2>Need secure APIs, database design, authentication, integrations, or backend maintenance?</h2>
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
