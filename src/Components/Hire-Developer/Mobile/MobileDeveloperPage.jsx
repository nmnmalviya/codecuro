import { Fragment } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import siteData from "../../../codeCuroData.json";

const getDeveloperData = (technology) => (
  siteData.hire_developers.mobile.find((developer) => developer.technology === technology)
);

export default function MobileDeveloperPage({ technology }) {
  const developer = getDeveloperData(technology);
  const page = developer?.page;

  if (!page) {
    return null;
  }

  return (
    <>
      <Header />

      <main className="web-page">
        <section className="web-hero">
          <div className="web-hero-bg" />
          <div className="web-hero-inner">
            <div className="web-hero-copy">
              <div className="hero-eyebrow fade-up">{page.hero.eyebrow}</div>
              <h1 className="web-hero-title fade-up fade-up-d1">{page.hero.title}</h1>
              <p className="web-hero-sub fade-up fade-up-d2">{page.hero.description}</p>
              <div className="web-hero-actions fade-up fade-up-d3">
                <a className="btn-primary" href="mailto:sales@codecuro.in">Book a Free POC</a>
                <a className="web-secondary-link" href="https://codecuro.in/contact/" target="_blank" rel="noreferrer">
                  Hire a Developer {"\u2192"}
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
                  <span>{page.panel.label}</span>
                </div>

                <div className="web-metric-grid">
                  {page.panel.metrics.map((item) => (
                    <div className="web-metric-card" key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="web-flow">
                  {page.panel.flow.map((item, index) => (
                    <Fragment key={item}>
                      <div className={`web-flow-node${index === 1 ? " accent" : ""}`}>{item}</div>
                      {index < page.panel.flow.length - 1 && <div className="web-flow-line" />}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">{page.expertise.eyebrow}</div>
            <h2 className="section-title">{page.expertise.title}</h2>
            <p className="section-sub">{page.expertise.description}</p>
            <div className="web-capability-grid">
              {page.expertise.items.map((item) => (
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
            <div className="section-label" style={{ color: "rgba(99,91,255,.82)" }}>{page.onboarding.eyebrow}</div>
            <h2 className="section-title" style={{ color: "#fff" }}>{page.onboarding.title}</h2>
            <p className="section-sub" style={{ color: "rgba(255,255,255,.68)" }}>{page.onboarding.description}</p>
            <div className="web-process-grid">
              {page.onboarding.steps.map((item, index) => (
                <article className="web-process-card" key={item.title}>
                  <span className="web-process-step">{`0${index + 1}`}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-capabilities">
          <div className="section-inner">
            <div className="section-label">Why Work With Code Curo</div>
            <h2 className="section-title">{page.whyTitle}</h2>
            <div className="web-capability-grid">
              {page.why.map((item) => (
                <article className="web-capability-card" key={item.title}>
                  <span>Code Curo</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-stories">
          <div className="section-inner">
            <div className="section-label">Our Projects</div>
            <h2 className="section-title">{page.projectsTitle}</h2>
            <p className="section-sub">{page.projectsDescription}</p>
            <div className="web-story-grid">
              {page.projects.map((item, index) => (
                <article className={`web-story-card tone-${index % 4}`} key={item.title}>
                  <div className="web-story-top">
                    <span className="web-story-type">{item.type}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-commercial">
          <div className="section-inner">
            <div className="section-label">{page.cta.eyebrow}</div>
            <h2 className="section-title">{page.cta.title}</h2>
            <p className="section-sub">{page.cta.description}</p>
            <div className="web-commercial-grid">
              {page.plans.map((item) => (
                <article className="web-commercial-card" key={item.title}>
                  <span>{item.price}</span>
                  <h3>{item.title}</h3>
                  <p>{item.experience}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="web-cta-strip">
          <div className="web-cta-inner">
            <div>
              <div className="section-label">Book 2-Weeks Free POC</div>
              <h2>{page.finalCta}</h2>
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
