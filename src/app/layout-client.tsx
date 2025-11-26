"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "./login/page";
import Signup from "./signup/page";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const router = useRouter();

  const handleLoginSuccess = () => {
    setOpenLogin(false);
    setOpenSignup(false);
    router.push("/dashboard");
  };

  return (
    <>
      <Navbar 
        onDashboardClick={() => setOpenLogin(true)} 
      />

      {openLogin && (
        <Login 
          onClose={() => setOpenLogin(false)} 
          onLoginSuccess={handleLoginSuccess}
          onOpenSignup={() => { setOpenLogin(false); setOpenSignup(true); }}
        />
      )}

      {openSignup && (
        <Signup
          onClose={() => setOpenSignup(false)} 
          onSignupSuccess={handleLoginSuccess}
          onOpenLogin={() => { setOpenSignup(false); setOpenLogin(true); }}
        />
      )}

      {children}

      <Footer />
    </>
  );
}
