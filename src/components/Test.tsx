import { useState } from "react";

export default function SciFiCard() {
  const [activeOption, setActiveOption] = useState<number | null>(null);
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <div className="relative w-[400px] mx-auto grid h-[300px]">
      {/* Linha lateral com título */}
      <div className="absolute top-0 left-[-50px] h-full w-[5px] bg-yellow-400 animate-[entrance_0.4s_1.2s_backwards]">
        <span className="absolute left-[-150px] top-[-17px] block transform -rotate-90 origin-[100%_100%] text-white/30 uppercase font-medium">
          D7460N sci-fi ui #X
        </span>
      </div>

      {/* Cartão principal */}
      <div className="relative w-full h-full bg-gradient-to-t from-yellow-400/10 to-transparent border border-yellow-400 rounded-md animate-[entrance_0.4s_0.8s_backwards]">
        <div className="m-4" id="component">
          {/* Conteúdo interno */} 
        </div>
      </div>

      {/* Descrição animada */}
      <div className="absolute top-full mt-2 animate-[entrance_0.4s_1s_backwards] text-white/80">
        <p>Descrição ou texto adicional aqui.</p>
      </div>

      {/* Opções */}
      <div className="absolute top-0 right-[-220px] w-[200px] flex flex-wrap animate-[entrance_0.4s_1.4s_backwards]">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setActiveOption(i)}
            className={`h-10 px-2 mr-2 mb-4 border-2 border-black outline outline-1 outline-yellow-400 bg-transparent text-white text-sm font-oxanium tracking-wide cursor-pointer transition-all duration-300
              ${
                activeOption === i
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "hover:bg-yellow-400/50 focus:bg-yellow-400/50"
              }`}
          >
            {opt}
          </button>
        ))}
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
  );
}