import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-slate-950 mb-2">
        404 - Page Not Found
      </h1>

      <p className="text-slate-600 mb-4">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <button
        type="button"
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-slate-950 text-slate-50 rounded-md hover:bg-slate-800 transition-colors"
      >
        Back to Home Page
      </button>
    </div>
  );
}
