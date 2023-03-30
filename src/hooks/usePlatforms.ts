import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

interface FetchPlatformsResponse {
  id: number;
  results: Platforms[];
}
const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platforms[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchPlatformsResponse>("/platforms/lists/parents")
      .then((res) => {
        setLoading(false);
        setPlatforms(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return controller.abort();
  }, []);

  return { platforms, error, isLoading };
};

export default usePlatforms;
