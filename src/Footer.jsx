// Footer.jsx
// =============================================================================
// PURPOSE: Minimal footer — just credit lines and copyright.
//          SIMPLIFIED from V1 by removing quick links, multi-column layout,
//          and social icon grid (all per your request).
//
// WHAT WAS REMOVED:
//   - Quick Links column
//   - Social icon buttons
//   - Multi-column grid layout
//
// WHAT REMAINS:
//   - "Built with React + Vite"
//   - "Designed & Developed by [Your Name]"
//   - Copyright year (auto-updates every year)
//
// CONNECTS TO:
//   - Imports `profile` from projectData.js (for your name)
//   - Imported by App.jsx
//   - CSS: .footer, .footer-inner in index.css
//
// MANDATORY: No. Removing it just hides the footer.
// SAFE TO MODIFY: Yes — add any lines you want inside .footer-inner.
// =============================================================================

import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>Built with <strong>React + Vite</strong> · Pure CSS</p>
        <p>
          Designed &amp; Developed by{" "}
          <span className="footer-name">Nur Fareehah Binti Johan</span>
        </p>
        <p>© {year} All rights reserved.</p>
      </div>

      {/* Back to top — appears after scrolling 500px */}
      <button
        className={`to-top ${showTop ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}
