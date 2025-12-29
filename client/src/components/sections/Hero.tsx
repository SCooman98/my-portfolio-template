import { useContent } from "@/lib/useContent";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const { hero } = useContent();

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background decoration - glowing orbs */}
      <div className="absolute top-0 right-0 -z-10 opacity-30 blur-[100px] w-[500px] h-[500px] bg-primary rounded-full mix-blend-screen animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 opacity-20 blur-[120px] w-[600px] h-[600px] bg-accent rounded-full mix-blend-screen" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1 relative z-10"
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">
              {hero.role}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.0] mb-6 tracking-tight text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            {hero.headline}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed font-light">
            {hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:brightness-110 transition-all hover:gap-3 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
            >
              {hero.primaryAction}
              <ArrowRight size={18} />
            </a>
            {hero.resume && (
               <a 
                href={hero.resume}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-colors"
                download
              >
                Download CV
                <Download size={18} />
              </a>
            )}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end relative"
        >
          {/* Avatar Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20 blur-3xl -z-10 rounded-full scale-110" />
          
          <div className="relative w-72 h-72 md:w-[450px] md:h-[550px] border border-white/10 bg-white/5 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-primary/50 group">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-60" />
            <img 
              src={hero.avatar} 
              alt={hero.name} 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
