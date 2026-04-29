import Header from "../Header";
import Footer from "../Footer";

const ecommerceCapabilities = [
  {
    eyebrow: "Sales Automation",
    title: "AI-driven sales development for faster customer conversion",
    text: "Build sales workflows that qualify leads, trigger follow-ups, personalize outreach, and help ecommerce teams move shoppers from interest to purchase."
  },
  {
    eyebrow: "Commerce Platforms",
    title: "Web and mobile shopping experiences built for daily operations",
    text: "Create ecommerce web apps, mobile apps, merchant portals, order dashboards, catalog tools, and customer journeys that are easy to manage and scale."
  },
  {
    eyebrow: "Stock Management",
    title: "Inventory, warehouse, and fulfillment systems that stay connected",
    text: "Connect stock movement, purchase orders, warehouse transfers, low-stock alerts, delivery status, returns, and reporting into one operational flow."
  }
];

const ecommerceFeatures = [
  "AI lead qualification, sales follow-ups, and abandoned-cart recovery",
  "Custom ecommerce web apps with catalog, checkout, order, and admin flows",
  "Mobile commerce apps for customers, sellers, delivery teams, and managers",
  "Stock management with barcode, warehouse, reorder, and transfer workflows",
  "CRM, payment, shipping, marketplace, and ERP integrations",
  "Analytics dashboards for sales, inventory, customers, and fulfillment KPIs"
];

const deliveryProcess = [
  {
    step: "01",
    title: "Commerce workflow discovery",
    text: "We map products, customers, sales channels, warehouses, order flows, returns, integrations, and the operational gaps that slow growth."
  },
  {
    step: "02",
    title: "Experience and system design",
    text: "We shape storefront journeys, mobile flows, admin portals, stock logic, CRM touchpoints, automation rules, and backend architecture."
  },
  {
    step: "03",
    title: "Build, integrate, and automate",
    text: "We develop web apps, mobile apps, APIs, inventory modules, payment flows, AI outreach, dashboards, and third-party integrations."
  },
  {
    step: "04",
    title: "QA, launch, and growth support",
    text: "We test checkout, inventory accuracy, order states, mobile performance, analytics, and automation quality before scaling the platform."
  }
];

const successStories = [
  {
    type: "AI Sales",
    title: "AI-driven sales development platform",
    text: "A sales automation workflow helped ecommerce teams capture leads, enrich customer context, and trigger personalized follow-ups across the buying journey."
  },
  {
    type: "Commerce Web App",
    title: "Custom ecommerce operations portal",
    text: "A web app gave managers one place to handle products, orders, customer records, promotions, fulfillment updates, and sales reporting."
  },
  {
    type: "Mobile Commerce",
    title: "Customer and seller mobile apps",
    text: "Mobile experiences helped customers browse and reorder faster while sellers managed stock, order updates, and customer communication on the go."
  },
  {
    type: "Stock System",
    title: "Warehouse and stock management",
    text: "A stock workflow improved visibility into inventory levels, barcode scans, reorder points, warehouse transfers, and fulfillment readiness."
  },
  {
    type: "Marketplace Ops",
    title: "Multi-channel order management",
    text: "Connected order flows helped synchronize website, marketplace, payment, shipping, and support activity into one reliable operations view."
  },
  {
    type: "Growth Analytics",
    title: "Sales and inventory dashboards",
    text: "Dashboards converted customer, order, and stock data into clearer insights for revenue, demand planning, campaign performance, and operations."
  }
];

const metrics = [
  { label: "Commerce Apps", value: "Web + Mobile" },
  { label: "Sales Layer", value: "AI Automation" },
  { label: "Operations", value: "Stock + Orders" },
  { label: "Integrations", value: "CRM + ERP" }
];

export default function EcommercePage() {
  return (
    <>
      <Header />

      <main className="web-page ecommerce-page">
        <section className="web-hero ecommerce-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">E-commerce Industry</div>
              <h1 className="web-hero-title fade-up fade-up-d1">
                Build ecommerce software that connects sales, storefronts, stock, and fulfillment.
              </h1>
              <p className="web-hero-sub fade-up fade-up-d2">
                Code Curo builds ecommerce web apps, mobile commerce platforms, AI sales automation,
                inventory systems, order management portals, marketplace integrations, and analytics dashboards.
              </p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Build ecommerce software</a>
                <a className="web-secondary-link" href="#ecommerce-stories">View success stories {"\u2192"}</a>
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
                  <span>Ecommerce growth cockpit</span>
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
                  <div className="web-flow-node">Leads and storefront activity</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node accent">AI sales and order engine</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Stock and fulfillment portal</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Dashboards and mobile actions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">E-commerce Solutions</div>
            <h2 className="section-title">Commerce platforms for sales automation, digital storefronts, and stock visibility.</h2>
            <p className="section-sub">
              Inspired by AI-driven sales development, this page expands into a complete ecommerce software offering:
              web apps, mobile apps, stock management, CRM workflows, marketplace operations, and revenue analytics.
            </p>

            <div className="web-capability-grid">
              {ecommerceCapabilities.map((item) => (
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
            <h2 className="section-title" style={{ color: "#fff" }}>Ecommerce apps that connect customers, sales teams, warehouses, and delivery workflows.</h2>
            <div className="ecommerce-feature-grid">
              {ecommerceFeatures.map((item) => (
                <article className="ecommerce-feature-card" key={item}>
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
            <h2 className="section-title">A practical route from ecommerce idea to reliable sales and operations software.</h2>
            <div className="web-process-grid ecommerce-process-grid">
              {deliveryProcess.map((item) => (
                <article className="web-process-card ecommerce-process-card" key={item.step}>
                  <span className="web-process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-stories" id="ecommerce-stories">
          <div className="section-inner">
            <div className="section-label">E-commerce Success Stories</div>
            <h2 className="section-title">Commerce projects across AI sales, web apps, mobile apps, stock management, operations, and analytics.</h2>
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

        <section className="web-cta-strip ecommerce-cta">
          <div className="web-cta-inner">
            <div>
              <div className="section-label">Ready To Build</div>
              <h2>Need an ecommerce web app, mobile commerce platform, stock system, or AI sales workflow?</h2>
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
