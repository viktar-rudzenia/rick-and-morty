export interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface LocationInterface {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface EpisodeInterface {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface CharactersResponseInterface {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: null | number;
  };
  results: CharacterInterface[];
}

export interface LocationsResponseInterface {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: null | number;
  };
  results: LocationInterface[];
}

export interface EpisodesResponseInterface {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: null | number;
  };
  results: EpisodeInterface[];
}
