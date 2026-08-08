// Skills.jsx
// PURPOSE: Renders one card per skill category from projectData.js.
// CONNECTS TO: Imports `skills` from projectData.js. Imported by App.jsx.
// MANDATORY: No. Deleting hides the Skills section.
// SAFE TO MODIFY: Yes. To add a skill category, add to the skills[] array in projectData.js.

import { skills } from "./projectData.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-sub">Tools and technologies I use to design and build things.</p>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-card reveal" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
