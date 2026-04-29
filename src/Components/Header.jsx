import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import siteData from "../codeCuroData.json";

const NavDropdown = ({ label, items }) => (
  <li className="dropdown-wrap">
    <button>{label} <span style={{ fontSize: "10px" }}>{"\u25BE"}</span></button>
    <div className="dropdown-menu">
      {items.map((item) => {
        const dropdownItem = typeof item === "string"
          ? { label: item, url: "#" }
          : { label: item.label || item.name || item.role, url: item.url || "#" };

        return dropdownItem.url.startsWith("/") ? (
          <Link key={dropdownItem.label} className="dropdown-item" to={dropdownItem.url}>
            {dropdownItem.label}
          </Link>
        ) : (
          <a
            key={dropdownItem.label}
            className="dropdown-item"
            href={dropdownItem.url}
            target={dropdownItem.url === "#" ? undefined : "_blank"}
            rel={dropdownItem.url === "#" ? undefined : "noreferrer"}
          >
            {dropdownItem.label}
          </a>
        );
      })}
    </div>
  </li>
);

const developerGroupLabels = {
  frontend: "Front-end",
  backend: "Back-end",
  mobile: "Mobile",
  ai_and_cloud: "AI and Cloud"
};

const HireDevelopersDropdown = ({ groups }) => (
  <li className="dropdown-wrap developer-dropdown-wrap">
    <button>Hire Developers <span style={{ fontSize: "10px" }}>{"\u25BE"}</span></button>
    <div className="dropdown-menu developer-mega-menu">
      {Object.entries(groups).map(([groupKey, developers]) => (
        <div className="developer-dropdown-col" key={groupKey}>
          <h4>{developerGroupLabels[groupKey] || groupKey}</h4>
          {developers.map((developer) => (
            developer.url.startsWith("/") ? (
              <Link key={developer.role} className="dropdown-item developer-dropdown-item" to={developer.url}>
                {developer.role}
              </Link>
            ) : (
              <a
                key={developer.role}
                className="dropdown-item developer-dropdown-item"
                href={developer.url}
                target="_blank"
                rel="noreferrer"
              >
                {developer.role}
              </a>
            )
          ))}
        </div>
      ))}
    </div>
  </li>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label="Code Curo home">
            <img src="/logo-code-curo.png" alt="Code Curo" />
          </Link>
          <ul className="nav-links">
            <NavDropdown label="Services" items={siteData.services} />
            <NavDropdown label="Industries" items={siteData.industries} />
            <HireDevelopersDropdown groups={siteData.hire_developers} />
            <NavDropdown label="Resources" items={[...siteData.navigation.about, ...siteData.navigation.main]} />
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="nav-actions">
            <button className="btn-ghost">Careers</button>
            <button className="btn-primary">Start a project {"\u2192"}</button>
          </div>
          <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            <span /><span /><span />
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        {["Services", "Industries", "Developers", "Resources", "Contact"].map((item) => (
          <a key={item} href="#" className="mobile-nav-item">{item}</a>
        ))}
        <Link to="/ai-and-ml" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>AI And ML</Link>
        <div className="mobile-divider" />
        <a href="#" className="mobile-nav-item" style={{ color: "var(--stripe-purple)", fontWeight: 700 }}>Careers</a>
        <button className="btn-primary" style={{ marginTop: 8, padding: "14px", fontSize: 15 }}>Start a project {"\u2192"}</button>
      </div>
    </>
  );
}
