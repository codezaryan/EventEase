import { useEffect, useState } from "react";

interface Release {
  id: number;
  title: string;
  genre: string;
  releaseDate: string;
  rating: number;
  poster: string;
}

export default  function Releases() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/releases")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch releases");
        }
        return res.json();
      })
      .then((data) => {
        setReleases(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load releases");
        setLoading(false);
      });
  }, []);

  /* Loading */
  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-lg font-semibold">
        Loading releases...
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

      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
        🎥 New & Upcoming Releases
      </h1>

      {/* Grid */}
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
        {releases.map((movie) => (
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
                📅 {movie.releaseDate}
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
