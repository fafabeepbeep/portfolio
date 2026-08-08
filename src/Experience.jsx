// Experience.jsx
// =============================================================================
// PURPOSE: Shows professional work experience — organisations, roles, durations,
//          descriptions, skills used, and optional media.
//          REPLACES the old "Activities & Involvement" section.
//
// WHY A SEPARATE FILE (not merged into App.jsx or About.jsx)?
//   Separation of concerns. Each section is its own component so:
//   1. You can delete just this file + its entry in App.jsx to remove the section.
//   2. Its layout logic doesn't clutter other sections.
//   3. It's reusable — you could embed <Experience /> anywhere in the site.
//
// CONNECTS TO:
//   - Imports `experiences` from projectData.js
//   - Imported by App.jsx
//   - CSS classes: .exp-list, .exp-card, .exp-logo, .exp-body, etc. in index.css
//
// MANDATORY: No. Safe to delete — just also remove the import + <Experience />
//            in App.jsx. The app won't break.
//
// HOW TO ADD AN EXPERIENCE: Edit the `experiences` array in projectData.js.
//   Copy one { } block and paste a new one. This file never needs to change.
//
// HOW TO ADD A MEDIA LIGHTBOX: The exp-media images already open the full
//   Gallery lightbox if you wanted to extend that — but for now clicking an
//   exp image opens it in a new tab for simplicity.
// =============================================================================

import { experiences } from "./projectData.js";

export default function Experience() {
  // Get initials from org name for the logo placeholder
  const initials = (name) =>
    name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

  return (
    <section id="experience" className="section section-tint">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-sub">Professional roles, internships, and meaningful contributions.</p>
        </div>

        <div className="exp-list">
          {experiences.map((exp, i) => (
            <div className="exp-card reveal" key={i}>

              {/* Organisation logo — shows image if provided, otherwise shows initials */}
              {exp.logo ? (
                <img src={exp.logo} alt={exp.org} className="exp-logo" />
              ) : (
                <div className="exp-logo">{initials(exp.org)}</div>
              )}

              <div className="exp-body">
                {/* Organisation name (smaller, coloured) */}
                <div className="exp-org">{exp.org}</div>
                {/* Role / position title (larger, bold) */}
                <div className="exp-position">{exp.position}</div>
                {/* Duration e.g. "Jan 2025 – Present" */}
                <div className="exp-duration">{exp.duration}</div>
                {/* What you did */}
                <p className="exp-desc">{exp.description}</p>

                {/* Skills tags — only rendered if the array is non-empty */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="exp-skills">
                    {exp.skills.map((s) => (
                      <span className="exp-skill" key={s}>{s}</span>
                    ))}
                  </div>
                )}

                {/* Media thumbnails — only rendered if images are provided */}
                {exp.media && exp.media.length > 0 && (
                  <div className="exp-media">
                    {exp.media.map((src, j) => (
                      <img
                        key={j}
                        src={src}
                        alt={`${exp.org} photo ${j + 1}`}
                        loading="lazy"
                        onClick={() => window.open(src, "_blank")}
                      />
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
