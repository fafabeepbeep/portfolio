// Hero.jsx
// =============================================================================
// WHAT CHANGED: Added LinkedIn and Resume buttons alongside existing buttons.
// WHERE TO UPDATE LINKEDIN: src/projectData.js → profile.linkedin
// WHERE TO PUT RESUME FILE: /public/resume.pdf  → then set profile.resume = "/resume.pdf"
// =============================================================================

import { useEffect, useState } from "react";
import { profile } from "./projectData.js";

export default function Hero() {
  const phrases = profile.typingPhrases;
  const [text,        setText]        = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting,    setDeleting]    = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed   = deleting ? 38 : 85;
    const timer   = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, phraseIndex, phrases]);

  const initials = profile.name.split(" ").filter(Boolean).slice(0,2).map((w) => w[0]).join("");

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="container hero-inner">
        <div className="reveal">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-subtitle">{profile.subtitle}</p>

          <div className="hero-typing">
            {text}<span className="cursor">&nbsp;</span>
          </div>

          {/* ── Action buttons ── */}
          {/* To add/remove a button: add/delete the relevant line below.        */}
          {/* LinkedIn URL → projectData.js profile.linkedin                     */}
          {/* Resume file  → /public/resume.pdf, then profile.resume="/resume.pdf" */}
          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#about" className="btn btn-ghost">
              About Me
            </a>

            {/* LinkedIn button — hidden if profile.linkedin is "" */}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                {/* LinkedIn SVG icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            )}

            {/* Resume button — hidden if profile.resume is "" */}
            {profile.resume && (
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                {/* Document SVG icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
                Resume
              </a>
            )}

          </div>
        </div>

        <div className="hero-photo-wrap reveal">
          {profile.profileImage
            ? <img src={profile.profileImage} alt={profile.name} className="hero-photo" />
            : <div className="hero-photo photo-placeholder">{initials}</div>
          }
        </div>
      </div>
    </section>
  );
}
