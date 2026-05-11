"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I graduated from{" "}
        <span className="font-medium">Heriot-Watt University</span> in Edinburgh
        with a 2:1 in Computer Science, and have spent the past{" "}
        <span className="font-medium">10+ years</span> working as a software
        engineer.{" "}
        <span className="italic">My favourite part of the job</span> is
        untangling complex problems — whether that&apos;s designing a data pipeline
        or architecting a new web application. I{" "}
        <span className="underline">love</span> the moment a tricky solution
        finally clicks into place.
      </p>

      <p className="mb-3">
        I currently work as{" "}
        <span className="font-medium">Lead Software Engineer</span> at{" "}
        <span className="font-medium">Millersoft Ltd</span>, where I lead
        development across a range of projects — from full-stack web apps to{" "}
        <span className="font-medium">data integration</span>, ETL pipelines,
        data vaults, lakes, and warehouses. My go-to stack includes{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, and Node.js
        </span>
        , alongside specialist data tooling like{" "}
        <span className="font-medium">
          Apache Hop, Apache Spark, and Apache Druid
        </span>
        .
      </p>

      <p>
        <span className="italic">When I&apos;m not at a keyboard</span>, you&apos;ll
        find me exploring the Scottish outdoors, keeping up with the latest in
        tech, and tinkering with self-hosted services at home.
      </p>
    </motion.section>
  );
}
