import { motion } from "framer-motion";

const StarNode = ({ className }: { className?: string }) => (
  <div className={`absolute ${className} w-4 h-4 -ml-2 -mt-2`} style={{ transformStyle: 'preserve-3d' }}>
    <div className="absolute inset-0 bg-blue-500 rounded-full blur-[4px]" />
    <div className="absolute top-1/2 left-1/2 w-12 h-[2px] bg-blue-400 -translate-x-1/2 -translate-y-1/2 blur-[1px]" />
    <div className="absolute top-1/2 left-1/2 w-[2px] h-12 bg-blue-400 -translate-x-1/2 -translate-y-1/2 blur-[1px]" />
    <div className="absolute top-1/2 left-1/2 w-8 h-[1px] bg-blue-300 -translate-x-1/2 -translate-y-1/2 rotate-45 blur-[1px]" />
    <div className="absolute top-1/2 left-1/2 w-8 h-[1px] bg-blue-300 -translate-x-1/2 -translate-y-1/2 -rotate-45 blur-[1px]" />
    <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#fff]" />
  </div>
);

const GlowingOrb = () => {
  return (
    <div className="relative w-[350px] h-[350px]" style={{ perspective: '1000px' }}>
      <motion.div
        animate={{ rotateY: 360, rotateX: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Ring 1 */}
        <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{ transform: 'rotateX(0deg) rotateY(0deg)', transformStyle: 'preserve-3d' }}>
          <StarNode className="top-0 left-1/2" />
          <StarNode className="bottom-0 left-1/2" />
        </div>
        
        {/* Ring 2 */}
        <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{ transform: 'rotateX(60deg) rotateY(45deg)', transformStyle: 'preserve-3d' }}>
          <StarNode className="top-1/2 left-0" />
        </div>

        {/* Ring 3 */}
        <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{ transform: 'rotateX(120deg) rotateY(90deg)', transformStyle: 'preserve-3d' }}>
          <StarNode className="top-1/2 right-0" />
        </div>

        {/* Ring 4 */}
        <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{ transform: 'rotateX(45deg) rotateY(135deg)', transformStyle: 'preserve-3d' }}>
          <StarNode className="top-[15%] left-[15%]" />
        </div>

        {/* Ring 5 */}
        <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-600/50 shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{ transform: 'rotateX(135deg) rotateY(45deg)', transformStyle: 'preserve-3d' }}>
          <StarNode className="bottom-[15%] right-[15%]" />
        </div>

        {/* Ring 6 */}
        <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{ transform: 'rotateX(90deg) rotateY(0deg)', transformStyle: 'preserve-3d' }} />

        {/* Inner Glow */}
        <div className="absolute inset-1/4 bg-blue-500/10 blur-3xl rounded-full" style={{ transform: 'translateZ(0)' }} />
      </motion.div>
    </div>
  );
};

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 2.2, // Wait for preloader
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="pt-40 pb-32 relative overflow-hidden bg-paper">
      {/* Winding Connecting Line */}
      <div className="absolute inset-0 pointer-events-none flex justify-center z-0 hidden md:flex">
        <div className="w-full max-w-7xl relative">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M 15 35 C 15 70, 8 70, 8 100" stroke="currentColor" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" className="text-blue-500/30" />
          </svg>
          <div className="absolute top-[35%] left-[15%] w-3 h-3 -ml-[6px] -mt-[6px] rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mb-24"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-ink mb-8 leading-[1.1] flex flex-wrap gap-x-4 gap-y-2">
            {["Domain", "Engineered", "AI", "Products", "&", "Agents", "For", "Enterprise"].map((word, i) => (
              <motion.span key={i} variants={itemVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p variants={itemVariants} className="text-xl text-ink/60 max-w-3xl leading-relaxed mb-12">
            Real transformation needs an architected agentic ecosystem — not isolated use cases. Nextdot builds AI operating systems for enterprises that are no longer experimenting.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <button className="bg-ink text-paper px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors">
              See What We Build →
            </button>
            <button className="bg-surface border border-line text-ink px-8 py-4 rounded-full font-medium hover:bg-paper transition-colors">
              Talk to Us →
            </button>
          </motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 relative">
          <div className="w-full md:w-1/2 relative h-[400px] flex items-center justify-center">
            <GlowingOrb />
          </div>

          <div className="w-full md:w-1/2 relative flex items-center">
            <div className="absolute -left-12 top-1/2 w-12 h-px bg-line hidden md:block" />
            <div className="border border-line rounded-3xl p-10 bg-surface relative hover:shadow-2xl hover:shadow-ink/5 transition-shadow duration-500 w-full">
              <div className="text-sm font-medium text-blue-600 mb-4 tracking-wider uppercase">The Problem</div>
              <h2 className="text-3xl font-display font-medium mb-4 text-ink">
                Most enterprises are stuck at the pilot.
              </h2>
              <p className="text-ink/70 leading-relaxed mb-6 text-sm">
                Moving AI into production is not a model problem — it’s a systems problem. It requires domain context, workflow integration, and engineering accountability.
              </p>
              <div className="space-y-1 mt-6">
                {[
                  { num: "01", title: "The Integration Gap", desc: "Multiple tools. Disconnected workflows. What looks like AI adoption is actually fragmentation." },
                  { num: "02", title: "The Accountability Gap", desc: "Vendors deliver decks. Your internal team inherits complexity without clarity." },
                  { num: "03", title: "The Architecture Gap", desc: "Pilots don’t scale. Real transformation needs an AI operating system — not scattered experiments." }
                ].map((item, i) => (
                  <div key={i} className="group relative p-4 -mx-4 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-transparent hover:border-line/50 cursor-default">
                    <div className="font-medium text-ink text-sm flex items-center gap-2 transform transition-transform duration-500 group-hover:translate-x-2">
                      <span className="text-blue-500/60 group-hover:text-blue-600 transition-colors duration-500">{item.num}</span>
                      <span className="text-ink/30">—</span>
                      <span className="group-hover:text-blue-600 transition-colors duration-500">{item.title}</span>
                    </div>
                    <div className="text-xs text-ink/60 mt-2 transform transition-transform duration-500 group-hover:translate-x-2 pl-7 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
