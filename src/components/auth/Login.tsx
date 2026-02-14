import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  // ✅ Properly typed state
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // Later: API login here
  };

  return (
    <form
      onSubmit={handleSubmit} // ✅ Correct place
      className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600"
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        {/* ✅ Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        {/* Back button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-full mt-2 bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
        >
          Back to Home
        </button>
      </div>
    </form>
  );
}
