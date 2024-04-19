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
      className="bg-gradient-to-r from-[#727E6E] from-60% to-[#576153] to-80% w-full h-screen px-12 flex flex-col justify-center gap-4"
    >
      <motion.h1 variants={item} className="text-4xl font-normal tracking-wide text-start text-[#111A17] w-20 [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] md:text-5xl xl:text-6xl xl:w-60">
        Rafael Pavanelli
      </motion.h1>
      <motion.p variants={item} className=" text-md text-[#111A17] md:text-2xl xl:text-3xl">
        Sou um desenvolvedor de front-end na M2 software, uma empresa de
        tecnologia que cria soluções digitais para diversos segmentos. Trabalho
        com React, Next.js, Tailwind CSS e outras ferramentas para desenvolver
        websites e aplicativos que sejam funcionais, atrativos e acessíveis.
      </motion.p>
      <motion.p variants={item} className=" text-md text-[#111A17] md:text-2xl xl:text-3xl">
        Possuo cursos e certificações em web design, HTML5, CSS3, JavaScript e
        Photoshop, que me ajudam a aprimorar minhas habilidades e meu portfólio.
        Sou apaixonado por design web e sempre busco aprender novas tecnologias
        e tendências. Meu objetivo é criar interfaces que ofereçam uma ótima
        experiência para os usuários e que atendam às necessidades dos clientes.
      </motion.p>
    </motion.div>
  );
}
