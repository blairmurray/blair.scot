import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaDatabase, FaJava, FaReact } from "react-icons/fa";
import {
  LuBookOpen,
  LuGraduationCap,
  LuPencil,
  LuShield,
  LuTestTube,
} from "react-icons/lu";
import {
  SiApache,
  SiApachedruid,
  SiApachespark,
  SiCss3,
  SiDocker,
  SiFastify,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import carcheckmateImg from "@/public/carcheckmate.jpg";

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
    title: "Graduated University",
    company: "Heriot-Watt University",
    location: "Edinburgh, Scotland",
    description:
      "I graduated after 4 years at Heriot-Watt University with a 2:1 in Computer Science, then started work as a software engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2014",
  },
  {
    title: "Graduate Software Engineer",
    company: "Millersoft Ltd",
    location: "Musselburgh, Scotland",
    description:
      "I worked as a graduate developer for a year at Millersoft before being promoted to Software Engineer.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2014 - July 2015",
  },
  {
    title: "Software Engineer",
    company: "Millersoft Ltd",
    location: "Musselburgh, Scotland",
    description:
      "For two years I worked as a software engineer, mainly in data integration.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2015 - July 2017",
  },
  {
    title: "Lead Software Engineer",
    company: "Millersoft Ltd",
    location: "Musselburgh, Scotland",
    description:
      "Since August 2017 I have led engineering at Millersoft, across full-stack web apps, ETL and data integration, and data platforms: vaults, lakes, and warehouses, including the open-source Data Vault engine and studio on Apache Hop.",
    icon: React.createElement(FaReact),
    date: "August 2017 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CarCheckMate",
    description:
      "UK vehicle history checks by registration. The site shows DVLA details and MOT history, and sells a full report covering finance, theft, and write-off records.",
    tags: ["Next.js", "Fastify", "TypeScript", "Stripe"],
    imageUrl: carcheckmateImg,
    link: "https://www.carcheckmate.co.uk/",
  },
] as const;

export const skillsData = [
  {
    title: "Data platforms",
    description:
      "Pipelines, vaults, lakes, and warehouses, and the databases behind them.",
    skills: [
      { name: "Apache Hop", icon: React.createElement(SiApache) },
      { name: "Apache Spark", icon: React.createElement(SiApachespark) },
      { name: "Apache Druid", icon: React.createElement(SiApachedruid) },
      {
        name: "Pentaho Data Integration",
        icon: React.createElement(FaDatabase),
      },
      { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
      { name: "MySQL", icon: React.createElement(SiMysql) },
    ],
  },
  {
    title: "AI",
    description:
      "AI is not how I build. It is now part of it. The way developers code has changed, and this is fundamental.",
    practices: [
      {
        icon: React.createElement(LuPencil),
        text: "Prompts that spell out the outcome, the constraints, and what must stay as it is.",
      },
      {
        icon: React.createElement(LuShield),
        text: "Defensive restrictions so the agent stays inside the task.",
      },
      {
        icon: React.createElement(LuBookOpen),
        text: "I read what it wrote until I understand it. If I cannot explain the change, it does not stay.",
      },
      {
        icon: React.createElement(LuTestTube),
        text: "I test what an agent writes. Testing is part of the change, not a follow-up.",
      },
    ],
    tools: ["Cursor", "Antigravity", "Codex", "Claude", "Gemini"],
    skills: [],
  },
  {
    title: "Web",
    description: "The application stack I use to ship products on top of that data.",
    skills: [
      { name: "React", icon: React.createElement(SiReact) },
      { name: "Next.js", icon: React.createElement(SiNextdotjs) },
      { name: "Node.js", icon: React.createElement(SiNodedotjs) },
      { name: "Fastify", icon: React.createElement(SiFastify) },
      { name: "Tailwind", icon: React.createElement(SiTailwindcss) },
      { name: "Prisma", icon: React.createElement(SiPrisma) },
      { name: "HTML", icon: React.createElement(SiHtml5) },
      { name: "CSS", icon: React.createElement(SiCss3) },
    ],
  },
  {
    title: "Languages",
    description: "What I write day to day.",
    skills: [
      { name: "TypeScript", icon: React.createElement(SiTypescript) },
      { name: "JavaScript", icon: React.createElement(SiJavascript) },
      { name: "Python", icon: React.createElement(SiPython) },
      { name: "Java", icon: React.createElement(FaJava) },
    ],
  },
  {
    title: "Tools",
    description: "How the sites and pipelines get built and served.",
    skills: [
      { name: "Docker", icon: React.createElement(SiDocker) },
      { name: "Nginx", icon: React.createElement(SiNginx) },
      { name: "Git", icon: React.createElement(SiGit) },
    ],
  },
] as const;
