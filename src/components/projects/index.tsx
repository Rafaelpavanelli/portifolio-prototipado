'use client'
import { CardProject } from "../cardProject";
import { Projects as ProjectList } from "@/infos/projects";
import Slider from "react-slick";
export function Projects() {
  var settings = {
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  
  };
  return (
    <div className="mt-10">
      <h2 className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_15%)] text-lg font-regular text-center mt-10 md:text-2xl">
        Projetos
      </h2>
      <div className="">

      <Slider {...settings} >

     {
      ProjectList.map((item,index)=><CardProject image={item.image} link={item.link} title={item.name} key={index} />)
     }
      </Slider>
      </div>
    </div>
  );
}