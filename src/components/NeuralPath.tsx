import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export const NeuralPath = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const particleRef = useRef<SVGCircleElement>(null);
  const [docHeight, setDocHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const updateDimensions = () => {
      setWindowWidth(window.innerWidth);
      // Small timeout to ensure DOM is fully painted and expanded
      setTimeout(() => {
        setDocHeight(document.documentElement.scrollHeight);
      }, 300);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    
    // Re-calculate on dynamic content load if any
    const observer = new MutationObserver(updateDimensions);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", updateDimensions);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!pathRef.current || !particleRef.current || docHeight === 0) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    // Reset path stroke
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2, // Smooth scrubbing
        onUpdate: (self) => {
          // Dynamic glow pulse based on scroll velocity
          const velocity = Math.abs(self.getVelocity());
          const glowIntensity = gsap.utils.clamp(1, 2.5, 1 + velocity / 500);
          gsap.to(particleRef.current, {
            scale: glowIntensity,
            duration: 0.2,
            overwrite: "auto"
          });
        }
      }
    });

    // Draw line
    tl.to(path, {
      strokeDashoffset: 0,
      ease: "none",
    }, 0);

    // Move particle along the path
    tl.to(particleRef.current, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
      },
      ease: "none",
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [docHeight, windowWidth]);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  // 11-Step Path Coordinates (0-10000 Y scale)
  // X: 0 is left, 500 is center, 1000 is right
  // Y: 0 is top, 10000 is bottom
  const desktopPath = [
    "M 500 50", // 1. Start from CTA button in Section 1 (Hero section)
    "C 500 400, 150 600, 150 1500", // 2. Move diagonally toward LEFT side of moving element in Section 2
    "C 150 2000, 500 2200, 500 2500", // 3. Pass through CENTER of Section 3
    "C 500 3000, 500 3200, 500 3500", // 4. Move BETWEEN the two cards in Section 4
    "C 500 4000, 500 4200, 500 4500", // 5. Pass BETWEEN images in Section 5
    "C 500 5000, 500 5200, 500 5500", // 6. Move BETWEEN text and image in Section 6
    "C 500 6000, 500 6200, 500 6500", // 7. Pass BETWEEN "Who we work with" text and logo grid in Section 7
    "C 500 7000, 500 7200, 500 7500", // 8. Move BETWEEN cards in Section 8
    "C 500 8000, 850 8200, 850 8500", // 9. Pass from RIGHT SIDE of image in Section 9
    "C 850 9000, 500 9200, 500 9500", // 10. Move BETWEEN contact form and text in Section 10
    "C 500 9700, 500 9800, 500 9950"  // 11. END near the Submit Button
  ].join(" ");

  const tabletPath = [
    "M 500 50",
    "C 500 500, 300 1000, 300 1500",
    "C 300 2000, 500 2200, 500 2500",
    "C 500 3000, 500 3200, 500 3500",
    "C 500 4000, 500 4200, 500 4500",
    "C 500 5000, 500 5200, 500 5500",
    "C 500 6000, 500 6200, 500 6500",
    "C 500 7000, 500 7200, 500 7500",
    "C 500 8000, 700 8200, 700 8500",
    "C 700 9000, 500 9200, 500 9500",
    "C 500 9700, 500 9800, 500 9950"
  ].join(" ");

  const mobilePath = [
    "M 500 50",
    "L 500 1500",
    "L 500 2500",
    "L 500 3500",
    "L 500 4500",
    "L 500 5500",
    "L 500 6500",
    "L 500 7500",
    "L 500 8500",
    "L 500 9500",
    "L 500 9950"
  ].join(" ");

  const currentPath = isMobile ? mobilePath : isTablet ? tabletPath : desktopPath;

  // Connection nodes at key Y coordinates
  const nodes = [
    { cx: 500, cy: 50 },
    { cx: isMobile ? 500 : isTablet ? 300 : 150, cy: 1500 },
    { cx: 500, cy: 2500 },
    { cx: 500, cy: 3500 },
    { cx: 500, cy: 4500 },
    { cx: 500, cy: 5500 },
    { cx: 500, cy: 6500 },
    { cx: 500, cy: 7500 },
    { cx: isMobile ? 500 : isTablet ? 700 : 850, cy: 8500 },
    { cx: 500, cy: 9500 },
    { cx: 500, cy: 9950 },
  ];

  return (
    <div 
      ref={containerRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-[40] overflow-hidden" 
      style={{ height: docHeight > 0 ? docHeight : '100vh' }}
    >
      <svg
        ref={svgRef}
        className="w-full h-full opacity-80"
        viewBox="0 0 1000 10000"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glow-particle" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="10%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="50%" stopColor="rgba(147, 197, 253, 1)" />
            <stop offset="90%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
        </defs>

        {/* Background faint path */}
        <path
          d={currentPath}
          fill="none"
          stroke="rgba(59, 130, 246, 0.15)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />

        {/* Animated glowing path */}
        <path
          ref={pathRef}
          d={currentPath}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="4"
          vectorEffect="non-scaling-stroke"
          filter="url(#glow-line)"
          strokeLinecap="round"
        />

        {/* Connection Nodes */}
        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="#93C5FD"
            filter="url(#glow-particle)"
            className="opacity-60"
          />
        ))}

        {/* Moving particle (Energy pulse) */}
        <circle
          ref={particleRef}
          r="6"
          fill="#FFFFFF"
          filter="url(#glow-particle)"
          className="shadow-[0_0_30px_rgba(255,255,255,1)]"
        />
      </svg>
    </div>
  );
};
