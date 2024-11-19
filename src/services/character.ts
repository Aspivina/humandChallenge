import api from "../config/api";
import { Character, CharacterDetailType } from "../interfaces/character";
import { PaginatedResponse } from "../interfaces/pagination";

const BASE_PATH = "/character";

export const getCharacterList = (params: string) =>
  api.get<PaginatedResponse<Character[]>>(`${BASE_PATH}${params}`);

export const getCharacter = (id: number) =>
  api.get<CharacterDetailType>(`${BASE_PATH}/${id}`);
