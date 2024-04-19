type Props = {
    office: string,
    start:string,
    end:string,
    description:string,
    number: number
}
export function JobList({office,start,end,description,number}:Props){
    return(
        <div className="border-l-2 border-[#718878] p-4 pl-8 text-start relative text-xl xl:text-2xl">
            <p className="w-8 h-8 text-center bg-[#718878] rounded-full absolute -left-4  bottom-1/2">{number}</p>
            <p className="text=[#0c1612] font-regular xl:text-xl">{office}</p>
            <p className="text-[#244235]  pb-1 xl:text-xl">Inicio em {start}-{end}</p>
            <p className="text-[#718878] text-justify xl:text-xl">{description}</p>  
            
        </div>
    )
}