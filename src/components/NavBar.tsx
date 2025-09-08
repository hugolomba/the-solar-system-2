import type { Planet } from "../types/types";
import { NavLink, Link } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { ImMenu } from "react-icons/im";
import { useState } from "react";

type NavBarProps = {
  planets: Planet[];
}

export default function NavBar({ planets }: NavBarProps)  {

      const [menuIsOpen, setMenuIsOpen] = useState(false);
      const handleMenu = () => setMenuIsOpen(!menuIsOpen);

    return (
      <div className="w-full flex flex-col items-center">
      <h1 className="text-white font-skcuber text-5xl mt-8">The Solar System 2.0</h1>
      <nav className="text-white flex flex-col justify-between  ">
        <ul className="flex flex-row gap-4 list-none items-center font-leaguespart text-lg mt-4">
          {planets.length > 0 &&
            planets.map((planet) => {
              return (
                <li key={planet.id}>
                  <NavLink
                    onClick={handleMenu}
                    className=""
                    to={`/planets/${planet.name}`}
                  >
                    {/* {planet.name === "pluto"
                      ? ` ${planet.name}?`
                      : planet.name.toUpperCase()} */}
                    {planet.name.toLocaleUpperCase()}
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