"use client";

import React from "react";
import SectionHeading from "./ui/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import Project from "./Project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}