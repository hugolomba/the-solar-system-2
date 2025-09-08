import { useEffect, useState } from "react"
import axios from "axios"
import type { SolarSystemData } from "../types/types"

export const useBodies = () => {
  const [bodies, setBodies] = useState<SolarSystemData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBodies = async () => {
      try {

        const response = await axios.get(`${import.meta.env.VITE_URL_BASE}/all`)
        setBodies(response.data)
      } catch (error) {
        console.error("Error fetching bodies:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBodies()
  }, [])

  return bodies
}