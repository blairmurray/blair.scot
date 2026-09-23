import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Lead Software Engineer",
    company: "Millersoft Ltd",
    location: "Musselburgh, Scotland",
    description:
      "I joined as a graduate in 2014, became a software engineer in 2015, and have led engineering since 2017. The work is full-stack web apps, ETL and data integration, and data platforms: vaults, lakes, and warehouses, including Millersoft's open-source Data Vault engine and studio on Apache Hop.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2014 - Present",
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
    skills: [
      "Apache Hop",
      "Apache Spark",
      "Apache Druid",
      "Pentaho Data Integration",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java"],
  },
  {
    title: "Web",
    skills: ["React", "Next.js", "Node.js", "HTML", "CSS", "Git"],
  },
] as const;
