import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/portfolioData";

export function Navbar({ active, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(13,13,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #ffffff0d" : "none",
        transition: "all 0.3s ease",
        padding: "0 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 15,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: 1,
          }}
        >
          Hans<span style={{ color: "#7C3AED" }}>.</span>
        </span>

        <ul style={{ display: "flex", gap: 8, listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => onNavigate(link)}
                style={{
                  background: "none",
                  border: "none",
                  color: active === link ? "#C4B5FD" : "#6B6486",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: "6px 12px",
                  borderRadius: 6,
                  letterSpacing: 0.3,
                  transition: "color 0.2s",
                }}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
