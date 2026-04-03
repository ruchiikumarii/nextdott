export const CapabilitiesGrid = () => {
  const capabilities = [
    {
      title: "AI Agent & Agentic Systems",
      desc: "Multi-agent architectures designed for real workflows — from document intelligence to decision automation. Autonomous where possible, controlled where necessary.",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop"
    },
    {
      title: "Enterprise Workflow Automation",
      desc: "AI embedded into your operating layer — orchestrating data, APIs, and systems across CRMs, ERPs, and internal tools.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "AI-Powered Growth Systems",
      desc: "Content, campaign, and performance systems that combine LLMs with structured business data — built for scale, not experimentation.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      title: "Enterprise AI Advisory",
      desc: "Architecture, governance, and operating models for organisations building long-term AI capability.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "LLMOps & ML Engineering",
      desc: "Model pipelines, orchestration layers, and infrastructure for enterprises moving toward domain-specific AI systems.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-paper relative border-t border-line overflow-hidden" id="capabilities">
      {/* Winding Connecting Line */}
      <div className="absolute inset-0 pointer-events-none flex justify-center z-0 hidden md:flex">
        <div className="w-full max-w-7xl relative">
          <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path 
              d="M 50 0 C 50 40, 60 40, 60 100" 
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
        
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="text-sm font-medium text-blue-600 mb-4 tracking-wider uppercase">// What We Build</div>
            <h2 className="text-5xl font-display font-medium tracking-tight text-ink mb-6">
              AI Engineering & Agentic Systems
            </h2>
            <p className="text-lg text-ink/60 leading-relaxed max-w-lg">
              Production-grade systems. Built to run inside real enterprises.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[240px] md:h-[300px] bg-surface rounded-3xl border border-line flex items-center justify-center relative overflow-hidden">
            {/* Abstract 3D Chain representation */}
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 border-8 border-ink/10 rounded-3xl rotate-12 transform-gpu" />
              <div className="absolute inset-0 border-8 border-ink/20 rounded-3xl -rotate-12 transform-gpu" />
              <div className="absolute inset-8 bg-gradient-to-br from-ink/5 to-ink/20 rounded-2xl backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="w-full overflow-x-auto snap-x snap-mandatory pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-6 px-6 md:px-12 lg:px-24 w-max">
          {capabilities.map((cap, i) => (
            <div 
              key={i} 
              className="flex-none w-[90vw] md:w-[800px] h-[500px] md:h-[400px] snap-center bg-surface rounded-3xl border border-line flex flex-col md:flex-row overflow-hidden group cursor-grab active:cursor-grabbing"
            >
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                <div className="text-xs font-medium text-ink/40 mb-4 uppercase tracking-widest">0{i + 1}</div>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-ink mb-4">{cap.title}</h3>
                <p className="text-ink/60 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
              <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden order-1 md:order-2 border-b md:border-b-0 md:border-l border-line">
                <img 
                  src={cap.img} 
                  alt={cap.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-4 flex justify-end">
        <div className="text-sm font-medium text-ink/40 flex items-center gap-2">
          <span>Scroll to explore</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
      </div>
    </section>
  );
};
