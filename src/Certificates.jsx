// Certificates.jsx
// =============================================================================
// PURPOSE: "Licenses & Certifications" section — a grid of certification cards.
//
// WHY A SEPARATE FILE?
//   Certificates are their own content category with unique fields
//   (credentialId, credentialUrl) that don't belong in other sections.
//   Keeping it separate means you can add/remove/restyle it without risk.
//
// CONNECTS TO:
//   - Imports `certificates` from projectData.js
//   - Imported by App.jsx
//   - CSS: .certs-grid, .cert-card, .cert-thumb, .cert-body in index.css
//
// MANDATORY: No. Safe to delete (remove import + <Certificates /> in App.jsx too).
//
// HOW TO ADD A CERTIFICATE: Edit the `certificates` array in projectData.js.
//   This file automatically renders whatever is in that array.
//
// IS IT REUSABLE? Yes — you could use <Certificates /> inside a modal or
//   another section if you wanted to embed it elsewhere.
// =============================================================================

import { certificates } from "./projectData.js";

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Licenses &amp; Certifications</span>
          <h2 className="section-title">Certificates &amp; involvement</h2>
          <p className="section-sub">Courses, certifications, and learning milestones.</p>
        </div>

        <div className="certs-grid">
          {certificates.map((cert, i) => (
            <div className="cert-card reveal" key={i}>

              {/* Certificate image / preview thumbnail */}
              <div className="cert-thumb">
                {cert.image
                  ? <img src={cert.image} alt={cert.name} loading="lazy" />
                  : "📜"   /* emoji placeholder */
                }
              </div>

              <div className="cert-body">
                {/* Issuer name (small coloured label) */}
                <div className="cert-issuer">{cert.issuer}</div>
                {/* Certificate / course name */}
                <div className="cert-name">{cert.name}</div>
                {/* Issue date */}
                <div className="cert-date">Issued {cert.date}</div>

                {/* Credential ID — only shown if provided */}
                {cert.credentialId && (
                  <div className="cert-id">ID: {cert.credentialId}</div>
                )}

                {/* Verify credential button — only shown if URL provided */}
                {cert.credentialUrl && (
                  <a href={cert.credentialUrl} target="_blank" rel="noreferrer"
                     className="cert-verify">
                    ↗ Verify credential
                  </a>
                )}

                {/* Extra media thumbnails */}
                {cert.media && cert.media.length > 0 && (
                  <div className="award-media" style={{ marginTop: "12px" }}>
                    {cert.media.map((src, j) => (
                      <img key={j} src={src} alt={`${cert.name} media ${j + 1}`}
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
