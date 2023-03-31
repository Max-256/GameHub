import genres from "../data/genres";

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
  return { genres: genres, error: null, isLoading: false };
};

export default useGenres;
