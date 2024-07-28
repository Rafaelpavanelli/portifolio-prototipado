import { ReactNode } from "react"
import {motion} from 'framer-motion'
type Props = {
    name:string,
    icon: ReactNode
}
export function CardSkill({icon,name}:Props){   
    return(
        <motion.div initial={{opacity: 0,y:-10}} whileInView={{opacity: 1,y:0}} transition={{
            ease: 'easeInOut',
            delay: 0.1
        }} className="mt-10 flex flex-col justify-center items-center md:text-3xl xl:text-4xl ">
            {icon}
            <motion.p className="w-1/2 text-center xl:text-[24px]">{name}</motion.p>
        </motion.div>
    )
}