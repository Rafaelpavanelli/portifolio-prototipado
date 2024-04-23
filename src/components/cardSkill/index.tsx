import { ReactNode } from "react"
import {motion} from 'framer-motion'
type Props = {
    name:string,
    icon: ReactNode
}
export function CardSkill({icon,name}:Props){   
    return(
        <motion.div initial={{opacity: 0,y:-100}} whileInView={{opacity: 1,y:0}} transition={{
            ease: 'easeInOut'
        }} className="mt-10 flex flex-col justify-center items-center md:text-3xl xl:text-4xl ">
            {icon}
            <p className="w-1/2 text-center xl:text-[24px]">{name}</p>
        </motion.div>
    )
}