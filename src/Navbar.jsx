// Navbar.jsx
// PURPOSE: Sticky nav bar. Highlights active section. Collapses on mobile.
// TO ADD A NAV LINK: add { id: "your-section-id", label: "Label" } to LINKS.
//   The id must match the id="" attribute on that section component.
// TO REMOVE A LINK: delete its line from LINKS.
// WHAT CHANGED: Removed "gallery" link (Gallery section removed from site).

import { useEffect, useState } from "react";
import { profile } from "./projectData.js";

const LINKS = [
  { id: "home",         label: "Home" },
  { id: "about",        label: "About" },
  { id: "skills",       label: "Skills" },
  { id: "experience",   label: "Experience" },
  { id: "projects",     label: "Projects" },
  { id: "awards",       label: "Awards" },
  { id: "certificates", label: "Certificates" },
  { id: "contact",      label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open,   setOpen]   = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach((l) => { const el = document.getElementById(l.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <nav className="container nav-inner">
        <a href="#home" className="nav-logo" onClick={close}>{profile.name}</a>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav-link ${active === l.id ? "active" : ""}`}
              onClick={close}
            >
              {l.label}
            </a>
          ))}
          {profile.resume && (
            <a href={profile.resume} target="_blank" rel="noreferrer"
               className="btn btn-primary btn-small nav-resume" onClick={close}>
              Curriculum Vitae/Resume
            </a>
          )}
        </div>

        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}
