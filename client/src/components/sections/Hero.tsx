import { useContent } from "@/lib/useContent";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const { hero } = useContent();

  return (
    <section className="min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden px-4 md:px-8">
      {/* Playful Background Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-[20%] w-[600px] h-[600px] bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white border-2 border-primary/20 shadow-sm transform -rotate-2 hover:rotate-0 transition-transform cursor-default">
              <span className="text-sm font-bold font-heading text-primary uppercase tracking-wider">
                👋 {hero.role}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-6 text-foreground">
              {hero.headline}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {hero.description}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all"
              >
                {hero.primaryAction}
                <ArrowRight size={20} />
              </a>
              {hero.resume && (
                 <a 
                  href={hero.resume}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-white text-foreground border-2 border-transparent hover:border-secondary shadow-md hover:shadow-lg transition-all"
                  download
                >
                  Download CV
                  <Download size={20} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Image Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center relative"
          >
            {/* Blob Shape Background for Image */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 text-secondary fill-current opacity-50 animate-pulse">
              <path transform="translate(100 100)" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.5,33.2C60.8,44.9,50.7,55.4,39,63.2C27.3,71,14,76.1,-0.5,77C-15,77.9,-29.9,74.5,-42.6,67C-55.3,59.5,-65.8,47.9,-73.4,34.8C-81,21.7,-85.7,7.1,-84.3,-7C-82.9,-21.1,-75.4,-34.7,-65.1,-46.1C-54.8,-57.5,-41.7,-66.7,-28.4,-74.4C-15.1,-82.1,-1.6,-88.3,11.2,-87.3L23.9,-86.3" />
            </svg>

            <div className="relative w-72 h-72 md:w-[450px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={hero.avatar} 
                alt={hero.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl rotate-12"
            >
              <span className="text-4xl">✨</span>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-12 -left-8 bg-white p-4 rounded-2xl shadow-xl -rotate-6 max-w-[150px]"
            >
              <p className="font-heading font-bold text-sm text-center text-primary">Creating magic daily! 🪄</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
