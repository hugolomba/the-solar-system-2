
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

  const findWord = (actualBody) => {
  if (actualBody.type === "Galaxy" && actualBody.name === "Milky Way") { 
    return "in the";
  } else if (actualBody.type === "Star" || actualBody.type === "Galaxy") {
    return "in";
  } else {
    return "on";
  }
};

// const calcPeso = (e) => {};

const Weigh = ({ actualBody, clickHandler }) => {
  const [peso, setPeso] = useState();
  const [pesoConvertido, setPesoConvertido] = useState();

  const handleCalcPeso = () => {
    // PESO = MASSA * GRAVIDADE
    // O que vemos na balança é a massa, o peso é em Newtons
    let pesoN = peso * parseFloat(actualBody.features.gravity.slice(0, -5));
    let convert = pesoN / 9.8;
    setPesoConvertido(convert);
    console.log(parseFloat(actualBody.features.gravity.slice(0, -5)));

    // setPeso(0);
  };

  const handleReset = () => {
    setPeso("");
    setPesoConvertido(0);
  };

  console.log("HEEEEEERE");

  return (
    <div className="absolute text-white top-0 left-0 w-full h-full flex justify-center items-center bg-black/80 z-50">
      <div className={`weigh-container
     [border-radius:255px_15px_225px_15px/15px_225px_15px_255px] 
     border-10 border-white 
     relative 
     w-3xl h-1/2
     flex flex-col justify-evenly items-center text-center
     bg-indigo-500`}>
    <AiFillCloseCircle className="right-4 top-2 absolute text-3xl" name="closeButton" onClick={clickHandler} />

        <h2 className={`actualBody${actualBody.id}`}>
         How much would you weigh {findWord(actualBody.name)} {actualBody.name}?
        </h2>
        <div className="convert-container flex flex-col gap-4 justify-center items-center">
          <label className="" htmlFor="peso-terra">Enter your weight on Earth</label>
          <input
            className="input-peso w-40 border border-black text-center"
            type="number"
            id="peso-terra"
            value={peso}
            placeholder="value in Kg"
            onChange={(e) => {
              setPeso(e.target.value);
     
            }}
          />
          <div className="btn-convert-container">
            <button className="convert-btn" onClick={handleCalcPeso}>
              Converter
            </button>
            <button className="convert-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        <div className="convert-result">
          <p>
            If you were {findWord(actualBody.name)} {actualBody.name}, your weight would be:
          </p>
          <p>{pesoConvertido ? `${pesoConvertido.toFixed(2)} Kg` : "???"}</p>
        </div>

        {/* <div className="explication-container">
        <h4>Peso = massa x gravidade</h4>
        <p>
          OBS: O que popularmente entendemos como peso e medimos em Kg, é na
          realidade a massa.
          O resultado aqui é 
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

export default Weigh;
