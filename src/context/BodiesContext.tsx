import React, { createContext, useContext, useState, useEffect } from "react";
import type { SolarSystemData, BaseBody, AppContextType } from "../types/types";
import axios from "axios";

// 1. Create the context
const AppContext = createContext<AppContextType | null>(null);

// 2. Provider component
export function AppProvider({ children } : { children: React.ReactNode }) {
  const [bodies, setBodies] = useState<SolarSystemData | null>(null);
  const [actualBody, setActualBody] = useState<BaseBody | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  

  useEffect(() => {
    const fetchBodies = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_URL_BASE}/all`);
        setBodies(response.data);
      } catch (error: any) {
        console.error("Error fetching bodies:", error);
        setError(error || "Failed to fetch bodies data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBodies();
  }, []);

const colorsMap: Record<string, string> = {
  Sun: "#ff7800",
  Mercury: "#2f6ba0",
  Venus: "#dda516",
  Earth: "#5cb4f7",
  Mars: "#ca5847",
  Jupiter: "#e1888d",
  Saturn: "#d4b372",
  Uranus: "#3780c3",
  Neptune: "#6893fa",
  Pluto: "#e1b294",
  Haumea: "#c9a98a",
  Makemake: "#c79971",
  Eris: "#bdbdbd",
  Ceres: "#a9a9a9",
  Vesta: "#969696",
  Eros: "#828282",
  Milkyway: "#fbfaff",
  Andromeda: "#b496ff",
};  


const colorsMapText: Record<string, string> = {
  Sun: "text-[#ff7800]",
  Mercury: "text-[#2f6ba0]",
  Venus: "text-[#dda516]",
  Earth: "text-[#5cb4f7]",
  Mars: "text-[#ca5847]",
  Jupiter: "text-[#e1888d]",
  Saturn: "text-[#d4b372]",
  Uranus: "text-[#3780c3]",
  Neptune: "text-[#6893fa]",
  Pluto: "text-[#e1b294]",
  Haumea: "text-[#c9a98a]",
  Makemake: "text-[#c79971]",
  Eris: "text-[#bdbdbd]",
  Ceres: "text-[#a9a9a9]",
  Vesta: "text-[#969696]",
  Eros: "text-[#828282]",
  "Milky Way": "text-[#fbfaff]",
  Andromeda: "text-[#b496ff]",
};

const colorsMapBackground: Record<string, string> = {
  Sun: "bg-[#ff7800]",
  Mercury: "bg-[#2f6ba0]",
  Venus: "bg-[#dda516]",
  Earth: "bg-[#5cb4f7]",
  Mars: "bg-[#ca5847]",
  Jupiter: "bg-[#e1888d]",
  Saturn: "bg-[#d4b372]",
  Uranus: "bg-[#3780c3]",
  Neptune: "bg-[#6893fa]",
  Pluto: "bg-[#e1b294]",
  Haumea: "bg-[#c9a98a]",
  Makemake: "bg-[#c79971]",
  Eris: "bg-[#bdbdbd]",
  Ceres: "bg-[#a9a9a9]",
  Vesta: "bg-[#969696]",
  Eros: "bg-[#828282]",
  "Milky Way": "bg-[#fbfaff]",
  Andromeda: "bg-[#b496ff]",
};

const colorsMapBorder: Record<string, string> = {
  Sun: "border-[#ff7800]",
  Mercury: "border-[#2f6ba0]",
  Venus: "border-[#dda516]",
  Earth: "border-[#5cb4f7]",
  Mars: "border-[#ca5847]",
  Jupiter: "border-[#e1888d]",
  Saturn: "border-[#d4b372]",
  Uranus: "border-[#3780c3]",
  Neptune: "border-[#6893fa]",
  Pluto: "border-[#e1b294]",
  Haumea: "border-[#c9a98a]",
  Makemake: "border-[#c79971]",
  Eris: "border-[#bdbdbd]",
  Ceres: "border-[#a9a9a9]",
  Vesta: "border-[#969696]",
  Eros: "border-[#828282]",
  "Milky Way": "border-[#fbfaff]",
  Andromeda: "border-[#b496ff]",
};

const colorsMapTextHover: Record<string, string> = {
  Sun: "hover:text-[#ff7800]",
  Mercury: "hover:text-[#2f6ba0]",
  Venus: "hover:text-[#dda516]",
  Earth: "hover:text-[#5cb4f7]",
  Mars: "hover:text-[#ca5847]",
  Jupiter: "hover:text-[#e1888d]",
  Saturn: "hover:text-[#d4b372]",
  Uranus: "hover:text-[#3780c3]",
  Neptune: "hover:text-[#6893fa]",
  Pluto: "hover:text-[#e1b294]",
  Haumea: "hover:text-[#c9a98a]",
  Makemake: "hover:text-[#c79971]",
  Eris: "hover:text-[#bdbdbd]",
  Ceres: "hover:text-[#a9a9a9]",
  Vesta: "hover:text-[#969696]",
  Eros: "hover:text-[#828282]",
  "Milky Way": "hover:text-[#fbfaff]",
  Andromeda: "hover:text-[#b496ff]",
};

    const allBodies: BaseBody[] = [
    ...(bodies?.planets || []),
    ...(bodies?.stars || []),
    ...(bodies?.dwarfPlanets || []),
    ...(bodies?.asteroids || []),
    ...(bodies?.galaxies || []),
  ];

  return (
    <AppContext.Provider value={{ bodies, setBodies, isLoading, allBodies, colorsMapText, actualBody, setActualBody, colorsMapBackground, colorsMapBorder, colorsMapTextHover, colorsMap, error }}>
      {children}
    </AppContext.Provider>
  );
}

// 3. Custom hook to use the context safely
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}