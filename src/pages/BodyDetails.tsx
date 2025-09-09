import { useParams, Link } from "react-router-dom";
import type { Star, Asteroid, DwarfPlanet, Galaxy, Planet, SolarSystemData } from "../types/types";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import PlanetAdditionalInfo from "../components/PlanetAdditionalInfo";
import { useApp } from "@/context/BodiesContext";
import { useEffect } from "react";
import NavBar from "../components/Navbar";

export default function BodyDetails({ bodies }: { bodies: SolarSystemData | null }) {
  const { allBodies, colorsMapText, colorsMapBorder, colorsMapTextHover, actualBody, setActualBody } = useApp();
  const { bodyName } = useParams<{ bodyName: string }>();

  function normalizeName(name: string) {
    return name.toLowerCase().replace(/\s+/g, '-');
  }

  // Atualiza o actualBody sempre que bodyName ou allBodies mudarem
  useEffect(() => {
    if (bodyName && allBodies) {
      const body = allBodies.find(b => normalizeName(b.name) === normalizeName(bodyName));
      setActualBody(body ?? null);
    }
  }, [bodyName, allBodies, setActualBody]);



  const textColor = colorsMapText[actualBody?.name];
  const borderColor = colorsMapBorder[actualBody?.name];
  const hoverTextColor = colorsMapTextHover[actualBody?.name];

  // Encontrar índices para navegação
  const currentIndex = allBodies.findIndex(b => b.name === actualBody?.name);
  const prevBody = allBodies[currentIndex - 1] ?? allBodies[allBodies.length - 1];
  const nextBody = allBodies[currentIndex + 1] ?? allBodies[0];

  if (!actualBody) {
    return <div className="text-white text-center mt-10">Body not found</div>;
  }
  return (
    <>
    {bodies && <NavBar bodies={bodies.planets} textColor={textColor} borderColor={borderColor} hoverTextColor={hoverTextColor} />}

    <div className="flex flex-row justify-between items-center">
      <div className="seta-left">
        <Link className={`actualBody`} to={`/body/${normalizeName(prevBody?.name)}`}>
          <MdNavigateBefore className={`text-${textColor} text-6xl`} />
        </Link>
      </div>

      <div className="details-container flex flex-row items-center gap-6 w-full">
        <img src={actualBody.images.png} alt={actualBody?.name} className="w-1/3"/>
        <div className="info-container flex flex-col gap-4 p-4">
          <div className="title flex flex-row justify-between w-full">
            <h2 className={`${textColor} font-opensans font-bold text-4xl`}>{actualBody?.name}</h2>
            <h3 className="text-white">
              <span className={`${textColor} font-opensans font-bold`}>
                SATELLITE{actualBody?.features.satellites.number > 1 ? "S" : ""}: 
              </span> {actualBody?.features.satellites.number}
            </h3>
          </div>

          <p className="text-white text-justify">{actualBody?.resume}</p>

          <div className="additional-info-container">
            {actualBody?.type === "Planet" && <PlanetAdditionalInfo actualBody={actualBody as Planet} textColor={textColor} />}
          </div>
        </div>
      </div>

      <div className="seta-right">
        <Link className={`planet`} to={`/body/${normalizeName(nextBody?.name)}`}>
          <MdNavigateNext className={`text-${textColor} text-6xl`} />
        </Link>
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
  );
}
