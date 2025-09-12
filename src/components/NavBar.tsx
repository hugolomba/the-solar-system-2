import type { Asteroid, BaseBody, DwarfPlanet, Galaxy, Planet, Star } from "../types/types";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useApp } from "@/context/BodiesContext";


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
      <div className="w-full flex flex-col items-center mb-4">
      <h1 className="text-white font-skcuber text-5xl mt-8 "><Link to="/">The Solar System 2.0</Link></h1>

      <nav className="text-white flex flex-col items-center mt-3 gap-1.5">
        <ul className="flex flex-row gap-4 list-none items-center justify-center font-leaguespart text-lg">
          {bodies.length > 0 &&
            bodyTypes.map((body) => {
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


        <ul className="flex flex-row gap-4 list-none items-center font-leaguespart text-lg">
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
              {/* <div>
                {menuIsOpen ? (
                  <AiFillCloseCircle className="close-menu-btn" onClick={handleMenu} />
                ) : (
                  <ImMenu className="open-menu-btn" onClick={handleMenu} />
                )}
              </div> */}
        </nav>
        </div>
        
    )
}