import { Section } from "../components/Section";
import { SectionLabel } from "../components/SectionLabel";
import { sharedStyles } from "../styles/sharedStyles";
import { EDUCATION } from "../data/portfolioData";

export function Education() {
  return (
    <Section id="education">
      <div style={sharedStyles.content}>
        <div style={sharedStyles.sectionWrap}>
          <SectionLabel>Education</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {EDUCATION.map((e, i) => (
              <div
                key={i}
                style={{
                  ...sharedStyles.card,
                  borderLeft: e.badge === "Cum Laude"
                    ? "2px solid #F59E0B"
                    : e.current
                    ? "2px solid #7C3AED"
                    : "2px solid #ffffff08",
                  display: "flex",
                  gap: 24,
                  alignItems: "flex-start",
                  ...(e.badge === "Cum Laude" ? {
                    background: "linear-gradient(135deg, #1E1528 0%, #1A150A 100%)",
                    boxShadow: "0 0 20px #F59E0B10",
                  } : {}),
                }}
              >
                <div style={{
                  minWidth: 110,
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  color: "#4A4560",
                  paddingTop: 4,
                }}>
                  {e.year}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: 16 }}>{e.degree}</div>
                  {e.sub && (
                    <div style={{ color: "#7C3AED", fontSize: 13, marginTop: 2 }}>{e.sub}</div>
                  )}
                  <div style={{ color: "#9B93B8", fontSize: 13, marginTop: 6 }}>{e.school}</div>
                  <div style={{ color: "#4A4560", fontSize: 12, marginTop: 2 }}>{e.dept}</div>

                  <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
                    {e.badge === "Cum Laude" && (
                      <span style={{
                        display: "inline-block",
                        background: "#F59E0B22",
                        border: "1px solid #F59E0B55",
                        color: "#FCD34D",
                        fontSize: 11,
                        padding: "2px 12px",
                        borderRadius: 100,
                        fontWeight: 700,
                        letterSpacing: 0.5,
                      }}>
                        🎖️ Cum Laude
                      </span>
                    )}
                    {e.current && (
                      <span style={{
                        display: "inline-block",
                        background: "#7C3AED22",
                        color: "#C4B5FD",
                        fontSize: 11,
                        padding: "2px 10px",
                        borderRadius: 100,
                        fontWeight: 600,
                      }}>
                        Currently Enrolled
                      </span>
                    )}
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
