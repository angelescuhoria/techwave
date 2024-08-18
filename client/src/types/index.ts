export type Movie = {
  id: number;
  title: string;
  description: string;
  release_date: string;
  genres: Genre[];
};

export type Genre = {
  id: number;
  name: string;
};

export type FieldType = {
  id?: number;
  title?: string;
  description?: string;
  release_date?: string;
  genres?: number[];
};
