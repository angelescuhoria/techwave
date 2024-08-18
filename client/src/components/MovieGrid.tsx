import { useMovies } from "../contexts/MovieContext";
import { Movie } from "../types";
import MovieItem from "./MovieItem";

function MovieGrid() {
  const movies = useMovies();

  if (!movies) return <p>No movies available!</p>;

  return (
    <div className="grid grid-cols-4 gap-4 w-[1008px]">
      {movies.map((movie: Movie, _) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
