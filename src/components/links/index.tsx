import Link from "next/link";
import { SiGit, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export function Links() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      
    >
      <h2 className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_15%)] text-lg font-regular text-center mt-10 md:text-2xl">
        Links
      </h2>
      <div className="flex justify-evenly items-center mt-8 w-full gap-6 mb-4 md:text-2xl ">
        <Link
          href={"https://www.linkedin.com/in/rafael-pavanelli-59807a1a4/"}
          target="blank"
        >
          <SiLinkedin size={50} color="#244235" className="" />
        </Link>
        <Link href={"/Images/Currículo.pdf"} type="file" target="blank">
          <FaFileDownload size={50} color="#244235" />
        </Link>
        <Link href={"https://wa.me/5514997100117"} target="blank">
          <SiWhatsapp size={50} color="#244235" />
        </Link>
        <Link
          href={
            "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rafaelpavanellitbl@gmail.com"
          }
          target="blank"
        >
          <SiGmail size={50} color="#244235" />
        </Link>
        <Link href={"https://github.com/Rafaelpavanelli"} target="blank">
          <SiGit size={50} color="#244235" />
        </Link>
      </div>
    </motion.div>
  );
}
