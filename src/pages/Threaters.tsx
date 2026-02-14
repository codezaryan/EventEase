import { useEffect, useState } from "react";

// Theatre Type
interface Theatre {
  id: number;
  name: string;
  location: string;
  image: string;
}

function Threaters() {
  const [theatres, setTheatres] = useState<Theatre[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/theatres")
      .then((res) => res.json())
      .then((data: Theatre[]) => {
        setTheatres(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        Loading theatres...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">🎬 Theatres Near You</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {theatres.map((theatre) => (
          <div
            key={theatre.id}
            className="flex justify-between border rounded-lg shadow hover:shadow-lg transition bg-white overflow-hidden"
          >
            {/* Theatre Image */}
            <img
              src={theatre.image}
              alt={theatre.name}
              className="w-32 h-32 object-contain bg-white p-2"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/no-image.png";
              }}
            />


            {/* Theatre Info */}
            <div className="p-4 flex-1">
              <h3 className="text-lg font-semibold">
                {theatre.name}
              </h3>

              <p className="text-gray-600">
                📍 {theatre.location}
              </p>

              <button
                className="mt-3 px-3 py-1 bg-slate-900 text-white rounded hover:bg-slate-800"
              >
                View Shows
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Threaters;
