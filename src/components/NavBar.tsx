import type { Asteroid, DwarfPlanet, Galaxy, Planet, Star } from "../types/types";
import { NavLink, Link } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { ImMenu } from "react-icons/im";
import { useState } from "react";
import { useApp } from "@/context/BodiesContext";
import { b } from "framer-motion/client";

type NavBarProps = {
  bodies: Planet[] | DwarfPlanet[] | Star[] | Asteroid[] | Galaxy[]
  textColor: string;
  borderColor: string;
  hoverTextColor: string;

}

export default function NavBar({ bodies, textColor, borderColor, hoverTextColor }: NavBarProps)  {
      const { colorsMapText, colorsMapBorder, actualBody } = useApp();
      const [menuIsOpen, setMenuIsOpen] = useState(false);
      const handleMenu = () => setMenuIsOpen(!menuIsOpen);

      function normalizeName(name: string) {
      return name.toLowerCase().replace(/\s+/g, '-')
    }
  

    // const activeBody = 

    return (
      <div className="w-full flex flex-col items-center">
      <h1 className="text-white font-skcuber text-5xl mt-8 "><Link to="/">The Solar System 2.0</Link></h1>
      <nav className="text-white flex flex-col justify-between  ">
        {/* <span className="font-bold">STARS | PLANETS | DWARF PLANETS | ASTEROIDS | GALAXIES</span> */}
        <ul className="flex flex-row gap-4 list-none items-center font-leaguespart text-lg mt-4">
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
          <Link to="/about">
            <BsInfoCircleFill />
          </Link>
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