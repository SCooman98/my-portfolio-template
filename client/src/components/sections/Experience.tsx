import { useContent } from "@/lib/useContent";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Briefcase } from "lucide-react";

export function Experience() {
  const { experience, education, volunteering } = useContent();

  return (
    <section id="experience" className="py-32 bg-secondary/10 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <span className="text-accent font-mono text-sm tracking-widest mb-6 block">// CAREER_PATH</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-12">Experience & Education</h2>
        </div>

        {/* Cyber Timeline */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-16">
          {experience.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Glowing Node */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-primary shadow-[0_0_10px_rgba(124,58,237,0.5)] z-10" />
              
              <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 items-start">
                <div>
                   <span className="text-sm font-bold font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 inline-block mb-2">
                    {item.period}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">{item.role}</h3>
                  <div className="text-zinc-400 font-medium flex items-center gap-2">
                    <Briefcase size={14} />
                    {item.company}
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <p className="text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Other Grid */}
        <div className="mt-32 grid md:grid-cols-2 gap-8">
          {education && education.length > 0 && (
            <div className="bg-black/20 border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="border-l-2 border-white/10 pl-6 py-1">
                    <h4 className="text-lg font-bold text-white">{item.institution}</h4>
                    <div className="text-zinc-500 text-sm mb-2">{item.degree} • {item.year}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {volunteering && volunteering.length > 0 && (
            <div className="bg-black/20 border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Heart className="text-accent" size={20} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">Volunteering</h3>
              </div>
              <div className="space-y-6">
                {volunteering.map((item, index) => (
                  <div key={index} className="border-l-2 border-white/10 pl-6 py-1">
                    <h4 className="text-lg font-bold text-white">{item.organization}</h4>
                    <div className="text-accent text-sm mb-1">{item.role}</div>
                    <div className="text-zinc-500 text-xs font-mono">{item.period}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
