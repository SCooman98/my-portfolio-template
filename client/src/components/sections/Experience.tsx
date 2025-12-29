import { useContent } from "@/lib/useContent";
import { motion } from "framer-motion";

export function Experience() {
  const { experience, education, volunteering } = useContent();

  return (
    <section id="experience" className="py-32 relative bg-background border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Editorial Layout: Title on Left, Content on Right */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
             <h2 className="text-5xl md:text-6xl font-heading font-medium text-primary italic mb-6">
              Experience
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed max-w-xs">
              A chronological curation of roles, collaborations, and educational milestones.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-24">
            
            {/* Work Experience - Exhibition List Style */}
            <div className="space-y-0">
              {experience.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative py-12 border-b border-black/5 last:border-0 hover:bg-black/[0.02] transition-colors -mx-6 px-6 rounded-xl"
                >
                   <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                     <h3 className="text-3xl font-heading font-medium text-foreground group-hover:text-primary transition-colors">
                       {item.role}
                     </h3>
                     <span className="font-sans font-light text-sm tracking-widest uppercase text-muted-foreground">
                       {item.period}
                     </span>
                   </div>
                   
                   <div className="grid md:grid-cols-12 gap-6">
                      <div className="md:col-span-4">
                        <span className="text-lg font-serif italic text-secondary">
                          at {item.company}
                        </span>
                      </div>
                      <div className="md:col-span-8">
                        <p className="text-muted-foreground font-light leading-loose text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                   </div>
                </motion.div>
              ))}
            </div>

            {/* Education & Other */}
            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-black/10">
               {education && education.length > 0 && (
                 <div>
                    <h3 className="text-2xl font-heading italic text-secondary mb-8">Education</h3>
                    <ul className="space-y-8">
                      {education.map((item, index) => (
                        <li key={index} className="pl-4 border-l border-primary/20">
                           <div className="text-lg font-medium">{item.institution}</div>
                           <div className="text-muted-foreground font-light text-sm mt-1">{item.degree}</div>
                           <div className="text-xs tracking-widest uppercase text-primary/60 mt-2">{item.year}</div>
                        </li>
                      ))}
                    </ul>
                 </div>
               )}
               
               {volunteering && volunteering.length > 0 && (
                 <div>
                    <h3 className="text-2xl font-heading italic text-secondary mb-8">Volunteering</h3>
                    <ul className="space-y-8">
                      {volunteering.map((item, index) => (
                        <li key={index} className="pl-4 border-l border-primary/20">
                           <div className="text-lg font-medium">{item.organization}</div>
                           <div className="text-muted-foreground font-light text-sm mt-1">{item.role}</div>
                           <div className="text-xs tracking-widest uppercase text-primary/60 mt-2">{item.period}</div>
                        </li>
                      ))}
                    </ul>
                 </div>
               )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
