import Image from "next/image";
import Link from "next/link";
import { Tecnologies } from "@/infos/ListTecnologies";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

type CardProps = {
  title: string;
  image: string;
  link: string;
  tecnologies: string[];
  description: string;
};

export function CardProject({
  image,
  link,
  title = "Untitled Project",
  tecnologies = [],
  description = "No description available.",
}: CardProps) {
  return (
    <div className="w-full md:w-[90%] bg-[#ffffff] p-2 md:p-4 rounded-md border-2 border-gray-400 hover:shadow-lg ease-out hover:scale-105 transition-all duration-500">
      {image && image !== "" && (
        <Image
          alt={title || "Imagem do projeto"}
          src={image}
          loading="lazy"
          width={600}
          height={300}
          className="rounded-md w-full h-52 md:h-80 md:max-h-80 object-contain"
        />
      )}
      <div className="flex flex-col justify-between mt-4">
        <h1 className="font-semibold md:text-xl">{title}</h1>
        <h2 className="font-normal text-gray-800 text-sm md:text-base">
          {description}
        </h2>
        <div className="flex justify-between mt-4">
          <div className="flex flex-wrap gap-2">
            {tecnologies.map((item, index) => {
              const tech = Tecnologies.find((tech) => tech.name === item);
              return tech ? (
                <div
                  key={index}
                  className="border border-gray-300 rounded-full p-1 flex items-center bg-white hover:z-10 transition-all"
                >
                  <Image
                    alt={tech.name}
                    src={tech.icon}
                    width={20}
                    height={20}
                  />
                </div>
              ) : null;
            })}
          </div>
          <Link
            href={link}
            className="hidden md:flex items-center gap-2 text-gray-800 hover:text-gray-900 transition-all"
          >
            Ver <FaArrowUpRightFromSquare size={15} className="text-gray-800" />
          </Link>
        </div>
      </div>
    </div>
  );
}
