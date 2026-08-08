// Gallery.jsx
// =============================================================================
// PURPOSE: Displays a responsive image grid collected from all projects' gallery
//          arrays. Clicking any image opens a full-screen lightbox.
//
// CONNECTS TO:
//   - Imports `projects` from projectData.js
//   - Imported by App.jsx
//   - CSS: .gallery-grid, .gallery-item, .lightbox in index.css
//
// MANDATORY: No. Safe to delete.
//
// ── HOW THE GALLERY SCALES (answering your questions) ──────────────────────
//
// Q: Does it auto-expand when I add more images?
//    YES. The grid uses CSS `auto-fill` with `minmax(200px, 1fr)`. This means
//    "make as many columns as fit at min 200px each." Add 1 or 200 images —
//    the grid rearranges itself. You never change any layout code.
//
// Q: Is there an image limit?
//    NO hard limit. In practice, hundreds of images work fine. For thousands,
//    you'd want virtualisation (only rendering visible items), but that's
//    overkill for a portfolio.
//
// Q: Does it lazy-load images?
//    YES. Every <img> has loading="lazy". The browser only downloads images
//    when they're about to scroll into view — this is native browser behaviour,
//    no JavaScript library needed. Very good for performance.
//
// Q: How to add images without changing layout?
//    Just add image paths to the `gallery` array of any project in
//    projectData.js. This component collects ALL of them automatically.
//    Example:
//      gallery: ["/project1/a.jpg", "/project1/b.jpg", "/project1/c.jpg"],
//    Three images → three gallery cells. Done.
// =============================================================================

import { useState, useEffect } from "react";
import { projects } from "./projectData.js";

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null); // { src, title } or null

  // Collect all gallery images from every project into one flat array.
  // This runs once at render — no data fetching, very fast.
  const items = projects.flatMap((p) =>
    (p.gallery || []).map((src) => ({ src, title: p.title }))
  );

  // Close lightbox with Escape key
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="gallery" className="section section-tint">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Gallery</span>
          <h2 className="section-title">Screenshots &amp; moments</h2>
          <p className="section-sub">
            A visual look at projects and activities.
            Add images to any project's <code>gallery</code> array in{" "}
            <code>projectData.js</code> — they appear here automatically.
          </p>
        </div>

        {/* AUTO-FILL RESPONSIVE GRID — no column count is hardcoded */}
        <div className="gallery-grid">
          {items.map((item, i) => (
            <div className="gallery-item reveal" key={i} onClick={() => setLightbox(item)}>
              {item.src
                ? <img src={item.src} alt={item.title} loading="lazy" />    // lazy load
                : <div className="gallery-ph">Screenshot Placeholder</div>
              }
              <div className="gallery-caption">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX — full-screen overlay, click anywhere to close */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          {lightbox.src
            ? <img src={lightbox.src} alt={lightbox.title} />
            : <div className="lightbox-ph">{lightbox.title}</div>
          }
        </div>
      )}
    </section>
  );
}
