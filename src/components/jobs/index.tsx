import { JobList } from "../jobList";
import { motion } from "framer-motion";

export function Jobs() {
  return (
    <motion.div id="jobs" initial={{opacity: 0,y:-100}} whileInView={{opacity: 1,y:0}}>
      <h2 className="text-gray-100 [text-shadow:_0_4px_4px_rgb(0_0_0_/_15%)] text-lg font-regular text-center md:text-2xl xl:text-3xl">
        HISTÓRICO PROFISSIONAL
      </h2>
      <JobList
        office="Freelances"
        start="abril de 2022"
        end="Presente"
        description="Os freelances começam a serem feitos no começo de abril e continuou ate hoje em dia. Eles ajudaram a colocar estudos em prática e melhorar as habilidades cada vez mais"
        number={1}
      />
      <JobList
        office="Front End na M2 Software"
        start="Maio 2023"
        end="Maio 2024"
        description="Minha função é desenvolver sites modernos e funcionais. Atuo como Front-end web utilizando tecnologias como Next, Tailwind, firebase,Styled Components e entre outras tecnologias mais mordernas."
        number={2}
      />
    </motion.div>
  );
}
