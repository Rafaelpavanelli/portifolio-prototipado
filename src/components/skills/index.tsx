import { SkillList } from "@/infos/skills"
import { CardSkill } from "../cardSkill"
import { motion } from "framer-motion";

export function Skills(){
    return(
        <motion.div  className="flex justify-center items-center flex-col">
              <h2 className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_15%)] text-gray-100 text-lg font-regular text-center  md:text-2xl xl:text-3xl">HABILIDADES</h2>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 mx-auto xl:w-full text-gray-100">
                {SkillList.map((item,index)=>(
                    <CardSkill icon={item.icon} name={item.name} key={index}/>
                ))}
              </div>
        </motion.div>
    )
}