"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[56rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2">
        {skillsData.map((group, groupIndex) => {
          const isWide =
            group.title === "Data platforms" ||
            group.title === "AI" ||
            group.title === "Web";

          return (
            <motion.article
              key={group.title}
              className={`rounded-lg border border-black/5 bg-gray-100 p-5 text-left dark:bg-white/10 dark:text-white sm:p-6 ${
                isWide ? "sm:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * groupIndex }}
            >
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-white/70">
                {group.description}
              </p>
              {"practices" in group && (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {group.practices.map((practice) => (
                    <li
                      key={practice.text}
                      className="flex items-start gap-3 rounded-lg bg-white px-3 py-2.5 text-sm leading-relaxed text-gray-800 shadow-sm dark:bg-white/10 dark:text-white/90"
                    >
                      <span className="mt-0.5 text-lg text-gray-700 dark:text-white/80">
                        {practice.icon}
                      </span>
                      {practice.text}
                    </li>
                  ))}
                </ul>
              )}
              {"tools" in group && (
                <p className="mt-4 text-sm text-gray-600 dark:text-white/70">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Daily tools.{" "}
                  </span>
                  {group.tools.join(", ")}
                </p>
              )}
              {group.skills.length > 0 && (
                <ul
                  className={`mt-5 grid gap-2 sm:grid-cols-2 ${
                    group.title === "Data platforms" ? "lg:grid-cols-3" : ""
                  } ${group.title === "Web" ? "lg:grid-cols-4" : ""}`}
                >
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 rounded-lg bg-white px-3 py-2.5 text-sm font-medium text-gray-800 shadow-sm dark:bg-white/10 dark:text-white/90"
                    >
                      <span className="text-lg text-gray-700 dark:text-white/80">
                        {skill.icon}
                      </span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
