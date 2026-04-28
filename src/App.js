import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import siteData from "./codeCuroData.json";
import "./App.css";
import AiAndMlPage from "./Components/Services/Ai&Ml";
import DataEngineeringPage from "./Components/Services/DataEngineering";
import RemoteTeamExtensionPage from "./Components/Services/RemoteTeamExtension";
import MvpDevelopmentPage from "./Components/Services/MvpDevelopment";
import WebDevelopmentPage from "./Components/Services/WebDevelopment";
import DevOpsPage from "./Components/Services/devops";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const statLabels = {
  it_professionals: "IT professionals",
  tech_domains: "tech domains",
  delivered_projects: "delivered projects",
  client_retention: "client retention",
  response_time: "average response time"
};

const icons = [
  "\u{1F4BB}",
  "\u{1F680}",
  "\u{1F3AE}",
  "\u{1F310}",
  "\u{1F916}",
  "\u2699\uFE0F",
  "\u{1F9E9}",
  "\u{1F3A8}",
  "\u{1F578}\uFE0F"
];

/* CODE BLOCK */
const CodeBlock = () => (
  <div className="code-block">
    <div className="code-header">
      <div className="code-dot r" /><div className="code-dot y" /><div className="code-dot g" />
      <span className="code-filename">checkout.js</span>
    </div>
    <div>
      <span className="tok-key">import</span> <span className="tok-white">CodeCuro</span> <span className="tok-key">from</span> <span className="tok-str">'code-curo-sdk'</span><span className="tok-white">;</span>
    </div>
    <div style={{ marginTop: 16 }}>
      <span className="tok-key">const</span> <span className="tok-white">codeCuro</span> <span className="tok-key">=</span> <span className="tok-fn">CodeCuro</span><span className="tok-white">(process.env.</span><span className="tok-str">PROJECT_TOKEN</span><span className="tok-white">);</span>
    </div>
    <div style={{ marginTop: 16 }}>
      <span className="tok-key">const</span> <span className="tok-white">project</span> <span className="tok-key">= await</span> <span className="tok-white">codeCuro.projects.</span><span className="tok-fn">create</span><span className="tok-white">{"({"}</span>
    </div>
    <div style={{ paddingLeft: 16 }}>
      <span className="tok-white">service: </span><span className="tok-str">'MVP Development'</span><span className="tok-white">,</span>
    </div>
    <div style={{ paddingLeft: 16 }}>
      <span className="tok-white">team: [{"{"}</span>
    </div>
    <div style={{ paddingLeft: 32 }}>
      <span className="tok-white">role: </span><span className="tok-str">'React.js Developers'</span><span className="tok-white">,</span>
    </div>
    <div style={{ paddingLeft: 32 }}>
      <span className="tok-white">count: </span><span className="tok-num">2</span><span className="tok-white">,</span>
    </div>
    <div style={{ paddingLeft: 16 }}>
      <span className="tok-white">{"}],"}</span>
    </div>
    <div style={{ paddingLeft: 16 }}>
      <span className="tok-white">mode: </span><span className="tok-str">'remote-team'</span><span className="tok-white">,</span>
    </div>
    <div style={{ paddingLeft: 16 }}>
      <span className="tok-white">budget: </span><span className="tok-str">'$5K - $10K'</span><span className="tok-white">,</span>
    </div>
    <div style={{ paddingLeft: 16 }}>
      <span className="tok-white">timeline: </span><span className="tok-str">'6-8 weeks'</span><span className="tok-white">,</span>
    </div>
    <div><span className="tok-white">{"});"}</span></div>
    <div style={{ marginTop: 16 }}>
      <span className="tok-comment">// Project created - notify client</span>
    </div>
    <div>
      <span className="tok-white">res.</span><span className="tok-fn">json</span><span className="tok-white">(project);</span>
    </div>
  </div>
);

/* MOCK DASHBOARD */
const MockDashboard = ({ type }) => {
  if (type === "billing") return (
    <div className="mock-ui">
      <div className="mock-row"><div className="mock-dot red" /><div className="mock-dot yellow" /><div className="mock-dot green" /></div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", marginBottom: 8 }}>BILLING DASHBOARD</div>
      <div className="mock-amount">{"\u20B9"}4,28,350</div>
      <div className="mock-label">MRR {"\u2014"} Monthly Recurring Revenue</div>
      <div className="mock-badge">{"\u2191"} 23.4% vs last month</div>
      <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          `Pro Plan \u2014 84 users`,
          `Starter Plan \u2014 212 users`,
          `Enterprise \u2014 6 accounts`
        ].map((l, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ height: 6, borderRadius: 3, background: `rgba(99,91,255,${1 - i * 0.25})`, width: `${70 - i * 18}%` }} />
            <span style={{ fontSize: 11, color: "rgba(255,255,255,.5)", whiteSpace: "nowrap" }}>{l}</span>
          </div>
        ))}
      </div>
    </div>
  );

  if (type === "payments") return (
    <div className="mock-ui">
      <div className="mock-row"><div className="mock-dot red" /><div className="mock-dot yellow" /><div className="mock-dot green" /></div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", marginBottom: 12 }}>RECENT PROJECTS</div>
      {[
        { name: "Rahul M.", amt: "\u20B92,499", status: "Paid" },
        { name: "Priya K.", amt: "\u20B912,000", status: "Paid" },
        { name: "Asha T.", amt: "\u20B9499", status: "Pending" },
        { name: "Dev Corp.", amt: "\u20B985,000", status: "Paid" }
      ].map((p, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,.8)" }}>{p.name}</span>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{p.amt}</span>
            <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: p.status === "Paid" ? "rgba(0,217,36,.2)" : "rgba(255,189,0,.2)", color: p.status === "Paid" ? "#00d924" : "#ffd100" }}>{p.status}</span>
          </div>
        </div>
      ))}
    </div>
  );

  if (type === "connect") return (
    <div className="mock-ui">
      <div className="mock-row"><div className="mock-dot red" /><div className="mock-dot yellow" /><div className="mock-dot green" /></div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", marginBottom: 12 }}>CONNECT PLATFORM</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {[
          { label: "Active Merchants", val: "2,841" },
          { label: "Total Volume", val: "\u20B912.4Cr" },
          { label: "Avg. Take Rate", val: "1.8%" },
          { label: "Payouts Today", val: "\u20B934.2L" }
        ].map((s, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,.06)", borderRadius: 8, padding: "14px 16px" }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>{s.val}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return null;
};

/* HOME PAGE */
function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

  const dataTabs = siteData.case_studies.slice(0, 3).map((item, index) => ({
    label: item.category,
    title: item.title,
    desc: item.description,
    visual: ["payments", "billing", "connect"][index],
    cta: `Explore ${item.type}`
  }));

  const dataProducts = siteData.services.slice(0, 9).map((service, index) => ({
    icon: icons[index],
    name: service.name,
    desc: service.description || `Explore ${service.name.toLowerCase()} services from ${siteData.company.name}.`
  }));

  const dataNews = siteData.testimonials.slice(0, 3).map((item, index) => ({
    thumb: ["\u{1F4AC}", "\u2B50", "\u{1F91D}"][index],
    tag: item.company,
    title: `${item.name}, ${item.designation}`,
    desc: item.quote
  }));

  const topStats = Object.entries(siteData.stats).slice(0, 4).map(([key, value]) => ({
    val: value,
    label: statLabels[key] || key.replaceAll("_", " ")
  }));

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-gradient" />
        <div className="hero-content">
          <div className="hero-eyebrow fade-up">IT consulting and software engineering</div>
          <h1 className="hero-title fade-up fade-up-d1">
            <em>{siteData.company.name}</em><br />to build your software.
          </h1>
          <p className="hero-sub fade-up fade-up-d2">
            {siteData.company.description}
          </p>
          <div className="hero-cta fade-up fade-up-d3">
            <button className="btn-hero-primary">Start a project {"\u2192"}</button>
            <button className="btn-hero-ghost">Contact sales</button>
          </div>
        </div>
        <svg className="hero-wave" viewBox="0 0 1440 220" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,160 C240,220 480,80 720,140 C960,200 1200,60 1440,120 L1440,220 L0,220 Z" fill="#ffffff" />
          <path d="M0,180 C360,240 720,100 1080,160 C1260,190 1380,150 1440,140 L1440,220 L0,220 Z" fill="rgba(255,255,255,0.4)" />
        </svg>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          {topStats.map((s, i) => (
            <div className="stat-item" key={i}>
              <h3>{s.val}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BENTO GRID */}
      <section className="section">
        <div className="section-inner">
          <div className="section-label">Flexible solutions</div>
          <h2 className="section-title">Flexible software solutions for every business model.</h2>
          <p className="section-sub">Grow with product strategy, engineering, automation, cloud, and design services that can work individually or together.</p>

          <div className="bento-grid">
            <div className="bento-card col-2" style={{ background: "linear-gradient(135deg,#0a2540 0%,#1a3a5c 100%)", minHeight: 300 }}>
              <div className="bento-card-bg" />
              <div className="bento-card-tag">{siteData.domains[2]}</div>
              <div className="bento-card-icon purple">{"\u{1F30D}"}</div>
              <h3>{siteData.services[0].name}</h3>
              <p>{siteData.services[0].description}</p>
            </div>
            <div className="bento-card" style={{ background: "linear-gradient(135deg,#1a0a40 0%,#2d1060 100%)" }}>
              <div className="bento-card-icon purple">{"\u{1F4CB}"}</div>
              <h3>{siteData.services[1].name}</h3>
              <p>{siteData.services[1].description}</p>
            </div>

            <div className="bento-card light">
              <div className="bento-card-icon teal">{"\u{1F916}"}</div>
              <h3>{siteData.services[4].name}</h3>
              <p>{siteData.services[4].description}</p>
            </div>
            <div className="bento-card" style={{ background: "linear-gradient(135deg,#003d2b 0%,#006644 100%)" }}>
              <div className="bento-card-icon green">{"\u{1F4B3}"}</div>
              <h3>{siteData.services[5].name}</h3>
              <p>{siteData.services[5].description}</p>
            </div>
            <div className="bento-card col-2" style={{ background: "linear-gradient(135deg,#0d1b2a 0%,#152238 100%)" }}>
              <div className="bento-card-icon teal">{"\u{1F517}"}</div>
              <h3>{siteData.services[3].name}</h3>
              <p>{siteData.services[3].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section">
        <div className="products-inner">
          <div className="section-label" style={{ color: "rgba(99,91,255,.8)" }}>Services</div>
          <h2 className="section-title" style={{ color: "#fff" }}>Everything you need to build and scale.</h2>
          <div className="products-grid">
            
          </div>
        </div>
      </section>

      {/* TABS / USE CASES */}
      <section className="tabs-section">
        <div className="tabs-inner">
          <div className="section-label">Solutions</div>
          <h2 className="section-title">Powering businesses of all sizes.</h2>
          <p className="section-sub">Run your business on software delivery teams that adapt to your roadmap, industry, and scale.</p>
          <div className="tabs-nav">
            {dataTabs.map((t, i) => (
              <button key={i} className={`tab-btn${activeTab === i ? " active" : ""}`} onClick={() => setActiveTab(i)}>{t.label}</button>
            ))}
          </div>
          <div className="tab-panel">
            <div className="tab-panel-text">
              <h3>{dataTabs[activeTab].title}</h3>
              <p>{dataTabs[activeTab].desc}</p>
              <button className="btn-primary" style={{ padding: "12px 24px", fontSize: 14 }}>{dataTabs[activeTab].cta} {"\u2192"}</button>
            </div>
            <div className="tab-panel-visual">
              <MockDashboard type={dataTabs[activeTab].visual} />
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMERS */}
      <section className="customers-section">
        <div className="customers-inner">
          <div className="section-label">Customers</div>
          <h2 className="section-title">Trusted by ambitious product teams and growing businesses.</h2>
          <div className="customers-logos">
            {[...siteData.industries, ...siteData.social_presence].map((c) => (
              <div className="customer-logo" key={c}>{c}</div>
            ))}
          </div>
          <div className="stories-grid">
            {siteData.case_studies.map((s, i) => (
              <div className="story-card" key={i}>
                <div className="story-tag">{s.category} - {s.type}</div>
                <h4>{s.title}</h4>
                <p>{s.description}</p>
                <div className="story-meta">
                  <div className="story-stat"><h5>{siteData.stats.delivered_projects}</h5><span>delivered projects</span></div>
                  <div className="story-stat"><h5>{siteData.stats.client_retention}</h5><span>client retention</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEV SECTION */}
      <section className="dev-section">
        <div className="dev-inner">
          <div className="dev-text">
            <div className="section-label" style={{ color: "rgba(99,91,255,.8)" }}>Developers</div>
            <h2 className="section-title" style={{ color: "#fff" }}>Reliable, extensible infrastructure for every stack.</h2>
            <p className="section-sub" style={{ color: "rgba(255,255,255,.65)" }}>Adapt Code Curo to your business needs with flexible engineering teams, modern stacks, and AI-powered delivery.</p>
            <div className="dev-stats">
              {[
                { val: siteData.stats.technologies, label: "technologies" },
                { val: siteData.stats.tech_domains, label: "tech domains" },
                { val: siteData.stats.clients, label: "clients" },
                { val: siteData.stats.response_time, label: "average response time" }
              ].map((s, i) => (
                <div className="dev-stat" key={i}>
                  <h4>{s.val}</h4>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn-hero-primary" style={{ padding: "11px 22px", fontSize: 14 }}>View developer docs {"\u2192"}</button>
              <button className="btn-hero-ghost" style={{ padding: "11px 22px", fontSize: 14 }}>View GitHub</button>
            </div>
          </div>
          <div>
            <CodeBlock />
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="news-section">
        <div className="news-inner">
          <div className="section-label">What's happening</div>
          <h2 className="section-title">See what clients say about Code Curo.</h2>
          <div className="news-grid">
            {dataNews.map((n, i) => (
              <div className="news-card" key={i}>
                <div className="news-card-thumb" style={{ background: ["linear-gradient(135deg,#0a2540,#1a3a5c)", "linear-gradient(135deg,#1a0a40,#2d1060)", "linear-gradient(135deg,#003d2b,#006644)"][i] }}>
                  <span style={{ fontSize: 56 }}>{n.thumb}</span>
                </div>
                <div className="news-card-body">
                  <div className="news-tag">{n.tag}</div>
                  <h4>{n.title}</h4>
                  <p>{n.desc}</p>
                  <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--stripe-purple)", marginTop: 16 }}>Read more {"\u2192"}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Ready to get started?</h2>
          <p>Contact us to design a software delivery plan for your business.</p>
          <div className="cta-buttons">
            <button className="btn-hero-primary">Start a project {"\u2192"}</button>
            <button className="btn-hero-ghost">Contact sales</button>
          </div>
          <div className="cta-features">
            <div className="cta-feature">
              <h5>Choose a budget</h5>
              <p>{siteData.budget_options.slice(0, 3).join(", ")} and more.</p>
              <a href="#" style={{ fontSize: 13, color: "var(--stripe-teal)", fontWeight: 600, display: "inline-block", marginTop: 8 }}>Pricing details {"\u2192"}</a>
            </div>
            <div className="cta-feature">
              <h5>Start building</h5>
              <p>Get product, design, engineering, QA, and DevOps support from one team.</p>
              <a href="#" style={{ fontSize: 13, color: "var(--stripe-teal)", fontWeight: 600, display: "inline-block", marginTop: 8 }}>Integration options {"\u2192"}</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* MAIN APP */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ai-and-ml" element={<AiAndMlPage />} />
      <Route path="/data-engineering" element={<DataEngineeringPage />} />
      <Route path="/remote-team-extension" element={<RemoteTeamExtensionPage />} />
      <Route path="/mvp-development" element={<MvpDevelopmentPage />} />
      <Route path="/web-development" element={<WebDevelopmentPage />} />
      <Route path="/devops-services" element={<DevOpsPage />} />
    </Routes>
  );
}
