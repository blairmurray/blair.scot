"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="flex flex-col gap-8">
        {skillsData.map((group, groupIndex) => {
          const indexOffset = skillsData
            .slice(0, groupIndex)
            .reduce((total, item) => total + item.skills.length, 0);

          return (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-white/60">
                {group.title}
              </h3>
              <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {group.skills.map((skill, skillIndex) => {
                  const index = indexOffset + skillIndex;

                  return (
                    <motion.li
                      className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                      key={skill}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      custom={index}
                    >
                      {skill}
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
