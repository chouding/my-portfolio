"use client";

import React, { useEffect } from "react";
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
        I'm currently a senior at UC Irvine studying Computer Science and Software Engineering. I am excited to announce that I will be joining the DC Console team this summer as a Front-End Engineer AWS Intern!
        In the past, I've had the opportunity to contribute to projects aimed at solving real-world problems using my full-stack skills. Most recently, I completed my internship focused on preventing hypoglycemic episodes in individuals with Type 1 diabetes.
      </p>
      <p>
        Outside of coding, I’m a huge NBA fan (go Warriors!) and love playing basketball, enjoying outdoor activities like hiking/jogging (if the weather's nice, of course), and exploring new places. This is actually my first time in Colorado, so I can't wait to see what there is to do here!
      </p>
    </motion.section>
  )
}