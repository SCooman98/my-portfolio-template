import { useContent } from "@/lib/useContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Send } from "lucide-react";

export function Contact() {
  const { contact } = useContent();

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Footer background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-end">
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-accent font-mono text-sm tracking-widest mb-6 block">// INITIALIZE_CONTACT</span>
            
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-[0.9] text-white">
              Let's build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">the future.</span>
            </h2>
            
            <p className="text-xl text-zinc-400 mb-12 max-w-lg leading-relaxed">
              Have a project in mind or just want to explore the possibilities? 
              I'm currently available for freelance work and collaborations.
            </p>
            
            <div className="space-y-8">
              <a 
                href={`mailto:${contact.email}`} 
                className="group flex items-center gap-4 text-2xl font-bold text-white hover:text-primary transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <span>{contact.email}</span>
              </a>

              <div className="pt-8 border-t border-white/10">
                <div className="flex gap-4">
                  {contact.socials.map((social) => (
                    <a 
                      key={social.name}
                      href={social.link}
                      className="px-6 py-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all text-sm font-bold uppercase tracking-wider"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl relative"
          >
            {/* Decorative Corner Accents */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-tr-[2rem]" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent/20 to-transparent rounded-bl-[2rem]" />

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10 h-12 focus:border-primary/50 text-white placeholder:text-white/20" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 h-12 focus:border-primary/50 text-white placeholder:text-white/20" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Subject</label>
                <Input id="subject" placeholder="Project Inquiry" className="bg-white/5 border-white/10 h-12 focus:border-primary/50 text-white placeholder:text-white/20" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px] bg-white/5 border-white/10 resize-none focus:border-primary/50 text-white placeholder:text-white/20 p-4" />
              </div>
              
              <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold bg-white text-black hover:bg-primary hover:text-white transition-all rounded-xl group">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
