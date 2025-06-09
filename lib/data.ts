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
    title: "Front-end Engineer AWS Intern",
    company: "Amazon AWS",
    description:
      "Incoming Front-End Engineer AWS Intern.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2025 - Present",
  },
  {
    title: "Software Engineer Intern",
    company: "IMD Solutions",
    description:
      `• Developed a scalable React Native mobile application targeting 1.6+ million Type 1 diabetics, integrating Dexcom API
       • Handled complex data processing and storage for 100+ beta users by building RESTful APIs using Flask
       • Ensured reliable message delivery by implementing a secure OAuth flow and token management using Firebase
       • Reduced critical glucose alert response times by 89% by implementing multi-threading to optimize alert pipeline
       • Implemented a deep learning model for blood glucose forecasting, reducing hypoglycemic events by 25%`,
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2025 - June 2025",
  },
  {
    title: "Software Engineer Intern",
    company: "Amgen Inc.",
    description:
      `• Led a research project to evaluate the performance of a RAG-based chatbot on the Amgen Sensing platform
       • Built a Databricks-based evaluation pipeline using Ragas and OpenAI, improving response relevance
       • Analyzed 100+ chatbot interactions, enhancing response consistency across a multitude of different departments
       • Aligned evaluation metrics with business goals, driving 50%+ adoption of the metric by developers`,
    icon: React.createElement(FaReact),
    date: "June 2024 - Sept 2024",
  },
    {
    title: "Web Developer",
    company: "UCI Division of Equal Opportunity and Compliance",
    description:
      `• Reduced migration time of policy website by 30% through efficient usage of Cascade CMS, a web layout builder
       • Improved the website’s interactivity and design, accelerating the work efficiency of 10+ employees
       • Developed scalable and reusable UI components through Velocity Templates, increasing website traffic by 15%
       • Successfully met WCAG 2.0/2.1 AA standards to make web content more accessible and visible for users`,
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