import Header from "../Header";
import Footer from "../Footer";

const healthcareCapabilities = [
  {
    eyebrow: "AI Health Insights",
    title: "Personalized recommendations from secure patient data",
    text: "Design AI-assisted health experiences that use symptoms, cycles, history, and behavior patterns to generate useful guidance."
  },
  {
    eyebrow: "Mobile Health",
    title: "Cross-platform apps for iOS and Android users",
    text: "Build Flutter-based healthcare products with smooth navigation, state management, symptom tracking, reminders, and patient-friendly flows."
  },
  {
    eyebrow: "Secure Cloud",
    title: "Privacy-first storage and backend systems",
    text: "Use secure cloud storage, fraud protection, role controls, audit-friendly architecture, and scalable APIs for sensitive healthcare workflows."
  }
];

const healthcareFeatures = [
  "AI-powered menstrual health insights and personalized recommendations",
  "Cycle, symptom, mood, medication, and lifestyle tracking",
  "Secure Firebase-backed storage for sensitive health records",
  "Flutter mobile app delivery for iOS and Android",
  "Node.js backend services for data, users, and integrations",
  "Fraud protection, privacy controls, and scalable MVP architecture"
];

const deliveryProcess = [
  {
    step: "01",
    title: "Healthcare discovery and privacy mapping",
    text: "We define patient journeys, clinical-adjacent workflows, sensitive data points, security expectations, and MVP success metrics."
  },
  {
    step: "02",
    title: "UX, AI, and data model design",
    text: "We shape symptom logs, health timelines, recommendation logic, app navigation, state management, and secure data structures."
  },
  {
    step: "03",
    title: "Mobile and backend development",
    text: "We build the Flutter app, backend APIs, cloud storage, fraud controls, and AI integration with a release-ready engineering workflow."
  },
  {
    step: "04",
    title: "QA, launch, and improvement loops",
    text: "We test user flows, privacy-sensitive data handling, performance, recommendation quality, and post-launch engagement improvements."
  }
];

const successStories = [
  {
    type: "Women's Health AI",
    title: "AI-based menstrual health MVP",
    text: "A cross-platform app helped users track cycles, log symptoms, and receive personalized AI-powered health insights."
  },
  {
    type: "Mobile Health",
    title: "Flutter app for iOS and Android",
    text: "One shared mobile codebase delivered a consistent healthcare experience across both major mobile platforms."
  },
  {
    type: "Secure Cloud",
    title: "Privacy-first health data storage",
    text: "Firebase-backed storage and structured data handling supported sensitive health records with scalable cloud foundations."
  },
  {
    type: "AI Assistant",
    title: "Personalized recommendation engine",
    text: "LLM-powered guidance helped convert symptom and cycle data into more contextual wellness recommendations."
  },
  {
    type: "Fraud Protection",
    title: "Safer account and form interactions",
    text: "Captcha and validation controls helped reduce fraudulent access paths and protect sensitive user workflows."
  },
  {
    type: "Healthcare MVP",
    title: "Market-ready health tech foundation",
    text: "The MVP architecture gave the client a scalable base for user engagement, retention, and future healthcare features."
  }
];

const metrics = [
  { label: "Platform", value: "iOS + Android" },
  { label: "AI Layer", value: "LLM Insights" },
  { label: "Cloud Storage", value: "Firebase" },
  { label: "Backend", value: "Node.js" }
];

export default function HealthCarePage() {
  return (
    <>
      <Header />

      <main className="web-page healthcare-page">
        <section className="web-hero healthcare-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">Healthcare Industry</div>
              <h1 className="web-hero-title fade-up fade-up-d1">
                Build secure healthcare apps that turn personal health data into useful AI-powered guidance.
              </h1>
              <p className="web-hero-sub fade-up fade-up-d2">
                Code Curo builds healthcare products for symptom tracking, patient engagement, AI recommendations,
                secure records, mobile-first care journeys, and scalable health-tech MVPs.
              </p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Build a healthcare app</a>
                <a className="web-secondary-link" href="#healthcare-stories">View healthcare stories {"\u2192"}</a>
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
                  <span>Health app intelligence layer</span>
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
                  <div className="web-flow-node">Cycle and symptom logs</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node accent">AI recommendation engine</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Secure cloud profile</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Personalized health insight</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">Healthcare Solutions</div>
            <h2 className="section-title">AI-enabled health platforms designed for privacy, usability, and long-term engagement.</h2>
            <p className="section-sub">
              Based on the women's health AI case study, this page focuses on healthcare mobile apps, secure data
              handling, personalized recommendations, fraud protection, and scalable MVP delivery.
            </p>

            <div className="web-capability-grid">
              {healthcareCapabilities.map((item) => (
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
            <h2 className="section-title" style={{ color: "#fff" }}>Mobile health systems with AI insights, secure records, and patient-friendly experiences.</h2>
            <div className="healthcare-feature-grid">
              {healthcareFeatures.map((item) => (
                <article className="healthcare-feature-card" key={item}>
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
            <h2 className="section-title">A practical path from healthcare idea to secure AI-powered MVP.</h2>
            <div className="web-process-grid healthcare-process-grid">
              {deliveryProcess.map((item) => (
                <article className="web-process-card healthcare-process-card" key={item.step}>
                  <span className="web-process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-stories" id="healthcare-stories">
          <div className="section-inner">
            <div className="section-label">Healthcare Success Stories</div>
            <h2 className="section-title">AI, mobile, privacy, and cloud foundations for modern health-tech products.</h2>
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

        <section className="web-cta-strip healthcare-cta">
          <div className="web-cta-inner">
            <div>
              <div className="section-label">Ready To Build</div>
              <h2>Need a healthcare MVP, AI wellness assistant, secure patient app, or mobile health platform?</h2>
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
