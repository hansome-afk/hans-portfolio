import { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Awards } from "./sections/Awards";
import { Contact } from "./sections/Contact";

export default function App() {
  const [active, setActive] = useState("About");

  const handleNavigate = (section) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(section);
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        background: "#0D0D14",
        color: "#E8E6F0",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
      > 
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <Navbar active={active} onNavigate={handleNavigate} />

      <Hero onNavigate={handleNavigate} />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Awards />
      <Contact />

      <Footer />
    </div>
  );
}
