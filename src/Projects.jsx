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
          <h2 className="section-title">Things I've built</h2>
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
