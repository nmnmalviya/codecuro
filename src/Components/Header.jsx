import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import siteData from "../codeCuroData.json";

const getNavItem = (item) => (
  typeof item === "string"
    ? { label: item, url: "#" }
    : { label: item.label || item.name || item.role, url: item.url || "#" }
);

const NavItemLink = ({ item, className = "dropdown-item", onClick }) => {
  const navItem = getNavItem(item);

  return navItem.url.startsWith("/") ? (
    <Link className={className} to={navItem.url} onClick={onClick}>
      {navItem.label}
    </Link>
  ) : (
    <a
      className={className}
      href={navItem.url}
      target={navItem.url === "#" ? undefined : "_blank"}
      rel={navItem.url === "#" ? undefined : "noreferrer"}
      onClick={onClick}
    >
      {navItem.label}
    </a>
  );
};

const toMenuClass = (label) => label.toLowerCase().replaceAll(" ", "-");

const NavDropdown = ({ label, items }) => {
  const menuClass = toMenuClass(label);

  return (
    <li className={`dropdown-wrap dropdown-wrap-${menuClass}`}>
      <button>{label} <span style={{ fontSize: "10px" }}>{"\u25BE"}</span></button>
      <div className={`dropdown-menu dropdown-menu-${menuClass}`}>
        {items.map((item) => (
          <NavItemLink key={getNavItem(item).label} item={item} />
        ))}
      </div>
    </li>
  );
};

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

const MobileSection = ({ title, items, open, onToggle, onNavigate }) => {
  const sectionClass = toMenuClass(title);

  return (
    <div className={`mobile-nav-section mobile-nav-section-${sectionClass}`}>
      <button
        className="mobile-nav-toggle"
        type="button"
        aria-expanded={open}
        onClick={onToggle}
      >
        <span>{title}</span>
        <span className="mobile-nav-chevron">{"\u25BE"}</span>
      </button>
      <div className={`mobile-submenu${open ? " open" : ""}`}>
        {items.map((item) => (
          <NavItemLink
            key={getNavItem(item).label}
            item={item}
            className="mobile-submenu-item"
            onClick={onNavigate}
          />
        ))}
      </div>
    </div>
  );
};

const MobileDeveloperSection = ({ groups, open, onToggle, onNavigate }) => (
  <div className="mobile-nav-section">
    <button
      className="mobile-nav-toggle"
      type="button"
      aria-expanded={open}
      onClick={onToggle}
    >
      <span>Hire Developers</span>
      <span className="mobile-nav-chevron">{"\u25BE"}</span>
    </button>
    <div className={`mobile-submenu mobile-developer-submenu${open ? " open" : ""}`}>
      {Object.entries(groups).map(([groupKey, developers]) => (
        <div className="mobile-submenu-group" key={groupKey}>
          <h4>{developerGroupLabels[groupKey] || groupKey}</h4>
          {developers.map((developer) => (
            <NavItemLink
              key={developer.role}
              item={developer}
              className="mobile-submenu-item"
              onClick={onNavigate}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-active", mobileOpen);
    return () => document.body.classList.remove("mobile-menu-active");
  }, [mobileOpen]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);
  const toggleMobileGroup = (group) => {
    setOpenMobileGroup((current) => current === group ? "" : group);
  };

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
            <li><a href="https://codecuro.in/contact/" target="_blank" rel="noreferrer">Contact</a></li>
          </ul>
          <div className="nav-actions">
            <a className="btn-ghost" href="https://codecuro.in/careers/" target="_blank" rel="noreferrer">Careers</a>
            <a className="btn-primary" href="https://codecuro.in/contact/" target="_blank" rel="noreferrer">Start a project {"\u2192"}</a>
          </div>
          <button
            className={`hamburger${mobileOpen ? " active" : ""}`}
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        <MobileSection
          title="Services"
          items={siteData.services}
          open={openMobileGroup === "services"}
          onToggle={() => toggleMobileGroup("services")}
          onNavigate={closeMobileMenu}
        />
        <MobileSection
          title="Industries"
          items={siteData.industries}
          open={openMobileGroup === "industries"}
          onToggle={() => toggleMobileGroup("industries")}
          onNavigate={closeMobileMenu}
        />
        <MobileDeveloperSection
          groups={siteData.hire_developers}
          open={openMobileGroup === "developers"}
          onToggle={() => toggleMobileGroup("developers")}
          onNavigate={closeMobileMenu}
        />
        <MobileSection
          title="Resources"
          items={[...siteData.navigation.about, ...siteData.navigation.main]}
          open={openMobileGroup === "resources"}
          onToggle={() => toggleMobileGroup("resources")}
          onNavigate={closeMobileMenu}
        />
        <div className="mobile-divider" />
        <a href="https://codecuro.in/contact/" className="mobile-nav-item mobile-nav-direct" target="_blank" rel="noreferrer" onClick={closeMobileMenu}>Contact</a>
        <a href="https://codecuro.in/careers/" className="mobile-nav-item mobile-nav-direct" target="_blank" rel="noreferrer" onClick={closeMobileMenu}>Careers</a>
        <a href="https://codecuro.in/contact/" className="btn-primary mobile-menu-cta" target="_blank" rel="noreferrer" onClick={closeMobileMenu}>Start a project {"\u2192"}</a>
      </div>
    </>
  );
}
