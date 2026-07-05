import { sharedStyles } from "../styles/sharedStyles";

export function Hero({ onNavigate }) {
  const stats = [
    { num: "8", label: "Terms Dean's Listed" },
    { num: "2", label: "Apps Developed" },
    { num: "9+", label: "Leadership Roles" },
    { num: "UST", label: "College of CICS" },
  ];

  return (
    <>
      <style>{`
        .hero-title { font-size: clamp(36px, 6vw, 72px); }
        .hero-bio   { font-size: 18px; }
        .hero-stats { gap: 48px; }

        @media (max-width: 768px) {
          .hero-title  { font-size: 36px !important; }
          .hero-bio    { font-size: 15px !important; }
          .hero-stats  { gap: 28px !important; justify-content: center; }
          .hero-buttons { flex-direction: column; align-items: center; }
        }
      `}</style>

      <div
        id="about"
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow effects */}
        <div style={{
          position: "absolute", top: "10%", right: "-10%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, #7C3AED18 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "5%", left: "-5%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, #06B6D418 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Content */}
        <div style={{
          width: "100%",
          maxWidth: "100%",
          paddingTop: 100,
          paddingBottom: 60,
          paddingLeft: "clamp(24px, 5%, 120px)",
          paddingRight: "clamp(24px, 5%, 120px)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 12,
            letterSpacing: 4,
            color: "#7C3AED",
            textTransform: "uppercase",
            marginBottom: 20,
          }}>
            Available for opportunities
          </div>

          <h1 className="hero-title" style={{
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -1,
            margin: 0,
            color: "#fff",
          }}>
            Hans Dionysius Neziah
            <br />
            <span style={{
              background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Delos Reyes
            </span>
          </h1>

          <p className="hero-bio" style={{
            color: "#9B93B8",
            marginTop: 24,
            maxWidth: 600,
            lineHeight: 1.7,
            textAlign: "center",
          }}>
            IT student at UST specializing in Web &amp; Mobile App Development. Dean's Lister,
            student leader, and builder of apps that solve real-world problems.
          </p>

          <div className="hero-buttons" style={{
            display: "flex",
            gap: 16,
            marginTop: 40,
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
            <button style={sharedStyles.btnPrimary} onClick={() => onNavigate("Projects")}>
              View My Projects
            </button>
            <button
              onClick={() => onNavigate("Contact")}
              style={{
                background: "transparent",
                color: "#E8E6F0",
                border: "1px solid #ffffff22",
                borderRadius: 8,
                padding: "13px 28px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Get In Touch
            </button>
          </div>

          <div className="hero-stats" style={{
            display: "flex",
            marginTop: 64,
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center", padding: "0 24px" }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "#5C5578", marginTop: 4, letterSpacing: 0.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
