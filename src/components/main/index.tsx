import { motion } from "framer-motion";
import Image from "next/image";
import { CardLink } from "../sideCardLink";
import { useEffect } from "react";
import { useAnalytics } from "@/controller/hooks/useAnalytics";

export function Main() {
  const { VisualizedSite } = useAnalytics();
  useEffect(() => {
      VisualizedSite();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const container = {};

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="max-w-screen max-h-screen h-screen w-screen relative">
      <Image
        src="/Images/background.jpeg"
        quality={100}
        width={1000}
        height={600}
        alt="background"
        priority
        style={{ filter: "blur(2px) brightness(0.7)" }}
        className="absolute w-screen h-screen z-1 object-cover"
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="absolute  w-full  md:h-screen  flex flex-col justify-between md:justify-center items-center z-10 gap-32  md:gap-0 "
      >
        <motion.div
          variants={item}
          className="flex flex-col pt-40 justify-center items-center h-96 md:h-auto md:justify-start "
        >
          <motion.p className="text-xl md:2xl text-center font-light text-gray-50 ">
            Olá
          </motion.p>
          <motion.h1 className="text-2xl text-center  md:text-md font-normal tracking-wide  text-gray-50  [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] md:text-5xl xl:text-6xl ">
            Meu nome é Rafael
          </motion.h1>
          <motion.p className="text-md mt-2 md:mt-4 md:text-2xl text-center font-extralight text-gray-50 ">
            Sou desenvolvedor Web / Mobile
          </motion.p>
        </motion.div>
        <CardLink />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-6 min-h-10 rounded-md border-2 border-gray-600 flex justify-center p-1 mx-auto absolute -bottom-20 md:bottom-4 left-0 right-0 xl:rounded-2xl"
        >
          <motion.div
            className="w-2 h-2 bg-gray-800 rounded-full "
            animate={{ translateY: 20, opacity: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              damping: 10,
              stiffness: 100,
              repeat: Infinity,
            }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
