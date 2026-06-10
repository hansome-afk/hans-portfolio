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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            {AWARDS.map((a, i) => (
              <div key={i} style={{ ...sharedStyles.card, display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ fontSize: 24 }}>{a.icon}</span>
                <div>
                  <div style={{ fontWeight: 600, color: "#fff", fontSize: 14 }}>{a.title}</div>
                  <div style={{ color: "#6B6486", fontSize: 12, marginTop: 4 }}>{a.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
