import { ReactNode } from "react"

type Props = {
    name:string,
    icon: ReactNode
}
export function CardSkill({icon,name}:Props){   
    return(
        <div className="mt-10 flex flex-col justify-center items-center md:text-3xl xl:text-4xl ">
            {icon}
            <p className="w-1/2 text-center">{name}</p>
        </div>
    )
}