import {motion} from 'framer-motion'
export function Languages() {
  return (
    <motion.div
      className=""
      initial={{opacity: 0,y:-100}} whileInView={{opacity: 1,y:0}}
    >
      <h2 className="text-gray-100 [text-shadow:_0_4px_4px_rgb(0_0_0_/_15%)] text-lg font-regular text-center  md:text-2xl xl:text-3xl">
        IDIOMAS
      </h2>
      <div className="mt-10 font-regular text-md ">
        <div className="border-l-2 border-[#718878] pl-2 md:text-xl  xl:text-2xl">
          <p className='text-gray-100'>Português: Lingua nativa</p>
        </div>
        <div className="border-l-2 mt-2 border-[#718878] pl-2 py-1 md:text-xl xl:text-2xl xl:justify-center xl:mt-8">
          <span className="flex justify-between mb-2 xl:w-[6vw]">
            <p className='text-gray-100'>Inglês: </p> <p className='text-gray-100'>B1</p>
          </span>
          <span className="flex gap-2 xl:mt-4 xl:w-[40vw]">
            <motion.div className="w-12 h-6 xl:w-24 xl:h-10 " initial={{backgroundColor: '#718878'}} whileInView={{backgroundColor: '#244235'}} transition={{delay:0.3}}></motion.div>
            <motion.div className="w-12 h-6  xl:w-24 xl:h-10" initial={{backgroundColor: '#718878'}} whileInView={{backgroundColor: '#244235'}} transition={{delay:0.4}}></motion.div>
            <motion.div className="w-12 h-6  xl:w-24 xl:h-10" initial={{backgroundColor: '#718878'}} whileInView={{backgroundColor: '#244235'}} transition={{delay:0.5}}></motion.div>
            <motion.div className="w-12 h-6 bg-[#718878] xl:w-24 xl:h-10"></motion.div>
            <motion.div className="w-12 h-6 bg-[#718878] xl:w-24 xl:h-10"></motion.div>
            <motion.div className="w-12 h-6 bg-[#718878] xl:w-24 xl:h-10"></motion.div>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
