import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
      "I graduated after 4 years at Heriot-Watt University with a 2-1. I quickly found a job as a software engineer.",
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
      "For another 2 years I continued in this role, further expanding my knowledge and experience primarily in the data integration space.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2015 - July 2017",
  },
  {
    title: "Lead Software Engineer",
    company: "Millersoft Ltd",
    location: "Musselburgh, Scotland",
    description:
        "For the past 7 years I have worked as the Lead Engineer at Millersoft Ltd taking on a variety of projects from Full Stack Web Apps to Data Integration to Data Vaults, Lakes and Warehouses.",
    icon: React.createElement(FaReact),
    date: "August 2017 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "MongoDB",
  "MySQL",
  "PostgresSQL",
    "Pentaho Data Integration",
    "Apache Hop",
    "Apache Spark",
  "Apache Druid",
  "Python",
  "Java"


] as const;
