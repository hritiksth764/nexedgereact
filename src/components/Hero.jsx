import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";
import { useOnLoad } from "./context/StoreProvider";

function Hero() {
  const linesRef = useRef([]);
  const { onLoad, setOnLoad } = useOnLoad();
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Only run the animation logic on the client side
    if (typeof window === "undefined") return;

    if (onLoad && !hasAnimated.current) {
      // Initial load - run animation
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
        onComplete: () => {
          // Mark animation as completed
          hasAnimated.current = true;
          setOnLoad(false);
        },
      });
    } else if (!onLoad && !hasAnimated.current) {
      // If onLoad is false but we haven't animated yet, set final state
      gsap.set(linesRef.current, {
        opacity: 1,
        y: 0,
      });
      hasAnimated.current = true;
    } else if (hasAnimated.current) {
      // If we've already animated, just ensure final state
      gsap.set(linesRef.current, {
        opacity: 1,
        y: 0,
      });
    }
  }, [onLoad, setOnLoad]);

  return (
    <section className="hero">
      {/* Background video */}
      <video
        className="hero-video"
        src="src/assets/NEXEDGE.mission2.mp4"
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
