
import Loading from "@/components/Loading";
import Dock from "../components/Dock";
import type { SolarSystemData } from "../types/types";
import { BsInfoCircleFill } from "react-icons/bs";


import { Link } from "react-router-dom";


 type HomeProps = {
  bodies: SolarSystemData | null;
  bodyType: "Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies";
  setBodyType: React.Dispatch<React.SetStateAction<"Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies">>;
  activeOption: number | null;
  setActiveOption: React.Dispatch<React.SetStateAction<number | null>>;
  options: Array<"Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies">;
  error: string | null;
  isLoading: boolean;
};

export default function Home({ bodies, bodyType, setBodyType, activeOption, setActiveOption, options, error, isLoading }: HomeProps) {


  const handleClick = (i: number) => {
    setActiveOption(i)
    setBodyType(options[i])
   
  } 


  return (

    <>
  <h1 className="text-white font-skcuber text-5xl mt-8 animate-[entrance_0.4s_1.2s_backwards] max-lg:text-4xl max-md:text-2xl"><Link to="/">The Solar System 2.0</Link></h1>
  <div className="">
  <p className="text-white font-oxanium text-xl  mx-auto animate-[entrance_0.4s_1.2s_backwards] px-2 max-lg:text-3xl max-md:text-xl w-full">Explore the wonders of our universe with The Solar System 2.0
  <br />Dive into detailed information about stars, planets, dwarf planets, asteroids, and galaxies.
  <br />Click on any celestial body to learn more about its unique characteristics and fascinating facts.</p>
</div>


   {/* main container */}

 
  <div className="relative flex w-3xl min-h-80 items-center gap-4 h-70 max-lg:w-full max-lg:h-auto max-lg:gap-6 max-lg:flex-col-reverse mx-auto mt-8 mb-16 px-4 ">

    <div className="absolute top-0 left-[-50px] h-full w-[5px] bg-blue-400 animate-[entrance_0.4s_1.2s_backwards] shadow-[0px_0px_8px_1px_#0037ff]" >
        <span className="absolute left-[-150px] top-[-17px] block transform -rotate-90 origin-[100%_100%] text-white/30 uppercase font-medium">
          
        </span>
      </div>

 <Link to={"/about"}><BsInfoCircleFill className="text-white text-2xl mt-4 animate-[entrance_0.4s_1.2s_backwards]" /></Link>
          {/* main card */}
      <div className="p-4 flex justify-center items-center flex-8 w-full h-full bg-gradient-to-t from-blue-400/10 to-transparent border border-blue-400 rounded-md animate-[entrance_0.4s_0.8s_backwards] shadow-[0px_0px_8px_1px_#0037ff]">
        <div className="animate-[entrance_0.2s_0.2s_backwards]" key={bodyType}>
          {isLoading ? <Loading /> : !error ? <Dock bodies={bodies} bodyType={bodyType}/> : <Error error={error} />}
        </div>

      </div>

      

      {/* options */}
      <div className="relative flex flex-col flex-2 animate-[entrance_0.4s_1.4s_backwards] max-lg:flex-row">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`w-full h-10 px-2 mr-2 mb-4 border-2 border-black outline-1 outline-blue-400  text-white text-sm font-oxanium tracking-wide cursor-pointer transition-all duration-300 shadow-[0px_0px_8px_1px_#0037ff]
              ${
                activeOption === i
                  ? "bg-blue-400/50 text-blue-400 "
                  : "hover:bg-blue-400/50 focus:bg-blue-400/50"
              }`}
          >
            {opt}
          </button>

        ))}
        </div>

        


          <style>
        {`
          @keyframes entrance {
            0%, 10%, 30%, 50%, 70%, 90% { opacity: 0; }
            20%, 40%, 60%, 80%, 100% { opacity: 1; }
          }
        `}
      </style>

   </div>
   </>
    
  )
}

export function Error({ error }: { error: any }) {
  return (
    <div className="text-red-500/70 font-skcuber text-center animate-pulse">
      <p>{error.message}</p>
      <p>{error.code}</p>
    </div>
  );
}
