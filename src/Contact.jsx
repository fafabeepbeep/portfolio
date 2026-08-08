// Contact.jsx
// PURPOSE: Contact details card + form. Form opens user's email app on submit.
// CONNECTS TO: Imports `profile` from projectData.js. Imported by App.jsx.
// MANDATORY: No. Safe to delete.
// FUTURE: To use a real backend form, replace the handleSubmit logic with a
//   fetch() POST to a service like Formspree (https://formspree.io) — free tier available.

import { useState } from "react";
import { profile } from "./projectData.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const sub  = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${sub}&body=${body}`;
  };

  const Row = ({ icon, label, value, href }) =>
    value ? (
      <div className="contact-row">
        <div className="contact-icon">{icon}</div>
        <div className="contact-info">
          <div className="label">{label}</div>
          <div className="value">
            {href ? <a href={href} target="_blank" rel="noreferrer">{value}</a> : value}
          </div>
        </div>
      </div>
    ) : null;

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let's connect</h2>
          <p className="section-sub">Have a question or opportunity? I'd love to hear from you.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-card reveal">
            <Row icon="✉" label="Email"    value={profile.email}    href={`mailto:${profile.email}`} />
            <Row icon="☎" label="Phone"    value={profile.phone}    href={`tel:${profile.phone}`} />
            <Row icon="in" label="LinkedIn" value={profile.linkedin ? "View Profile" : ""} href={profile.linkedin} />
            <Row icon="gh" label="GitHub"   value={profile.github   ? "View Profile" : ""} href={profile.github} />
            <Row icon="◎" label="Location" value={profile.location} />
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={update} placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={update} placeholder="Write your message..." required />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
            <p className="form-note">Opens your email app pre-filled with your message.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
