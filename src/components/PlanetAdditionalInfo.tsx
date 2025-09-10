import type { Planet } from "../types/types";

export default function PlanetAdditionalInfo( { actualBody, textColor }: { actualBody: Planet, textColor?: string } ) {

  return (
console.log("PlanetAdditionalInfo actualBody:", textColor),

    <div className="additional-info flex flex-row flex-wrap gap-4 justify-between items-center animate-[entrance_0.2s_0.1s_backwards]" key={actualBody.id}>

        <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>SUN DISTANCE</h4>
            <h5 className="text-white ">{actualBody.features.sunDistance}</h5>
          </div>

          <div className="info-card flex flex-col items-center">
            <h4 className={`${textColor} font-bold`}>YEAR DURATION</h4>
          <h5 className="text-white">{actualBody.features.orbitalPeriod[0]}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
          <h4 className={`${textColor} font-bold`}>DAY DURATION</h4>
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


