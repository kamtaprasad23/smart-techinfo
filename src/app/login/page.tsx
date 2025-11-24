"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface LoginProps {
  onClose: () => void;
  onLoginSuccess: () => void; // keep your prop
  onOpenSignup: () => void;
}

export default function LoginPage({
  onClose,
  onLoginSuccess,
  onOpenSignup,
}: LoginProps) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  // NEW: States for email + password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 250);
  };

  // ⭐ NEW: LOGIN API CALL
  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // Save token + user in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      onLoginSuccess(); 
      onClose();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-4xl bg-white/10 backdrop-blur-xl shadow-xl rounded-xl flex flex-col md:flex-row p-6 md:p-10 border border-white/20 transition-all duration-300 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white text-3xl font-bold cursor-pointer"
        >
          &times;
        </button>

        {/* LEFT */}
        <div className="md:w-1/2 text-white md:pr-8 mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Welcome to</h1>
          <h2 className="text-lg sm:text-xl font-medium">Smart TechInfo</h2>

          <div className="w-40 h-40 sm:w-56 sm:h-56 bg-white rounded-full flex items-center justify-center shadow-lg mt-6">
            <img src="/logo.png" alt="Smart Logo" className="w-24 sm:w-40" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 text-white w-full max-w-md mx-auto">
          <h2 className="text-base sm:text-lg mb-6 text-center md:text-left">
            We truly value your trust.
          </h2>

          <label className="text-xs sm:text-sm font-medium flex items-center gap-2 mb-1">
            <span>📧</span> Email address
          </label>
          <input
            type="email"
            placeholder="Your email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-white/50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 mb-4 focus:outline-none focus:border-white"
          />

          <label className="text-xs sm:text-sm font-medium flex items-center gap-2 mb-1">
            <span>🔒</span> Password
          </label>
          <input
            type="password"
            placeholder="Password*****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border border-white/50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 mb-3 focus:outline-none focus:border-white"
          />

          <p className="text-xs sm:text-sm mb-6 text-center md:text-left">
            Don’t have an account?{" "}
            <button onClick={onOpenSignup} className="underline">Create An Account</button>
          </p>

          <button
            onClick={handleLogin}
            className="w-full bg-black/60 hover:bg-black text-white font-semibold py-2 sm:py-3 rounded-full"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
