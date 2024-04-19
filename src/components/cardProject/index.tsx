import Image from "next/image"
import Link from "next/link"

type CardProps = {
    title: string,
    image: string,
    link:string
}
export function CardProject({image,link,title}: CardProps){
    return(
        <div className="bg-[#9ab6a2] w-60 h-64 mt-5 py-8 flex flex-col gap-4 rounded-md mx-auto md:w-84 md:h-72 p-2">
             <p className="text-center text-[#244235] text-xl md:text-2xl">{title}</p>
             <div className="h-40 overflow-hidden justify-center items-center flex md:h-52">

             <Image alt="Imagem do projeto" src={image} width={200} height={100}  className="rounded-md max-h-60 md:h-40 md:w-60"/>
             </div>
             <Link href={link} className="text-center text-[#244235] text-xl md:text-2xl">Ver sobre o site</Link>
        </div>
    )
}