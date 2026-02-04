import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

console.log("API KEY:", API_KEY);
export const searchMovies = (query, page, type) => {
  return axios.get(BASE_URL, {
    params: {
      s: query,
      page: page,
      type: type, // movie, series, episode
      apikey: API_KEY,
    },
  });
};

export const getMovieDetails = (id) => {
  return axios.get(BASE_URL, {
    params: {
      i: id,
      plot: "full",
      apikey: API_KEY,
    },
  });
};
