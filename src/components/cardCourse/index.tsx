type Props = {
    title:string,
    plataform: string,
    year: string
}
export function CardCourse({title,plataform,year}:Props){
    return(
        <div >
            <p className="text-[#244235] font-regular ">{title}</p>
            <p className="text-[#718878] font-regular">{plataform}, {year}</p>
        </div>
    )
}