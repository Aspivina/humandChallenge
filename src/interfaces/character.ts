export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
}

export interface CharacterDetailType {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string | null;
  episode: string[];
  location: {name: string, url: string} | null;
}
