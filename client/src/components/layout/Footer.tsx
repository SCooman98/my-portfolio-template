import { content } from "@/data/content";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {content.hero.name}. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
