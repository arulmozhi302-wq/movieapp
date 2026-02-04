import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/omdbApi";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await getMovieDetails(id);
      setMovie(res.data);
    };
    fetchDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={movie.Poster} className="w-64" />
        <div>
          <h1 className="text-2xl font-bold">{movie.Title}</h1>
          <p>{movie.Plot}</p>
          <p><b>Genre:</b> {movie.Genre}</p>
          <p><b>Cast:</b> {movie.Actors}</p>
          <p><b>IMDB:</b> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
