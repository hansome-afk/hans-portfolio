import { Section } from "../components/Section";
import { SectionLabel } from "../components/SectionLabel";
import { sharedStyles } from "../styles/sharedStyles";
import { AWARDS } from "../data/portfolioData";

export function Awards() {
  return (
    <Section id="awards">
      <div style={sharedStyles.content}>
        <div style={sharedStyles.sectionWrap}>
          <SectionLabel>Awards & Honors</SectionLabel>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}>
            {AWARDS.map((a, i) => (
              <div
                key={i}
                style={{
                  ...sharedStyles.card,
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  ...(a.highlight ? {
                    background: "linear-gradient(135deg, #1E1528 0%, #2A1F0E 100%)",
                    border: "1px solid #F59E0B55",
                    boxShadow: "0 0 24px #F59E0B18",
                    gridColumn: "1 / -1",
                  } : {}),
                }}
              >
                <span style={{ fontSize: a.highlight ? 32 : 24 }}>{a.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontWeight: 700,
                    fontSize: a.highlight ? 18 : 14,
                    color: a.highlight ? "#FCD34D" : "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    flexWrap: "wrap",
                  }}>
                    {a.title}
                    {a.highlight && (
                      <span style={{
                        background: "#F59E0B22",
                        border: "1px solid #F59E0B55",
                        color: "#FCD34D",
                        fontSize: 10,
                        padding: "2px 10px",
                        borderRadius: 100,
                        fontWeight: 700,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                      }}>
                        Latin Honors
                      </span>
                    )}
                  </div>
                  <div style={{
                    color: a.highlight ? "#D4AC4A" : "#6B6486",
                    fontSize: 13,
                    marginTop: 4,
                    lineHeight: 1.5,
                  }}>
                    {a.detail}
                  </div>
                  {a.highlight && (
                    <div style={{ color: "#9B7A2A", fontSize: 12, marginTop: 6 }}>
                      Awarded to graduates with a GWA of 1.75 or better across all semesters
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
  