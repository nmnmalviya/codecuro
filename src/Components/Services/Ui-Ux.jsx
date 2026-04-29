import Header from "../Header";
import Footer from "../Footer";

const designCapabilities = [
  {
    eyebrow: "User Experience",
    title: "Interfaces designed for engagement, retention, and clear user journeys",
    text: "We shape product flows around the people using them, with navigation, hierarchy, and interaction patterns that make complex work feel simple."
  },
  {
    eyebrow: "Responsive UI",
    title: "Responsive design and development across modern web experiences",
    text: "Layouts are planned for desktop, tablet, and mobile from the start so users get a polished, dependable experience on every screen."
  },
  {
    eyebrow: "Frontend Stack",
    title: "React, Angular, Vue.js, JavaScript, performance, and scalability",
    text: "Design decisions connect cleanly to implementation, giving engineering teams a practical UI foundation for fast, maintainable delivery."
  }
];

const designProcess = [
  {
    step: "01",
    title: "Discovery and Requirements Gathering",
    text: "We clarify goals, audience, product scope, core features, desired experience, technical needs, and any brand or design preferences."
  },
  {
    step: "02",
    title: "UI/UX Design and Prototyping",
    text: "We create wireframes, mockups, and interactive prototypes to test user flow, navigation, layout direction, and brand consistency early."
  },
  {
    step: "03",
    title: "Frontend Development",
    text: "Approved designs are converted into clean, responsive interfaces using React, Angular, Vue.js, and modern JavaScript best practices."
  },
  {
    step: "04",
    title: "Testing and Quality Assurance",
    text: "We validate functionality, cross-browser behavior, performance, responsiveness, and user acceptance before the product goes live."
  },
  {
    step: "05",
    title: "Deployment and Launch",
    text: "Once approved, we deploy to the chosen environment and set up the monitoring and analytics support needed for a smooth launch."
  },
  {
    step: "06",
    title: "Maintenance and Support",
    text: "After launch, we support bug fixes, security updates, performance tuning, and future UI or feature enhancements."
  }
];

const frontendProjects = [
  {
    type: "Travel UX",
    title: "Ferry Booking System",
    text: "A modernized ferry booking system with a cleaner and more intuitive interface.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
  },
  {
    type: "FinTech",
    title: "FinTech Platform",
    text: "A Swedish fintech platform enhanced with new frontend features and improved user flows.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
  },
  {
    type: "GovTech Workflow",
    title: "Automated Visa",
    text: "Visa status checks and alert workflows redesigned for smoother digital operations.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
  },
  {
    type: "CMS Platform",
    title: "Content Management",
    text: "A scalable web platform with CMS functionality and user-focused frontend delivery.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
  },
  {
    type: "Legacy Upgrade",
    title: "Upgrading .NET to Vue 3",
    text: "A legacy .NET platform successfully migrated into a modern Vue 3 frontend.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80"
  },
  {
    type: "SaaS Care",
    title: "SaaS Platform",
    text: "Ongoing platform maintenance and UI improvements for a Swedish SaaS client.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
  },
  {
    type: "Operations Portal",
    title: "Customer Portal",
    text: "A customer portal that streamlined internal operations and service workflows.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
  },
  {
    type: "Service Experience",
    title: "Contact Centre Solution",
    text: "A contact centre interface built to improve customer service visibility and flow.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=900&q=80"
  },
  {
    type: "IoT Interface",
    title: "IoT for HVAC Devices",
    text: "Scalable IoT interfaces for managing HVAC devices and connected systems.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
  },
  {
    type: "Automation UI",
    title: "Data Automation",
    text: "A platform refresh focused on better performance, scalability, and interface quality.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
  },
  {
    type: "AI Product",
    title: "AI Presentation Tool",
    text: "A fast presentation creation tool with an efficient and user-friendly workflow.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80"
  },
  {
    type: "Finance AI",
    title: "Finance Assistant",
    text: "An AI finance assistant that improves data interaction and user experience.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80"
  }
];

const onboardingSteps = [
  {
    title: "Profile Selection & Interview",
    text: "Review frontend and UI profiles, then interview developers or designers for skill, communication, and culture fit."
  },
  {
    title: "2 Weeks Free POC",
    text: "Run a focused two-week sprint to validate collaboration, delivery quality, and design-to-development execution."
  },
  {
    title: "Easy Onboard",
    text: "Bring the selected team into your product rituals, design files, codebase, communication tools, and delivery roadmap."
  }
];

const commercialCards = [
  { price: "USD 10K - 20K", title: "Mobile based MVP", timeline: "8 to 10 Weeks" },
  { price: "USD 20K - 25K", title: "Booking App", timeline: "12 to 15 Weeks" },
  { price: "USD 25K - 30K", title: "Business automation / Sales channel", timeline: "15 Weeks above" }
];

export default function UiUxPage() {
  return (
    <>
      <Header />

      <main className="web-page">
        <section className="web-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">UI/UX and Front-end Development</div>
              <h1 className="web-hero-title fade-up fade-up-d1">
                Design responsive product experiences that look polished and work beautifully.
              </h1>
              <p className="web-hero-sub fade-up fade-up-d2">
                We combine UI/UX design, prototyping, modern frontend engineering, performance optimization, testing,
                deployment, and support to build intuitive digital experiences for business applications.
              </p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Book a Free POC</a>
                <a className="web-secondary-link" href="https://codecuro.in/front-end/" target="_blank" rel="noreferrer">
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
                  <span>Experience delivery overview</span>
                </div>

                <div className="web-metric-grid">
                  <div className="web-metric-card">
                    <span>Design</span>
                    <strong>Wireframes + UI</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Prototype</span>
                    <strong>User flows</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Frontend</span>
                    <strong>React / Angular / Vue</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Quality</span>
                    <strong>QA + Performance</strong>
                  </div>
                </div>

                <div className="web-flow">
                  <div className="web-flow-node">Research + requirements</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node accent">Prototype + validate</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Frontend build</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Launch + improve</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">Front-end Solutions</div>
            <h2 className="section-title">A full design-to-frontend workflow for responsive, intuitive product interfaces.</h2>
            <p className="section-sub">
              The source page focuses on front-end development services with strong UI/UX coverage, including user
              engagement, responsive design, JavaScript frameworks, performance, scalability, and CI/CD readiness.
            </p>

            <div className="web-capability-grid">
              {designCapabilities.map((item) => (
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
            <div className="section-label" style={{ color: "rgba(99,91,255,.82)" }}>Development Process</div>
            <h2 className="section-title" style={{ color: "#fff" }}>From discovery and prototypes to launch, QA, and continuous support.</h2>
            <div className="web-process-grid">
              {designProcess.map((item) => (
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
            <div className="section-label">Our Front-end Projects</div>
            <h2 className="section-title">High-quality, user-focused frontend work across booking, fintech, SaaS, IoT, AI, and operations platforms.</h2>
            <div className="web-story-grid">
              {frontendProjects.map((item, index) => (
                <article className={`web-story-card ui-project-card tone-${index % 4}`} key={item.title}>
                  <img className="ui-project-card-image" src={item.image} alt="" loading="lazy" />
                  <div className="ui-project-card-body">
                    <div className="web-story-top">
                      <span className="web-story-type">{item.type}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-onboarding">
          <div className="section-inner">
            <div className="section-label">Easy Onboarding Process</div>
            <h2 className="section-title">Hire UI/UX, frontend, and product-interface talent with a simple POC-led start.</h2>
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
              <div className="section-label">Ready To Design</div>
              <h2>Need UI/UX design, frontend engineering, responsive screens, QA, and launch support in one workflow?</h2>
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
