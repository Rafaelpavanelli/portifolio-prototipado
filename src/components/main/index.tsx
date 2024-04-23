import { motion } from "framer-motion";

export function Main() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
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
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="bg-[#95a69a] w-full h-screen px-12 flex flex-col justify-center gap-40 relative"
    >
      <motion.h1
        variants={item}
        className="text-4xl font-normal tracking-wide text-center text-[#111A17]  [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] md:text-5xl xl:text-6xl "
      >
        Olá, Meu nome é Rafael Pavanelli
      </motion.h1>
      <motion.p
        variants={item}
        className=" text-xl text-[#111A17] md:text-2xl xl:text-3xl text-center xl:px-28"
      >
        Sou um desenvolvedor de front-end na M2 software, uma empresa de
        tecnologia que cria soluções digitais para diversos segmentos. Trabalho
        com React, Next.js, Tailwind CSS e outras ferramentas para desenvolver
        websites e aplicativos que sejam funcionais, atrativos e acessíveis.
      </motion.p>
      <motion.div
       
        className="w-6 min-h-10 rounded-md border-2 border-gray-600 flex justify-center p-1 mx-auto absolute bottom-4 left-0 right-0 xl:rounded-2xl"
      >
        <motion.div className="w-2 h-2 bg-gray-800 rounded-full " animate={{translateY: 20,opacity:0}} transition={{ease:'easeInOut',duration: 1, damping: 10, stiffness: 100, repeat:Infinity }}></motion.div>
      </motion.div>
    </motion.div>
  );
}
