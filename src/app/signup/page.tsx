"use client";

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
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
      <div className="relative w-full max-w-5xl bg-white/10 backdrop-blur-xl shadow-xl rounded-xl flex flex-col md:flex-row p-10 border border-white/20">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>

        {/* LEFT SECTION — SAME DESIGN */}
        <div className="md:w-1/2 text-white pr-8 mb-10 md:mb-0">
          <h1 className="text-4xl font-bold mb-2">Create your</h1>
          <h2 className="text-xl font-medium">Smart TechInfo</h2>
          <h2 className="text-xl font-medium mb-6">Account</h2>

          {/* LOGO */}
          <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-lg mt-6">
            <img src="/logo.png" alt="Smart Logo" className="w-44" />
          </div>
        </div>

        {/* RIGHT SECTION — SIGNUP FORM */}
        <div className="md:w-1/2 text-white">

          <h2 className="text-lg mb-6">Join us and enjoy smart services!</h2>

          {/* Full Name */}
          <label className="text-sm font-medium flex items-center gap-2 mb-1">
            <span>👤</span> Full Name
          </label>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full bg-transparent border border-white/50 rounded-lg px-4 py-3 mb-5 focus:outline-none focus:border-white"
          />

          {/* Email */}
          <label className="text-sm font-medium flex items-center gap-2 mb-1">
            <span>📧</span> Email Address
          </label>
          <input
            type="email"
            placeholder="Your email@gmail.com"
            className="w-full bg-transparent border border-white/50 rounded-lg px-4 py-3 mb-5 focus:outline-none focus:border-white"
          />

          {/* Password */}
          <label className="text-sm font-medium flex items-center gap-2 mb-1">
            <span>🔒</span> Password
          </label>
          <input
            type="password"
            placeholder="Password*****"
            className="w-full bg-transparent border border-white/50 rounded-lg px-4 py-3 mb-3 focus:outline-none focus:border-white"
          />

          {/* Login Link */}
          <p className="text-sm mb-6">
            Already have an account?{" "}
            <button onClick={onOpenLogin} className="underline bg-transparent border-none text-white cursor-pointer">
              Login
            </button>
          </p>

          {/* Signup Button */}
          <button
            onClick={onSignupSuccess} // Use the prop for successful signup
            className="w-full bg-black/60 hover:bg-black text-white font-semibold py-3 rounded-full"
          >
            Create Account
          </button>

        </div>
      </div>
    </div>
  );
}
