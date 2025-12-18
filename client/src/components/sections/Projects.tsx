import { content } from "@/data/content";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Selected Work</h2>
          <a href="#" className="hidden md:inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            View all projects <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {content.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/90 text-black px-4 py-2 rounded-full font-medium text-sm backdrop-blur-sm">
                    View Project
                  </span>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground block mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a href="#" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            View all projects <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
