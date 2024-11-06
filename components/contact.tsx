"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {BsLinkedin} from "react-icons/bs";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

        <p className="text-gray-700 -mt-6 dark:text-white/80 flex items-center justify-center">
            Please contact me directly at{" "}
            <a className="underline mx-2" href="mailto:me@blair.scot">
                me@blair.scot
            </a>{" "}
            or through LinkedIn{" "}
            <a
                className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 ml-2"
                href="www.linkedin.com/in/murrayblair"
                target="_blank"
            >
                <BsLinkedin/>
            </a>

        </p>
    </motion.section>
  );
}