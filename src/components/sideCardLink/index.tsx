import { motion } from "framer-motion";
import Link from "next/link";
import { SiGit, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";

export function CardLink() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div className="mt-0 md:mt-4 flex flex-col justify-center items-center">
      <motion.div className="flex text-center items-center gap-4">
        <motion.div
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
          className="md:h-[2px] md:w-28 h-[1px] w-10 bg-[#4a7265]"
        ></motion.div>
        <motion.div
          className="p-4 flex gap-4 "
          initial={"hidden"}
          animate={"visible"}
          variants={container}
        >
          <motion.div variants={item}>
            <Link  href="https://github.com/Rafaelpavanelli"><SiGit size={28} color="#4a7265" /></Link>
          </motion.div>
          <motion.div variants={item} >
           <Link href="https://www.linkedin.com/in/rafael-pavanelli-59807a1a4/"><SiLinkedin size={28} color="#4a7265" /></Link> 
          </motion.div>
          <motion.div variants={item} >
            <Link href="/Images/Curriculo.pdf"><FaFileDownload size={28} color="#4a7265" /></Link>
          </motion.div>
        </motion.div>
        <motion.div
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0, translateX: 20 }}
          animate={{ opacity: 1, translateX: 0 }}
          className="md:h-[2px] md:w-28 h-[1px] w-10 bg-[#4a7265]"
        ></motion.div>
      </motion.div>
      <motion.div
        transition={{ delay: 0.5 }}
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="md:h-20 md:w-[2px] w-[1px] h-10 bg-[#4a7265]"
      ></motion.div>
    </motion.div>
  );
}
