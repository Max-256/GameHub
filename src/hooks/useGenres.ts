import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenresResponse {
  id: number;
  results: Genres[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres")
      .then((res) => {
        setLoading(false);
        setGenres(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
