import { Courses } from "@/components/courses";
import { Jobs } from "@/components/jobs";
import { Languages } from "@/components/languages";
import { Links } from "@/components/links";
import { Main } from "@/components/main";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home(){
    {
        return(
            <div className="bg-[#F3F8F4] max-h-screen ">
            <Main />
            <div className="px-10">
            <Courses />
            <Skills />
            <Languages />
            <Jobs />
            <Projects />
            <Links />
            </div>
            <p className="text-[#111A17] text-[10px] ">© 2024 Ayla Cardoso e Rafael Pavanelli. Todos os direitos reservados</p>
            </div>)
    }
}