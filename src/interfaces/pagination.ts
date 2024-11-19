export interface PaginatedResponse<T> {
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
    results: T;
  }
  export interface PaginationControl {
    page: number,
    hasNext: boolean,
    totalPages: number,
    count: number,
  }