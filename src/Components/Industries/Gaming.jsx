import Header from "../Header";
import Footer from "../Footer";

const gamingCapabilities = [
  {
    eyebrow: "Game Development",
    title: "Arcade, runner, and action game experiences",
    text: "Build fast, responsive games with polished movement, progression loops, missions, rewards, and device-friendly performance."
  },
  {
    eyebrow: "Mobile Gaming",
    title: "iOS and Android games built for repeat play",
    text: "Create mobile-first game flows with smooth controls, onboarding, monetization, analytics, live updates, and store-ready releases."
  },
  {
    eyebrow: "Game Backend",
    title: "Player data, leaderboards, rewards, and operations",
    text: "Connect authentication, player profiles, inventory, score systems, events, notifications, moderation, and live game operations."
  }
];

const gamingFeatures = [
  "Cyberpunk runner, skateboarding, parkour, and action game mechanics",
  "Unity and Unreal development for mobile, web, AR, VR, and console-ready prototypes",
  "Player profiles, progression systems, rewards, unlockables, inventory, and missions",
  "Leaderboards, achievements, analytics, live events, and retention dashboards",
  "Game backend APIs for authentication, cloud saves, economy, notifications, and admin tools",
  "Store launch support, QA testing, performance tuning, crash tracking, and post-release updates"
];

const deliveryProcess = [
  {
    step: "01",
    title: "Game concept and loop discovery",
    text: "We define the player fantasy, core loop, controls, levels, economy, content plan, monetization model, and release goals."
  },
  {
    step: "02",
    title: "Prototype, art direction, and tech plan",
    text: "We shape the playable prototype, visual direction, game architecture, backend needs, analytics events, and production roadmap."
  },
  {
    step: "03",
    title: "Build, integrate, and tune",
    text: "We develop gameplay, UI, levels, rewards, backend services, admin tools, telemetry, and mobile performance improvements."
  },
  {
    step: "04",
    title: "QA, store launch, and live ops",
    text: "We test devices, gameplay balance, crashes, analytics, store requirements, and post-launch updates that keep players engaged."
  }
];

const successStories = [
  {
    type: "Runner Game",
    title: "Rift Riders style cyberpunk action",
    text: "A mobile runner experience can combine city chases, parkour, skateboarding, power-ups, vehicle unlocks, and quick-session progression."
  },
  {
    type: "Mobile Gameplay",
    title: "Smooth controls for fast sessions",
    text: "Touch controls, camera behavior, obstacle timing, and feedback loops are tuned so players understand the game instantly."
  },
  {
    type: "Game Economy",
    title: "Rewards, tokens, and unlockables",
    text: "Progression systems help players earn, spend, upgrade, and return through missions, collectibles, cosmetics, and vehicle unlocks."
  },
  {
    type: "Live Ops",
    title: "Events and retention dashboards",
    text: "Analytics, notifications, leaderboards, and content events help teams understand player behavior and improve retention."
  },
  {
    type: "Game QA",
    title: "Device coverage and performance testing",
    text: "QA cycles focus on frame rate, crashes, load times, controls, monetization flows, store compliance, and repeated gameplay paths."
  },
  {
    type: "Backend Systems",
    title: "Cloud-ready player infrastructure",
    text: "Profiles, scores, inventory, rewards, and admin tools can be built on scalable APIs that support future updates."
  }
];

const metrics = [
  { label: "Game Type", value: "Runner + Arcade" },
  { label: "Platforms", value: "iOS + Android" },
  { label: "Live Layer", value: "Events + Scores" },
  { label: "Engine Support", value: "Unity + Unreal" }
];

export default function GamingPage() {
  return (
    <>
      <Header />

      <main className="web-page gaming-page">
        <section className="web-hero gaming-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">Gaming Industry</div>
              <h1 className="web-hero-title fade-up fade-up-d1">
                Build mobile games with polished gameplay, rich progression, and scalable live operations.
              </h1>
              <p className="web-hero-sub fade-up fade-up-d2">
                Code Curo builds game prototypes, mobile arcade games, runner experiences, Unity and Unreal projects,
                player backends, analytics dashboards, QA pipelines, and launch-ready gaming products.
              </p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Build a gaming product</a>
                <a className="web-secondary-link" href="#gaming-stories">View gaming stories {"\u2192"}</a>
              </div>
            </div>

            <div className="web-hero-panel fade-up fade-up-d4">
              <div className="web-panel-shell gaming-panel-shell">
                <div className="web-panel-header">
                  <div className="mock-row">
                    <div className="mock-dot red" />
                    <div className="mock-dot yellow" />
                    <div className="mock-dot green" />
                  </div>
                  <span>Game launch cockpit</span>
                </div>

                <div className="web-metric-grid">
                  {metrics.map((item) => (
                    <div className="web-metric-card" key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="gaming-visual">
                  <div className="gaming-city">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="gaming-track">
                    <div className="gaming-lane" />
                    <div className="gaming-rider">
                      <span className="gaming-rider-head" />
                      <span className="gaming-rider-body" />
                      <span className="gaming-board" />
                    </div>
                    <span className="gaming-token token-one" />
                    <span className="gaming-token token-two" />
                    <span className="gaming-token token-three" />
                  </div>
                </div>

                <div className="web-flow gaming-flow">
                  <div className="web-flow-node">Prototype and core loop</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node accent">Gameplay, rewards, and levels</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Player backend and analytics</div>
                  <div className="web-flow-line" />
                  <div className="web-flow-node">Store launch and live ops</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">Gaming Solutions</div>
            <h2 className="section-title">Game development for mobile play, strong retention, and reliable launch operations.</h2>
            <p className="section-sub">
              Inspired by Rift Riders, this page focuses on cyberpunk runner gameplay, mobile game production,
              backend systems, rewards, analytics, QA, and live operations for growing game teams.
            </p>

            <div className="web-capability-grid">
              {gamingCapabilities.map((item) => (
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
            <h2 className="section-title" style={{ color: "#fff" }}>Gaming products that connect gameplay, progression, backend systems, QA, and live operations.</h2>
            <div className="gaming-feature-grid">
              {gamingFeatures.map((item) => (
                <article className="gaming-feature-card" key={item}>
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
            <h2 className="section-title">A practical route from game idea to launch-ready mobile experience.</h2>
            <div className="web-process-grid gaming-process-grid">
              {deliveryProcess.map((item) => (
                <article className="web-process-card gaming-process-card" key={item.step}>
                  <span className="web-process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-stories" id="gaming-stories">
          <div className="section-inner">
            <div className="section-label">Gaming Success Stories</div>
            <h2 className="section-title">Gaming work across runner mechanics, mobile controls, rewards, analytics, QA, and backend systems.</h2>
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

        <section className="web-cta-strip gaming-cta">
          <div className="web-cta-inner">
            <div>
              <div className="section-label">Ready To Build</div>
              <h2>Need a mobile game, playable prototype, Unity team, backend system, or launch QA support?</h2>
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
