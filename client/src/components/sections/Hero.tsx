import { useContent } from "@/lib/useContent";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const { hero } = useContent();

  return (
    <section className="min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden bg-background">
      {/* Abstract Background Strokes */}
      <div className="absolute top-0 right-0 w-[50%] h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-primary fill-current">
           <path d="M0,0 C30,20 70,20 100,0 L100,100 C70,80 30,80 0,100 Z" opacity="0.5" />
        </svg>
      </div>
      
      {/* Thin Line Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.03] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content - Asymmetrical Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 relative z-10"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-primary block"></span>
              <span className="font-heading italic text-xl text-primary font-medium tracking-wide">
                {hero.role}
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-heading font-medium leading-[1.05] mb-8 text-foreground mix-blend-darken">
              <span className="block ml-[-0.05em]">{hero.headline.split(' ')[0]}</span>
              <span className="block ml-[1em] italic font-light text-secondary">{hero.headline.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            <div className="max-w-md ml-auto mr-12 relative">
              <span className="absolute -left-6 top-0 text-6xl text-accent opacity-30 font-serif">"</span>
              <p className="text-lg font-light leading-loose text-muted-foreground">
                {hero.description}
              </p>
            </div>
            
            <div className="mt-16 flex items-center gap-8 ml-8">
              <a 
                href="#projects"
                className="group flex items-center gap-3 text-foreground font-light tracking-[0.2em] uppercase text-sm hover:text-primary transition-colors"
              >
                <span className="w-12 h-[1px] bg-foreground group-hover:w-20 group-hover:bg-primary transition-all" />
                Selected Works
              </a>
              {hero.resume && (
                 <a 
                  href={hero.resume}
                  className="text-muted-foreground font-light tracking-[0.2em] uppercase text-sm hover:text-primary transition-colors"
                  download
                >
                  Curriculum Vitae
                </a>
              )}
            </div>
          </motion.div>

          {/* Image Block - Abstract Composition */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative h-[600px] flex items-center justify-center"
          >
            {/* Geometric Shapes */}
            <div className="absolute top-12 right-12 w-64 h-64 rounded-full border border-primary/20" />
            <div className="absolute bottom-24 left-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            
            {/* Main Image Container */}
            <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden bg-[#e8e4dc]">
               <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src={hero.avatar} 
                alt={hero.name} 
                className="w-full h-full object-cover opacity-90 sepia-[0.2]"
              />
              {/* Overlay Texture */}
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none" />
            </div>

            {/* Floating Caption Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] max-w-xs border-t-2 border-primary"
            >
              <p className="font-heading italic text-lg mb-2">The creative process</p>
              <p className="text-xs font-light text-muted-foreground tracking-wide leading-relaxed">
                Exploring the intersection of design, technology, and human emotion through digital interfaces.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
