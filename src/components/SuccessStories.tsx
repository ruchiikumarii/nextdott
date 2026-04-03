export const SuccessStories = () => {
  return (
    <section className="py-24 bg-paper relative border-t border-line overflow-hidden">
      {/* Winding Connecting Line */}
      <div className="absolute inset-0 pointer-events-none flex justify-center z-0 hidden md:flex">
        <div className="w-full max-w-7xl relative">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M 50 0 C 50 50, 58.33 50, 58.33 100" stroke="currentColor" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" className="text-blue-500/30" />
          </svg>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="text-sm font-medium text-blue-600 mb-4 tracking-wider uppercase">Flagship Product · Live</div>
            <h2 className="text-5xl font-display font-medium tracking-tight text-ink">
              NextComply AI
            </h2>
          </div>
          <p className="text-lg text-ink/60 max-w-md md:text-right mt-6 md:mt-0">
            A Small Language Model built exclusively for healthcare compliance — trained to understand the rules, so your teams don’t have to enforce them manually.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Left Card */}
          <div className="lg:col-span-7 bg-surface rounded-3xl overflow-hidden relative group cursor-pointer border border-line h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
              alt="Healthcare AI"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 p-12 z-20 w-full">
              <h3 className="text-3xl font-display font-medium text-white mb-4">Built for teams that cannot afford ambiguity.</h3>
              <p className="text-white/80 leading-relaxed max-w-xl">
                Healthcare communication is high-volume and high-risk. One incorrect claim, a missing disclaimer, an unsupported benefit, or an off-label reference can delay campaigns or trigger regulatory action. NextComply AI brings compliance into the workflow itself. It reviews content in real time against a configurable rules engine, flags violations, suggests corrections, and generates audit trails both marketing and regulatory teams can rely on.
              </p>
            </div>
            <div className="absolute bottom-12 right-12 text-cyan-400 text-3xl opacity-0 group-hover:opacity-100 transition-opacity z-20">✦</div>
          </div>

          {/* Right Column Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Top Right Card */}
            <div className="bg-surface rounded-3xl overflow-hidden relative group cursor-pointer border border-line flex-1">
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Key Capabilities"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <h3 className="text-2xl font-display font-medium text-white mb-4">Key Capabilities</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Real-time compliance validation</li>
                  <li>• Automated issue detection & correction</li>
                  <li>• Audit-ready documentation trails</li>
                </ul>
              </div>
              <div className="absolute bottom-8 right-8 text-cyan-400 text-2xl opacity-0 group-hover:opacity-100 transition-opacity z-20">✦</div>
            </div>

            {/* Bottom Right Card */}
            <div className="bg-surface rounded-3xl overflow-hidden relative group cursor-pointer border border-line flex-1">
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Configurable Rules"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <h3 className="text-2xl font-display font-medium text-white mb-2">Designed for Scale</h3>
                <p className="text-white/80 text-sm">
                  Configurable rules engine for different markets. Designed for marketing, medical, and regulatory teams.
                </p>
                <div className="flex gap-4 mt-6">
                  <button className="text-white font-medium hover:text-blue-400 transition-colors text-sm">Request a Demo →</button>
                  <button className="text-white font-medium hover:text-blue-400 transition-colors text-sm">Learn More →</button>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 text-cyan-400 text-2xl opacity-0 group-hover:opacity-100 transition-opacity z-20">✦</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
