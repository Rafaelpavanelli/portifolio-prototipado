"use client";
import { CardProject } from "../cardProject";
import { Projects as ProjectList } from "@/infos/projects";
import { motion } from "framer-motion";
import { useState } from "react";
import Slider from "react-slick";

export function Projects() {
  const [selectPlataform, setSelectPlataform] = useState<string>("");

  function plataformSelected(type: string) {
    type !== selectPlataform ? setSelectPlataform(type): setSelectPlataform('');
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const plataformList = ["web", "mobile"];
  const filteredProjects = selectPlataform
    ? ProjectList.filter((project) => project.plataform === selectPlataform)
    : ProjectList;

  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h2 className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_15%)] text-lg font-regular text-center md:text-2xl xl:text-3xl m-10 ">
        PROJETOS
      </h2>
      <div className="">
        <div className="flex gap-2 mb-4 ">
          {plataformList.map((plataforma, index) => (
            <p
              onClick={() => plataformSelected(plataforma)}
              key={index}
              className={`px-2 rounded-sm first-letter:uppercase border-gray-600 border-[1px] text-center cursor-pointer font-medium ${plataforma === selectPlataform ? "bg-[#4a7265] text-white" : "bg-transparent text-black"} transition-all`}
            >
              {plataforma}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {filteredProjects.map((item, index) => (
            <CardProject
              image={item.image}
              link={item.link}
              title={item.name}
              tecnologies={item.tecnologies}
              description={item.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
