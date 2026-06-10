import { Section } from "../components/Section";
import { SectionLabel } from "../components/SectionLabel";
import { sharedStyles } from "../styles/sharedStyles";

export function Contact() {
  return (
    <Section id="contact">
      <div style={sharedStyles.content}>
        <div style={sharedStyles.sectionWrap}>
          <SectionLabel>Contact</SectionLabel>
          <div
            style={{
              ...sharedStyles.card,
              textAlign: "center",
              padding: "60px 40px",
              background: "linear-gradient(135deg, #13121E 0%, #1A1528 100%)",
              border: "1px solid #7C3AED22",
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 8 }}>👋</div>
            <h2 style={{ color: "#fff", fontWeight: 800, fontSize: 28, margin: "0 0 12px" }}>
              Let's work together
            </h2>
            <p style={{ color: "#6B6486", fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
              Open to internships, part-time roles, and full-time opportunities.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
              <a
                href="mailto:hdnm.delosreyes@gmail.com"
                style={{ ...sharedStyles.btnPrimary, textDecoration: "none", display: "inline-block", fontSize: 15 }}
              >
                hdnm.delosreyes@gmail.com
              </a>
              <div style={{ color: "#4A4560", fontSize: 13, marginTop: 8 }}>📱 (+63) 966 730 2542</div>
              <div style={{ color: "#4A4560", fontSize: 13 }}>📍 Manila · Open to on-site, hybrid, or remote</div>            
            </div>
          </div>  
        </div>
      </div>
    </Section>
  );
}
