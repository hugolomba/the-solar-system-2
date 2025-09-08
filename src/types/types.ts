export type Planet = {
  id: string;
  name: string;
  type: string;
  resume: string;
  introduction: string;
  images: {
    svg: string;
    png: string;
  };
  searchTags: string[];
  features: {
    orbitalPeriod: string[];
    orbitalSpeed: string;
    rotationDuration: string;
    radius: string;
    Diameter: string;
    sunDistance: string;
    oneWayLightToTheSun: string;
    satellites: {
      number: number;
      names: string[];
    };
    temperature: string;
    gravity: string;
  };
  atmosphere: string[];
  discovery: {
    year: string;
    by: string;
  };
  curiosities: string[];
  geography: string;
};

export type PlanetList = Planet[]