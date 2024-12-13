import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCinema } from "../contexts/jioCinemaContext";

export default function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [otpError, setOtpError] = useState(""); // State for error message
  const { email, setEmail, setProfileVisibility } = useCinema();
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleChange = (index, value) => {
    if (value.length > 1) return; // Prevent multiple digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Clear error when user starts editing
    setOtpError("");

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const otpString = otp.join("");

    // Validate OTP length
    if (otpString.length !== 6) {
      setOtpError("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const data = { email, otp: otpString };
      const url = "http://localhost:5000/login/verify";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setOtpError("");
        navigate(-2);
        setEmail("");
        setProfileVisibility(true);
      } else {
        setOtpError("Invalid OTP, please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setOtpError("Something went wrong. Please try again later.");
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleResendCode = () => {
    console.log("called resend otp");
    setTimeLeft(60); // Reset timer
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-md mx-auto space-y-8">
        <div className="flex items-center gap-4">
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

        <div className="text-gray-400">
          Enter the 6 digit code sent to
          <div className="text-white">{email}</div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex gap-4 justify-between">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="\d*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-2xl bg-transparent border-b-2 border-white/20 outline-none focus:border-white/40 transition-colors"
              />
            ))}
          </div>

          {/* Show error message below the input */}
          {otpError && (
            <p className="text-red-500 text-sm text-center">{otpError}</p>
          )}

          <div className="flex justify-center">
            <div className="text-sm text-gray-400 hover:text-white">
              {timeLeft > 0 ? (
                <p>Resend code in {formatTime(timeLeft)}</p>
              ) : (
                <div className="flex gap-2 items-center">
                  <p>Didn't receive the code?</p>
                  <button
                    className="text-lg font-bold underline"
                    onClick={handleResendCode}
                  >
                    Resend code
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-700 hover:bg-pink-500 text-white py-4 rounded-md transition-colors"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
