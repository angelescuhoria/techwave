import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import {
  addMovie,
  deleteMovie,
  fetchGenres,
  fetchMovies,
  updateMovie,
} from "./api/index.ts";
import {
  Controls,
  GenreGrid,
  MovieGrid,
  UpdateMovieModal,
} from "./components/index.ts";
import { MovieProvider } from "./contexts/index.ts";
import { Genre, Movie } from "./types/index.ts";

function App() {
  const queryClient = useQueryClient();
  const {
    data: moviesData,
    isError: isMoviesError,
    isLoading: isMoviesLoading,
    error: moviesError,
  } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  const {
    data: genresData,
    isError: isGenresError,
    isLoading: isGenresLoading,
    error: genresError,
  } = useQuery<Genre[]>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });

  const addMovieMutation = useMutation({
    mutationFn: addMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["movies"],
        refetchType: "active",
      });
    },
  });

  const updateMovieMutation = useMutation({
    mutationFn: updateMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["movies"],
        refetchType: "active",
      });
    },
  });

  const deleteMovieMutation = useMutation({
    mutationFn: deleteMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["movies"],
        refetchType: "active",
      });
    },
  });

  const [viewGrid, setViewGrid] = useState<"movies" | "genres" | null>(null);
  const [isUpdateModalVisible, setUpdateModalVisible] =
    useState<boolean>(false);

  const showUpdateModal = () => {
    setUpdateModalVisible(true);
  };

  const handleCancel = () => {
    setUpdateModalVisible(false);
  };

  if (isMoviesLoading || isGenresLoading) return <p>Loading...</p>;

  if (isMoviesError) return <p>{`${moviesError}`}</p>;
  if (isGenresError) return <p>{`${genresError}`}</p>;

  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <MovieProvider movies={moviesData} genres={genresData}>
        <Controls
          onShowMovies={() =>
            setViewGrid(viewGrid !== "movies" ? "movies" : null)
          }
          onShowGenres={() =>
            setViewGrid(viewGrid !== "genres" ? "genres" : null)
          }
          onShowUpdateModal={showUpdateModal}
        />
        <section className="w-full h-auto flex justify-center">
          {viewGrid === "movies" && <MovieGrid />}
          {viewGrid === "genres" && <GenreGrid />}
          <UpdateMovieModal
            visible={isUpdateModalVisible}
            onCancel={handleCancel}
          />
        </section>
      </MovieProvider>
    </>
  );
}

export default App;
