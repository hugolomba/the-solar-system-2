import { useParams } from "react-router-dom";
import type { Star, Asteroid, DwarfPlanet, Galaxy, Planet, SolarSystemData } from "../types/types";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Link } from "react-router-dom";

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
    const textColor = colorsMap[body.name];

    return (
      <div className="flex flex-row justify-between items-center">
         <div className="seta-left">
                <Link className={`body${""}`} to={`/body/${""}`}>
                  <MdNavigateBefore className={`${textColor} text-6xl`} />
                </Link>
          </div>
        <div className="flex flex-row w-5xl m-auto mt-6 ">
            <img src={body?.images.png} alt={body?.name} className="w-1/3"/>
            <div className="info-container">
              <div className="title">
                <h2 className="">{body?.name}</h2>
                <span className="">{body?.features.satellites.number}</span>
              </div>
            </div>
        </div>

        <div className="seta-right">
                <Link className={`planet${""}`} to={`/planeta/${""}`}>
                    <MdNavigateNext className={`${textColor} text-6xl`} />
                </Link>
          </div>
      </div>
    )

}
