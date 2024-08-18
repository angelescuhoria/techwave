import { useGenres } from "../contexts/MovieContext";
import { Genre } from "../types";
import GenreItem from "./GenreItem";

export default function GenreGrid() {
  const genres = useGenres();

  if (!genres) return <p>No genres available!</p>;

  return (
    <div className="grid grid-cols-4 gap-4 w-[1008px]">
      {genres.map((genre: Genre, _) => (
        <GenreItem key={genre.id} {...genre} />
      ))}
    </div>
  );
}
