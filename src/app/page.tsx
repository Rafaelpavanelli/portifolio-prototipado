"use client";
import { Courses } from "@/components/courses";
import { Footer } from "@/components/footer";
import { Jobs } from "@/components/jobs";
import { Languages } from "@/components/languages";
import { Main } from "@/components/main";
import { Projects } from "@/components/projects";
import { SideCardLink } from "@/components/sideCardLink";
import { Skills } from "@/components/skills";
import { motion, useScroll } from "framer-motion";
export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-[#F3F8F4] max-h-screen ">
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#4a7265] transform-0 z-10"
        style={{ scaleX: scrollYProgress }}
      />
      <Main />
      <div className="px-10 xl:pl-20 flex flex-col gap-10">
      <SideCardLink />
        <Courses />
        <Skills />
        <Languages />
        <Jobs />
        <Projects />
      </div>
     <Footer />
    </div>
  );
}
