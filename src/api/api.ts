import { useEffect, useState } from "react"
import axios from "axios"
import type { BaseBody, SolarSystemData } from "../types/types"

export const useBodies = () => {
  const [bodies, setBodies] = useState<SolarSystemData | null>(null)

  useEffect(() => {
    const fetchBodies = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_URL_BASE}/all`)
        setBodies(response.data)
      } catch (error) {
        console.error("Error fetching bodies:", error)
      }
    }

    fetchBodies()
  }, [])

  return bodies
}