// Awards.jsx
// =============================================================================
// PURPOSE: Showcases awards and recognition.
//          REPLACES the old "My Journey by Year" Timeline section.
//
// WHY A SEPARATE FILE?
//   Same reason as Experience.jsx — one section = one file. You can delete this
//   file + its App.jsx line cleanly without touching anything else.
//
// CONNECTS TO:
//   - Imports `awards` from projectData.js
//   - Imported by App.jsx
//   - CSS: .awards-grid, .award-card, .award-thumb, .award-body in index.css
//
// MANDATORY: No. Safe to delete.
//
// HOW TO ADD AN AWARD: Edit the `awards` array in projectData.js. This file
//   does not need to change — it automatically renders whatever is in the array.
//
// HOW MEDIA WORKS: award.image is the main card thumbnail. award.media is an
//   optional array of extra images shown as small thumbnails below. Clicking a
//   thumbnail opens the image in a new tab.
// =============================================================================

import { awards } from "./projectData.js";

export default function Awards() {
  return (
    <section id="awards" className="section section-tint">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Awards</span>
          <h2 className="section-title">Recognition & achievements</h2>
          <p className="section-sub">Competitions, honours, and milestones along the way.</p>
        </div>

        <div className="awards-grid">
          {awards.map((award, i) => (
            <div className="award-card reveal" key={i}>

              {/* Main award image / certificate thumbnail */}
              <div className="award-thumb">
                {award.image
                  ? <img src={award.image} alt={award.title} loading="lazy" />
                  : "🏆"   /* emoji placeholder when no image provided */
                }
              </div>

              <div className="award-body">
                <div className="award-date">{award.date}</div>
                <div className="award-title">{award.title}</div>
                <div className="award-org">{award.org}</div>
                <p className="award-desc">{award.description}</p>

                {/* Extra media thumbnails */}
                {award.media && award.media.length > 0 && (
                  <div className="award-media">
                    {award.media.map((src, j) => (
                      <img key={j} src={src} alt={`${award.title} media ${j + 1}`}
                           loading="lazy" onClick={() => window.open(src, "_blank")} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
