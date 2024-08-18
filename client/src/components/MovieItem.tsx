import { Genre, Movie } from "../types";

export default function MovieItem(movie: Movie) {
  return (
    <div className="bg-clouds w-60 h-60 flex flex-col justify-center box-border">
      <div className="text-center">
        <h2>{movie.title}</h2>
        <p>Description: {movie.description}</p>
        <p>Release date: {movie.release_date}</p>
        <div>
          Genres:
          {movie.genres.map((genre: Genre, _) => (
            <span key={genre.id}> {genre.name} </span>
          ))}
        </div>
      </div>
    </div>
  );
}
