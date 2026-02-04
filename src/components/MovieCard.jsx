import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="bg-white shadow rounded p-4 hover:scale-105 transition">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
          className="h-64 w-full object-cover"
        />
        <h3 className="truncate font-bold mt-2 ">{movie.Title}</h3>
        <p className="text-sm text-gray-500">{movie.Year}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
