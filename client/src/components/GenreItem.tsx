import { Genre } from "../types";

export default function GenreItem(genre: Genre) {
  return (
    <div className="bg-clouds w-60 h-60 flex flex-col justify-center box-border text-center">
      <p>{genre.name}</p>
    </div>
  );
}
