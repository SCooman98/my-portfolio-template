import { useContent } from "@/lib/useContent";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export function Projects() {
  const { projects } = useContent();

  return (
    <section id="projects" className="py-32 bg-background border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
          <h2 className="text-5xl md:text-7xl font-heading font-medium italic text-primary">
            Selected Works
          </h2>
          <span className="text-muted-foreground font-light tracking-widest uppercase text-sm mt-4 md:mt-0">
            Curated Portfolio (2023 — Present)
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/project/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`group cursor-pointer flex flex-col ${index % 2 === 1 ? 'md:translate-y-24' : ''}`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e4dc] mb-8">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105 group-hover:grayscale"
                  />
                  
                  {/* Hover Overlay Icon */}
                  <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-3 relative">
                  <span className="text-xs font-light tracking-[0.2em] uppercase text-muted-foreground block">
                    {project.category}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-heading font-medium text-foreground group-hover:text-primary transition-colors group-hover:italic">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-light leading-relaxed line-clamp-2 max-w-sm text-sm">
                    {project.description}
                  </p>
                  
                  {/* Decorative Line */}
                  <div className="absolute -left-6 top-2 bottom-2 w-[1px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        <div className="mt-32 text-center md:hidden">
           <a href="#" className="inline-flex items-center gap-2 text-foreground font-light uppercase tracking-widest text-sm hover:text-primary transition-colors border-b border-foreground pb-1">
            View Full Archive
          </a>
        </div>
      </div>
    </section>
  );
}
