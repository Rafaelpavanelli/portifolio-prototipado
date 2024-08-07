type Props = {
    office: string,
    start:string,
    end:string,
    description:string,
    number: number
}
export function JobList({office,start,end,description,number}:Props){
    return(
        <div className="border-l-2 border-[#718878] p-4 pl-8 text-start relative text-xl xl:text-2xl max-w-full">
            <p className="w-8 h-8  bg-[#718878] rounded-full absolute -left-4  bottom-1/2 flex justify-center items-center pb-2">{number}</p>
            <p className="text-gray-100 font-regular xl:text-xl">{office}</p>
            <p className="text-[#244235]  pb-1 xl:text-xl">Inicio em {start}-{end}</p>
            <p className="text-[#8eaa97] text-start md:text-justify xl:text-xl text-wrap max-w-[90%]">{description}</p>  
            
        </div>
    )
}