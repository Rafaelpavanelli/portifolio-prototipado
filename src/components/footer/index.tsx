import Link from "next/link";
import { SiGit, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FaFileDownload,FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <div className="h-20 md:h-16 flex justify-between items-center bg-[#95a69a] mt-10 px-16">
      <div className="flex gap-4 ">
        <Link
          href={"https://www.linkedin.com/in/rafael-pavanelli-59807a1a4/"}
          target="blank"
          className=" py-2 "
        >
          <SiLinkedin  color="#244235" className="text-2xl xl:text-2xl" />
        </Link>
        <Link
          className=" py-2 "
          href={"/Images/Currículo.pdf"}
          type="file"
          target="blank"
        >
          <FaFileDownload  color="#244235" className="text-2xl xl:text-2xl"  />
        </Link>
        <Link
          className=" py-2 "
          href={"https://wa.me/5514997100117"}
          target="blank"
        >
          <SiWhatsapp  color="#244235"  className="text-2xl xl:text-2xl" />
        </Link>
        <Link
          className=" py-2 "
          href={
            "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rafaelpavanellitbl@gmail.com"
          }
          target="blank"
        >
          <SiGmail color="#244235" className="text-2xl xl:text-2xl" />
        </Link>
        <Link
          className=" py-2"
          href={"https://github.com/Rafaelpavanelli"}
          target="blank"
        >
          <SiGit color="#244235" className="text-2xl xl:text-2xl" />
        </Link>
      </div>
      <p className="text-sm ml-10"> Rafael Pavanelli</p>
    </div>
  );
}
