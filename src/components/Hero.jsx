import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

function Hero() {
  const linesRef = useRef([]);

  useEffect(() => {
    const hasAnimated = localStorage.getItem("heroAnimated");

    if (!hasAnimated) {
      gsap.set(linesRef.current, {
        opacity: 0,
        y: 40,
      });

      gsap.to(linesRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        delay: 0.2,
      });

      localStorage.setItem("heroAnimated", "true");
    } else {
      // If already animated, show final state instantly
      gsap.set(linesRef.current, {
        opacity: 1,
        y: 0,
      });
    }
  }, []);

  return (
    <section className="hero">
      {/* Background video */}
      <video
        className="hero-video"
        src="src/assets/NEXEDGE.mission2.mp4" // ✅ use public folder
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="mission-text">
        <p ref={(el) => (linesRef.current[0] = el)}>
          We believe true wealth is built at the intersection of
        </p>
        <p ref={(el) => (linesRef.current[1] = el)}>
          enduring wisdom, transparency and cutting-edge
        </p>
        <p ref={(el) => (linesRef.current[2] = el)}>
          innovation — empowering clients to shape their legacy
        </p>
        <p ref={(el) => (linesRef.current[3] = el)}>
          with clarity and conviction.
        </p>
        <p ref={(el) => (linesRef.current[4] = el)}>#LegacyForward</p>
      </div>
    </section>
  );
}

export default Hero;
