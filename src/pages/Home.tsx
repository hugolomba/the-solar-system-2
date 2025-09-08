import Dock from "../components/Dock";
import Loading from "../components/Loading";
import type { SolarSystemData } from "../types/types";





export default function Home({ bodies }: { bodies: SolarSystemData | null }) {
  return (

   <div className="flex flex-col items-center justify-center align-middle gap-2">
    <p className="text-white font-leaguespart text-2xl p-6">
      Welcome to The Solar System, where you can find information and curiosities about our solar system.
    </p>

    <Dock bodies={bodies}/>

   </div>
    
  )
}
