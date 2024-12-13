import { useNavigate } from "react-router-dom";
import { useCinema } from "../contexts/jioCinemaContext";
import { useState } from "react";

export default function LoginForm() {
  const { email, setEmail } = useCinema();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    setIsLoading(true); // Start loading

    try {
      const url = "http://localhost:5000/login";
      const data = { email };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to login. Please try again.");
      }

      navigate("verify");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-md mx-auto space-y-8">
        <div className="flex items-center gap-3">
          <button
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Go back"
            onClick={() => navigate(-1)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-semibold">Login to continue</h1>
        </div>

        <form onSubmit={handleSubmit} method="post" className="space-y-6">
          {/* Show error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="relative">
            <input
              type="email" // Use correct input type
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 py-2 text-lg outline-none focus:border-white/40 transition-colors"
              placeholder="Your email address"
              aria-label="Enter your email address"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-700 hover:bg-pink-500 text-white py-4 rounded-md transition-colors flex justify-center items-center"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? (
              <svg
                className="w-5 h-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Continue"
            )}
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center">
          By continuing you agree to our{" "}
          <span className="text-base font-bold underline cursor-pointer">
            Terms of Use{" "}
          </span>{" "}
          <br />
          and acknowledge that you have read our{" "}
          <span className="text-base font-bold underline cursor-pointer">
            Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
}
