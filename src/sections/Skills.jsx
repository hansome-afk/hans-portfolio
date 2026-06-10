import { Section } from "../components/Section";
import { SectionLabel } from "../components/SectionLabel";
import { sharedStyles } from "../styles/sharedStyles";
import { SKILLS_TECH, SKILLS_SOFT } from "../data/portfolioData";

export function Skills() {
  return (
    <Section id="skills">
      <div style={sharedStyles.content}>
        <div style={sharedStyles.sectionWrap}>
          <SectionLabel>Skills & Stack</SectionLabel>
          <div style={sharedStyles.grid2}>
            <div style={sharedStyles.card}>
              <div
                style={{
                  fontSize: 13, color: "#7C3AED", fontWeight: 700,
                  letterSpacing: 2, marginBottom: 16, textTransform: "uppercase",
                }}
              >
                Technical
              </div>
              <div>
                {SKILLS_TECH.map((s) => (
                  <span key={s} style={sharedStyles.pill}>{s}</span>
                ))}
              </div>
            </div>

            <div style={sharedStyles.card}>
              <div
                style={{
                  fontSize: 13, color: "#06B6D4", fontWeight: 700,
                  letterSpacing: 2, marginBottom: 16, textTransform: "uppercase",
                }}
              >
                Soft Skills
              </div>
              <div>
                {SKILLS_SOFT.map((s) => (
                  <span
                    key={s}
                    style={{ ...sharedStyles.pill, border: "1px solid #06B6D444", color: "#67E8F9" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
