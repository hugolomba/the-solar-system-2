import { Link } from "react-router-dom"
import { useBodies } from "../api/api"

export default function Dock() {
    const bodies = useBodies()
  
    function normalizeName(name: string) {
      return name.toLowerCase().replace(/\s+/g, '-')
    }
    
    return (
        <div className="flex flex-col items-center justify-center align-middle gap-8">
            <ul className="flex flex-row gap-2">
                {bodies && bodies.stars.map((star) => {
                    return (
                        <li className="relative" key={star.id}>
                            <Link to={`/body/${normalizeName(star.name)}`}>
                            <img className="reflect-img w-18" src={star.images.png} alt={`${star.name} image`} />
                            </Link>
                        </li>
                    )
                } )}

            </ul>
            <ul className="flex flex-row gap-2">
                {bodies && bodies.planets.map((planet) => {
                    return (
                        <li className="relative" key={planet.id}>
                            <Link to={`/body/${normalizeName(planet.name)}`}>
                            <img className="reflect-img w-18" src={planet.images.png} alt={`${planet.name} image`} />
                            </Link>
                        </li>
                    )
                } )}

            </ul>
            <ul className="flex flex-row gap-2">
                {bodies && bodies.dwarfPlanets.map((dwarfPlanet) => {
                    return (
                        <li className="relative" key={dwarfPlanet.id}>
                            <Link to={`/body/${normalizeName(dwarfPlanet.name)}`}>
                            <img className="reflect-img w-18" src={dwarfPlanet.images.png} alt={`${dwarfPlanet.name} image`} />
                            </Link>
                        </li>
                    )
                } )}

            </ul>
            <ul className="flex flex-row gap-2">
                {bodies && bodies.asteroids.map((asteroid) => {
                    return (
                        <li className="relative" key={asteroid.id}>
                            <Link to={`/body/${normalizeName(asteroid.name)}`}>
                            <img className="reflect-img w-18" src={asteroid.images.png} alt={`${asteroid.name} image`} />
                            </Link>
                        </li>
                    )
                } )}

            </ul>
            <ul className="flex flex-row gap-2">
                {bodies && bodies.galaxies.map((galaxy) => {
                    return (
                        <li className="relative" key={galaxy.id}>
                            <Link to={`/body/${normalizeName(galaxy.name)}`}>
                            <img className="reflect-img w-18" src={galaxy.images.png} alt={`${galaxy.name} image`} />
                            </Link>
                        </li>
                    )
                } )}

            </ul>
        </div>
    )
}