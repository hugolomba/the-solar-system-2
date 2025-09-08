import { useEffect, useState } from "react"
import axios from "axios"
import type { Planet } from "../types/types"

export const usePlanets = () => {
  const [planets, setPlanets] = useState<Planet[] | null>(null)

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_URL_BASE}/planets`)
        setPlanets(response.data)
      } catch (error) {
        console.error("Error fetching planets:", error)
      }
    }

    fetchPlanets()
  }, [])

  return planets
}