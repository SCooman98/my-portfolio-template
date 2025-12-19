import { useContent } from "@/lib/useContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export function Contact() {
  const { contact } = useContent();

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Let's work together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email me at</div>
                  <a href={`mailto:${contact.email}`} className="text-lg font-medium hover:text-primary transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {contact.socials.map((social) => (
                  <a 
                    key={social.name}
                    href={social.link}
                    className="px-4 py-2 border border-border rounded-full hover:bg-secondary transition-colors text-sm font-medium"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-secondary/30 p-8 rounded-2xl border border-border/50"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Project Inquiry" className="bg-background" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px] bg-background" />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
