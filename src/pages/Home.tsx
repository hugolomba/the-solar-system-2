import Dock from "../components/Dock";
import Loading from "../components/Loading";
import type { SolarSystemData } from "../types/types";
import { useState } from "react";





export default function Home({ bodies, bodyType, setBodyType, activeOption, setActiveOption, options }: { bodies: SolarSystemData | null, bodyType: "Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies", setBodyType: React.Dispatch<React.SetStateAction<"Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies">>, activeOption: number | null, setActiveOption: React.Dispatch<React.SetStateAction<number | null>>, options: string[] }) {




  const handleClick = (i: number) => {
    setActiveOption(i)
    setBodyType(options[i])
   
  } 

  return (

    
  //  <div className="flex flex-col items-center justify-center align-middle gap-2">
  <div className="relative w-3xl mx-auto grid h-1/2">

    <div className="absolute top-0 left-[-50px] h-full w-[5px] bg-blue-400 animate-[entrance_0.4s_1.2s_backwards]">
        <span className="absolute left-[-150px] top-[-17px] block transform -rotate-90 origin-[100%_100%] text-white/30 uppercase font-medium">
          D7460N sci-fi ui #X
        </span>
      </div>

          {/* main card */}
      <div className="relative p-4 flex justify-center items-center w-full h-full bg-gradient-to-t from-blue-400/10 to-transparent border border-blue-400 rounded-md animate-[entrance_0.4s_0.8s_backwards]">
        <div className="animate-[entrance_0.2s_0.2s_backwards]" key={bodyType}>
          <Dock bodies={bodies} bodyType={bodyType}/>
        </div>

      </div>

      {/* options */}
      <div className="absolute top-0 right-[-220px] w-[200px] flex flex-col animate-[entrance_0.4s_1.4s_backwards]">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`h-10 px-2 mr-2 mb-4 border-2 border-black outline-1 outline-blue-400 bg-transparent text-white text-sm font-oxanium tracking-wide cursor-pointer transition-all duration-300
              ${
                activeOption === i
                  ? "bg-blue-400 text-black border-blue-400"
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
    
  )
}
