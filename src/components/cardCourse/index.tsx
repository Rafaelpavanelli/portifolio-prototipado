type Props = {
    title:string,
    plataform: string,
    year: string
}
export function CardCourse({title,plataform,year}:Props){
    return(
        <div className="border-l-2 border-[#727E6E] w-72 pl-4 md:text-xl md:w-96 xl:w-2/3 xl:text-2xl">
            <p className="text-[#244235] font-regular ">{title}</p>
            <p className="text-[#718878] font-regular">{plataform}, {year}</p>
        </div>
    )
}