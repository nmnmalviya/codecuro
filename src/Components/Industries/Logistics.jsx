import Header from "../Header";
import Footer from "../Footer";

const logisticsCapabilities = [
  {
    eyebrow: "Port Automation",
    title: "Digital port operations for faster container movement",
    text: "Build port management systems that automate job token assignment, route navigation, container tracking, and operational coordination."
  },
  {
    eyebrow: "Fleet Logistics",
    title: "Transport applications for goods movement across cities and countries",
    text: "Create logistics platforms for dispatch, fleet tracking, multi-city transfers, driver apps, delivery status, routes, and proof of delivery."
  },
  {
    eyebrow: "Supply Chain Visibility",
    title: "Connected dashboards for shipments, warehouses, and teams",
    text: "Unify shipment data, warehouse handoffs, customs checkpoints, carrier updates, billing, and analytics into one reliable operations view."
  }
];

const logisticsFeatures = [
  "Port automation with job tokens, route navigation, and container tracking",
  "Fleet and driver mobile apps for city-to-city and cross-border goods transfer",
  "Real-time shipment, vehicle, warehouse, and delivery status dashboards",
  "Load planning, dispatch scheduling, route optimization, and delivery proof",
  "Customer, vendor, carrier, customs, and billing portal workflows",
  "API integrations for GPS, ERP, warehouse systems, payments, and notifications"
];

const deliveryProcess = [
  {
    step: "01",
    title: "Operations and route discovery",
    text: "We map ports, routes, fleets, warehouses, users, container flows, shipment statuses, and the manual tasks slowing logistics teams down."
  },
  {
    step: "02",
    title: "Platform and mobile workflow design",
    text: "We design dispatcher dashboards, driver apps, customer portals, route logic, token flows, shipment tracking, and integration architecture."
  },
  {
    step: "03",
    title: "Build, integrate, and automate",
    text: "We develop web portals, Flutter or native mobile apps, backend APIs, tracking workflows, alerts, analytics, and connected logistics modules."
  },
  {
    step: "04",
    title: "QA, rollout, and optimization",
    text: "We test routes, status transitions, mobile usage, port workflows, tracking accuracy, reports, and performance before operational rollout."
  }
];

const successStories = [
  {
    type: "Port Automation",
    title: "Automated port management system",
    text: "A mobile-first port solution streamlined manual operations with job tokens, route navigation, container tracking, and automated workflows."
  },
  {
    type: "Cost Reduction",
    title: "Lean port operations",
    text: "Automation and process improvements helped reduce operational friction, improve coordination, and support lower port management costs."
  },
  {
    type: "Goods Transfer",
    title: "Multi-city logistics application",
    text: "A transport app helped teams plan loads, assign vehicles, transfer goods across cities, and keep customers updated on shipment progress."
  },
  {
    type: "Cross-border Freight",
    title: "Country-to-country shipment tracking",
    text: "A logistics portal connected carriers, documentation, checkpoints, and delivery milestones for international freight movement."
  },
  {
    type: "Driver Mobility",
    title: "Driver and field team mobile app",
    text: "Mobile workflows helped drivers receive trips, navigate routes, update delivery states, capture proof, and communicate with dispatchers."
  },
  {
    type: "Supply Chain BI",
    title: "Shipment visibility dashboard",
    text: "Dashboards turned fleet, port, warehouse, and order data into useful insights for delivery performance, delays, utilization, and planning."
  }
];

const metrics = [
  { label: "Productivity Lift", value: "22%" },
  { label: "Cost Reduction", value: "40%" },
  { label: "App Layer", value: "Web + Mobile" },
  { label: "Tracking", value: "Real Time" }
];

export default function LogisticsPage() {
  return (
    <>
      <Header />

      <main className="web-page logistics-page">
        <section className="web-hero logistics-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">Logistics Industry</div>
              <h1 className="web-hero-title fade-up fade-up-d1">
                Build logistics software that moves goods, fleets, and port operations with real-time control.
              </h1>
              <p className="web-hero-sub fade-up fade-up-d2">
                Code Curo builds port automation platforms, fleet management apps, driver mobile apps,
                shipment tracking portals, warehouse workflows, route systems, and logistics dashboards.
              </p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Build logistics software</a>
                <a className="web-secondary-link" href="#logistics-stories">View success stories {"\u2192"}</a>
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
                  <span>Logistics operations cockpit</span>
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
                  <div className="web-flow-node">Port and shipment requests</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node accent">Dispatch and route engine</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Fleet and container tracking</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Proof, billing, and analytics</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">Logistics Solutions</div>
            <h2 className="section-title">Transport, port, and supply chain platforms for connected logistics operations.</h2>
            <p className="section-sub">
              Based on the port automation case study, this page expands into complete logistics software:
              mobile operations, multi-city goods transfer, cross-border freight, fleet tracking, warehouse coordination, and analytics.
            </p>

            <div className="web-capability-grid">
              {logisticsCapabilities.map((item) => (
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
            <h2 className="section-title" style={{ color: "#fff" }}>Logistics apps that connect ports, dispatchers, drivers, customers, warehouses, and finance teams.</h2>
            <div className="logistics-feature-grid">
              {logisticsFeatures.map((item) => (
                <article className="logistics-feature-card" key={item}>
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
            <h2 className="section-title">A practical route from logistics workflow pain to automated transport software.</h2>
            <div className="web-process-grid logistics-process-grid">
              {deliveryProcess.map((item) => (
                <article className="web-process-card logistics-process-card" key={item.step}>
                  <span className="web-process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-stories" id="logistics-stories">
          <div className="section-inner">
            <div className="section-label">Logistics Success Stories</div>
            <h2 className="section-title">Logistics projects across ports, fleets, driver apps, city transfers, freight tracking, and supply chain analytics.</h2>
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

        <section className="web-cta-strip logistics-cta">
          <div className="web-cta-inner">
            <div>
              <div className="section-label">Ready To Build</div>
              <h2>Need a port automation platform, fleet app, driver app, shipment tracker, or logistics dashboard?</h2>
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
