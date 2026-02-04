import { useEffect, useState } from "react";
import { searchMovies } from "../services/omdbApi";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import FilterDropdown from "../components/FilterDropdown";

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const DEFAULT_QUERY = "avengers";


      const fetchMovies = async (searchText = query) => {
        try {
          const res = await searchMovies(searchText, page, type);

          if (res.data.Response === "True") {
            setMovies(res.data.Search);
            setTotalResults(res.data.totalResults);
            setError("");
          } else {
            setMovies([]);
            setError(res.data.Error);
          }
        } catch {
        s
          setError("Something went wrong");
        }
      };



useEffect(() => {
  if (query === "") {
    setQuery(DEFAULT_QUERY);
  } else {
    fetchMovies();
  }
}, [page, type, query]);

  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 text-black text-center p-6">
        <h2 className="text-4xl font-bold mb-4">
          Popular Movies
        </h2>
      <div className="flex justify-center gap-4 m-8">
        <SearchBar
            query={query}
            setQuery={setQuery}
            onSearch={() => {
              setPage(1);
              fetchMovies(query);
            }}
          />

        <FilterDropdown type={type} setType={setType} />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}

      </div>

      {totalResults > 10 && (
        <Pagination
          page={page}
          setPage={setPage}
          totalResults={totalResults}
        />
      )}
    </div>
  );
}

export default Home;
