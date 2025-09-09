import { useParams } from "react-router-dom";
import type { Star, Asteroid, DwarfPlanet, Galaxy, Planet, SolarSystemData } from "../types/types";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Link } from "react-router-dom";
import PlanetAdditionalInfo from "../components/PlanetAdditionalInfo";

export default function BodyDetails( { bodies }: { bodies: SolarSystemData | null }) {
    const { bodyName } = useParams<{ bodyName: string }>();
    function normalizeName(name: string) {
      return name.toLowerCase().replace(/\s+/g, '-')
    }

  if (!bodies) {
    return 
  }

    //colors map for tailwind
const colorsMap: Record<string, string> = {
  Sun: "text-sun",
  Mercury: "text-mercury",
  Venus: "text-venus",
  Earth: "text-earth",
  Mars: "text-mars",
  Jupiter: "text-jupiter",
  Saturn: "text-saturn",
  Uranus: "text-uranus",
  Neptune: "text-neptune",
  Pluto: "text-pluto",
  Haumea: "text-haumea",
  Makemake: "text-makemake",
  Eris: "text-eris",
  Ceres: "text-ceres",
  Vesta: "text-vesta",
  Eros: "text-eros",
  Milkyway: "text-milkyway",
  Andromeda: "text-andromeda",
};

    const allBodies = [
  ...(bodies?.planets || []),
  ...(bodies?.stars || []),
  ...(bodies?.dwarfPlanets || []),
  ...(bodies?.asteroids || []),
  ...(bodies?.galaxies || []),
];

    const body: Star | Planet | DwarfPlanet | Asteroid | Galaxy | undefined = allBodies.find((body) => bodyName && normalizeName(body.name) === normalizeName(bodyName));
    
  if (!body) {
  return <p>Body not found</p>; 
}
    
    const textColor = colorsMap[body.name];

    console.log("BodyDetails body:", body.type);

    return (
      
      <div className="flex flex-row justify-between items-center">
         <div className="seta-left">
                <Link className={`body${""}`} to={`/body/${""}`}>
                  <MdNavigateBefore className={`${textColor} text-6xl`} />
                </Link>
          </div>
        <div className="details-container flex flex-row items-center gap-6 w-full">
            <img src={body.images.png} alt={body?.name} className="w-1/3"/>
          
            <div className="info-container flex flex-col gap-4 p-4">
              <div className="title  flex flex-row justify-between w-full">
                <h2 className={`${textColor} font-opensans font-bold text-4xl`}>{body.name}</h2>
                <h3 className="text-white"> <span className={`${textColor} font-opensans font-bold`}>SATELLITE{body.features.satellites.number > 1  ? "S" : ""}: </span> {body?.features.satellites.number}</h3>
              </div>

              
              <p className="text-white text-justify">{body?.resume}</p>

              <div className="additional-info-container">
                    {body.type === "Planet" && <PlanetAdditionalInfo body={body as Planet} textColor={textColor} />}
              </div>
            </div>
        </div>

        <div className="seta-right">
                <Link className={`planet${""}`} to={`/planeta/${""}`}>
                    <MdNavigateNext className={`${textColor} text-6xl`} />
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
    )

}
