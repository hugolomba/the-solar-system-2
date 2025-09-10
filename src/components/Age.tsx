
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

// const calcidade = (e) => {};

const Age = ({ actualBody, clickHandler }) => {
  const [idade, setIdade] = useState();
  const [idadeConvertida, setidadeConvertida] = useState();

  const handleCalcIdade = () => {
    let actualBodyYear = parseFloat(
      actualBody.features.orbitalPeriod[1].slice(0, -5).replace(",", ".")
    );

    let idadeN = 1 / actualBodyYear;
    let convert = idadeN * idade;
    setidadeConvertida(convert);

    console.log(actualBodyYear, idadeN, convert);

    // setidade(0);
  };

  const handleReset = () => {
    setIdade("");
    setidadeConvertida(0);
  };

  return (
    <div className="age-bg absolute text-white top-0 left-0 w-full h-full flex justify-center items-center bg-black/95 z-50">
      <div className={`weigh-container
     bg-gradient-to-t from-blue-400/40 to-blue-400/20 border border-blue-400 rounded-md animate-[entrance_0.2s_0.3s_backwards]
     relative 
     w-3xl h-1/2
     flex flex-col justify-evenly items-center text-center`}>
        <AiFillCloseCircle name="closeButton" onClick={clickHandler} />

        <h2 className={`actualBody${actualBody.id}`}>
          What would your age be {findWord(actualBody.name)} {actualBody.name}?
        </h2>
        <div className="convert-container">
          <label htmlFor="idade-terra">Enter your age on Earth</label>
          <input
            type="number"
            id="idade-terra"
            value={idade}
            placeholder="value in years"
            onChange={(e) => {
              setIdade(e.target.value);
              console.log("target.value: ", e.target.value);
              console.log("idade enquanto muda: ", idade);
            }}
          />
          <div className="btn-convert-container">
            <button className="convert-btn" onClick={handleCalcIdade}>
              Convert
            </button>
            <button className="convert-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        <div className="convert-result">
          <p>
            If you were {findWord(actualBody.name)} {actualBody.name}, your age would be:
          </p>
          <p>
            {idadeConvertida
              ? `${idadeConvertida.toFixed(2)} year${
                  idadeConvertida > 1 ? "s" : ""
                }*`
              : "???"}
          </p>
        </div>

        {/* <div className="explication-container">
        <h4>idade = massa x gravidadee</h4>
        <p>
          OBS: O que popularmente entendemos como idade e medimos em Kg, é na
          realidadee a massa.
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

export default Age;
