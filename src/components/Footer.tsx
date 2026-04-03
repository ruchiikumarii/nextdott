import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-line">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-ink rounded-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-paper rounded-full" />
              </div>
              <span className="font-display font-semibold text-xl tracking-tight">Nextdot</span>
            </div>
            <p className="text-ink/60 text-sm leading-relaxed max-w-xs mb-8">
              Domain engineered AI products and agentic ecosystems for enterprise transformation. Built for security, scale, and impact.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink/40 hover:text-ink hover:border-ink/20 transition-colors cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink/40 hover:text-ink hover:border-ink/20 transition-colors cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-ink/60">
              <li><a href="#" className="hover:text-accent transition-colors">NextComply AI</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Agentic Workflows</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Private RAG</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Security & Governance</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-ink/60">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-ink/60">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Security Trust Center</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink/40">
          <p>© {new Date().getFullYear()} Nextdot Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span>System Status: All Systems Operational</span>
            <span>v3.0.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
