// App.jsx
// =============================================================================
// PURPOSE: Assembles the entire page by stacking section components in order.
//          Think of this as the "table of contents" for the page.
//
// ── HOW TO REORDER SECTIONS ─────────────────────────────────────────────────
//
// This is the ONLY file you edit to change section order.
// Steps:
//   1. Find the component line you want to move (e.g. <Awards />)
//   2. Cut it (Cmd+X / Ctrl+X)
//   3. Paste it where you want it to appear
//   4. Save. Done.
//
// Example — move Awards above Skills:
//   BEFORE:          AFTER:
//   <Skills />       <Awards />
//   <Experience />   <Skills />
//   <Projects />     <Experience />
//   <Awards />       <Projects />
//
// IMPORTANT: The import lines at the top do NOT control order.
//   Only the position of <ComponentName /> in the return() block matters.
//   Imports are just how React loads the file — they have no visual order.
//
// RULES:
//   - The id="" on each section (e.g. id="awards") must match the Navbar LINKS array.
//     Reordering here is safe — ids are on the sections themselves, not here.
//   - You cannot break the site by reordering. Only deleting an import
//     without deleting its JSX tag (or vice versa) causes errors.
//
// WHAT CHANGED FROM PREVIOUS VERSION:
//   - Removed Gallery import and <Gallery /> (screenshots now in project cards)
// =============================================================================

import { useEffect } from "react";
import Navbar       from "./Navbar.jsx";
import Hero         from "./Hero.jsx";
import About        from "./About.jsx";
import Skills       from "./Skills.jsx";
import Experience   from "./Experience.jsx";
import Projects     from "./Projects.jsx";
import Awards       from "./Awards.jsx";
import Certificates from "./Certificates.jsx";
import Contact      from "./Contact.jsx";
import Footer       from "./Footer.jsx";

export default function App() {
  // Scroll-reveal: adds "visible" class to .reveal elements when scrolled into view.
  // The CSS in index.css then transitions them from opacity:0 to opacity:1.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target); // animate once only
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });

  return (
    <>
      <Navbar />
      <main>
        {/* ── PAGE ORDER — cut/paste any line here to reorder sections ── */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Certificates />
        <Contact />
        {/* Gallery removed — screenshots now inside project card modals */}
      </main>
      <Footer />
    </>
  );
}
