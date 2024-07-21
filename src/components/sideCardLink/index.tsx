import { motion } from "framer-motion";
import Link from "next/link";
import { SiGit, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";

export function SideCardLink() {
  return (
    <motion.div className="hidden absolute -left-20 z-10 top-60 xl:block"  animate={{left:0}}>
      <div className="bg-white  flex flex-col justify-center items-center gap-4 rounded-tr-xl rounded-br-xl">
        <Link
          href={"https://www.linkedin.com/in/rafael-pavanelli-59807a1a4/"}
          target="blank"
          className="px-4 py-2 hover:bg-[#4a7265] hover:rounded-tr-xl transition-all ease-out	"
        >
          <SiLinkedin size={28} color="#244235" className="" />
        </Link>
        <Link
          className="px-4 py-2 hover:bg-[#4a7265] transition-all ease-out"
          href={"/Images/Currículo.pdf"}
          type="file"
          target="blank"
        >
          <FaFileDownload size={28} color="#244235" />
        </Link>
        <Link
          className="px-4 py-2 hover:bg-[#4a7265] transition-all ease-out"
          href={"https://wa.me/5514982070391"}
          target="blank"
        >
          <SiWhatsapp size={28} color="#244235" />
        </Link>
        <Link
          className="px-4 py-2 hover:bg-[#4a7265] transition-all ease-out"
          href={
            "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rafaelpavanellitbl@gmail.com"
          }
          target="blank"
        >
          <SiGmail size={28} color="#244235" />
        </Link>
        <Link
          className="px-4 py-2 hover:bg-[#4a7265] hover:rounded-br-xl transition-all ease-out"
          href={"https://github.com/Rafaelpavanelli"}
          target="blank"
        >
          <SiGit size={28} color="#244235" />
        </Link>
      </div>
    </motion.div>
  );
}
