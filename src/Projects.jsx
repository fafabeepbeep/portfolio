// Projects.jsx
// =============================================================================
// WHAT CHANGED:
//   - Gallery section removed from the site entirely
//   - Screenshots now live inside the project modal as a horizontal carousel
//   - Carousel supports click arrows (desktop) and swipe (mobile via touch events)
//   - longDescription field now rendered in modal for richer project stories
// =============================================================================

import { useState, useEffect, useRef } from "react";
import { projects } from "./projectData.js";

// =============================================================================
// IMAGE CAROUSEL — used inside the modal
// Props:
//   images  → string[]  array of image paths from projectData.js
//   title   → string    used for alt text
// =============================================================================
function Carousel({ images, title }) {
  const [index, setIndex] = useState(0);

  // Filter out empty strings so placeholders don't create blank slides
  const slides = images.filter(Boolean);

  // Touch swipe state
  const touchStartX = useRef(null);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev(); // swipe threshold: 40px
    touchStartX.current = null;
  };

  // No real images — show placeholder
  if (slides.length === 0) {
    return <div className="carousel-placeholder">Project screenshots coming soon</div>;
  }

  // Single image — no arrows needed
  if (slides.length === 1) {
    return (
      <div className="carousel">
        <img src={slides[0]} alt={title} className="carousel-img" />
      </div>
    );
  }

  return (
    <div
      className="carousel"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* The visible slide */}
      <img
        src={slides[index]}
        alt={`${title} screenshot ${index + 1}`}
        className="carousel-img"
      />

      {/* Left arrow */}
      <button
        className="carousel-btn carousel-prev"
        onClick={prev}
        aria-label="Previous screenshot"
      >
        ‹
      </button>

      {/* Right arrow */}
      <button
        className="carousel-btn carousel-next"
        onClick={next}
        aria-label="Next screenshot"
      >
        ›
      </button>

      {/* Dot indicators — shows which slide you're on */}
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to screenshot ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// PROJECT CARD — shown in the grid
// =============================================================================
function ProjectCard({ project, onClick }) {
  const p = project;
  const coverImage = p.images?.find(Boolean); // first non-empty image

  return (
    <article
      className="project-card reveal"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {/* Cover image */}
      <div className="project-thumb">
        {coverImage
          ? <img src={coverImage} alt={p.title} loading="lazy" />
          : <div className="thumb-placeholder">Project Image</div>
        }
        <span className="project-year">{p.year}</span>
      </div>

      <div className="project-body">
        <h3 className="project-title">{p.title}</h3>
        <p className="project-desc">{p.description}</p>

        <div className="project-tags">
          {p.technologies.slice(0, 4).map((t) => (
            <span className="project-tag" key={t}>{t}</span>
          ))}
          {p.technologies.length > 4 && (
            <span className="project-tag">+{p.technologies.length - 4}</span>
          )}
        </div>

        <div className="project-actions" onClick={(e) => e.stopPropagation()}>
          {p.demo   && <a href={p.demo}   target="_blank" rel="noreferrer" className="btn btn-primary btn-small">Live Demo</a>}
          {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-ghost   btn-small">GitHub</a>}
          <button className="btn btn-ghost btn-small" onClick={onClick}>Details ↗</button>
        </div>
      </div>
    </article>
  );
}

// =============================================================================
// PROJECT MODAL — full detail popup with carousel
// =============================================================================
function Modal({ project: p, onClose }) {
    // If the project has isKyouth: true, render the dedicated KYOUTH modal instead
    if (p.isKyouth) return <KyouthModal project={p} onClose={onClose} />;

  const Block = ({ title, text }) =>
    text ? (
      <div className="modal-section">
        <h4>{title}</h4>
        <p style={{ whiteSpace: "pre-line" }}>{text}</p>
      </div>
    ) : null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        {/* ── Screenshot carousel at the top of modal ── */}
        <Carousel images={p.images || []} title={p.title} />

        <div className="modal-body">
          <h2>{p.title}</h2>
          <div className="modal-meta">{p.year} · {p.role}</div>

          {/* Short description */}
          <Block title="Overview" text={p.description} />

          {/* Long description — the richer project story */}
          {p.longDescription && (
            <Block title="About this project" text={p.longDescription} />
          )}

          {/* Tech stack */}
          {p.technologies?.length > 0 && (
            <div className="modal-section">
              <h4>Technology Stack</h4>
              <div className="project-tags">
                {p.technologies.map((t) => (
                  <span className="project-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {p.highlights?.length > 0 && (
            <div className="modal-section">
              <h4>Highlights</h4>
              <ul className="modal-list">
                {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
          )}

          {/* Features */}
          {p.features?.length > 0 && (
            <div className="modal-section">
              <h4>Features</h4>
              <ul className="modal-list">
                {p.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          )}

          <Block title="Architecture"        text={p.architecture} />
          <Block title="Challenges"          text={p.challenges} />
          <Block title="Solutions"           text={p.solutions} />
          <Block title="Lessons Learned"     text={p.lessons} />
          <Block title="Future Improvements" text={p.futureImprovements} />

          {/* Action buttons */}
          <div className="modal-actions">
            {p.demo          && <a href={p.demo}          target="_blank" rel="noreferrer" className="btn btn-primary btn-small">Live Demo</a>}
            {p.github        && <a href={p.github}        target="_blank" rel="noreferrer" className="btn btn-ghost   btn-small">GitHub</a>}
            {p.documentation && <a href={p.documentation} target="_blank" rel="noreferrer" className="btn btn-ghost   btn-small">Docs</a>}
          </div>
        </div>
      </div>
    </div>
  );
}

function KyouthModal({ project: p, onClose }) {
  // Active portfolio tab: "written" | "visual" | "data"
  const [activeTab, setActiveTab] = useState("written");

  const Block = ({ title, text }) =>
    text ? <div className="modal-section"><h4>{title}</h4><p style={{whiteSpace:"pre-line"}}>{text}</p></div> : null;

  // Find the active portfolio category object
  const activeCategory = p.portfolioCategories?.find((c) => c.id === activeTab);

  // Scenario label helper
  const scenarioLabel = (id) => {
    const s = p.scenarios?.find((s) => s.id === id);
    return s ? `Scenario ${s.id} — ${s.title.split("—")[1]?.trim()}` : `Scenario ${id}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal kyouth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        {/* Cover image */}
        {p.images?.[0]
          ? <img src={p.images[0]} alt={p.title} className="modal-img" />
          : <div className="modal-img kyouth-cover">KYOUTH Career Readiness Programme</div>
        }

        <div className="modal-body">
          <h2>{p.title}</h2>
          <div className="modal-meta">{p.year} · {p.role}</div>
          <p style={{marginBottom:"24px", color:"var(--ink-soft)", fontSize:"0.97rem"}}>{p.description}</p>

          {/* ── SCENARIOS ──────────────────────────────────────── */}
          {p.scenarios?.length > 0 && (
            <div className="modal-section">
              <h4>Three Scenarios</h4>
              <div className="kyouth-scenarios">
                {p.scenarios.map((s) => (
                  <div className="kyouth-scenario-card" key={s.id}>
                    <div className="kyouth-scenario-num">Scenario {s.id}</div>
                    <div className="kyouth-scenario-title">{s.title.split("—")[1]?.trim()}</div>
                    <div className="kyouth-scenario-theme">{s.theme}</div>
                    <ul className="kyouth-learned-list">
                      {s.learned.map((item, i) => (
                        <li key={i}>
                          <strong>{item.skill}:</strong> {item.detail}
                        </li>
                      ))}
                    </ul>
                    <div className="kyouth-takeaway">"{s.takeaway}"</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── PORTFOLIO CATEGORIES (tabbed) ─────────────────── */}
          {p.portfolioCategories?.length > 0 && (
            <div className="modal-section">
              <h4>Portfolio</h4>

              {/* Tab buttons */}
              <div className="kyouth-tabs">
                {p.portfolioCategories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`kyouth-tab ${activeTab === cat.id ? "active" : ""}`}
                    onClick={() => setActiveTab(cat.id)}
                  >
                    {cat.icon} {cat.label}
                  </button>
                ))}
              </div>

              {/* Tab description */}
              {activeCategory && (
                <>
                  <p className="kyouth-cat-desc">{activeCategory.description}</p>

                  {/* Deliverables grouped by scenario */}
                  {activeCategory.scenarios.map((scn) => (
                    <div key={scn.scenarioId} className="kyouth-scn-group">
                      <div className="kyouth-scn-label">{scenarioLabel(scn.scenarioId)}</div>
                      <div className="kyouth-deliverables">
                        {scn.deliverables.map((d, i) => (
                          <div className="kyouth-deliverable" key={i}>
                            <div className="kyouth-del-type">{d.type}</div>
                            <div className="kyouth-del-title">{d.title}</div>
                            <div className="kyouth-del-desc">{d.description}</div>
                            {d.file
                              ? <a href={d.file} target="_blank" rel="noreferrer" className="btn btn-ghost btn-small" style={{marginTop:"8px"}}>Open ↗</a>
                              : <span className="kyouth-del-soon">File coming soon</span>
                            }
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}

          {/* ── SKILLS ────────────────────────────────────────── */}
          {p.skillGroups?.length > 0 && (
            <div className="modal-section">
              <h4>Skills Developed</h4>
              <div className="kyouth-skill-groups">
                {p.skillGroups.map((g) => (
                  <div className="kyouth-skill-group" key={g.group}>
                    <div className="kyouth-skill-group-label">{g.group}</div>
                    <div className="project-tags">
                      {g.skills.map((s) => <span className="project-tag" key={s}>{s}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TOOLS USED ────────────────────────────────────── */}
          {p.technologies?.length > 0 && (
            <div className="modal-section">
              <h4>Tools Used</h4>
              <div className="project-tags">
                {p.technologies.map((t) => <span className="project-tag" key={t}>{t}</span>)}
              </div>
            </div>
          )}

          {/* ── STANDARD SECTIONS ─────────────────────────────── */}
          {p.highlights?.length > 0 && (
            <div className="modal-section"><h4>Highlights</h4>
              <ul className="modal-list">{p.highlights.map((h,i) => <li key={i}>{h}</li>)}</ul>
            </div>
          )}
          <Block title="Challenges"          text={p.challenges} />
          <Block title="Solutions"           text={p.solutions} />
          <Block title="Lessons Learned"     text={p.lessons} />
          <Block title="Future Improvements" text={p.futureImprovements} />
        </div>
      </div>
    </div>
  );
}
// =============================================================================
// MAIN EXPORT — the Projects section
// =============================================================================
export default function Projects() {
  const [selected, setSelected] = useState(null);

  // Lock background scroll + Escape key when modal is open
  useEffect(() => {
    if (selected === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section id="projects" className="section section-tint">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Things I've built, created and done</h2>
          <p className="section-sub">Click any card to see screenshots and the full story.</p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              project={p}
              onClick={() => setSelected(i)}
            />
          ))}
        </div>
      </div>

      {selected !== null && (
        <Modal
          project={projects[selected]}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}

