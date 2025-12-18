import avatarImage from "@assets/generated_images/alex_morgan_professional_headshot.png";
import fintechImage from "@assets/generated_images/fintech_dashboard_interface.png";
import ecommerceImage from "@assets/generated_images/fashion_mobile_app_interface.png";
import archImage from "@assets/generated_images/architecture_portfolio_website.png";
import healthImage from "@assets/generated_images/wellness_tracker_app_interface.png";
import { ContentData } from "@/types/content";

export const content: ContentData = {
  hero: {
    name: "Alex Morgan",
    role: "Product Designer & Developer",
    headline: "Building digital experiences that matter.",
    description: "I focus on simplicity, usability, and crafting software that feels natural. Based in San Francisco, working globally.",
    avatar: avatarImage,
    resume: "/assets/resume-placeholder.pdf", // Placeholder path
    primaryAction: "View Projects",
    secondaryAction: "Contact Me"
  },
  about: {
    title: "About Me",
    bio: "With over 5 years of experience in the intersection of design and technology, I help companies build products that are not only functional but delightful to use. My background in architecture informs my structural approach to digital design.",
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Projects Completed", value: "40+" },
      { label: "Clients Worldwide", value: "12" }
    ]
  },
  experience: [
    {
      company: "Studio Alpha",
      role: "Senior Product Designer",
      period: "2021 - Present",
      description: "Leading the design system initiative and overseeing product design for enterprise clients."
    },
    {
      company: "TechFlow Inc",
      role: "Frontend Developer",
      period: "2019 - 2021",
      description: "Developed responsive web applications using React and TypeScript. Collaborated closely with UX team."
    },
    {
      company: "Freelance",
      role: "Web Designer",
      period: "2018 - 2019",
      description: "Designed and built custom portfolios and e-commerce sites for small businesses."
    }
  ],
  projects: [
    {
      id: 1,
      title: "Fintech Dashboard",
      category: "UI/UX Design",
      description: "A comprehensive financial management dashboard for enterprise users. focused on data visualization and accessibility.",
      image: fintechImage,
      link: "#",
      github: "https://github.com",
      tags: ["React", "D3.js", "TypeScript"]
    },
    {
      id: 2,
      title: "E-commerce Mobile App",
      category: "Mobile Development",
      description: "A flutter-based mobile application for a sustainable fashion brand, featuring AR product try-on.",
      image: ecommerceImage,
      link: "#",
      tags: ["Flutter", "Dart", "Firebase"]
    },
    {
      id: 3,
      title: "Architecture Portfolio",
      category: "Web Design",
      description: "Minimalist portfolio website designed for an award-winning architect, emphasizing visual storytelling.",
      image: archImage,
      link: "#",
      tags: ["Next.js", "Tailwind", "Framer Motion"]
    },
    {
      id: 4,
      title: "Health Tracker",
      category: "Product Design",
      description: "Concept design for a wellness tracking application focused on mental health and habit formation.",
      image: healthImage,
      link: "#",
      tags: ["Figma", "Prototyping", "User Research"]
    }
  ],
  references: [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      quote: "Alex is one of those rare developers who has a true eye for design. Their work is always pixel-perfect and technically sound."
    },
    {
      name: "Marcus Johnson",
      role: "Lead Architect",
      quote: "Working with Alex was a seamless process. They understood our vision immediately and elevated it beyond our expectations."
    }
  ],
  contact: {
    email: "hello@alexmorgan.com",
    socials: [
      { name: "Twitter", link: "#" },
      { name: "LinkedIn", link: "#" },
      { name: "GitHub", link: "#" },
      { name: "Dribbble", link: "#" }
    ]
  }
};
