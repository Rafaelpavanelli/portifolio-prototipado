

export function CardProjectSkelleton() {
  return (
    <div className="w-full md:w-[80%] bg-[#ffffff] p-2 md:p-4 rounded-md border-2 border-gray-400">
     
      <div className="rounded-md w-full h-46 md:h-72 md:max-h-80 bg-gray-200"></div>
      
      <div className="flex flex-col justify-between mt-4">
        <div className="font-semibold md:text-xl w-20 h-6 bg-gray-200 my-2"></div>
        <div className="font-normal text-gray-800 text-sm md:text-base w-full h-10 bg-gray-200"></div>
        
        <div className="flex justify-between mt-4">
          <div className="flex flex-wrap gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="border border-gray-300 rounded-full p-4 bg-gray-400 flex items-center hover:z-10 animate-pulse"
              >
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
