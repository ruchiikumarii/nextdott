import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const Platforms = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const platforms = [
    {
      title: "AI-Augmented Content Systems",
      desc: "High-volume, high-consistency content pipelines powered by AI.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Performance Marketing Systems",
      desc: "Campaigns driven by real-time intelligence and optimisation loops.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      title: "Video & Design Production",
      desc: "Faster iteration. Scalable production. Enterprise-grade output.",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Digital Growth Systems",
      desc: "End-to-end growth infrastructure, not isolated campaigns.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-paper relative border-t border-line overflow-hidden" id="use-cases">
      {/* Winding Connecting Line */}
      <div className="absolute inset-0 pointer-events-none flex justify-center z-0 hidden md:flex">
        <div className="w-full max-w-7xl relative">
          <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path 
              d="M 95 0 C 95 30, 40 30, 40 100" 
              stroke="#00E5FF" 
              strokeWidth="6" 
              fill="none" 
              vectorEffect="non-scaling-stroke" 
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: 'drop-shadow(0 0 8px rgba(0,229,255,0.6))' }}
            />
          </svg>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-5xl font-display font-medium tracking-tight text-ink">
            Nextdot for Creative
          </h2>
          <p className="text-lg text-ink/60 max-w-md md:text-right mt-6 md:mt-0">
            A decade of digital and creative consulting, now re-engineered with AI at the core.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-auto lg:h-[600px]">
          {/* Left List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {platforms.map((platform, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "p-6 rounded-2xl cursor-pointer transition-all duration-300 border",
                  activeIndex === i
                    ? "bg-surface border-line shadow-sm"
                    : "bg-transparent border-transparent hover:bg-surface/50"
                )}
              >
                <h3 className={cn(
                  "text-xl md:text-2xl font-display font-medium transition-colors",
                  activeIndex === i ? "text-blue-600 mb-3" : "text-ink"
                )}>
                  {platform.title}
                </h3>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-ink/60 text-sm leading-relaxed">
                        {platform.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
          </div>

          {/* Right Image Area */}
          <div className="w-full lg:w-2/3 relative rounded-3xl overflow-hidden border border-line bg-surface h-[400px] lg:h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent z-10" />
                <img
                  src={platforms[activeIndex].image}
                  alt={platforms[activeIndex].title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
                  <div className="inline-flex px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs rounded-full mb-4 border border-white/10">
                    Case Study
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 leading-tight">
                    {platforms[activeIndex].title}
                  </h3>
                  <button className="bg-white text-ink px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">
                    Read Full Story
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
