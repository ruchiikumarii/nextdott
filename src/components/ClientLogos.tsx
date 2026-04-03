import { useEffect, useRef } from "react";
import gsap from "gsap";

export const ClientLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      
      gsap.to(scrollRef.current, {
        x: -scrollWidth / 2,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  const logos = [
    "Acme Corp", "GlobalTech", "Nexus Industries", "Quantum Financial", "Stark Logistics", "Wayne Enterprises",
    "Acme Corp", "GlobalTech", "Nexus Industries", "Quantum Financial", "Stark Logistics", "Wayne Enterprises"
  ];

  return (
    <section className="py-12 border-b border-line bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-medium text-ink/40 uppercase tracking-widest">Trusted by innovative enterprises</p>
      </div>
      
      <div className="relative flex overflow-hidden w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10" />
        
        <div ref={scrollRef} className="flex items-center gap-16 px-8 whitespace-nowrap">
          {logos.map((logo, index) => (
            <div key={index} className="text-xl font-display font-bold text-ink/20 grayscale hover:grayscale-0 hover:text-ink/80 transition-all duration-300 cursor-default">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
