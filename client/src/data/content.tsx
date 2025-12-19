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
  education: [
    {
      institution: "Rhode Island School of Design",
      degree: "BFA in Graphic Design",
      year: "2018",
      description: "Focused on interactive media and typography."
    },
    {
      institution: "General Assembly",
      degree: "Software Engineering Immersive",
      year: "2019",
      description: "Intensive bootcamp covering full-stack web development."
    }
  ],
  volunteering: [
    {
      organization: "Tech for Good",
      role: "Mentor",
      period: "2020 - Present",
      description: "Mentoring underprivileged youth in web development basics."
    }
  ],
  projects: [
    {
      id: 1,
      title: "Fintech Dashboard",
      slug: "fintech-dashboard",
      category: "UI/UX Design",
      description: "A comprehensive financial management dashboard for enterprise users focused on data visualization and accessibility.",
      image: fintechImage,
      link: "#",
      github: "https://github.com",
      tags: ["React", "D3.js", "TypeScript"],
      content: `
### The Challenge
Enterprise financial tools are often cluttered, difficult to use, and lack visual hierarchy. The goal of this project was to create a dashboard that simplifies complex financial data while maintaining robust functionality for power users.

### The Solution
We adopted a modular widget-based architecture that allows users to customize their view. 
- **Dark Mode First**: To reduce eye strain for analysts working long hours.
- **Data Visualization**: Custom D3.js charts that update in real-time.
- **Accessibility**: Full WCAG 2.1 AA compliance, including keyboard navigation and screen reader support.

### Key Features
1. Real-time stock tracking
2. Automated report generation
3. Multi-currency support
4. Role-based access control
      `
    },
    {
      id: 2,
      title: "E-commerce Mobile App",
      slug: "ecommerce-mobile-app",
      category: "Mobile Development",
      description: "A flutter-based mobile application for a sustainable fashion brand, featuring AR product try-on.",
      image: ecommerceImage,
      link: "#",
      tags: ["Flutter", "Dart", "Firebase"],
      content: `
### Overview
Built for a sustainable fashion startup, this app needed to bridge the gap between online browsing and the in-store experience.

### Technical Stack
- **Flutter**: For cross-platform performance (iOS & Android).
- **Firebase**: For real-time inventory updates and user authentication.
- **ARCore/ARKit**: To implement the virtual "Try On" feature.

### Impact
After launch, the brand saw a **40% increase** in mobile conversions and a **25% reduction** in returns due to the AR sizing feature.
      `
    },
    {
      id: 3,
      title: "Architecture Portfolio",
      slug: "architecture-portfolio",
      category: "Web Design",
      description: "Minimalist portfolio website designed for an award-winning architect, emphasizing visual storytelling.",
      image: archImage,
      link: "#",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      content: `
### Design Philosophy
The client wanted the website to recede into the background, letting the architectural photography take center stage. We used a strict grid system inspired by Swiss design principles.

### Animation
Subtle micro-interactions and smooth page transitions (using Framer Motion) give the site a premium feel without distracting from the content.
      `
    },
    {
      id: 4,
      title: "Health Tracker",
      slug: "health-tracker",
      category: "Product Design",
      description: "Concept design for a wellness tracking application focused on mental health and habit formation.",
      image: healthImage,
      link: "#",
      tags: ["Figma", "Prototyping", "User Research"],
      content: `
### User Research
We conducted interviews with 20+ users to understand the pain points of existing habit trackers. The common feedback was that they felt "punishing" when a streak was broken.

### The Pivot
We designed a "forgiving" system that focuses on weekly consistency rather than daily streaks, using soft, calming colors and positive reinforcement.
      `
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
