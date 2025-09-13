import type { Asteroid, BaseBody, DwarfPlanet, Galaxy, Planet, Star } from "../types/types";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useApp } from "@/context/BodiesContext";
import { ImMenu } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import Marquee from "./Marquee";

type NavBarProps = {
  bodies: Planet[] | DwarfPlanet[] | Star[] | Asteroid[] | Galaxy[]
  textColor: string;
  borderColor: string;
  hoverTextColor: string;
}

export default function NavBar({ bodies, textColor, borderColor, hoverTextColor }: NavBarProps)  {
      const { actualBody, setActualBody, allBodies } = useApp();
      const [menuIsOpen, setMenuIsOpen] = useState(false);
      const [bodyType, setBodyType] = useState<"Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies">(defineBodyType(bodies[0]?.type || "") as "Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies");
      const navigate = useNavigate();
      const handleMenu = () => setMenuIsOpen(!menuIsOpen);

      function normalizeName(name: string) {
      return name.toLowerCase().replace(/\s+/g, '-')
    }

    const hiddenMenu = menuIsOpen ? "" : "max-lg:hidden";


    const bodyTypes = ["Stars", "Planets", "Dwarf Planets", "Asteroids", "Galaxies"];

  
    function defineBodyType(type: string) {
      if (type === "Star") return "Stars";
      if (type === "Planet") return "Planets";
      if (type === "Dwarf Planet") return "Dwarf Planets";
      if (type === "Asteroid") return "Asteroids";
      if (type === "Galaxy") return "Galaxies";
      return "";
    }


    return (
      <div className="w-full flex flex-col items-center mb-4">
      <Marquee curiosities={actualBody?.curiosities} />
      
      <h1 className={`text-white font-skcuber text-5xl mt-8 max-lg:text-4xl max-md:text-xl max-lg:border-b-4 relative ${borderColor} max-lg:mt-12`}><Link to="/">The Solar System</Link></h1>
      <ImMenu className="open-menu-btn text-2xl text-white absolute top-12 right-3 lg:hidden" onClick={handleMenu} />

      <nav className="text-white flex flex-col items-center mt-3 gap-1.5">

        {/* <ul className={`flex flex-row gap-4 list-none items-center justify-center font-leaguespart text-lg max-lg:absolute max-lg:top-1/4 max-lg:w-3/4 max-lg:z-350 max-lg:text-xs ${hiddenMenu} animate-[entrance_0.2s_0.3s_backwards]`}>
            {bodyTypes.map((body) => {
              return (
                <li key={body.toLowerCase()}>
                  <button
                    onClick={() => {
                          setBodyType(body as "Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies");
                          const firstBodyOfType: BaseBody | undefined = allBodies.find(b => defineBodyType(b.type) === body);
                          console.log("firstBodyOfType", firstBodyOfType);
                          if (firstBodyOfType) {
                            setActualBody(firstBodyOfType);
                            navigate(`/body/${normalizeName(firstBodyOfType.name)}`);
                                  }
                                }}
                    className={`cursor-pointer font-oxanium ${hoverTextColor} ${`hover:${textColor} transition-colors duration-300`} ${body === bodyType ? ` ${textColor}` : "border-b-0"}`}
          
                  >
                    {body.toLocaleUpperCase()}
                  </button>
                </li>
              );
            })}
      
        </ul>  */}

        <select
  value={bodyType}
  onChange={(e) => {
    const selectedBodyType = e.target.value as "Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies";
    setBodyType(selectedBodyType);
    const firstBodyOfType: BaseBody | undefined = allBodies.find(
      (b) => defineBodyType(b.type) === selectedBodyType
    );
    console.log("firstBodyOfType", firstBodyOfType);
    if (firstBodyOfType) {
      setActualBody(firstBodyOfType);
      navigate(`/body/${normalizeName(firstBodyOfType.name)}`);
    }
  }}
  className={`cursor-pointer font-oxanium ${hoverTextColor} ${textColor} transition-colors duration-300 p-2 rounded-md `}
>
  {bodyTypes.map((body) => (
    <option key={body.toLowerCase()} value={body}>
      {body.toUpperCase()}
    </option>
  ))}
</select>


        <ul className={`flex flex-row gap-4 list-none items-center font-leaguespart animate-[entrance_0.2s_0.3s_backwards] text-lg max-lg:flex-col max-lg:absolute max-lg:top-2/6 max-lg:w-3/4 max-lg:h-3/4 max-lg:rounded-md max-lg:overflow-y-auto max-lg:p-4 max-lg:z-250 ${hiddenMenu}`}>
          {bodies.length > 0 &&
            bodies.map((body) => {
              return (
                <li key={body.id}>
                  <NavLink
                    onClick={handleMenu}
                    className={`font-oxanium ${hoverTextColor} hover:border-b-5 ${borderColor} transition-colors duration-300 ${body.name === actualBody?.name ? `border-b-4 ${borderColor} ${textColor}` : "border-b-0"}`}
                    to={`/body/${normalizeName(body.name)}`}
                  >
                    {body.name.toLocaleUpperCase()}
                  </NavLink>
                </li>
              );
            })}
        </ul>
          

          {menuIsOpen && <MobileNavBar menuIsOpen={menuIsOpen} handleMenu={handleMenu} />}
        </nav>
        </div>

        
    )
}

export function MobileNavBar({ menuIsOpen, handleMenu }: { menuIsOpen: boolean; handleMenu: () => void }) {
  
  return (
    <div className="absolute text-white top-0 left-0 w-full h-full flex justify-center items-center bg-white/0 rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[20px] z-150 lg:hidden">
        <div className={`weigh-container
   bg-gradient-to-t from-blue-400/40 to-blue-400/20 border border-blue-400 rounded-md animate-[entrance_0.2s_0.3s_backwards]
      
     w-3xl min-h-3/4
     flex flex-col justify-between gap-4 p-6 items-center text-center
     m-4 
     relative
  `}>
    {menuIsOpen && <AiFillCloseCircle className="absolute text-3xl top-4 right-4 z-200" onClick={handleMenu} />}

  {/* <h1 className={`text-white font-skcuber text-xl mt-8 max-lg:text-lg border-b-4 ${borderColor}`}><Link to="/">The Solar System 2.0</Link></h1> */}

  
  </div>
      
    </div>
  )
} 