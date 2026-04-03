import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SystemFlowLine = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGPathElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    const observer = new ResizeObserver(updateDimensions);
    observer.observe(document.body);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      observer.disconnect();
    };
  }, []);

  const getPoints = () => {
    const { width, height } = dimensions;
    if (width === 0 || height === 0) return [];

    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    let pointsPct: [number, number][] = [];

    if (isMobile) {
      pointsPct = [
        [10, 5], [10, 20], [90, 20], [90, 40], [10, 40], 
        [10, 60], [90, 60], [90, 80], [10, 80], [10, 95],
      ];
    } else if (isTablet) {
      pointsPct = [
        [15, 5], [15, 20], [85, 20], [85, 40], [15, 40], 
        [15, 60], [85, 60], [85, 80], [15, 80], [15, 95],
      ];
    } else {
      // Desktop: Exact routing path matching the 10 sections
      pointsPct = [
        [15, 5],   // 1. Start near Hero CTA (left)
        [15, 10],  // Move DOWN
        [45, 10],  // 2. Turn RIGHT to left side of GlowingOrb
        [45, 20],  // Move DOWN to CapabilitiesGrid Intro
        [50, 20],  // 3. Turn RIGHT to middle of CapabilitiesGrid Intro
        [50, 28],  // 4. Move DOWN to between CapabilitiesGrid cards (1 & 2)
        [58, 28],  // Turn RIGHT to align with SuccessStories gap
        [58, 40],  // 5. Move DOWN to between SuccessStories images
        [33, 40],  // Turn LEFT to align with Platforms gap
        [33, 52],  // 6. Move DOWN to between Platforms text and image
        [41, 52],  // Turn RIGHT to align with Insights top gap
        [41, 62],  // 7. Move DOWN to between Insights 'who we worked' and logos
        [50, 62],  // Turn RIGHT to align with Insights cards gap
        [50, 70],  // 8. Move DOWN to between Insights cards
        [90, 70],  // Turn RIGHT to align with right side of Testimonial
        [90, 82],  // 9. Move DOWN passing right side of Testimonial image
        [50, 82],  // Turn LEFT to align with CTASection gap
        [50, 92],  // 10. Move DOWN to between CTA contact form and text
        [80, 92],  // Turn RIGHT to align with submit button
        [80, 96],  // END near submit button
      ];
    }

    return pointsPct.map(([pctX, pctY]) => [
      (pctX / 100) * width,
      (pctY / 100) * height,
    ]);
  };

  const pixelPoints = getPoints();
  
  const pathD = pixelPoints.length > 0 
    ? `M ${pixelPoints[0][0]} ${pixelPoints[0][1]} ` + 
      pixelPoints.slice(1).map(p => `L ${p[0]} ${p[1]}`).join(' ')
    : '';

  useEffect(() => {
    if (!pathRef.current || !dotRef.current || dimensions.height === 0) return;

    const path = pathRef.current;
    const dot = dotRef.current;
    const length = path.getTotalLength();

    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    
    // Set the dot to be a tiny dash that looks like a circle
    gsap.set(dot, { strokeDasharray: `0.1 ${length}`, strokeDashoffset: 0 });

    const lineAnim = gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    const dotAnim = gsap.to(dot, {
      strokeDashoffset: -length,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    return () => {
      lineAnim.kill();
      dotAnim.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [dimensions, pathD]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-[1] overflow-hidden"
    >
      <svg className="w-full h-full" style={{ minHeight: '100vh' }}>
        <defs>
          <filter id="dot-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Base subtle track - faint gray/blue */}
        <path
          d={pathD}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          className="opacity-20"
        />

        {/* The animated main line - solid blue */}
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="#3B82F6"
          strokeWidth="1.5"
          className="opacity-100"
        />

        {/* The animated traveling dot - solid blue circle */}
        <path
          ref={dotRef}
          d={pathD}
          fill="none"
          stroke="#3B82F6"
          strokeWidth="8"
          strokeLinecap="round"
          filter="url(#dot-glow)"
          className="opacity-100"
        />

        {/* Starting Node matching screenshot */}
        {pixelPoints.length > 0 && (
          <g transform={`translate(${pixelPoints[0][0]}, ${pixelPoints[0][1]})`}>
            <circle cx="0" cy="0" r="10" fill="none" stroke="#3B82F6" strokeWidth="1" className="opacity-60" />
            <circle cx="0" cy="0" r="4" fill="#3B82F6" />
          </g>
        )}
        {/* Nodes at turning points */}
        {pixelPoints.slice(1).map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="#ffffff"
            stroke="#3B82F6"
            strokeWidth="1.5"
            className="opacity-50"
          />
        ))}
      </svg>
    </div>
  );
};
