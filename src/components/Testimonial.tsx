export const Testimonial = () => {
  return (
    <section className="py-24 bg-paper relative border-t border-line overflow-hidden">
      {/* Winding Connecting Line */}
      <div className="absolute inset-0 pointer-events-none flex justify-center z-0 hidden md:flex">
        <div className="w-full max-w-7xl relative">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M 50 0 C 50 50, 95 50, 95 100" stroke="currentColor" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" className="text-blue-500/30" />
          </svg>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-display font-medium tracking-tight text-ink mb-16">
          AI CAPABILITY CENTER
        </h2>
        
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative">
            <p className="text-2xl text-ink/80 leading-relaxed mb-8 relative z-10 font-medium">
              Nextdot operates an AI Capability Center, bringing together forward-deployed engineers, AI system architects, and agentic specialists under one roof. This is where enterprise AI systems move from idea to production.
            </p>
            <p className="text-xl text-ink/70 leading-relaxed mb-12 relative z-10">
              Multi-agent architectures, workflow automation layers, and domain-trained models, designed, engineered, and deployed by a team that works at the intersection of AI, systems thinking, and real business operations.
            </p>
            <div>
              <div className="text-blue-600 font-medium text-xl mb-1">Built from emerging India</div>
              <div className="text-ink/60">Where the next generation of engineering talent is not just consuming global technology, but building it.</div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="w-full h-64 rounded-3xl overflow-hidden border border-line relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Office Space"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex gap-4 h-48">
              <div className="w-1/2 rounded-3xl overflow-hidden border border-line relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team Collaboration"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-1/2 rounded-3xl overflow-hidden border border-line relative bg-surface flex items-center justify-center p-6 text-center">
                <span className="text-sm font-medium text-ink/60">Space for more office images</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
