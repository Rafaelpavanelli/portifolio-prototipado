import { CardCourse } from "../cardCourse";
import { Courses as Course } from "@/infos/courses";
export function Courses(){
    return(
        <div className="min-h-screen">
            <h2 className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_15%)] text-lg font-regular text-center mt-10 md:text-2xl">CURSOS E CERTIFICADOS</h2>
            <div className="flex flex-col items-center mt-8 gap-8">
                {Course.map((data,index)=>(
                    <CardCourse title={data.title} plataform={data.plataform} year={data.year} key={index}/>
                ))}
            </div>
        </div>
    )
}