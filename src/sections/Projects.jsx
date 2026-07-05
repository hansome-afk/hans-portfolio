import { Section } from "../components/Section";
import { SectionLabel } from "../components/SectionLabel";
import { sharedStyles } from "../styles/sharedStyles";
import { PROJECTS } from "../data/portfolioData";

export function Projects() {
  return (
    <Section id="projects">
      <div style={sharedStyles.content}>
        <div style={sharedStyles.sectionWrap}>
          <SectionLabel>Projects</SectionLabel>
          <div style={sharedStyles.grid2}>
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                style={{
                  ...sharedStyles.card,
                  borderTop: `2px solid ${p.color}`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Glow background */}
                <div
                  style={{
                    position: "absolute", top: 0, right: 0,
                    width: 200, height: 200, borderRadius: "50%",
                    background: `radial-gradient(circle, ${p.color}12 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                  <span
                    style={{
                      ...sharedStyles.pill,
                      background: `${p.color}18`,
                      border: `1px solid ${p.color}44`,
                      color: p.color,
                      fontSize: 11,
                    }}
                  >
                    {p.tag}
                  </span>
                  <span
                    style={{
                      background: "#1E1B2E",
                      border: "1px solid #ffffff12",
                      color: "#9B93B8",
                      borderRadius: 100,
                      padding: "4px 12px",
                      fontSize: 11,
                      fontWeight: 500,
                    }}
                  >
                    {p.role}
                  </span>
                </div>

                <div style={{ marginTop: 16, fontWeight: 800, fontSize: 18, color: "#fff", lineHeight: 1.2 }}>
                  {p.name}
                </div>
                <div style={{ color: p.color, fontSize: 13, marginTop: 2 }}>{p.sub}</div>
                <div style={{ color: "#6B6486", fontSize: 13, marginTop: 12, lineHeight: 1.6 }}>{p.desc}</div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 11,
                    color: "#4A4560",
                    marginTop: 16,
                  }}
                >
                  {p.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
