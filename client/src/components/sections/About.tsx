import { useContent } from "@/lib/useContent";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function About() {
  const { about, references } = useContent();

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            {about.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {about.bio}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {about.stats.map((stat) => (
                <div key={stat.label} className="bg-background p-6 rounded-lg border border-border shadow-sm">
                  <div className="text-3xl font-bold font-heading mb-1 text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* References Section */}
        {references && references.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto border-t border-border pt-16"
          >
             <h3 className="text-2xl font-heading font-bold mb-8 text-center">What People Say</h3>
             <div className="grid md:grid-cols-2 gap-8">
               {references.map((ref, i) => (
                 <div key={i} className="bg-background p-8 rounded-xl border border-border shadow-sm relative">
                   <Quote className="text-primary/10 absolute top-6 right-6 w-12 h-12" />
                   <p className="text-muted-foreground italic mb-6 relative z-10">"{ref.quote}"</p>
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-primary">
                        {ref.name[0]}
                     </div>
                     <div>
                       <div className="font-bold text-sm">{ref.name}</div>
                       <div className="text-xs text-muted-foreground">{ref.role}</div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
