import { useContent } from "@/lib/useContent";
import { motion } from "framer-motion";
import { Quote, Code, Zap, Globe, Cpu } from "lucide-react";

export function About() {
  const { about, references } = useContent();

  const iconMap = [Code, Zap, Globe, Cpu];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Text Content */}
          <div>
            <span className="text-accent font-mono text-sm tracking-widest mb-6 block">// ABOUT_ME</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
              {about.title}
            </h2>
            <div className="prose prose-invert prose-lg text-muted-foreground leading-relaxed">
              <p>{about.bio}</p>
            </div>
            
            {/* Stats Grid - Now stylized as 'System Specs' */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              {about.stats.map((stat, i) => (
                <div key={stat.label} className="bg-secondary/20 border border-white/5 p-6 rounded-2xl group hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    {(() => {
                      const Icon = iconMap[i % iconMap.length];
                      return <Icon className="w-4 h-4 text-primary" />;
                    })()}
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{stat.label}</span>
                  </div>
                  <div className="text-3xl font-bold font-heading text-white group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual / Abstract Representation */}
          <div className="relative mt-8 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-full opacity-30" />
            
            {/* Terminal-like Box */}
            <div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="ml-auto text-xs font-mono text-white/30">bash — 80x24</div>
              </div>
              <div className="p-6 font-mono text-sm space-y-4">
                <div>
                  <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-white">whoami</span>
                </div>
                <div className="text-zinc-400 pl-4">
                  Creative Developer & UI Designer based in San Francisco.
                  <br/>
                  Obsessed with pixel-perfect interactions.
                </div>
                
                <div>
                  <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-white">list --skills</span>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-1 pl-4 text-zinc-400">
                  <span>- React.js</span>
                  <span>- TypeScript</span>
                  <span>- Next.js</span>
                  <span>- TailwindCSS</span>
                  <span>- Node.js</span>
                  <span>- WebGL</span>
                </div>

                <div className="animate-pulse">
                  <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-white">_</span>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            {references && references.length > 0 && (
              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 20, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-12 -left-12 max-w-sm bg-zinc-900 border border-white/10 p-6 rounded-xl shadow-2xl hidden md:block"
              >
                <Quote className="text-primary mb-4 w-8 h-8" />
                <p className="text-zinc-300 italic mb-4 text-sm">"{references[0].quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent" />
                  <div>
                    <div className="font-bold text-xs text-white">{references[0].name}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{references[0].role}</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
