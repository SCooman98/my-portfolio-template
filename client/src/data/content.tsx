import avatarImage from "@assets/generated_images/professional_headshot_placeholder.png";

export const content = {
  hero: {
    name: "Alex Morgan",
    role: "Product Designer & Developer",
    headline: "Building digital experiences that matter.",
    description: "I focus on simplicity, usability, and crafting software that feels natural. Based in San Francisco, working globally.",
    avatar: avatarImage,
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
      description: "A comprehensive financial management dashboard for enterprise users.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      id: 2,
      title: "E-commerce Mobile App",
      category: "Mobile Development",
      description: "A flutter-based mobile application for a sustainable fashion brand.",
      image: "https://images.unsplash.com/photo-1523206485979-ba935d463714?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      id: 3,
      title: "Architecture Portfolio",
      category: "Web Design",
      description: "Minimalist portfolio website designed for an award-winning architect.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      id: 4,
      title: "Health Tracker",
      category: "Product Design",
      description: "Concept design for a wellness tracking application focused on mental health.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      link: "#"
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
