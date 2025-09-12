import type { Asteroid, BaseBody, DwarfPlanet, Galaxy, Planet, Star } from "../types/types";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useApp } from "@/context/BodiesContext";
import { ImMenu } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";

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

      console.log("bodies in navbar", bodies)
      console.log("Bodytype in navbar", bodyType)

      function normalizeName(name: string) {
      return name.toLowerCase().replace(/\s+/g, '-')
    }

    const hiddenMenu = menuIsOpen ? "" : "hidden";

    const bodyTypes = ["Stars", "Planets", "Dwarf Planets", "Asteroids", "Galaxies"];

    function handleBodyTypeChange(type: string) {
      setBodyType(type as "Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies");
    }
  
    function defineBodyType(type: string) {
      if (type === "Star") return "Stars";
      if (type === "Planet") return "Planets";
      if (type === "Dwarf Planet") return "Dwarf Planets";
      if (type === "Asteroid") return "Asteroids";
      if (type === "Galaxy") return "Galaxies";
      return "";
    }


    return (
      <div className="w-full flex flex-col items-center mb-4 ">
      
      <h1 className={`text-white font-skcuber text-5xl mt-8 max-md:text-lg border-b-4 relative ${borderColor}`}><Link to="/">The Solar System 2.0</Link></h1>
      <ImMenu className="open-menu-btn text-2xl text-white  top-0 right-0" onClick={handleMenu} />

      <nav className="text-white flex flex-col items-center mt-3 gap-1.5">

        <ul className={`flex flex-row gap-4 list-none items-center justify-center font-leaguespart text-lg max-md:absolute max-md:top-1/4 max-md:w-3/4 z-350 max-md:text-xs ${hiddenMenu} animate-[entrance_0.2s_0.3s_backwards]`}>
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
      
        </ul> 


        <ul className={`flex flex-row gap-4 list-none items-center font-leaguespart animate-[entrance_0.2s_0.3s_backwards] text-lg max-md:flex-col max-md:absolute max-md:top-2/6 max-md:w-3/4 max-md:h-3/4 max-md:rounded-md max-md:overflow-y-auto max-md:p-4 max-md:z-250 ${hiddenMenu}`}>
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
          

          {menuIsOpen && <MobileNavBar bodies={bodies} textColor={textColor} borderColor={borderColor} hoverTextColor={hoverTextColor} menuIsOpen={menuIsOpen} handleMenu={handleMenu}  />}
        </nav>
        </div>

        
    )
}

export function MobileNavBar({ bodies, textColor, borderColor, hoverTextColor, menuIsOpen, handleMenu }: NavBarProps)  {
  
  return (
    <div className="absolute text-white top-0 left-0 w-full h-full flex justify-center items-center bg-black/90 z-150 lg:hidden">
        <div className={`weigh-container
   bg-gradient-to-t from-blue-400/40 to-blue-400/20 border border-blue-400 rounded-md animate-[entrance_0.2s_0.3s_backwards]
      
     w-3xl min-h-3/4
     flex flex-col justify-between gap-4 p-6 items-center text-center
     m-4 
     relative
  `}>
    {menuIsOpen && <AiFillCloseCircle className="absolute text-3xl top-4 right-4 z-200" onClick={handleMenu} />}

  <h1 className={`text-white font-skcuber text-xl mt-8 max-md:text-lg border-b-4 ${borderColor}`}><Link to="/">The Solar System 2.0</Link></h1>

  
  </div>
      
    </div>
  )
} 