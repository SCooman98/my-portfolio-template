import { useContent } from "@/lib/useContent";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const { hero } = useContent();

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 relative bg-background border-b-4 border-black">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_2px,transparent_2px),linear-gradient(to_bottom,#000_2px,transparent_2px)] bg-[size:4rem_4rem] opacity-5 -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div className="bg-primary border-4 border-black inline-block px-4 py-2 mb-6 shadow-[6px_6px_0px_0px_#000]">
              <span className="font-mono font-bold text-black uppercase tracking-tight text-lg">
                // {hero.role}
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black leading-[0.85] mb-8 text-black uppercase tracking-tighter mix-blend-multiply">
              {hero.headline}
            </h1>
            
            <div className="bg-white border-4 border-black p-6 max-w-xl shadow-[8px_8px_0px_0px_#000] mb-10 transform -rotate-1">
              <p className="text-xl md:text-2xl font-mono font-bold text-black leading-tight">
                {hero.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <a 
                href="#projects"
                className="bg-black text-white text-xl font-bold px-10 py-5 border-4 border-black shadow-[6px_6px_0px_0px_#E6FF00] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3 uppercase"
              >
                {hero.primaryAction} <ArrowRight strokeWidth={4} />
              </a>
              {hero.resume && (
                 <a 
                  href={hero.resume}
                  className="bg-white text-black text-xl font-bold px-10 py-5 border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3 uppercase"
                  download
                >
                  CV_Download <Download strokeWidth={4} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Image Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 relative"
          >
            <div className="relative aspect-[3/4] bg-secondary border-4 border-black shadow-[12px_12px_0px_0px_#000] z-10">
              <img 
                src={hero.avatar} 
                alt={hero.name} 
                className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
              
              {/* Decorative Sticker */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full border-4 border-black flex items-center justify-center animate-spin-slow shadow-[4px_4px_0px_0px_#000]">
                 <span className="text-3xl font-black">★</span>
              </div>
            </div>
            
            {/* Background Shape */}
            <div className="absolute top-12 -right-12 w-full h-full bg-primary border-4 border-black -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
