import { Section } from "../components/Section";
import { SectionLabel } from "../components/SectionLabel";
import { sharedStyles } from "../styles/sharedStyles";
import { EXPERIENCE } from "../data/portfolioData";

export function Experience() {
  return (
    <Section id="experience">
      <div style={sharedStyles.content}>
        <div style={sharedStyles.sectionWrap}>
          <SectionLabel>Experience & Organizations</SectionLabel>
          <div style={sharedStyles.grid2}>
            {EXPERIENCE.map((e, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  padding: "16px 0",
                  borderBottom: "1px solid #ffffff08",
                }}
              >
                <div style={sharedStyles.timelineDot} />
                <div>
                  <div style={{ fontWeight: 600, color: "#fff", fontSize: 14 }}>{e.role}</div>
                  <div style={{ color: "#6B6486", fontSize: 12, marginTop: 3 }}>{e.org}</div>
                  <div
                    style={{
                      color: "#7C3AED",
                      fontSize: 11,
                      fontFamily: "'Space Mono', monospace",
                      marginTop: 4,
                    }}
                  >
                    {e.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
