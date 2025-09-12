export type BaseBody = {
  id: string;
  name: string;
  type: string;
  subtype?: string;
  resume: string;
  introduction?: string;
  images: {
    png: string;
    svg?: string;
  };
  features: Features;
  searchTags: string[];
  atmosphere?: string[];
  discovery?: {
    year: string;
    by: string;
  };
  curiosities?: string[];
  geography?: string;
};

export type Features = {
  [key: string]: any; 
};

export type Satellites = {
  number: number;
  names: string[];
};

export type Star = BaseBody & {
  features: {
    orbitalPeriod: string[];
    orbitalSpeed: string;
    rotationDuration: string;
    radius: string;
    Diameter: string;
    sunDistance: string;
    oneWayLightToTheSun: string;
    satellites: Satellites;
    temperature: string;
    gravity: string;
  };
};

export type Planet = BaseBody & {
  features: {
    orbitalPeriod: string[];
    orbitalSpeed: string;
    rotationDuration: string;
    radius: string;
    Diameter: string;
    sunDistance: string;
    oneWayLightToTheSun: string;
    satellites: Satellites;
    temperature: string;
    gravity: string;
  };
};

export type DwarfPlanet = BaseBody & {
  features: {
    Diameter: string;
    sunDistance: string;
    rotationDuration: string;
    gravity: string;
    orbitalPeriod: string[];
    satellites: Satellites;
    orbitalSpeed?: string;
    radius?: string;
    oneWayLightToTheSun?: string;
    temperature?: string;
  };
};

export type Asteroid = BaseBody & {
  features: {
    diameter?: string;
    orbitalPeriod?: string;
    rotationDuration?: string;
    meanDistanceFromSun?: string;
    gravity?: string;
    dimensions?: string;
    satellites: Satellites;
  };
};

export type Galaxy = BaseBody & {
  features: {
    type: string;
    diameter: string;
    estimatedStars: string;
    distanceFromEarth: string;
    satellites: Satellites;
  };
};

export type SolarSystemData = {
  stars: Star[];
  planets: Planet[];
  dwarfPlanets: DwarfPlanet[];
  asteroids: Asteroid[];
  galaxies: Galaxy[];
};

export type AppContextType = {
  bodies: SolarSystemData | null;
  setBodies: React.Dispatch<React.SetStateAction<SolarSystemData | null>>;
  isLoading: boolean;
  allBodies: BaseBody[];
  actualBody: BaseBody | null;
  setActualBody: React.Dispatch<React.SetStateAction<BaseBody | null>>;
  colorsMapText: Record<string, string>;
  colorsMapBackground: Record<string, string>;
  colorsMapBorder: Record<string, string>;
  colorsMapTextHover: Record<string, string>;
  colorsMap: Record<string, string>;
  error: string | null;
}

