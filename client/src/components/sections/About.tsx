import { content } from "@/data/content";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            {content.about.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.about.bio}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {content.about.stats.map((stat) => (
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
      </div>
    </section>
  );
}
