import type { Planet } from "../types/types";

export default function PlanetAdditionalInfo( { body, textColor }: { body: Planet, textColor?: string } ) {

  return (
console.log("PlanetAdditionalInfo body:", textColor),

    <div className="additional-info flex flex-row flex-wrap gap-4 justify-between items-center">

        <div className="info-card flex flex-col items-center">
          <h4 className={`${textColor} font-bold`}>SUN DISTANCE</h4>
          <h5 className="text-white">{body.features.sunDistance}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
          <h4 className={`${textColor} font-bold`}>YEAR DURATION</h4>
          <h5 className="text-white">{body.features.orbitalPeriod[0]}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
          <h4 className={`${textColor} font-bold`}>DAY DURATION</h4>
          <h5 className="text-white">{body.features.rotationDuration}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
          <h4 className={`${textColor} font-bold`}>TEMPERATURE</h4>
          <h5 className="text-white">{body.features.temperature}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
          <h4 className={`${textColor} font-bold`}>GRAVITY</h4>
          <h5 className="text-white">{body.features.gravity}</h5>
        </div>

        <div className="info-card flex flex-col items-center">
          <h4 className={`${textColor} font-bold`}>SUNLIGHT TRAVEL TIME</h4>
          <h5 className="text-white">{body.features.oneWayLightToTheSun}</h5>
        </div>

    </div>

  )

}


