import { CardCourse } from "../cardCourse";
import { Courses as Course } from "@/infos/courses";
import { motion } from "framer-motion";
export function Courses() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, transform: "translateX(0px)" },
    hidden: { opacity: 0, transform: "translateX(-100px)" },
  };

  return (
    <motion.div
      className=" mt-10"
      initial="hidden"
      animate="visible"
      variants={list}
      id="courses"
    >
      <motion.h2 className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_15%)] text-lg font-regular text-center  md:text-2xl xl:text-3xl" variants={item}>
        CURSOS E CERTIFICADOS
      </motion.h2>
      <div className="flex flex-col items-center mt-8 gap-8 w-3/4">
        {Course.map((data, index) => (
          <motion.div
            className="border-l-2 border-[#727E6E] w-72 pl-4 md:text-xl md:w-96 xl:w-full xl:text-2xl"
            variants={item}
            key={index}
          >
            <CardCourse
              title={data.title}
              plataform={data.plataform}
              year={data.year}
              key={index}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
