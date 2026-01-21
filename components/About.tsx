"use client";

import React from "react";
import SectionHeading from "./ui/SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref} 
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
				I am a recent graduate at UC Irvine with Bachelors of Science degrees in both Computer Science and Software Engineering. I am beyond excited to contribute the skills that I have learned and honed throughout my academic and professional career.
        In the past, I&apos;ve had the opportunity to contribute to projects aimed at solving real-world problems using my full-stack skills. Most recently, I completed my internship at AWS where I contributed to a global-scale endeavor affecting 100+ data centers.
      </p>
      <p>
        Outside of coding, I&apos;m a huge NBA fan (go Warriors!) and love playing basketball, enjoying outdoor activities like hiking/jogging (if the weather&apos;s nice, of course), and exploring new places.
      </p>
    </motion.section>
  )
}