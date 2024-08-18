import React, { createContext, ReactNode, useContext } from "react";
import { Genre, Movie } from "../types/index.ts";

interface MovieContextProps {
  movies: Movie[] | undefined;
  genres: Genre[] | undefined;
}

interface MovieProviderProps extends MovieContextProps {
  children: ReactNode;
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovies must be used within a MovieProvider");
  }
  return context.movies;
};

export const useGenres = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useGenres must be used within a MovieProvider");
  }
  return context.genres;
};

export default function MovieProvider({
  children,
  movies,
  genres,
}: MovieProviderProps) {
  return (
    <MovieContext.Provider value={{ movies, genres }}>
      {children}
    </MovieContext.Provider>
  );
}
