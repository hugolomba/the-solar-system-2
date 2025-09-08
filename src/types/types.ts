export type BaseBody = {
  id: string;
  name: string;
  type: string;
  resume: string;
  introduction: string;
  images: {
    png: string;
    svg?: string;
  };
  searchTags: string[];
  atmosphere: string[];
  discovery: {
    year: string;
    by: string;
  };
  curiosities: string[];
  geography: string;
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