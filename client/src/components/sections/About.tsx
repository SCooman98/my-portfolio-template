import { useContent } from "@/lib/useContent";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function About() {
  const { about, references } = useContent();

  return (
    <section id="about" className="py-32 bg-background relative border-t border-black/5">
      {/* Decorative vertical line */}
      <div className="absolute left-12 md:left-24 top-0 bottom-0 w-[1px] bg-black/5 hidden lg:block" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Section Title */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="lg:col-span-4 lg:text-right"
          >
            <span className="block text-sm font-light uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Biography
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground italic">
              {about.title}
            </h2>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg md:text-xl font-light leading-loose text-foreground/80 first-letter:text-5xl first-letter:font-heading first-letter:mr-1 first-letter:float-left first-letter:leading-none">
                {about.bio}
              </p>
            </motion.div>

            {/* Stats - Minimalist Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-black/5">
              {about.stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-heading font-light text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs font-sans uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* References */}
            {references && references.length > 0 && (
              <div className="pt-8">
                 <h3 className="text-sm font-light uppercase tracking-[0.2em] text-muted-foreground mb-12 text-center lg:text-left">
                   Endorsements
                 </h3>
                 <div className="grid md:grid-cols-2 gap-12">
                   {references.map((ref, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="relative"
                      >
                       <Quote className="text-accent/30 absolute -top-6 -left-4 w-10 h-10 rotate-180" />
                       <p className="text-foreground/90 font-serif italic text-lg mb-6 relative z-10 leading-relaxed">
                         "{ref.quote}"
                       </p>
                       <div className="flex items-center gap-4">
                         <div className="h-[1px] w-8 bg-primary" />
                         <div>
                           <div className="font-sans font-bold text-sm tracking-wide uppercase">{ref.name}</div>
                           <div className="text-xs font-light text-muted-foreground mt-1">{ref.role}</div>
                         </div>
                       </div>
                     </motion.div>
                   ))}
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
