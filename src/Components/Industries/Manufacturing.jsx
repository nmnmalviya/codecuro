import Header from "../Header";
import Footer from "../Footer";

const manufacturingCapabilities = [
  {
    eyebrow: "Smart Factory",
    title: "Connected manufacturing systems for real-time operational visibility",
    text: "Build dashboards, IoT workflows, and production monitoring tools that help teams track equipment, jobs, service requests, and plant performance."
  },
  {
    eyebrow: "Industrial Apps",
    title: "Web and mobile apps for field teams, technicians, and managers",
    text: "Create manufacturing apps for remote control, scheduling, inspections, maintenance, inventory, approvals, and shop-floor coordination."
  },
  {
    eyebrow: "Business Automation",
    title: "CRM, ERP, and workflow automation for manufacturing operations",
    text: "Connect sales, service, production, inventory, and reporting systems so teams can reduce manual work and respond faster."
  }
];

const manufacturingFeatures = [
  "Remote monitoring and control for HVAC, equipment, and factory devices",
  "Predictive maintenance alerts and service request workflows",
  "CRM portals for dealers, customers, field teams, and operations staff",
  "Manufacturing dashboards for production, inventory, and service KPIs",
  "Mobile apps for technicians, inspections, checklists, and job updates",
  "Cloud, API, and IoT integrations for connected industrial systems"
];

const deliveryProcess = [
  {
    step: "01",
    title: "Operations and asset discovery",
    text: "We map equipment, users, production flows, service journeys, data sources, and the high-friction tasks that need digitization."
  },
  {
    step: "02",
    title: "Architecture and workflow design",
    text: "We design the web app, mobile app, IoT layer, CRM workflows, dashboards, integrations, permissions, and data model."
  },
  {
    step: "03",
    title: "Build, integrate, and automate",
    text: "We implement connected apps, backend services, cloud APIs, notifications, reporting, and automation around real operational needs."
  },
  {
    step: "04",
    title: "QA, rollout, and continuous improvement",
    text: "We test across devices, roles, browsers, and production-like scenarios, then support launch, monitoring, and future optimization."
  }
];

const successStories = [
  {
    type: "Heating Automation",
    title: "Smart heating and HVAC control",
    text: "A connected heating system app enabled remote control, monitoring, service alerts, and a smoother customer support experience."
  },
  {
    type: "Manufacturing CRM",
    title: "Dealer and service CRM portal",
    text: "A CRM web app helped teams manage customer records, service requests, dealer follow-ups, warranties, and operational reporting."
  },
  {
    type: "Mobile Workforce",
    title: "Technician mobile app",
    text: "A mobile workflow helped field technicians view jobs, complete checklists, update statuses, and upload inspection evidence."
  },
  {
    type: "Factory Dashboard",
    title: "Production visibility dashboard",
    text: "A web dashboard consolidated machine status, job progress, inventory movement, and bottleneck alerts for operations teams."
  },
  {
    type: "Inventory Automation",
    title: "Parts and stock management",
    text: "A stock workflow improved visibility into spare parts, reorder points, warehouse transfers, and service-ready inventory."
  },
  {
    type: "IoT Integration",
    title: "Equipment data pipeline",
    text: "IoT data flows connected device signals, alerts, cloud APIs, and analytics for better equipment monitoring and maintenance."
  }
];

const metrics = [
  { label: "Device Layer", value: "IoT Ready" },
  { label: "Apps", value: "Web + Mobile" },
  { label: "Operations", value: "CRM + ERP" },
  { label: "Delivery", value: "Agile QA" }
];

export default function ManufacturingPage() {
  return (
    <>
      <Header />

      <main className="web-page manufacturing-page">
        <section className="web-hero manufacturing-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">Manufacturing Industry</div>
              <h1 className="web-hero-title fade-up fade-up-d1">
                Build connected manufacturing software for smarter equipment, teams, and operations.
              </h1>
              <p className="web-hero-sub fade-up fade-up-d2">
                Code Curo builds manufacturing CRM systems, web dashboards, mobile technician apps, IoT integrations,
                smart heating controls, inventory workflows, and automation platforms that keep operations moving.
              </p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Build manufacturing software</a>
                <a className="web-secondary-link" href="#manufacturing-stories">View success stories {"\u2192"}</a>
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
                  <span>Manufacturing operations cockpit</span>
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
                  <div className="web-flow-node">Machines and field data</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node accent">Cloud automation layer</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">CRM and operations portal</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Dashboards and mobile actions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">Manufacturing Solutions</div>
            <h2 className="section-title">Industrial software for connected equipment, service teams, and production visibility.</h2>
            <p className="section-sub">
              Based on the heating system app reference, this page expands into a complete manufacturing software
              offering: smart device control, CRM, mobile workflows, dashboards, inventory, and operational automation.
            </p>

            <div className="web-capability-grid">
              {manufacturingCapabilities.map((item) => (
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
            <h2 className="section-title" style={{ color: "#fff" }}>Manufacturing apps that connect devices, workers, customers, and back-office systems.</h2>
            <div className="manufacturing-feature-grid">
              {manufacturingFeatures.map((item) => (
                <article className="manufacturing-feature-card" key={item}>
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
            <h2 className="section-title">A practical route from manufacturing workflow pain to connected production software.</h2>
            <div className="web-process-grid manufacturing-process-grid">
              {deliveryProcess.map((item) => (
                <article className="web-process-card manufacturing-process-card" key={item.step}>
                  <span className="web-process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-stories" id="manufacturing-stories">
          <div className="section-inner">
            <div className="section-label">Manufacturing Success Stories</div>
            <h2 className="section-title">Connected manufacturing projects across HVAC, CRM, web apps, mobile apps, inventory, and IoT.</h2>
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

        <section className="web-cta-strip manufacturing-cta">
          <div className="web-cta-inner">
            <div>
              <div className="section-label">Ready To Build</div>
              <h2>Need a manufacturing CRM, smart equipment app, technician mobile app, or operations dashboard?</h2>
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
