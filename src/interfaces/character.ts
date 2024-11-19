export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
}

export interface PaginationControl {
  page: number,
  hasNext: boolean,
  totalPages: number,
  count: number,
}