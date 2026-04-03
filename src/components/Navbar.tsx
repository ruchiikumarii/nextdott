import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "AI Capability Centre", href: "/ai-capability-centre" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
          scrolled ? "py-4 bg-white/80 backdrop-blur-xl border-line shadow-sm" : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center group cursor-pointer">
            <div className="w-10 h-10 bg-ink rounded-xl flex items-center justify-center shadow-md shrink-0 transition-transform duration-500 group-hover:scale-105">
              <div className="w-3 h-3 bg-paper rounded-full" />
            </div>
            <AnimatePresence>
              {!scrolled && (
                <motion.div 
                  initial={{ opacity: 1, width: "auto" }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <span className="font-display font-semibold text-xl tracking-tight ml-3">Nextdot</span>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="text-sm font-medium text-ink/70 hover:text-ink transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-ink/70 hover:text-ink transition-colors px-4 py-2">
              Sign In
            </button>
            <button className="bg-ink text-paper px-5 py-2.5 rounded-full text-sm font-medium hover:bg-ink/90 transition-all shadow-lg shadow-ink/10 active:scale-95">
              Get Started
            </button>
          </div>

          <button className="md:hidden p-2 text-ink" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[60] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ink rounded-xl flex items-center justify-center">
                  <div className="w-3 h-3 bg-paper rounded-full" />
                </div>
                <span className="font-display font-semibold text-xl tracking-tight">Nextdot</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-surface rounded-full">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-display font-medium tracking-tight border-b border-line pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <button className="w-full py-4 rounded-full border border-line font-medium text-lg">
                  Sign In
                </button>
                <button className="w-full bg-ink text-paper py-4 rounded-full font-medium text-lg shadow-xl shadow-ink/20">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
