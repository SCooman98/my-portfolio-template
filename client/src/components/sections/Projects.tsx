import { useContent } from "@/lib/useContent";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";

export function Projects() {
  const { projects } = useContent();

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
          {projects.map((project, index) => (
            <Link key={project.id} href={`/project/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary mb-4 border border-border/50">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <span className="bg-white/90 text-black px-6 py-2 rounded-full font-medium text-sm backdrop-blur-sm">
                      View Project
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground block mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </Link>
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
