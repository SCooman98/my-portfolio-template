import { useContent } from "@/lib/useContent";
import { useRoute, Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ExternalLink, Github, Tag } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import NotFound from "./not-found";

export default function ProjectPage() {
  const [, params] = useRoute("/project/:slug");
  const slug = params?.slug;
  const { projects } = useContent();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-24 pb-24">
        <article className="container mx-auto px-6 max-w-4xl">
          {/* Back Link */}
          <Link href="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-medium tracking-wide uppercase text-sm mb-3 block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground leading-tight">
              {project.title}
            </h1>
            
            {/* Meta / Actions */}
            <div className="flex flex-wrap gap-4 mb-12 border-b border-border pb-8">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-all"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-2.5 rounded-full font-medium hover:bg-secondary/80 transition-colors"
                >
                  View Code <Github size={16} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-video w-full rounded-2xl overflow-hidden mb-12 border border-border bg-secondary"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-[1fr_250px] gap-12">
            
            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-p:text-muted-foreground prose-li:text-muted-foreground">
              <ReactMarkdown>
                {project.content || project.description}
              </ReactMarkdown>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {project.tags && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4 flex items-center gap-2">
                    <Tag size={16} /> Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">
                  Share
                </h3>
                <div className="flex gap-4">
                   {/* Placeholder share links */}
                   <button className="text-muted-foreground hover:text-primary transition-colors">Twitter</button>
                   <button className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</button>
                </div>
              </div>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
