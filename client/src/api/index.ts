import axios from "axios";
import { Genre, Movie } from "../types";

export const fetchMovies = async (): Promise<Movie[]> => {
  const { data } = await axios.get("http://localhost:3000/ListMovies");
  return data;
};

export const addMovie = async (movie: Movie): Promise<void> => {
  await axios.post("http://localhost:3000/AddMovie", movie);
};

export const updateMovie = async (movie: Movie) => {
  await axios.put(`http://localhost:3000/UpdateMovie/${movie.id}`, movie);
};

export const deleteMovie = async (movieId: number) => {
  await axios.delete(`http://localhost:3000/DeleteMovie/${movieId}`);
};

export const fetchGenres = async (): Promise<Genre[]> => {
  const { data } = await axios.get("http://localhost:3000/ListGenres");
  return data;
};

export const addGenre = async (Genre: Genre): Promise<void> => {
  await axios.post("http://localhost:3000/AddGenre", Genre);
};

export const deleteGenre = async (GenreId: number) => {
  await axios.delete(`http://localhost:3000/DeleteGenre/${GenreId}`);
};
