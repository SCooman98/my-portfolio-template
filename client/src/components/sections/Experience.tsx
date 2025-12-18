import { content } from "@/data/content";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">Experience</h2>
        
        <div className="max-w-3xl">
          {content.experience.map((item, index) => (
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
    </section>
  );
}
