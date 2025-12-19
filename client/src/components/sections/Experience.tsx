import { useContent } from "@/lib/useContent";
import { motion } from "framer-motion";
import { GraduationCap, Heart } from "lucide-react";

export function Experience() {
  const { experience, education, volunteering } = useContent();

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        
        {/* Work Experience */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">Experience</h2>
          <div className="max-w-3xl">
            {experience.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0 border-l border-border"
              >
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary" />
                
                <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
                  <span className="text-sm text-muted-foreground font-mono pt-1">
                    {item.period}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold font-heading">{item.role}</h3>
                    <div className="text-primary font-medium mb-2">{item.company}</div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Volunteering Grid */}
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
          
          {/* Education */}
          {education && education.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-primary" size={24} />
                <h3 className="text-2xl font-heading font-bold">Education</h3>
              </div>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <h4 className="text-lg font-bold font-heading">{item.institution}</h4>
                    <div className="text-muted-foreground text-sm mb-1">{item.degree}, {item.year}</div>
                    {item.description && (
                      <p className="text-sm text-muted-foreground/80 leading-relaxed mt-2">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Volunteering */}
          {volunteering && volunteering.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                 <Heart className="text-primary" size={24} />
                 <h3 className="text-2xl font-heading font-bold">Volunteering</h3>
              </div>
              <div className="space-y-8">
                {volunteering.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <h4 className="text-lg font-bold font-heading">{item.organization}</h4>
                    <div className="text-primary text-sm font-medium mb-1">{item.role}</div>
                    <div className="text-xs text-muted-foreground mb-2 font-mono">{item.period}</div>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
        </div>

      </div>
    </section>
  );
}
