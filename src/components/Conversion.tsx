import type { BaseBody } from "@/types/types";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";




export default function Conversion({ actualBody, clickHandler, type }: { actualBody: BaseBody; clickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<SVGElement, MouseEvent>) => void  ; type: "age" | "weight" }) {
  const [weight, setWeight] = useState<number | string >();
  const [convertedWeight, setConvertedWeight] = useState<number | null>();
  const [age, setAge] = useState<number | string>();
  const [convertedAge, setConvertedAge] = useState<number | null>();


  const findWord = (actualBody: BaseBody,): string => {
  if (actualBody.type === "Galaxy" && actualBody.name === "Milky Way") { 
    return "in the";
  } else if (actualBody.type === "Star" || actualBody.type === "Galaxy") {
    return "in";
  } else {
    return "on";
  }
};

  const handleCalcWeight = () => {
    // WEIGHT = MASS * GRAVITY
    // What we see on the scale is the mass; weight is in Newtons
    let weightN = Number(weight) * parseFloat(actualBody.features.gravity.slice(0, -5));
    let convert = weightN / 9.8;
    setConvertedWeight(convert);
  };

    const handleCalcAge = () => {
    let actualBodyYear = parseFloat(
      actualBody.features.orbitalPeriod[1].slice(0, -5).replace(",", ".")
    );

    console.log("actualBodyYear", actualBodyYear);

    let ageN = 1 / actualBodyYear;
    let convert = ageN * Number(age);
    setConvertedAge(convert);
  };

  const handleReset = () => {
    setWeight("");
    setConvertedWeight(null);
    setAge("");
    setConvertedAge(null);
  };


  return (
    <div className="absolute text-white top-0 left-0 w-full h-full flex justify-center items-center bg-black/95 z-50">
      <div className={`weigh-container
   bg-gradient-to-t from-blue-400/40 to-blue-400/20 border border-blue-400 rounded-md animate-[entrance_0.2s_0.3s_backwards]
     relative 
     w-3xl min-h-2/4
     flex flex-col justify-between gap-4 p-6 items-center text-center
     max-md:m-4
  `}>
        <AiFillCloseCircle className="right-4 top-2 max-md:right-1 max-md:top-1 absolute z-100 text-3xl" name="closeButton" onClick={clickHandler} />

        {type === "weight" ? <h2 className={`text-2xl font-bold mb-2`}>
         How much would you weigh {findWord(actualBody)} {actualBody.name}?
        </h2> : <h2 className={`text-2xl font-bold mb-2`}>
         How old would you be {findWord(actualBody)} {actualBody.name}?
        </h2>}

        <div className="convert-container flex flex-col gap-4 justify-center items-center">
          <label className="" htmlFor="earth-weight">Enter your {type === "weight" ? "weight" : "age"} on Earth</label>
          <input
            className="input-weight-age w-40 border text-center p-1 rounded-md"
            type="number"
            id="earth-weight-age"
            value={ type === "weight" ? weight : age}
            placeholder={type === "weight" ? "value in Kg" : "value in years"}
            onChange={(e) => {
              if (type === "weight") {
                setWeight(e.target.value);
              } else {
                setAge(e.target.value);
              }
            }}
          />
          <div className="flex flex-row gap-4">
            <button className="border border-blue-400/50 rounded-md hover:bg-blue-400/50 focus:bg-blue-400/50 p-2" onClick={type === "weight" ? handleCalcWeight : handleCalcAge}>
              Convert
            </button>
            <button className="border border-blue-400/50 rounded-md hover:bg-blue-400/50 focus:bg-blue-400/50 p-2" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>

       { convertedWeight || convertedAge && <div className="flex flex-col gap-2 justify-center items-center border border-blue-400/50 rounded-md bg-blue-400/50 p-4 animate-[entrance_0.2s_0.1s_backwards]">
          <p>
            If you were {findWord(actualBody)} {actualBody.name}, your {type === "weight" ? "weight" : "age"} would be:
          </p>
          {type === "weight" ? <p className="text-xl font-bold">{convertedWeight ? `${convertedWeight.toFixed(2)} Kg` : "???"}</p> : <p className="text-xl font-bold">{convertedAge ? `${convertedAge.toFixed(2)} years` : "???"}</p>}
        </div>}

        {/* <div className="explanation-container">
        <h4>Weight = mass x gravity</h4>
        <p>
          Note: What we commonly understand as weight and measure in Kg is actually mass.
          The result here is 
        </p>
      </div> */}
        <p>
          <small>
            The values shown here are based on simple calculations and without scientific supervision, intended only for entertainment and curiosity.
          </small>
        </p>
      </div>
    </div>
  );
};