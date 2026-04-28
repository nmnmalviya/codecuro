import siteData from "../codeCuroData.json";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo"><img src="/code-curo-logo.svg" alt="Code Curo" /></div>
            <p className="footer-tagline">{siteData.company.description}</p>
          </div>
          {[
            { heading: "Services", links: siteData.services.slice(0, 10).map((item) => item.name) },
            { heading: "Industries", links: siteData.industries },
            { heading: "Developers", links: Object.values(siteData.hire_developers).flat().slice(0, 8).map((item) => item.role) },
            { heading: "Company", links: [...siteData.navigation.about, ...siteData.navigation.main].map((item) => item.label) }
          ].map((col) => (
            <div className="footer-col" key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link) => <li key={link}><a href="#">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">{"\u00A9"} 2026 {siteData.company.name}. India (English)</div>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Licences</a>
            <a href="#">Sitemap</a>
            <a href="#">Cookie settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
