import Header from "../Header";
import Footer from "../Footer";
import siteData from "../../codeCuroData.json";

const featuredStudies = [
  {
    category: "Logistics",
    title: "Port Operations Management System",
    summary: "Code Curo built a mobile-first system that automated port operations, improved real-time tracking, and delivered measurable productivity and cost gains.",
    impact: "22% productivity lift",
    service: "Mobile, Backend, QA, DevOps",
    url: "https://fiftyfivetech.io/portfolio/port-automation/"
  },
  {
    category: "Smart City",
    title: "Dubai Smart City Municipal Waste Management System",
    summary: "An AI-powered waste management system optimized collection routes, reduced fuel usage, classified street waste, and enabled real-time city alerts.",
    impact: "Route optimization",
    service: "AI, IoT, Data Engineering",
    url: "https://fiftyfivetech.io/waste-management-system/"
  },
  {
    category: "AI Vision",
    title: "Mobile Damage Detection System",
    summary: "A mobile app used AI and image processing to detect screen and back-panel damage, classify severity, and improve fraud prevention.",
    impact: "Automated inspection",
    service: "AI/ML, Mobile, Cloud",
    url: "https://fiftyfivetech.io/mobile-damage-detection-system/"
  },
  {
    category: "Fleet Tech",
    title: "Transportation Fleet Management Platform",
    summary: "A cloud-based fleet platform improved real-time vehicle monitoring, global telemetry accuracy, streaming throughput, and system uptime.",
    impact: "90% downtime reduction",
    service: "Backend, Data, DevOps",
    url: "https://fiftyfivetech.io/fleet-management/"
  },
  {
    category: "AI Operations",
    title: "Customer Service Operations AI Platform",
    summary: "Code Curo delivered queue analysis, NLP-powered reports, BI dashboards, and automation pipelines for large-scale customer service operations.",
    impact: "35% fewer abandoned calls",
    service: "AI/ML, Cloud, Automation",
    url: "https://fiftyfivetech.io/customer-service-with-ai/"
  },
  {
    category: "Data Platform",
    title: "SaaS Development for Data Management",
    summary: "A unified SaaS data platform integrated diverse sources, automated processing, strengthened governance, and reduced release cycles.",
    impact: "60% faster releases",
    service: "Data, SaaS, Cloud",
    url: "https://fiftyfivetech.io/data-management-platform/"
  },
  {
    category: "FinTech",
    title: "Sweden FinTech Investment Platform",
    summary: "A Swedish investment platform was modernized with improved scalability, backend integrations, QA automation, and faster feature delivery.",
    impact: "Full-cycle modernization",
    service: "Web, Backend, QA",
    url: "https://fiftyfivetech.io/investment-platform/"
  },
  {
    category: "Payments",
    title: "File Integrity Monitoring for Payment Platforms",
    summary: "A cloud-native monitoring system protected payment-critical files, improved compliance readiness, and reduced operational risk.",
    impact: "Compliance-ready monitoring",
    service: "AWS, Security, DevOps",
    url: "https://fiftyfivetech.io/monitoring-solutions-for-payment-platforms/"
  },
  {
    category: "Food Tech",
    title: "Smart Restaurant Solution",
    summary: "A restaurant operations platform improved POS integrations, third-party delivery connectivity, performance, and customer experience.",
    impact: "Operational efficiency",
    service: "QA, Integrations, Web",
    url: "https://fiftyfivetech.io/smart-restaurant-solution/"
  },
  {
    category: "SaaS",
    title: "SaaS Platform Modernization",
    summary: "A legacy SaaS product moved toward microservices, cloud infrastructure, and API-driven integrations for stronger performance and lower costs.",
    impact: "40% reduced downtime",
    service: ".NET, Vue, Cloud",
    url: "https://fiftyfivetech.io/saas-modernization/"
  },
  {
    category: "Healthcare",
    title: "Custom Healthcare Booking Platform",
    summary: "A self-service healthcare booking platform connected payments, clinic APIs, order workflows, and result delivery automation.",
    impact: "70% less manual work",
    service: "Web, API, Automation",
    url: "https://fiftyfivetech.io/custom-healthcare-booking-platform/"
  },
  {
    category: "Enterprise",
    title: "Data Engineering Portfolio",
    summary: "Portfolio work across data pipelines, analytics, cloud systems, and scalable software products for growing business operations.",
    impact: "Insight-ready systems",
    service: "Data Engineering",
    url: "https://fiftyfivetech.io/portfolio/"
  }
];

const portfolioServices = [
  {
    name: "Data Engineering",
    text: "Pipelines, analytics, warehouses, and insight-ready systems.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "MVP Development",
    text: "Lean product builds that validate ideas and reach market faster.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Mobile App Development",
    text: "Native and cross-platform apps with polished user flows.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Web App Development",
    text: "Scalable web apps built for growth, usability, and performance.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Game Development",
    text: "Interactive digital products with engaging real-time experiences.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "DevOps & Cloud",
    text: "Automated infrastructure, CI/CD, observability, and cloud scale.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Software Testing & QA",
    text: "Manual and automated testing for stable, confident releases.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Blockchain",
    text: "Secure decentralized workflows, integrations, and digital systems.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Front-end",
    text: "Responsive interfaces that help users move through products easily.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Back-end",
    text: "APIs, databases, authentication, and business logic that power apps.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Legacy Modernisation",
    text: "Modern architecture for older systems that need new momentum.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Remote Team Extension",
    text: "Dedicated engineers who plug into your delivery workflow.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
  }
];

const stats = [
  { value: "300+", label: "IT Professionals" },
  { value: "40+", label: "Tech Domains" },
  { value: "1100+", label: "Delivered Projects" },
  { value: "91%", label: "Client Retention" }
];

const serviceUrlByName = siteData.services.reduce((services, service) => {
  services[service.name] = service.url;
  return services;
}, {});

const portfolioServiceAliases = {
  "Mobile App Development": "Mobile Development",
  "Web App Development": "Web Development",
  "Game Development": "Custom Software Development",
  "DevOps & Cloud": "DevOps Services",
  "Software Testing & QA": "QA & Software Testing",
  Blockchain: "Custom Software Development",
  "Front-end": "Web Development",
  "Back-end": "Back-End Development",
  "Legacy Modernisation": "Custom Software Development"
};

const getPortfolioServiceUrl = (name) => serviceUrlByName[name] || serviceUrlByName[portfolioServiceAliases[name]] || "#case-study-grid";

export default function CaseStudyPage() {
  return (
    <>
      <Header />

      <main className="web-page case-study-page">
        <section className="web-hero case-study-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">Case Studies</div>
              <h1 className="web-hero-title fade-up fade-up-d1">
                We are doing cool projects across products, platforms, AI, cloud, and data.
              </h1>
              <p className="web-hero-sub fade-up fade-up-d2">
                Explore Code Curo work shaped by a passion for innovation, practical engineering, and measurable outcomes.
                Each block opens the related case-study page.
              </p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Start a project</a>
                <a className="web-secondary-link" href="#case-study-grid">View case studies {"\u2192"}</a>
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
                  <span>Portfolio snapshot</span>
                </div>

                <div className="web-metric-grid">
                  {stats.map((item) => (
                    <div className="web-metric-card" key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="case-study-service-cloud">
                  {portfolioServices.slice(0, 8).map((item) => (
                    <span key={item.name}>{item.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities case-study-services">
          <div className="section-inner">
            <div className="section-label">Portfolio Categories</div>
            <h2 className="section-title">From MVPs and mobile apps to DevOps, QA, blockchain, backend, and team extension.</h2>
            <p className="section-sub">
              The source portfolio groups work into practical delivery areas. This page keeps that structure while presenting the work in a cleaner Code Curo case-study experience.
            </p>

            <div className="case-study-category-grid">
              {portfolioServices.map((item) => (
                <a
                  className="case-study-category-card"
                  href={getPortfolioServiceUrl(item.name)}
                  target={getPortfolioServiceUrl(item.name).startsWith("/") ? undefined : "_blank"}
                  rel={getPortfolioServiceUrl(item.name).startsWith("/") ? undefined : "noreferrer"}
                  key={item.name}
                >
                  <div className="case-study-category-media">
                    <img src={item.image} alt="" loading="lazy" />
                  </div>
                  <div className="case-study-category-body">
                    <strong>{item.name}</strong>
                    <p>{item.text}</p>
                    <em>Explore work {"\u2192"}</em>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="web-stories" id="case-study-grid">
          <div className="section-inner">
            <div className="section-label">Featured Work</div>
            <h2 className="section-title">Pretty blocks, real outcomes, and direct links into the full case studies.</h2>

            <div className="web-story-grid case-study-grid">
              {featuredStudies.map((item, index) => (
                <a
                  className={`web-story-card case-study-card tone-${index % 4}`}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  key={item.title}
                >
                  <div className="web-story-top">
                    <span className="web-story-type">{item.category}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <div className="case-study-card-footer">
                    <span>{item.impact}</span>
                    <span>{item.service}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="web-cta-strip case-study-cta">
          <div className="web-cta-inner">
            <div>
              <div className="section-label">Launch Your MVP</div>
              <h2>Start building your product, platform, automation flow, or offshore team with Code Curo.</h2>
            </div>
            <div className="web-cta-actions">
              <a className="btn-primary" href="mailto:sales@codecuro.in">Book a free PoC</a>
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
