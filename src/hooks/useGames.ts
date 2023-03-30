import { Platforms } from "./usePlatforms";
import { Genres } from "./useGenres";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Games {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
}

interface FetchGamesResponse {
  id: number;
  results: Games[];
}
const useGames = (
  selectedGenre: Genres | null,
  selectedPlatform: Platforms | null
) => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", {
        params: {
          genres: selectedGenre?.id,
          parent_platforms: selectedPlatform?.id,
        },
      })
      .then((res) => {
        setLoading(false);
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return controller.abort();
  }, [selectedGenre?.id, selectedPlatform?.id]);

  return { games, error, isLoading };
};

export default useGames;
