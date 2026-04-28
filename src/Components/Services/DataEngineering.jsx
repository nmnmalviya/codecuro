import Header from "../Header";
import Footer from "../Footer";

const platformCards = [
  {
    eyebrow: "Ingestion",
    title: "Unify data from APIs, apps, warehouses, and cloud storage",
    text: "Bring fragmented data into one dependable flow with connectors, validation rules, and scalable ingestion pipelines."
  },
  {
    eyebrow: "Transformation",
    title: "Clean, model, and prepare data for reporting and decision systems",
    text: "Design transformation layers that standardize messy source data into trusted, analytics-ready models."
  },
  {
    eyebrow: "Streaming",
    title: "Process high-volume events with low latency and operational resilience",
    text: "Support real-time monitoring, event pipelines, and continuous processing without losing visibility or control."
  }
];

const engineeringFocus = [
  "Data lakes, warehouses, and modern storage design",
  "ETL and ELT workflows for batch and real-time pipelines",
  "Governance, observability, lineage, and quality controls",
  "Analytics-ready schemas and business reporting layers",
  "Cloud-native orchestration for scalable data systems",
  "Secure integrations across enterprise and product platforms"
];

const useCases = [
  {
    title: "Unified SaaS Data Platforms",
    text: "Consolidate multiple product and business sources into a single platform for governance, reporting, and downstream analytics."
  },
  {
    title: "Operational Event Pipelines",
    text: "Handle telemetry, user activity, transactions, and machine signals with scalable stream processing and structured storage."
  },
  {
    title: "Executive and Team Dashboards",
    text: "Turn raw operational data into reliable dashboards and internal tools that support faster decisions across the business."
  }
];

const deliveryModel = [
  {
    step: "01",
    title: "Source mapping and architecture planning",
    text: "We identify source systems, business dependencies, and the right storage and processing pattern for your scale."
  },
  {
    step: "02",
    title: "Pipeline implementation and quality controls",
    text: "We build ingestion, transformation, validation, and orchestration layers with visibility into reliability and freshness."
  },
  {
    step: "03",
    title: "Governance, analytics, and scale-up",
    text: "We prepare your platform for reporting, compliance, monitoring, and future expansion without reworking the core model."
  }
];

export default function DataEngineeringPage() {
  return (
    <>
      <Header />

      <main className="data-page">
        <section className="data-hero">
          <div className="data-hero-bg" />
          <div className="data-hero-inner">
            <div className="data-hero-copy">
              <div className="hero-eyebrow fade-up">Data Engineering Services</div>
              <h1 className="data-hero-title fade-up fade-up-d1">
                Build data platforms that turn scattered inputs into clear, usable intelligence.
              </h1>
              <p className="data-hero-sub fade-up fade-up-d2">
                We design data engineering systems for ingestion, transformation, storage, governance, and analytics so
                teams can move from raw data to confident decisions without brittle manual processes.
              </p>
              <div className="data-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Discuss your data platform</a>
                <a
                  className="data-secondary-link"
                  href="https://fiftyfivetech.io/data-management-platform/"
                  target="_blank"
                  rel="noreferrer"
                >
                  See a related case study {"\u2192"}
                </a>
              </div>
            </div>

            <div className="data-hero-panel fade-up fade-up-d4">
              <div className="data-panel-shell">
                <div className="data-panel-header">
                  <div className="mock-row">
                    <div className="mock-dot red" />
                    <div className="mock-dot yellow" />
                    <div className="mock-dot green" />
                  </div>
                  <span>Pipeline health overview</span>
                </div>

                <div className="data-metric-grid">
                  <div className="data-metric-card">
                    <span>Sources Connected</span>
                    <strong>24</strong>
                  </div>
                  <div className="data-metric-card">
                    <span>Freshness SLA</span>
                    <strong>5 min</strong>
                  </div>
                  <div className="data-metric-card">
                    <span>Warehouse Sync</span>
                    <strong>Healthy</strong>
                  </div>
                  <div className="data-metric-card">
                    <span>Quality Checks</span>
                    <strong>98.6%</strong>
                  </div>
                </div>

                <div className="data-pipeline-flow">
                  <div className="data-flow-node">Source systems</div>
                  <div className="data-flow-line" />
                  <div className="data-flow-node accent">Transform and validate</div>
                  <div className="data-flow-line" />
                  <div className="data-flow-node">Warehouse and lake</div>
                  <div className="data-flow-line" />
                  <div className="data-flow-node">BI and analytics</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="data-capabilities">
          <div className="section-inner">
            <div className="section-label">Core Capabilities</div>
            <h2 className="section-title">Modern data engineering built for reliability, visibility, and scale.</h2>
            <p className="section-sub">
              This page focuses only on Data Engineering, including platform design, pipeline orchestration, governance,
              and analytics-ready architecture.
            </p>

            <div className="data-capability-grid">
              {platformCards.map((card) => (
                <article className="data-capability-card" key={card.title}>
                  <span>{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="data-solutions-band">
          <div className="section-inner data-solutions-layout">
            <div>
              <div className="section-label" style={{ color: "rgba(0,212,255,.82)" }}>What We Deliver</div>
              <h2 className="section-title" style={{ color: "#fff" }}>Engineering systems that keep data trustworthy and usable.</h2>
              <p className="section-sub" style={{ color: "rgba(255,255,255,.68)" }}>
                We shape data platforms that support business intelligence, product analytics, compliance, and long-term scale.
              </p>
            </div>
            <div className="data-solution-list">
              {engineeringFocus.map((item) => (
                <div className="data-solution-item" key={item}>
                  <span>{"\u25CF"}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="data-usecases">
          <div className="section-inner">
            <div className="section-label">Use Cases</div>
            <h2 className="section-title">Typical data engineering engagements that create traction quickly.</h2>
            <div className="data-usecase-grid">
              {useCases.map((item) => (
                <article className="data-usecase-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="data-process">
          <div className="section-inner">
            <div className="section-label">Delivery Approach</div>
            <h2 className="section-title">A practical route from data sprawl to structured, scalable systems.</h2>
            <div className="data-process-grid">
              {deliveryModel.map((item) => (
                <article className="data-process-card" key={item.step}>
                  <span className="data-process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="data-cta-strip">
          <div className="data-cta-inner">
            <div>
              <div className="section-label">Ready To Build</div>
              <h2>Need a cleaner pipeline, better analytics foundation, or a scalable data platform?</h2>
            </div>
            <div className="data-cta-actions">
              <a className="btn-primary" href="mailto:sales@codecuro.in">Talk to our team</a>
              <a className="btn-ghost data-outline-btn" href="https://codecuro.in/contact/" target="_blank" rel="noreferrer">
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
