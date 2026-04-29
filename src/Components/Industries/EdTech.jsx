import Header from "../Header";
import Footer from "../Footer";

const edtechCapabilities = [
  {
    eyebrow: "AI Coaching",
    title: "AI-powered coaching platforms with real-time feedback",
    text: "Build learning apps that analyze video, activity, answers, and behavior patterns to deliver personalized feedback and improvement plans."
  },
  {
    eyebrow: "Exam Portals",
    title: "Secure online exam and assessment systems",
    text: "Create exam portals with question banks, timed tests, proctoring workflows, result dashboards, rankings, certificates, and admin controls."
  },
  {
    eyebrow: "Digital Learning",
    title: "Training, quiz, and classroom apps for web and mobile",
    text: "Deliver online quizzes, training modules, live classes, LMS portals, assignment workflows, progress tracking, and student engagement tools."
  }
];

const edtechFeatures = [
  "AI coaching with video analysis, pose estimation, performance scoring, and instant feedback",
  "Online exam portals with question banks, timers, result analytics, and role-based access",
  "Quiz apps for practice tests, mock exams, leaderboards, badges, and progress tracking",
  "Online training platforms with courses, live sessions, assignments, and certificates",
  "Student, teacher, parent, institute, and admin dashboards",
  "Cloud, mobile, AI model, payment, notification, and learning content integrations"
];

const deliveryProcess = [
  {
    step: "01",
    title: "Learning workflow discovery",
    text: "We map learners, teachers, coaching methods, exams, content, reports, compliance needs, and the digital journeys that need improvement."
  },
  {
    step: "02",
    title: "Experience, AI, and assessment design",
    text: "We design student flows, trainer tools, exam logic, analytics, AI feedback loops, content structures, and scalable cloud architecture."
  },
  {
    step: "03",
    title: "Build, integrate, and automate",
    text: "We develop web portals, mobile apps, AI pipelines, exam engines, quiz modules, LMS features, dashboards, and integrations."
  },
  {
    step: "04",
    title: "QA, launch, and learning optimization",
    text: "We test assessments, AI feedback quality, mobile performance, data security, reports, user roles, and engagement loops before launch."
  }
];

const successStories = [
  {
    type: "AI Coaching",
    title: "AI-based coaching app",
    text: "A coaching platform used AI motion analysis to deliver fast technique feedback, reduce manual review time, and support scalable learner growth."
  },
  {
    type: "Video Intelligence",
    title: "Real-time performance analysis",
    text: "Computer vision workflows analyzed player movement and training videos so coaches and learners could receive more precise improvement guidance."
  },
  {
    type: "Exam Portal",
    title: "Online exam management system",
    text: "A secure portal helped institutes create tests, manage question banks, schedule exams, evaluate submissions, and publish results."
  },
  {
    type: "Quiz Platform",
    title: "Practice quiz and mock test app",
    text: "A quiz experience supported daily practice, topic-wise questions, instant scoring, leaderboards, and progress tracking for exam preparation."
  },
  {
    type: "Training LMS",
    title: "Online training and certification platform",
    text: "A learning portal helped teams deliver courses, live sessions, assignments, completion tracking, certificates, and trainer dashboards."
  },
  {
    type: "Learning Analytics",
    title: "Student progress intelligence",
    text: "Analytics dashboards converted attendance, attempts, scores, video feedback, and course activity into actionable learner insights."
  }
];

const metrics = [
  { label: "User Growth", value: "300%" },
  { label: "Analysis Time", value: "-95%" },
  { label: "Uptime Target", value: "99.9%" },
  { label: "AI Layer", value: "Vision + ML" }
];

export default function EdTechPage() {
  return (
    <>
      <Header />

      <main className="web-page edtech-page">
        <section className="web-hero edtech-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">EdTech Industry</div>
              <h1 className="web-hero-title fade-up fade-up-d1">
                Build AI-powered learning platforms for coaching, exams, quizzes, and online training.
              </h1>
              <p className="web-hero-sub fade-up fade-up-d2">
                Code Curo builds AI coaching apps, online exam portals, quiz platforms, LMS systems,
                training apps, student dashboards, teacher tools, and scalable cloud learning products.
              </p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Build an EdTech platform</a>
                <a className="web-secondary-link" href="#edtech-stories">View success stories {"\u2192"}</a>
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
                  <span>Learning intelligence cockpit</span>
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
                  <div className="web-flow-node">Learner activity and video</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node accent">AI feedback and exam engine</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Courses, quizzes, and training</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Progress dashboards</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">EdTech Solutions</div>
            <h2 className="section-title">Learning software for AI coaching, online exams, quizzes, training, and learner analytics.</h2>
            <p className="section-sub">
              Based on the AI coaching app case study, this page expands into a complete EdTech offering:
              AI feedback, exam portals, online quizzes, training platforms, learning dashboards, and scalable cloud delivery.
            </p>

            <div className="web-capability-grid">
              {edtechCapabilities.map((item) => (
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
            <h2 className="section-title" style={{ color: "#fff" }}>EdTech apps that connect learners, teachers, coaching, assessments, content, and analytics.</h2>
            <div className="edtech-feature-grid">
              {edtechFeatures.map((item) => (
                <article className="edtech-feature-card" key={item}>
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
            <h2 className="section-title">A practical route from education idea to scalable AI-enabled learning product.</h2>
            <div className="web-process-grid edtech-process-grid">
              {deliveryProcess.map((item) => (
                <article className="web-process-card edtech-process-card" key={item.step}>
                  <span className="web-process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-stories" id="edtech-stories">
          <div className="section-inner">
            <div className="section-label">EdTech Success Stories</div>
            <h2 className="section-title">Education projects across AI coaching, exam portals, quiz apps, online training, LMS, and learning analytics.</h2>
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

        <section className="web-cta-strip edtech-cta">
          <div className="web-cta-inner">
            <div>
              <div className="section-label">Ready To Build</div>
              <h2>Need an AI coaching app, exam portal, quiz platform, LMS, or online training system?</h2>
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
