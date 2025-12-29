import { useContent } from "@/lib/useContent";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";

export function Projects() {
  const { projects } = useContent();

  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
         <div>
            <span className="text-accent font-mono text-sm tracking-widest mb-2 block">// SELECTED WORKS</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Featured Projects</h2>
         </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors border-b border-transparent hover:border-primary pb-1">
            View Archive <ExternalLink size={14} />
          </a>
      </div>

      <div className="pl-6 md:pl-[max(1rem,calc((100vw-1280px)/2+1.5rem))]">
        <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar pr-6">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/project/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="snap-center shrink-0 w-[85vw] md:w-[600px] group cursor-pointer relative"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-secondary">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-accent text-xs font-bold tracking-widest mb-2 block uppercase">
                          {project.category}
                        </span>
                        <h3 className="text-3xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 line-clamp-2 max-w-md text-sm">
                          {project.description}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <ExternalLink size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
