import { useContent } from "@/lib/useContent";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const { hero } = useContent();

  return (
    <section className="min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden px-4 md:px-8">
      {/* Background decoration - subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20" />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 -z-10 opacity-40 blur-[100px] w-[300px] h-[300px] bg-primary/30 rounded-full mix-blend-screen" />
      <div className="absolute bottom-20 right-20 -z-10 opacity-30 blur-[120px] w-[400px] h-[400px] bg-accent/20 rounded-full mix-blend-screen" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-full">
          
          {/* Main Content Box - Bento Cell 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group hover:border-white/20 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
              <Download className="w-24 h-24 text-white rotate-12" strokeWidth={1} />
            </div>

            <div className="inline-flex items-center gap-2 self-start px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                {hero.role}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] mb-8 tracking-tighter text-white mix-blend-overlay">
              {hero.headline}
            </h1>
            
            <p className="text-xl text-zinc-400 mb-10 max-w-lg leading-relaxed font-light">
              {hero.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-auto">
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-all hover:gap-4"
              >
                {hero.primaryAction}
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Avatar Box - Bento Cell 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 bg-zinc-900 rounded-[2rem] relative overflow-hidden min-h-[400px] border border-white/10 group"
          >
            <img 
              src={hero.avatar} 
              alt={hero.name} 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-zinc-400 text-sm mb-1">Based in</p>
                  <p className="text-white font-bold text-lg">San Francisco, CA</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <span className="text-xl">👋</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats/Ticker - Bento Cell 3 (Bottom Strip) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="md:col-span-12 bg-accent/5 border border-accent/10 rounded-[2rem] p-6 flex flex-wrap items-center justify-between gap-6"
          >
             <div className="flex items-center gap-8 text-zinc-400 text-sm font-mono overflow-hidden whitespace-nowrap">
                <span>// CURRENT STACK</span>
                <span className="text-white">REACT</span>
                <span className="text-white">TYPESCRIPT</span>
                <span className="text-white">NODE.JS</span>
                <span className="text-white">TAILWIND</span>
                <span className="text-white">FRAMER MOTION</span>
             </div>
             
             {hero.resume && (
               <a 
                href={hero.resume}
                className="text-sm font-bold text-white hover:text-accent transition-colors flex items-center gap-2 ml-auto"
                download
              >
                DOWNLOAD_RESUME.PDF
                <Download size={14} />
              </a>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
