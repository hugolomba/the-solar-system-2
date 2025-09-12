
import Dock from "../components/Dock";
import type { SolarSystemData } from "../types/types";

import { Link } from "react-router-dom";


 type HomeProps = {
  bodies: SolarSystemData | null;
  bodyType: "Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies";
  setBodyType: React.Dispatch<string>;
  activeOption: number | null;
  setActiveOption: React.Dispatch<React.SetStateAction<number | null>>;
  options: string[];
  error: string | null;
};

export default function Home({ bodies, bodyType, setBodyType, activeOption, setActiveOption, options, error }: HomeProps) {  



  const handleClick = (i: number) => {
    setActiveOption(i)
    setBodyType(options[i])
   
  } 
  console.log("bodies", bodies);

  return (

    <>
  <h1 className="text-white font-skcuber text-5xl mt-8 animate-[entrance_0.4s_1.2s_backwards]"><Link to="/">The Solar System 2.0</Link></h1>

 
  <div className="relative flex w-3xl items-center gap-4 h-1/2">

    <div className="absolute top-0 left-[-50px] h-full w-[5px] bg-blue-400 animate-[entrance_0.4s_1.2s_backwards]">
        <span className="absolute left-[-150px] top-[-17px] block transform -rotate-90 origin-[100%_100%] text-white/30 uppercase font-medium">
          D7460N sci-fi ui #X
        </span>
      </div>

          {/* main card */}
      <div className="p-4 flex justify-center items-center flex-8 w-full h-full bg-gradient-to-t from-blue-400/10 to-transparent border border-blue-400 rounded-md animate-[entrance_0.4s_0.8s_backwards]">
        <div className="animate-[entrance_0.2s_0.2s_backwards]" key={bodyType}>
          {!error ? <Dock bodies={bodies} bodyType={bodyType}/> : <Error error={error} />}
        </div>

      </div>

      {/* options */}
      <div className="relative flex flex-col flex-2 animate-[entrance_0.4s_1.4s_backwards]">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`w-full h-10 px-2 mr-2 mb-4 border-2 border-black outline-1 outline-blue-400  text-white text-sm font-oxanium tracking-wide cursor-pointer transition-all duration-300
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

    {/* <p className="text-white font-leaguespart text-2xl p-6">
      Welcome to The Solar System, where you can find information and curiosities about our solar system.
    </p>

    <Dock bodies={bodies}/> */}

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
