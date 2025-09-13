import type { Planet } from "../types/types";

export default function AdditionalInfo( { actualBody, textColor, type }: { actualBody: Planet, textColor?: string, type: string } ) {
  return (
    <div>
      {type === "Planet" ? <PlanetAdditionalInfo actualBody={actualBody} textColor={textColor} /> : ""}
      {type === "Star" ? <StarAdditionalInfo actualBody={actualBody} textColor={textColor} /> : ""}
      {type === "Dwarf Planet" ? <PlanetAdditionalInfo actualBody={actualBody} textColor={textColor} /> : ""}
      {type === "Asteroid" ? <AsteroidAdditionalInfo actualBody={actualBody} textColor={textColor} /> : ""}
      {type === "Galaxy" ? <GalaxyAdditionalInfo actualBody={actualBody} textColor={textColor} /> : ""}
    </div>
  )
}

export function StarAdditionalInfo( { actualBody, textColor }: { actualBody: Planet, textColor?: string } ) { 
  return (
    <div className="additional-info flex flex-row max-md:flex-col flex-wrap gap-4 justify-between items-center animate-[entrance_0.2s_0.1s_backwards]" key={actualBody.id}>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>ROTATION PERIOD</h4>
            <h5 className="text-white ">{actualBody.features.rotationDuration}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>DIAMETER</h4>
            <h5 className="text-white ">{actualBody.features.diameter}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>TEMPERATURE</h4>
            <h5 className="text-white ">{actualBody.features.temperature}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>GRAVITY</h4>
            <h5 className="text-white ">{actualBody.features.gravity}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>ATMOSPHERE</h4>
            <h5 className="text-white ">{actualBody?.atmosphere?.join(" / ")}</h5>
        </div>


    </div>
  ) 

}


export function AsteroidAdditionalInfo( { actualBody, textColor }: { actualBody: Planet, textColor?: string } ) { 
  return (
    <div className="additional-info flex flex-row flex-wrap gap-4 justify-between items-center animate-[entrance_0.2s_0.1s_backwards]" key={actualBody.id}>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>DIAMETER</h4>
            <h5 className="text-white ">{actualBody.features.diameter}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>SUN DISTANCE</h4>
            <h5 className="text-white ">{actualBody.features.sunDistance}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>GRAVITY</h4>
            <h5 className="text-white ">{actualBody.features.gravity}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>ORBITAL PERIOD</h4>
            <h5 className="text-white ">{actualBody.features.orbitalPeriod}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>ROTATION PERIOD</h4>
            <h5 className="text-white ">{actualBody.features.rotationDuration}</h5>
        </div>



    </div>
  ) 
}

export function GalaxyAdditionalInfo( { actualBody, textColor }: { actualBody: Planet, textColor?: string } ) { 
  return (
    <div className="additional-info flex flex-row flex-wrap gap-4 justify-between items-center animate-[entrance_0.2s_0.1s_backwards]" key={actualBody.id}>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>TYPE</h4>
            <h5 className="text-white ">{actualBody.features.type}</h5>
         </div>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>DIAMETER</h4>
            <h5 className="text-white ">{actualBody.features.diameter}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>ESTIMATED STARS</h4>
            <h5 className="text-white ">{actualBody.features.estimatedStars}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>SUPERMASSIVE BLACK HOLE MASS</h4>
            <h5 className="text-white ">{actualBody.features.supermassiveBlackHoleMass}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>Age</h4>
            <h5 className="text-white ">{actualBody.features.age}</h5>
        </div>

    </div>
  ) 
}

export function PlanetAdditionalInfo( { actualBody, textColor }: { actualBody: Planet, textColor?: string } ) { 
  return (


    <div className="additional-info flex flex-row flex-wrap gap-4 justify-between items-center animate-[entrance_0.2s_0.1s_backwards]" key={actualBody.id}>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>SUN DISTANCE</h4>
            <h5 className="text-white ">{actualBody.features.sunDistance}</h5>
          </div>

          <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>LENGTH OF A YEAR</h4>
          <h5 className="text-white">{actualBody.features.orbitalPeriod[0]}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
          <h4 className={`${textColor} font-bold`}>LENGTH OF A DAY</h4>
          <h5 className="text-white">{actualBody.features.rotationDuration}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
          <h4 className={`${textColor} font-bold`}>TEMPERATURE</h4>
          <h5 className="text-white">{actualBody.features.temperature}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
          <h4 className={`${textColor} font-bold`}>GRAVITY</h4>
          <h5 className="text-white">{actualBody.features.gravity}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
          <h4 className={`${textColor} font-bold`}>SUNLIGHT TRAVEL TIME</h4>
          <h5 className="text-white">{actualBody.features.oneWayLightToTheSun}</h5>
        </div>

    </div>

  )
}