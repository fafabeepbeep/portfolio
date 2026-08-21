// About.jsx
// =============================================================================
// WHAT CHANGED:
//   - Added LinkedIn + Resume CTA buttons above the section heading
//   - Interests and objective now read from updated values in projectData.js
//   - Added glass-card class to detail cards and objective block
// =============================================================================

import { profile } from "./projectData.js";

export default function About() {
  // Detail card — renders one info row. Hidden automatically if value is empty.
  const Detail = ({ label, value, href }) => {
    if (!value) return null;
    return (
      <div className="detail-card glass-card">
        <div className="detail-label">{label}</div>
        <div className="detail-value">
          {href
            ? <a href={href} target="_blank" rel="noreferrer">{value}</a>
            : value
          }
        </div>
      </div>
    );
  };

  const initials = profile.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <section id="about" className="section section-tint">
      <div className="container">

        {/* ── LinkedIn + Resume CTA buttons ──────────────────────────────── */}
        {/* Shown above the heading. Hidden if both values are "" in          */}
        {/* projectData.js — safe to leave empty until you have files ready. */}
        {/* TO UPDATE LINKEDIN: change profile.linkedin in projectData.js     */}
        {/* TO UPDATE RESUME:   put resume.pdf in /public, set profile.resume */}
        {(profile.linkedin || profile.resume) && (
          <div className="about-cta reveal">

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary about-cta-btn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            )}

            {profile.resume && (
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost about-cta-btn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
                View Curriculum Vitae
              </a>
            )}

          </div>
        )}

        {/* Section heading */}
        <div className="section-head reveal">
          <span className="eyebrow">About</span>
          <h2 className="section-title">Get to know me</h2>
          <p className="section-sub">A little about my background, what I do, and where I'm headed.</p>
        </div>

        <div className="about-grid">
          {/* Profile photo */}
          <div className="reveal">
            {profile.profileImage
              ? <img src={profile.profileImage} alt={profile.name} className="about-photo" />
              : <div className="about-photo photo-placeholder">{initials}</div>
            }
          </div>

          {/* Bio + detail cards */}
          <div className="reveal">
            <p className="about-bio">{profile.bio}</p>

            <div className="about-detail-grid">
              <Detail label="University"  value={profile.university} />
              <Detail label="Degree"      value={profile.degree} />
              <Detail label="Status"      value={profile.status} />
              <Detail label="Location"    value={profile.location} />
              <Detail label="Email"       value={profile.email}    href={`mailto:${profile.email}`} />
              <Detail label="Phone"       value={profile.phone}    href={`tel:${profile.phone}`} />
              <Detail label="LinkedIn"    value={profile.linkedin ? "View Profile" : ""} href={profile.linkedin} />
              <Detail label="GitHub"      value={profile.github   ? "View Profile" : ""} href={profile.github} />
              <Detail label="Interests"   value={profile.interests} />
            </div>

            <div className="about-objective glass-card">
              <div className="detail-label">Career Objective</div>
              <p>{profile.objective}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
