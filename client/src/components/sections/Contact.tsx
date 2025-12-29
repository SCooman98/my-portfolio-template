import { useContent } from "@/lib/useContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function Contact() {
  const { contact } = useContent();

  return (
    <section id="contact" className="py-32 bg-background border-t border-black/5 relative overflow-hidden">
      {/* Decorative large letter */}
      <div className="absolute -left-12 -bottom-24 text-[20rem] font-heading font-bold text-black/[0.02] select-none pointer-events-none">
        C
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="pt-12"
          >
            <h2 className="text-6xl md:text-7xl font-heading font-medium text-foreground mb-8 leading-[0.9]">
              Let's start a <br/>
              <span className="italic text-primary">conversation.</span>
            </h2>
            
            <p className="text-xl font-light text-muted-foreground mb-16 max-w-md leading-relaxed">
              Open to selected freelance opportunities and artistic collaborations.
            </p>
            
            <div className="space-y-12">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-4">Direct Contact</span>
                <a href={`mailto:${contact.email}`} className="text-2xl md:text-3xl font-heading font-medium hover:text-primary transition-colors flex items-center gap-4 group">
                  {contact.email}
                  <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </a>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-6">Socials</span>
                <div className="flex gap-8">
                  {contact.socials.map((social) => (
                    <a 
                      key={social.name}
                      href={social.link}
                      className="text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-white p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-black/5 max-w-lg ml-auto w-full relative"
          >
             {/* Decorative tape */}
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#e8e4dc] opacity-80 rotate-1 shadow-sm" />

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block group-focus-within:text-primary transition-colors">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Jane Doe" 
                    className="border-0 border-b border-black/10 rounded-none px-0 bg-transparent focus-visible:ring-0 focus-visible:border-primary text-lg font-light placeholder:text-black/20 h-12" 
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block group-focus-within:text-primary transition-colors">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="jane@example.com" 
                    className="border-0 border-b border-black/10 rounded-none px-0 bg-transparent focus-visible:ring-0 focus-visible:border-primary text-lg font-light placeholder:text-black/20 h-12" 
                  />
                </div>

                <div className="group">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block group-focus-within:text-primary transition-colors">Subject</label>
                  <Input 
                    id="subject" 
                    placeholder="Collaboration Inquiry" 
                    className="border-0 border-b border-black/10 rounded-none px-0 bg-transparent focus-visible:ring-0 focus-visible:border-primary text-lg font-light placeholder:text-black/20 h-12" 
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block group-focus-within:text-primary transition-colors">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your vision..." 
                    className="border-0 border-b border-black/10 rounded-none px-0 bg-transparent focus-visible:ring-0 focus-visible:border-primary text-lg font-light placeholder:text-black/20 min-h-[120px] resize-none" 
                  />
                </div>
              </div>
              
              <Button type="submit" size="lg" className="w-full h-14 bg-foreground text-background font-bold tracking-[0.2em] uppercase hover:bg-primary transition-colors rounded-none">
                Send Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
