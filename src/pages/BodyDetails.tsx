import { useParams, Link } from "react-router-dom";
import type { Planet, SolarSystemData, BaseBody } from "../types/types"; 
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useApp } from "@/context/BodiesContext";
import { useEffect } from "react";
import NavBar from "../components/NavBar"
import Buttons from "@/components/Buttons";
import AdditionalInfo from "../components/AdditionalInfo";
import Marquee from "@/components/Marquee";

export default function BodyDetails({ bodies }: { bodies: SolarSystemData | null }) {
  const { allBodies, colorsMapText, colorsMapBorder, colorsMapTextHover, actualBody, setActualBody, colorsMap } = useApp();
  const { bodyName } = useParams<{ bodyName?: string }>(); 

  function normalizeName(name: string) {
    return name?.toLowerCase().replace(/\s+/g, '-');
  }


  useEffect(() => {
    if (bodyName && allBodies) {
      const body: BaseBody | undefined = allBodies.find(b => normalizeName(b.name) === normalizeName(bodyName));
      setActualBody(body ?? null);
    }
  }, [bodyName, allBodies, setActualBody]);

  


  const color = actualBody ? colorsMap[actualBody.name] : "";
  const textColor = actualBody ? colorsMapText[actualBody.name] : "";
  const borderColor = actualBody ? colorsMapBorder[actualBody.name] : "";
  const hoverTextColor = actualBody ? colorsMapTextHover[actualBody.name] : "";

  const border = `bg-gradient-to-t from-blue-400/10 to-transparent border ${borderColor} rounded-md animate-[entrance_0.4s_0.8s_backwards]`;

  const currentIndex = allBodies?.findIndex(b => b.name === actualBody?.name) ?? -1;
  const prevBody = currentIndex > -1 && allBodies ? allBodies[currentIndex - 1] ?? allBodies[allBodies.length - 1] : undefined;
  const nextBody = currentIndex > -1 && allBodies ? allBodies[currentIndex + 1] ?? allBodies[0] : undefined;

  if (!actualBody) {
    return <div className="text-white text-center mt-10">Body not found</div>;
  }

 

  return (
  

      
      <div className={`flex flex-row justify-between items-center w-full max-w-screen`}>
        {/* <Marquee curiosities={actualBody?.curiosities} /> */}
        <div className="seta-left">
          <Link className={`actualBody`} to={`/body/${normalizeName(prevBody?.name ?? "")}`}>
            <MdNavigateBefore className={`${textColor} text-6xl animate-[entrance_0.4s_0.8s_backwards] max-md:hidden`} />
          </Link>
        </div>

        <div className="details-container flex flex-col items-center gap-2  ">


          {/* first line */}
          <div className={`title flex flex-row items-center justify-center w-full px-4 py-2 ${border} max-md:border-none`}>
              


               {bodies && actualBody.type === "Star" && <NavBar bodies={bodies.stars} textColor={textColor} borderColor={borderColor} hoverTextColor={hoverTextColor} />}
               {bodies && actualBody.type === "Planet" && <NavBar bodies={bodies.planets} textColor={textColor} borderColor={borderColor} hoverTextColor={hoverTextColor} />}
               {bodies && actualBody.type === "Dwarf Planet" && <NavBar bodies={bodies.dwarfPlanets} textColor={textColor} borderColor={borderColor} hoverTextColor={hoverTextColor} />}
               {bodies && (actualBody.type === "Asteroid" || actualBody.type === "Asteroid/Dwarf Planet") && <NavBar bodies={bodies.asteroids} textColor={textColor} borderColor={borderColor} hoverTextColor={hoverTextColor} />}
               {bodies && actualBody.type === "Galaxy" && <NavBar bodies={bodies.galaxies} textColor={textColor} borderColor={borderColor} hoverTextColor={hoverTextColor} />}
         
          </div>

            {/* SECOND LINE */}
          <div className={`flex flex-row gap-2 w-full max-md:flex-col`}>
            <div className={`image-wrapper p-4 ${border} flex-2 m-auto flex justify-center items-center max-md:border-none`}>
              <img src={actualBody.images.png} alt={actualBody?.name} className=" animate-[entrance_0.2s_0.1s_backwards] max-md:w-3/4" key={actualBody?.id}/>
            </div>
            <div className={`description flex flex-col justify-around  ${border} p-4 flex-3 max-md:border-none`}>
              <div className="flex flex-row items-center justify-between">
                <h2 className={`text-white font-opensans font-bold text-4xl mb-2`}>{actualBody?.name}</h2>
                <div className="flex flex-row gap-2">
                <h3 className={`${textColor} font-opensans font-bold`}>{actualBody?.type.toLocaleUpperCase()}</h3>
                {actualBody.subtype && <h3 className={`${textColor} font-opensans font-bold`}>- {actualBody?.subtype?.toLocaleUpperCase()}</h3>}
                </div>
                
              </div>
              <p className="text-white text-justify animate-[entrance_0.2s_0.1s_backwards]"  key={actualBody?.id}>{actualBody.resume}</p>
            </div>

          <div className={`bottom-info w-full p-4 ${border} lg:hidden max-md:border-none`}>
            <AdditionalInfo actualBody={actualBody as Planet} textColor={textColor} type={actualBody.type} />
          </div>

            <div className={`buttons-container${border} flex-1 max-md:border-none`}>
              <div className="flex flex-col justify-evenly p-4 h-full w-full animate-[entrance_0.2s_0.1s_backwards]">

                <Buttons actualBody={actualBody} border={border} />
                </div>
            </div>
          </div>

            {/* THIRD LINE */}
          <div className={`bottom-info w-full  p-4 ${border} max-md:hidden`}>
            <AdditionalInfo actualBody={actualBody as Planet} textColor={textColor} type={actualBody.type} />
          </div>
        


        </div>

        <div className="seta-right">
          <Link className={`planet`} to={`/body/${normalizeName(nextBody?.name ?? "")}`}>
            <MdNavigateNext className={`${textColor} text-6xl animate-[entrance_0.4s_0.8s_backwards] max-md:hidden`} />
          </Link>
        </div>

        <style>
          {`
            @keyframes entrance {
              0%, 10%, 30%, 50%, 70%, 90% { opacity: 0; }
              20%, 40%, 60%, 80%, 100% { opacity: 1; }
            }
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }

            .spinning-image {
              animation: spin 60s linear infinite;
            }
          `}
        </style>
      </div>
 
  );
}