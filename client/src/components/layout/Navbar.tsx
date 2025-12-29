import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useContent } from "@/lib/useContent";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { hero } = useContent();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/40 rounded-full px-8 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-8 mx-4 supports-[backdrop-filter]:bg-white/60">
        <Link href="/" className="font-heading font-bold text-2xl tracking-tight text-primary hover:scale-105 transition-transform">
          {hero.navTitle || hero.name}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-bold text-muted-foreground hover:text-primary hover:bg-secondary/50 px-4 py-2 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 text-base font-bold bg-primary text-white px-6 py-2.5 rounded-full hover:bg-accent hover:scale-105 transition-all shadow-md hover:shadow-lg"
          >
            Hire Me ✋
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
