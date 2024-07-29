"use client";
import { CardProject } from "../cardProject";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDesktop, FaMobile } from "react-icons/fa";
import { ProjectInfosType } from "@/controller/types/Project.type";
import { useFirestore } from "@/controller/hooks/useFirestore";
import { CardProjectSkelleton } from "../CardProjectoSkelleton";

export function Projects() {
  const { GetProjects } = useFirestore();
  const [selectPlataform, setSelectPlataform] = useState<string>("");
  const [projects, setProjects] = useState<ProjectInfosType[]>([]);
  const [loading, setLoading] = useState(false);
  function plataformSelected(type: string) {
    type !== selectPlataform
      ? setSelectPlataform(type)
      : setSelectPlataform("");
  }
 const container = {
   hidden: { opacity: 0,top:10},
   visible: {opacity: 1,top:0},
   exit: { opacity: 0, bottom: 10}
 }
 const cards = {
  hidden: { opacity: 0,right:10},
  visible: {opacity: 1,right:0},
  exit: {opacity: 0,left:0},

 }
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const projectList = await GetProjects(selectPlataform);
        if (Array.isArray(projectList)) {
          setProjects(projectList);
        }
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        
      }finally{
        setLoading(false);
      }
    };
    fetchProjects();
  }, [selectPlataform, GetProjects]);

  const plataformList = ["web", "mobile"];

  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-gray-100 [text-shadow:_0_4px_4px_rgb(0_0_0_/_15%)] text-lg font-regular text-center md:text-2xl xl:text-3xl m-10">
        PROJETOS
      </h2>
      <div>
        <div className="flex gap-2 mb-4">
          {plataformList.map((plataforma, index) => (
            <p
              onClick={() => plataformSelected(plataforma)}
              key={index}
              className={`px-2 rounded-sm first-letter:uppercase text-center cursor-pointer font-medium transition-all ${
                selectPlataform === plataforma ? " text-white" : " text-black"
              }`}
            >
              {plataforma === "mobile" ? (
                <FaMobile
                  size={28}
                  color={selectPlataform === plataforma ? "#f3f4f6" : "#383838"}
                  className="shadow-inner"
                />
              ) : (
                <FaDesktop
                  size={28}
                  color={selectPlataform === plataforma ? "#f3f4f6" : "#383838"}
                  className="shadow-inner"
                />
              )}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
          {!loading ? 
            projects.length > 0 ? projects.map((item: ProjectInfosType, index) => (
              <CardProject
                image={item.coverUrl || ""}
                link={item.link || "#"}
                title={item.name || "Untitled Project"}
                tecnologies={item.languages || []}
                description={
                  item.shortDescription || "No description available."
                }
                key={index}
              />
            )): <p className="text-2xl text-gray-300 text-center h-40 w-full col-span-2">Nenhum projeto registrado</p>
          : 
          [...Array(1)].map((_, i) => (
             <CardProjectSkelleton key={i}/>
          ))}
         
        </div>
      </div>
    </motion.div>
  );
}
