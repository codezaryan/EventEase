import { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  genre: string;
  duration: string;
  rating: number;
  poster: string;
}

function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      });
  }, []);

  /* Loading */
  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-lg font-semibold">
        Loading movies...
      </div>
    );
  }

  /* Error */
  if (error) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="px-3 sm:px-6 md:px-10 py-6">

      {/* Page Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
        🎬 Movies
      </h1>

      {/* Responsive Grid */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-4
          sm:gap-6
        "
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="
              border
              rounded-lg
              overflow-hidden
              shadow-sm
              hover:shadow-lg
              transition
              bg-white
            "
          >
            {/* Poster */}
            <img
              src={movie.poster}
              alt={movie.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/300x450?text=No+Image";
              }}
              className="
                h-56
                sm:h-60
                md:h-64
                w-full
                object-cover
              "
            />

            {/* Content */}
            <div className="p-3 space-y-1">

              <h3 className="font-semibold text-sm sm:text-base line-clamp-1">
                {movie.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600">
                {movie.genre}
              </p>

              <p className="text-xs text-gray-500">
                ⏱ {movie.duration}
              </p>

              <p className="text-sm font-medium text-yellow-600">
                ⭐ {movie.rating}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
  