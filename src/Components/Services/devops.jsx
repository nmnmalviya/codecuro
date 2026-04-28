import Header from "../Header";
import Footer from "../Footer";

const devopsCapabilities = [
  {
    eyebrow: "Cloud Platforms",
    title: "AWS, Azure, GCP, and private cloud infrastructure",
    text: "Design and operate cloud-native environments with the right balance of scalability, governance, security, and cost control."
  },
  {
    eyebrow: "Automation",
    title: "CI/CD pipelines with Docker, Kubernetes, and Jenkins",
    text: "Automate build, test, package, release, and rollback workflows so teams can ship faster with fewer manual handoffs."
  },
  {
    eyebrow: "Reliability",
    title: "Monitoring, migration support, and vulnerability management",
    text: "Improve uptime, observability, cloud migration readiness, and security posture with ongoing performance optimization."
  }
];

const devopsProcess = [
  {
    step: "01",
    title: "Continuous Development",
    text: "We use iterative development practices that connect integration, testing, delivery, and deployment into a faster software delivery cycle."
  },
  {
    step: "02",
    title: "Continuous Integration",
    text: "Code changes are merged into shared repositories and automatically validated, reducing integration bottlenecks across distributed teams."
  },
  {
    step: "03",
    title: "Continuous Testing",
    text: "Automated testing verifies code behavior early and repeatedly, helping teams catch issues before they reach live environments."
  },
  {
    step: "04",
    title: "Continuous Monitoring and Feedback",
    text: "Monitoring systems provide real-time insight into performance, reliability, and user impact throughout the deployment pipeline."
  },
  {
    step: "05",
    title: "Continuous Delivery",
    text: "Builds are prepared, tested, packaged, and kept production-ready so approved releases can move live quickly and sustainably."
  },
  {
    step: "06",
    title: "Continuous Deployment",
    text: "For mature systems, validated changes can be released automatically to shorten feedback loops and remove scheduled release friction."
  }
];

const devopsStories = [
  { type: "Cloud Platform", title: "Restaurant Automation", text: "AI-powered restaurant management system supported by scalable cloud infrastructure." },
  { type: "Content Platform", title: "Content Management", text: "Cloud-backed content workflows for user-friendly mobile and web experiences." },
  { type: "Game Delivery", title: "Samurai Snake Game", text: "Docker, Azure DevOps, Unity, and Fastlane pipelines for efficient Android releases." },
  { type: "Parts Portal", title: "Parts Automation", text: "Automated spare-parts portal with cloud deployment and operational workflow support." },
  { type: "Operations Suite", title: "Customer Portal", text: "Unified customer portal for operations using Docker, Azure DevOps, Kubernetes, Helm, and traffic monitoring." },
  { type: "AWS Monitoring", title: "Payment Monitoring", text: "Secure AWS-based file monitoring designed for dependable transaction visibility." },
  { type: "Booking System", title: "Playground Booking", text: "Automated playground reservation platform with deployment support for stable releases." },
  { type: "Accounting SaaS", title: "Accounting Solutions", text: "Cloud-based paperless accounting workflows with OCR, document management, and third-party integrations." },
  { type: "AI Training", title: "Cricket Coaching", text: "Real-time cricket training platform powered by AI and cloud delivery practices." },
  { type: "Enterprise SRE", title: "Synthetic Monitoring", text: "Enterprise synthetic monitoring that transforms website reliability through automation." }
];

const onboardingSteps = [
  {
    title: "Profile Selection & Interview",
    text: "Interview candidates to validate cloud, DevOps, communication, and culture fit before the engagement starts."
  },
  {
    title: "2 Weeks Free POC",
    text: "Run one complete sprint for two weeks to assess delivery quality, collaboration, and operational maturity."
  },
  {
    title: "Easy Onboard",
    text: "Bring DevOps engineers into your tools, ceremonies, cloud environments, and roadmap with a smooth ramp-up."
  }
];

const commercialCards = [
  { price: "USD 10K - 20K", title: "Mobile based MVP", timeline: "8 to 10 Weeks" },
  { price: "USD 20K - 25K", title: "Booking App", timeline: "12 to 15 Weeks" },
  { price: "USD 25K - 30K", title: "Business automation / Sales channel", timeline: "15 Weeks above" }
];

export default function DevOpsPage() {
  return (
    <>
      <Header />

      <main className="web-page">
        <section className="web-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">DevOps & Cloud</div>
              <h1 className="web-hero-title fade-up fade-up-d1">
                Accelerate releases with cloud infrastructure that is automated, observable, and secure.
              </h1>
              <p className="web-hero-sub fade-up fade-up-d2">
                We integrate automation tools and cloud technologies to streamline software delivery, improve security,
                optimize performance, and support scalable product growth.
              </p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Book a Free POC</a>
                <a className="web-secondary-link" href="https://fiftyfivetech.io/devops-and-cloud/" target="_blank" rel="noreferrer">
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
                  <span>Cloud delivery overview</span>
                </div>

                <div className="web-metric-grid">
                  <div className="web-metric-card">
                    <span>Cloud</span>
                    <strong>AWS / Azure / GCP</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Containers</span>
                    <strong>Docker / Kubernetes</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Automation</span>
                    <strong>CI/CD + IaC</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Reliability</span>
                    <strong>Monitor + Secure</strong>
                  </div>
                </div>

                <div className="web-flow">
                  <div className="web-flow-node">Code commit</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node accent">Build + test pipeline</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Container release</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Cloud deploy + monitor</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">Our Solutions</div>
            <h2 className="section-title">DevOps and cloud systems for faster releases, stronger security, and better resource use.</h2>
            <p className="section-sub">
              From CI/CD and containers to cloud migration, monitoring, and vulnerability management, the service is built
              around practical automation that helps teams release with confidence.
            </p>

            <div className="web-capability-grid">
              {devopsCapabilities.map((item) => (
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
            <div className="section-label" style={{ color: "rgba(99,91,255,.82)" }}>DevOps Process Flow</div>
            <h2 className="section-title" style={{ color: "#fff" }}>A continuous delivery model from development through deployment and feedback.</h2>
            <div className="web-process-grid">
              {devopsProcess.map((item) => (
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
            <div className="section-label">DevOps and Cloud Case Studies</div>
            <h2 className="section-title">Cloud automation work across SaaS, operations, payments, games, and monitoring platforms.</h2>
            <div className="web-story-grid">
              {devopsStories.map((item, index) => (
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
            <h2 className="section-title">Hire DevOps and cloud engineers through a clear interview, POC, and onboarding flow.</h2>
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
              <div className="section-label">Ready To Launch</div>
              <h2>Need CI/CD, cloud migration, Kubernetes, monitoring, or secure release automation for your product?</h2>
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
