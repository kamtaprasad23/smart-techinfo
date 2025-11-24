"use client";

import { useState } from "react";

interface SignupProps {
  onClose: () => void;
  onSignupSuccess: () => void;
  onOpenLogin: () => void;
}

export default function SignupPage({
  onClose,
  onSignupSuccess,
  onOpenLogin,
}: SignupProps) {

  // NEW: States
  const [fullName, setFullName] = useState("");
  const [email, setEmail]   = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);

  // ⭐ NEW: SIGNUP API CALL
  const handleSignup = async () => {
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("password", password);
      if (avatar) formData.append("avatar", avatar);

      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      onSignupSuccess();
      onClose();

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
      <div className="relative w-full max-w-5xl bg-white/10 backdrop-blur-xl shadow-xl rounded-xl flex flex-col md:flex-row p-10 border border-white/20">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>

        {/* LEFT SECTION */}
        <div className="md:w-1/2 text-white pr-8 mb-10 md:mb-0">
          <h1 className="text-4xl font-bold mb-2">Create your</h1>
          <h2 className="text-xl font-medium">Smart TechInfo</h2>
          <h2 className="text-xl font-medium mb-6">Account</h2>

          <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-lg mt-6">
            <img src="/logo.png" alt="Smart Logo" className="w-44" />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:w-1/2 text-white">

          <h2 className="text-lg mb-6">Join us and enjoy smart services!</h2>

          <label className="text-sm font-medium flex items-center gap-2 mb-1">
            <span>👤</span> Full Name
          </label>
          <input
            type="text"
            placeholder="Your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full bg-transparent border border-white/50 rounded-lg px-4 py-3 mb-5 focus:outline-none focus:border-white"
          />

          <label className="text-sm font-medium flex items-center gap-2 mb-1">
            <span>📧</span> Email Address
          </label>
          <input
            type="email"
            placeholder="Your email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-white/50 rounded-lg px-4 py-3 mb-5 focus:outline-none focus:border-white"
          />

          <label className="text-sm font-medium flex items-center gap-2 mb-1">
            <span>🔒</span> Password
          </label>
          <input
            type="password"
            placeholder="Password*****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border border-white/50 rounded-lg px-4 py-3 mb-3 focus:outline-none focus:border-white"
          />

          {/* NEW: Avatar Upload */}
          <label className="text-sm font-medium flex items-center gap-2 mb-1">
            <span>🖼️</span> Upload Avatar
          </label>
          <input
            type="file"
            onChange={(e) => setAvatar(e.target.files?.[0] || null)}
            className="w-full mb-5"
          />

          <p className="text-sm mb-6">
            Already have an account?{" "}
            <button onClick={onOpenLogin} className="underline">
              Login
            </button>
          </p>

          <button
            onClick={handleSignup}
            className="w-full bg-black/60 hover:bg-black text-white font-semibold py-3 rounded-full"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
