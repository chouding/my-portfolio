import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nasaProjectImg from "@/public/NasaYearOnPsyche.jpg";
import rtxProjectImg from "@/public/CyberVerificationLab.png";
import fabflixProjecImg from "@/public/FabFlix.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Engineer Intern",
    company: "Amazon Web Services",
    description:
      `• Built a large-scale, in-page WYSIWYG editing interface in React, Redux and TypeScript for 1,000+ configuration pages across 100+ AWS Data Centers, reducing manual update time by 98%
       • Developed a reusable GraphQL invoke operator leveraged by multiple AWS Data Center teams, reducing boilerplate query code by ~70% and projected to save 100+ developer hours annually
       • Implemented CI/CD (Jenkins) and Git workflows to accelerate feature rollout, achieving 98%+ test coverage with Jest
       • Drove cross-team Agile collaboration with 3+ platform teams in a global, distributed system, for design-system compliance`,
    icon: React.createElement(LuGraduationCap),
    date: "June 2025 - Sept 2025",
  },
  {
    title: "Software Engineer Intern",
    company: "GlucoGuard",
    description:
      `• Designed and deployed secure, containerized RESTful APIs (Flask/Python, Docker) for 10+ beta users of a React Native app
       • Optimized critical glucose alert pipelines on the backend via multi-threading, reducing alert response times by 89%
       • Built a HIPAA-compliant architecture for sensitive health data, ensuring long-term security and compliance for FDA approval`,
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2025 - June 2025",
  },
  {
    title: "Software Engineer Intern",
    company: "Amgen Inc.",
    description:
      `• Led the evaluation of a RAG-based chatbot on the Amgen Sensing platform across multiple enterprise business units
       • Built a Databricks-based evaluation pipeline with Ragas and OpenAI APIs, reducing evaluation cycle time by 60%
       • Analyzed 100+ chatbot interactions across business contexts to improve response relevance for 200+ internal users`,
    icon: React.createElement(FaReact),
    date: "June 2024 - Sept 2024",
  },
  {
    title: "Web Developer",
    company: "UCI Office of Equal Opportunity and Diversity",
    description:
      `• Reduced migration time of policy website by 30% through efficient usage of Cascade CMS, a web layout builder
       • Optimized responsive design across browsers/services, accelerating the work efficiency of 10+ employees
       • Met full WCAG 2.0/2.1 AA compliance, broadening accessibility for diverse user groups and improving site visibility`,
    icon: React.createElement(FaReact),
    date: "June 2023 - June 2024",
  },
] as const;

export const projectsData = [
  {
    title: "NASA Year on Psyche",
    description:
      `An interactive Unity-based game to educate students about NASA’s Psyche asteroid mission`,
    tags: ["Unity", "C#", "Blender", "Agile", "Jira"],
    imageUrl: nasaProjectImg,
  },
  {
    title: "Cyber Verification Lab",
    description:
      `Dashboard for RTX's internal validation tool, a platform to help cybersecurity engineers verify assets`,
    tags: ["React", "TypeScript", "MongoDB", "Tailwind CSS", "Git"],
    imageUrl: rtxProjectImg,
  },
  {
    title: "FabFlix",
    description:
      `An e-commerce app on AWS EC2, enabling users to easily search, browse, and purchase movies`,
    tags: ["Java", "JavaScript", "MySQL", "JDBC", "Tomcat", "Git", "AWS"],
    imageUrl: fabflixProjecImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;