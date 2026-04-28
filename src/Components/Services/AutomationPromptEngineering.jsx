import Header from "../Header";
import Footer from "../Footer";

const automationCapabilities = [
  {
    eyebrow: "Workflow Automation",
    title: "AI-driven workflows that reduce repetitive manual work",
    text: "Automate intake, classification, routing, reporting, summaries, approvals, and follow-ups while keeping humans in control where judgment matters."
  },
  {
    eyebrow: "Prompt Engineering",
    title: "Reusable prompt systems with guardrails, testing, and versioning",
    text: "Turn one-off prompts into dependable prompt chains, templates, evaluation checks, and role-specific assistants that teams can actually trust."
  },
  {
    eyebrow: "Custom GPT",
    title: "Private copilots connected to your data, tools, and workflows",
    text: "Build GPT-powered assistants for support, sales, finance, operations, HR, and internal knowledge with secure retrieval and clear audit trails."
  }
];

const automationProcess = [
  {
    step: "01",
    title: "Workflow Discovery and ROI Mapping",
    text: "We identify repetitive tasks, high-friction handoffs, data sources, approval points, and measurable outcomes so automation targets real business value."
  },
  {
    step: "02",
    title: "Prompt and System Design",
    text: "We design prompts, retrieval patterns, tool calls, data schemas, fallback rules, human-review steps, and UX flows around your actual operations."
  },
  {
    step: "03",
    title: "Prototype and Proof of Concept",
    text: "We build a focused POC that proves output quality, workflow speed, integration feasibility, and team fit before expanding the automation surface."
  },
  {
    step: "04",
    title: "Integration and Automation Build",
    text: "We connect the AI workflow with CRMs, ticketing tools, spreadsheets, email, dashboards, APIs, cloud functions, or internal platforms."
  },
  {
    step: "05",
    title: "Evaluation, Guardrails, and QA",
    text: "We test prompts against realistic cases, tune response quality, add safety checks, prevent hallucination-prone paths, and document expected behavior."
  },
  {
    step: "06",
    title: "Launch, Monitor, and Optimize",
    text: "We deploy the workflow with monitoring, feedback loops, usage reporting, and iteration cycles so automation keeps improving after release."
  }
];

const automationUseCases = [
  {
    type: "Customer Service",
    title: "AI Support Operations",
    text: "Queue analysis, NLP reporting, agent performance summaries, AI alerts, and automated email updates for service teams."
  },
  {
    type: "Finance Ops",
    title: "Accounting Automation",
    text: "Document extraction, OCR review, reconciliation support, invoice summaries, and finance workflow assistants."
  },
  {
    type: "Knowledge Work",
    title: "Internal GPT Assistant",
    text: "Secure copilots that answer from company documents, policies, product data, project notes, and support history."
  },
  {
    type: "Sales Ops",
    title: "Lead and CRM Automation",
    text: "Lead enrichment, meeting summaries, follow-up drafts, account research, and next-action recommendations."
  },
  {
    type: "Reporting",
    title: "Automated Business Reports",
    text: "Weekly performance reports, data narratives, dashboard summaries, anomaly explanations, and stakeholder updates."
  },
  {
    type: "Recruitment",
    title: "AI Candidate Matching",
    text: "Job matching, profile summaries, screening support, application tracking, and personalized opportunity recommendations."
  },
  {
    type: "Healthcare",
    title: "Booking and Order Automation",
    text: "Clinic booking, payment workflows, order creation, result delivery, and admin task reduction through integrated automation."
  },
  {
    type: "Productivity",
    title: "Document and Email Workflows",
    text: "Drafting, classification, extraction, summarization, translation, and routing for high-volume operational communication."
  },
  {
    type: "Operations",
    title: "Human-in-the-Loop Approvals",
    text: "AI prepares recommendations while teams retain review, approval, escalation, and exception handling control."
  }
];

const promptFocus = [
  "Prompt templates for repeatable business workflows",
  "Prompt chains for multi-step reasoning and tool use",
  "Retrieval-augmented generation connected to private knowledge",
  "Evaluation datasets for measuring output quality",
  "Guardrails for tone, policy, compliance, and escalation",
  "Dashboards for usage, cost, errors, and automation impact"
];

const onboardingSteps = [
  {
    title: "Profile Selection & Interview",
    text: "Interview AI, automation, and prompt engineering specialists for technical depth, workflow thinking, and communication fit."
  },
  {
    title: "2 Weeks Free POC",
    text: "Run one sprint to validate prompt quality, automation feasibility, integration effort, and measurable workflow improvement."
  },
  {
    title: "Easy Onboard",
    text: "Bring the team into your tools, data sources, operational workflows, security expectations, and delivery cadence."
  }
];

const commercialCards = [
  { price: "USD 10K - 20K", title: "AI workflow POC", timeline: "4 to 6 Weeks" },
  { price: "USD 20K - 25K", title: "Custom GPT assistant", timeline: "8 to 10 Weeks" },
  { price: "USD 25K - 30K", title: "Business automation platform", timeline: "12 Weeks above" }
];

export default function AutomationPromptEngineeringPage() {
  return (
    <>
      <Header />

      <main className="web-page">
        <section className="web-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">Automation & Prompt Engineering</div>
              <h1 className="web-hero-title fade-up fade-up-d1">
                Turn AI from a clever demo into dependable automation for real business workflows.
              </h1>
              <p className="web-hero-sub fade-up fade-up-d2">
                We design custom GPT systems, prompt pipelines, AI workflow automations, reporting assistants, and
                human-in-the-loop operations that improve speed, consistency, and decision-making.
              </p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Book a Free POC</a>
                <a className="web-secondary-link" href="https://codecuro.in/artificial-intelligence-service/" target="_blank" rel="noreferrer">
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
                  <span>AI automation workflow</span>
                </div>

                <div className="web-metric-grid">
                  <div className="web-metric-card">
                    <span>Inputs</span>
                    <strong>Docs / APIs / CRM</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>AI Layer</span>
                    <strong>GPT + RAG</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Control</span>
                    <strong>Guardrails + QA</strong>
                  </div>
                  <div className="web-metric-card">
                    <span>Output</span>
                    <strong>Actions + Reports</strong>
                  </div>
                </div>

                <div className="web-flow">
                  <div className="web-flow-node">Capture workflow data</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node accent">Prompt chain + retrieval</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Human review when needed</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Automated action + logging</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">Core Offering</div>
            <h2 className="section-title">AI automation built around prompts, data, tools, and measurable business outcomes.</h2>
            <p className="section-sub">
              This service focuses on intelligent automation: prompt engineering, custom GPT models, workflow
              integration, reporting, operational dashboards, evaluation, and continuous optimization.
            </p>

            <div className="web-capability-grid">
              {automationCapabilities.map((item) => (
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
            <div className="section-label" style={{ color: "rgba(99,91,255,.82)" }}>Delivery Model</div>
            <h2 className="section-title" style={{ color: "#fff" }}>From workflow discovery to prompt design, integration, guardrails, and monitored launch.</h2>
            <div className="web-process-grid">
              {automationProcess.map((item) => (
                <article className="web-process-card" key={item.step}>
                  <span className="web-process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">Prompt Engineering Stack</div>
            <h2 className="section-title">The parts that make AI workflows stable enough for production use.</h2>
            <div className="web-capability-grid">
              {promptFocus.map((item) => (
                <article className="web-capability-card" key={item}>
                  <span>Prompt Ops</span>
                  <h3>{item}</h3>
                  <p>Designed to keep outputs consistent, auditable, measurable, and easier to improve over time.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-stories">
          <div className="section-inner">
            <div className="section-label">Automation Use Cases</div>
            <h2 className="section-title">Practical AI automation across support, finance, sales, healthcare, recruitment, reporting, and internal operations.</h2>
            <div className="web-story-grid">
              {automationUseCases.map((item, index) => (
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
            <h2 className="section-title">Start with a focused automation POC, then scale what proves useful.</h2>
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
            <div className="section-label">Engagement Options</div>
            <h2 className="section-title">Build your automation roadmap with practical starting points.</h2>
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
              <div className="section-label">Ready To Automate</div>
              <h2>Need a custom GPT, prompt workflow, AI report engine, or automation layer for your team?</h2>
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
