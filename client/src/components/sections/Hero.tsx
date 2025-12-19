import { useContent } from "@/lib/useContent";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const { hero } = useContent();

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-100 via-background to-background dark:from-gray-900/50" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4 block">
            {hero.role}
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-6 tracking-tight text-foreground">
            {hero.headline}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all hover:gap-3"
            >
              {hero.primaryAction}
              <ArrowRight size={18} />
            </a>
            {hero.resume && (
               <a 
                href={hero.resume}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium border border-border hover:bg-secondary transition-colors"
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
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-[500px] md:h-[600px] bg-secondary rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src={hero.avatar} 
              alt={hero.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
