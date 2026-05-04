import { useEffect, useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import siteData from "./codeCuroData.json";
import "./App.css";
import AiAndMlPage from "./Components/Services/Ai&Ml";
import DataEngineeringPage from "./Components/Services/DataEngineering";
import RemoteTeamExtensionPage from "./Components/Services/RemoteTeamExtension";
import MvpDevelopmentPage from "./Components/Services/MvpDevelopment";
import WebDevelopmentPage from "./Components/Services/WebDevelopment";
import BackEndDevelopmentPage from "./Components/Services/BackEndDevelopment";
import DevOpsPage from "./Components/Services/devops";
import UiUxPage from "./Components/Services/Ui-Ux";
import MobileDevelopmentPage from "./Components/Services/MobileDevelopment";
import QaSoftwareTestingPage from "./Components/Services/QaSoftwareTesting";
import AutomationPromptEngineeringPage from "./Components/Services/AutomationPromptEngineering";
import RemoteTeamPage from "./Components/Services/RemoteTeam";
import CaseStudyPage from "./Components/Resources/CaseStudy";
import FintechPage from "./Components/Industries/Fintech";
import HealthCarePage from "./Components/Industries/HealthCare";
import ManufacturingPage from "./Components/Industries/Manufacturing";
import EcommercePage from "./Components/Industries/Ecommerce";
import LogisticsPage from "./Components/Industries/Logistics";
import EdTechPage from "./Components/Industries/EdTech";
import GamingPage from "./Components/Industries/Gaming";
import ReactDeveloperPage from "./Components/Hire-Developer/Frontend/ReactDeveloper";
import NextDeveloperPage from "./Components/Hire-Developer/Frontend/NextDeveloper";
import ShopifyDeveloperPage from "./Components/Hire-Developer/Frontend/ShopifyDeveloper";
import ServiceNowDeveloperPage from "./Components/Hire-Developer/Frontend/ServiceNowDeveloper";
import VueDeveloperPage from "./Components/Hire-Developer/Frontend/VueDeveloper";
import AngularDeveloperPage from "./Components/Hire-Developer/Frontend/AngularDeveloper";
import JavaScriptDeveloperPage from "./Components/Hire-Developer/Frontend/JavaScriptDeveloper";
import RubyOnRailsDeveloperPage from "./Components/Hire-Developer/Backend/RubyOnRailsDeveloper";
import DevOpsDeveloperPage from "./Components/Hire-Developer/Backend/DevOpsDeveloper";
import PhpDeveloperPage from "./Components/Hire-Developer/Backend/PhpDeveloper";
import DotNetDeveloperPage from "./Components/Hire-Developer/Backend/DotNetDeveloper";
import JavaDeveloperPage from "./Components/Hire-Developer/Backend/JavaDeveloper";
import GolangDeveloperPage from "./Components/Hire-Developer/Backend/GolangDeveloper";
import PythonDeveloperPage from "./Components/Hire-Developer/Backend/PythonDeveloper";
import NodeDeveloperPage from "./Components/Hire-Developer/Backend/NodeDeveloper";
import UnityDeveloperPage from "./Components/Hire-Developer/Backend/UnityDeveloper";
import UnrealDeveloperPage from "./Components/Hire-Developer/Backend/UnrealDeveloper";
import IosDeveloperPage from "./Components/Hire-Developer/Mobile/IosDeveloper";
import SwiftDeveloperPage from "./Components/Hire-Developer/Mobile/SwiftDeveloper";
import KotlinDeveloperPage from "./Components/Hire-Developer/Mobile/KotlinDeveloper";
import FlutterDeveloperPage from "./Components/Hire-Developer/Mobile/FlutterDeveloper";
import AndroidDeveloperPage from "./Components/Hire-Developer/Mobile/AndroidDeveloper";
import ReactNativeDeveloperPage from "./Components/Hire-Developer/Mobile/ReactNativeDeveloper";
import PythonAICloudDeveloperPage from "./Components/Hire-Developer/AI-Cloud/PythonAICloudDeveloper";
import AIMLDeveloperPage from "./Components/Hire-Developer/AI-Cloud/AIMLDeveloper";
import DataEngineerPage from "./Components/Hire-Developer/AI-Cloud/DataEngineer";
import GcpDeveloperPage from "./Components/Hire-Developer/AI-Cloud/GcpDeveloper";
import AwsDeveloperPage from "./Components/Hire-Developer/AI-Cloud/AwsDeveloper";
import AzureDeveloperPage from "./Components/Hire-Developer/AI-Cloud/AzureDeveloper";
import DataAnalystPage from "./Components/Hire-Developer/AI-Cloud/DataAnalyst";
import MLOpsEngineerPage from "./Components/Hire-Developer/AI-Cloud/MLOpsEngineer";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const statLabels = {
  it_professionals: "IT professionals",
  tech_domains: "tech domains",
  delivered_projects: "delivered projects",
  client_retention: "client retention",
  response_time: "average response time"
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

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

  const serviceImages = [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80"
  ];

  const bentoAccents = [
    "#7c5cff",
    "#00d4ff",
    "#00b884",
    "#ff9d57",
    "#ff6b8a",
    "#56ccf2",
    "#8b5cf6",
    "#22c55e",
    "#f59e0b",
    "#14b8a6",
    "#3b82f6",
    "#ef4444"
  ];

  const dataProducts = siteData.services.map((service, index) => ({
    name: service.name,
    desc: service.description || `Explore ${service.name.toLowerCase()} services from ${siteData.company.name}.`,
    url: service.url,
    image: serviceImages[index % serviceImages.length],
    accent: bentoAccents[index % bentoAccents.length],
    cardClass: index === 0 || index === 4 ? "bento-card col-2" : "bento-card"
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
            {dataProducts.map((service, index) => {
              const cardContent = (
                <>
                  <div className="bento-card-bg" />
                  <img className="bento-card-image" src={service.image} alt="" loading="lazy" />
                  <div className="bento-card-shade" />
                  <div className="bento-card-tag" style={{ color: service.accent }}>
                    {siteData.domains[index % siteData.domains.length]}
                  </div>
                  <h3>{service.name}</h3>
                  <p>{service.desc}</p>
                  <span className="bento-card-link">Explore service {"\u2192"}</span>
                </>
              );

              return service.url?.startsWith("/") ? (
                <Link className={service.cardClass} to={service.url} key={service.name}>
                  {cardContent}
                </Link>
              ) : (
                <a
                  className={service.cardClass}
                  href={service.url}
                  target="_blank"
                  rel="noreferrer"
                  key={service.name}
                >
                  {cardContent}
                </a>
              );
            })}
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
              <div className="customer-logo" key={typeof c === "string" ? c : c.label}>
                {typeof c === "string" ? c : c.label}
              </div>
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
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-and-ml" element={<AiAndMlPage />} />
        <Route path="/data-engineering" element={<DataEngineeringPage />} />
        <Route path="/remote-team-extension" element={<RemoteTeamExtensionPage />} />
        <Route path="/remote-team" element={<RemoteTeamPage />} />
        <Route path="/mvp-development" element={<MvpDevelopmentPage />} />
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/back-end-development" element={<BackEndDevelopmentPage />} />
        <Route path="/devops-services" element={<DevOpsPage />} />
        <Route path="/ui-ux" element={<UiUxPage />} />
        <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
        <Route path="/QA-software-testing" element={<QaSoftwareTestingPage />} />
        <Route path="/qa-software-testing" element={<QaSoftwareTestingPage />} />
        <Route path="/automation-prompt-engineering" element={<AutomationPromptEngineeringPage />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
        <Route path="/case-studies" element={<CaseStudyPage />} />
        <Route path="/fintech" element={<FintechPage />} />
        <Route path="/healthcare" element={<HealthCarePage />} />
        <Route path="/manufacturing" element={<ManufacturingPage />} />
        <Route path="/ecommerce" element={<EcommercePage />} />
        <Route path="/e-commerce" element={<EcommercePage />} />
        <Route path="/logistics" element={<LogisticsPage />} />
        <Route path="/edtech" element={<EdTechPage />} />
        <Route path="/gaming" element={<GamingPage />} />
        <Route path="/next-js-developer" element={<NextDeveloperPage />} />
        <Route path="/shopify-developer" element={<ShopifyDeveloperPage />} />
        <Route path="/service-now-developer" element={<ServiceNowDeveloperPage />} />
        <Route path="/vue-js-developer" element={<VueDeveloperPage />} />
        <Route path="/react-developer" element={<ReactDeveloperPage />} />
        <Route path="/angular-developer" element={<AngularDeveloperPage />} />
        <Route path="/javascript-developer" element={<JavaScriptDeveloperPage />} />
        <Route path="/ruby-on-rails-developer" element={<RubyOnRailsDeveloperPage />} />
        <Route path="/devops-developer" element={<DevOpsDeveloperPage />} />
        <Route path="/php-developer" element={<PhpDeveloperPage />} />
        <Route path="/dot-net-developer" element={<DotNetDeveloperPage />} />
        <Route path="/java-developer" element={<JavaDeveloperPage />} />
        <Route path="/golang-developer" element={<GolangDeveloperPage />} />
        <Route path="/python-developer" element={<PythonDeveloperPage />} />
        <Route path="/node-js-developer" element={<NodeDeveloperPage />} />
        <Route path="/unity-developer" element={<UnityDeveloperPage />} />
        <Route path="/unreal-developer" element={<UnrealDeveloperPage />} />
        <Route path="/ios-developer" element={<IosDeveloperPage />} />
        <Route path="/swift-developer" element={<SwiftDeveloperPage />} />
        <Route path="/kotlin-developer" element={<KotlinDeveloperPage />} />
        <Route path="/flutter-developer" element={<FlutterDeveloperPage />} />
        <Route path="/android-developer" element={<AndroidDeveloperPage />} />
        <Route path="/react-native-developer" element={<ReactNativeDeveloperPage />} />
        <Route path="/python-ai-cloud-developer" element={<PythonAICloudDeveloperPage />} />
        <Route path="/ai-ml-developer" element={<AIMLDeveloperPage />} />
        <Route path="/data-engineer" element={<DataEngineerPage />} />
        <Route path="/gcp-developer" element={<GcpDeveloperPage />} />
        <Route path="/aws-developer" element={<AwsDeveloperPage />} />
        <Route path="/azure-developer" element={<AzureDeveloperPage />} />
        <Route path="/data-analyst" element={<DataAnalystPage />} />
        <Route path="/mlops-engineer" element={<MLOpsEngineerPage />} />
      </Routes>
    </>
  );
}
