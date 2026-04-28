import Header from "../Header";
import Footer from "../Footer";

const capabilityCards = [
  {
    eyebrow: "Generative AI",
    title: "LLM-powered copilots and assistants",
    text: "Design private AI assistants for internal operations, customer support, knowledge retrieval, and workflow acceleration.",
    accent: "purple"
  },
  {
    eyebrow: "Automation",
    title: "Prompt pipelines and intelligent workflows",
    text: "Turn repetitive business processes into AI-assisted flows with human review, auditability, and measurable output quality.",
    accent: "teal"
  },
  {
    eyebrow: "Prediction",
    title: "ML models for scoring and forecasting",
    text: "Build models for recommendations, anomaly detection, prioritization, trend prediction, and smarter decision systems.",
    accent: "green"
  }
];

const solutionAreas = [
  "Recommendation engines and personalization",
  "NLP pipelines for reports, search, and summarization",
  "AI dashboards with live operational visibility",
  "MLOps-ready deployment on scalable cloud stacks",
  "Secure data flows, monitoring, and model iteration",
  "Custom AI modules integrated into web and mobile products"
];

const useCases = [
  {
    title: "Customer Support Intelligence",
    text: "Automate ticket summaries, assist agents with contextual responses, and surface insights from conversations in real time."
  },
  {
    title: "Operations Automation",
    text: "Reduce manual handling across approvals, reporting, routing, and internal coordination with AI-guided business workflows."
  },
  {
    title: "Personalized Product Experiences",
    text: "Create adaptive product journeys, smarter recommendations, and behavior-aware experiences that improve retention."
  }
];

const deliverySteps = [
  {
    step: "01",
    title: "Discovery and use-case validation",
    text: "We define where AI creates real operational or product value, identify the right data inputs, and align success metrics."
  },
  {
    step: "02",
    title: "Model, workflow, and UX design",
    text: "We shape prompts, retrieval patterns, ML logic, and user interactions so the system feels useful, reliable, and production-ready."
  },
  {
    step: "03",
    title: "Deployment, feedback, and optimization",
    text: "We ship scalable AI solutions with monitoring, iteration loops, and the infrastructure needed for continuous improvement."
  }
];

export default function AiAndMlPage() {
  return (
    <>
      <Header />

      <main className="ai-page">
        <section className="ai-hero">
          <div className="ai-hero-bg" />
          <div className="ai-hero-inner">
            <div className="ai-hero-copy">
              <div className="hero-eyebrow fade-up">AI & ML Services</div>
              <h1 className="ai-hero-title fade-up fade-up-d1">
                Build AI products that move from concept to production with clarity.
              </h1>
              <p className="ai-hero-sub fade-up fade-up-d2">
                We design and deliver practical AI systems for automation, decision support, recommendation engines,
                natural language workflows, and cloud-ready machine learning applications.
              </p>
              <div className="ai-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Book an AI consultation</a>
                <a className="ai-secondary-link" href="https://codecuro.in/artificial-intelligence-service/" target="_blank" rel="noreferrer">
                  Explore related service details {"\u2192"}
                </a>
              </div>
            </div>

            <div className="ai-hero-panel fade-up fade-up-d4">
              <div className="ai-panel-shell">
                <div className="ai-panel-header">
                  <div className="mock-row">
                    <div className="mock-dot red" />
                    <div className="mock-dot yellow" />
                    <div className="mock-dot green" />
                  </div>
                  <span>AI orchestration overview</span>
                </div>
                <div className="ai-metric-grid">
                  <div className="ai-metric-card">
                    <span>Automation Coverage</span>
                    <strong>74%</strong>
                  </div>
                  <div className="ai-metric-card">
                    <span>Model Feedback Loop</span>
                    <strong>Active</strong>
                  </div>
                  <div className="ai-metric-card">
                    <span>Inference Layer</span>
                    <strong>LLM + ML</strong>
                  </div>
                  <div className="ai-metric-card">
                    <span>Deployment</span>
                    <strong>Cloud Ready</strong>
                  </div>
                </div>
                <div className="ai-panel-flow">
                  <div className="ai-flow-node">Business data</div>
                  <div className="ai-flow-line" />
                  <div className="ai-flow-node accent">AI engine</div>
                  <div className="ai-flow-line" />
                  <div className="ai-flow-node">Human review</div>
                  <div className="ai-flow-line" />
                  <div className="ai-flow-node">Action output</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ai-capabilities">
          <div className="section-inner">
            <div className="section-label">Capabilities</div>
            <h2 className="section-title">Focused AI delivery for real product and business outcomes.</h2>
            <p className="section-sub">
              This page focuses only on AI & ML services, from intelligent automation to custom ML systems and
              AI-native product features.
            </p>

            <div className="ai-capability-grid">
              {capabilityCards.map((card) => (
                <article className={`ai-capability-card ${card.accent}`} key={card.title}>
                  <span>{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ai-solutions-band">
          <div className="section-inner ai-solutions-layout">
            <div>
              <div className="section-label" style={{ color: "rgba(99,91,255,.8)" }}>What We Build</div>
              <h2 className="section-title" style={{ color: "#fff" }}>AI systems designed to plug into real operations.</h2>
              <p className="section-sub" style={{ color: "rgba(255,255,255,.68)" }}>
                We combine product thinking, engineering, and applied AI to move from idea to usable system without
                overcomplicating the stack.
              </p>
            </div>
            <div className="ai-solution-list">
              {solutionAreas.map((item) => (
                <div className="ai-solution-item" key={item}>
                  <span>{"\u25CF"}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ai-usecases">
          <div className="section-inner">
            <div className="section-label">Use Cases</div>
            <h2 className="section-title">Where teams usually start seeing ROI from AI.</h2>
            <div className="ai-usecase-grid">
              {useCases.map((item) => (
                <article className="ai-usecase-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ai-process">
          <div className="section-inner">
            <div className="section-label">Delivery Model</div>
            <h2 className="section-title">A practical path from AI idea to dependable release.</h2>
            <div className="ai-process-grid">
              {deliverySteps.map((item) => (
                <article className="ai-process-card" key={item.step}>
                  <span className="ai-process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ai-cta-strip">
          <div className="ai-cta-inner">
            <div>
              <div className="section-label">Ready To Build</div>
              <h2>Need an AI feature, internal copilot, or ML-backed workflow?</h2>
            </div>
            <div className="ai-cta-actions">
              <a className="btn-primary" href="mailto:sales@codecuro.in">Talk to our team</a>
              <a className="btn-ghost ai-outline-btn" href="https://codecuro.in/contact/" target="_blank" rel="noreferrer">
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
