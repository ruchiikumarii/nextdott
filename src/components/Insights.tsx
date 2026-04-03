export const Insights = () => {
  return (
    <section className="py-24 bg-paper relative border-t border-line overflow-hidden">
      {/* Winding Connecting Line */}
      <div className="absolute inset-0 pointer-events-none flex justify-center z-0 hidden md:flex">
        <div className="w-full max-w-7xl relative">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M 33.33 0 C 33.33 20, 41.66 20, 41.66 45 C 41.66 70, 50 70, 50 100" stroke="currentColor" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" className="text-blue-500/30" />
          </svg>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Credibility Stats & Logos Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
          {/* Left: Title & Compact Stats */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="text-sm font-medium text-blue-600 mb-4 tracking-wider uppercase">Credibility</div>
            <h2 className="text-4xl font-display font-medium text-ink leading-tight mb-8">
              Who we work with
            </h2>
            
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div className="bg-surface border border-line rounded-2xl p-6 flex flex-col justify-center transition-colors hover:border-blue-200">
                <div className="text-3xl font-display font-medium text-blue-600 mb-1">10+</div>
                <div className="text-xs font-medium text-ink/60 uppercase tracking-wider">Years Operating</div>
              </div>
              <div className="bg-surface border border-line rounded-2xl p-6 flex flex-col justify-center transition-colors hover:border-purple-200">
                <div className="text-3xl font-display font-medium text-purple-600 mb-1">30+</div>
                <div className="text-xs font-medium text-ink/60 uppercase tracking-wider">Specialists</div>
              </div>
              <div className="bg-surface border border-line rounded-2xl p-6 flex flex-col justify-center transition-colors hover:border-blue-200">
                <div className="text-3xl font-display font-medium text-blue-600 mb-1">100+</div>
                <div className="text-xs font-medium text-ink/60 uppercase tracking-wider">Systems Delivered</div>
              </div>
              <div className="bg-surface border border-line rounded-2xl p-6 flex flex-col justify-center transition-colors hover:border-purple-200">
                <div className="text-3xl font-display font-medium text-purple-600 mb-1">3</div>
                <div className="text-xs font-medium text-ink/60 uppercase tracking-wider">Products Live</div>
              </div>
            </div>
          </div>

          {/* Right: Logos Grid */}
          <div className="lg:col-span-7 bg-surface border border-line rounded-3xl p-8 md:p-12 flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full">
              {[
                "Acme Corp", "GlobalTech", "Nexus Ind.", 
                "Quantum Fin", "Stark Log", "Wayne Ent",
                "CyberDyne", "Massive Dyn", "Umbrella"
              ].map((logo, i) => (
                <div key={i} className="flex items-center justify-center h-12">
                  <span className="text-xl font-display font-bold text-ink/20 grayscale hover:grayscale-0 hover:text-ink/80 transition-all duration-300 cursor-default text-center">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-5xl font-display font-medium tracking-tight text-ink">
            How we work
          </h2>
          <p className="text-lg text-ink/60 max-w-xl md:text-right mt-6 md:mt-0">
            We deploy dedicated AI engineering pods that work alongside your team to take AI from exploration to production. Each pod is built around your problem, combining AI engineers, system architects, and domain specialists who own the outcome end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-surface rounded-3xl p-10 md:p-12 flex flex-col justify-between border border-line group hover:border-blue-200 transition-colors h-[320px]">
            <div className="flex justify-between items-start">
              <span className="inline-block px-4 py-1.5 bg-white border border-line text-ink text-xs font-medium rounded-full">01 — DISCOVER</span>
              <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-ink mb-4 leading-tight">
                Map the highest-leverage problem inside your workflow.
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface rounded-3xl p-10 md:p-12 flex flex-col justify-between border border-line group hover:border-blue-200 transition-colors h-[320px]">
            <div className="flex justify-between items-start">
              <span className="inline-block px-4 py-1.5 bg-white border border-line text-ink text-xs font-medium rounded-full">02 — ARCHITECT</span>
              <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-ink mb-4 leading-tight">
                Design the system, integrations, data flow, and governance before building.
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface rounded-3xl p-10 md:p-12 flex flex-col justify-between border border-line group hover:border-blue-200 transition-colors h-[320px]">
            <div className="flex justify-between items-start">
              <span className="inline-block px-4 py-1.5 bg-white border border-line text-ink text-xs font-medium rounded-full">03 — ENGINEER</span>
              <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-ink mb-4 leading-tight">
                Deploy real systems into real environments. Not isolated pilots.
              </h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-surface rounded-3xl p-10 md:p-12 flex flex-col justify-between border border-line group hover:border-blue-200 transition-colors h-[320px]">
            <div className="flex justify-between items-start">
              <span className="inline-block px-4 py-1.5 bg-white border border-line text-ink text-xs font-medium rounded-full">04 — OPTIMISE</span>
              <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-ink mb-4 leading-tight">
                Continuously improve performance post-deployment. ROI compounds.
              </h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
