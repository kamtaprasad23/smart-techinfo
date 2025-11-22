"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar({
  onDashboardClick,
}: {
  onDashboardClick: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Also close `Services` dropdown when main menu closes
  useEffect(() => {
    if (!open) setServiceOpen(false);
  }, [open]);

  return (
    <nav className="w-full bg-white text-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <Link href="/">
          <img src="/LOGO1.png" className="w-14 h-14" alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li className="relative group cursor-pointer">
            <span className="flex items-center gap-1 hover:text-blue-700">
              Services <ChevronDown className="w-4 h-4" />
            </span>

            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md top-6 left-0 w-64 p-3 z-50 border">
              <p className="text-gray-500 border-b pb-2 mb-2">All Services</p>
              <ul className="text-sm space-y-2">
                <li>• Washing Machine Repair</li>
                <li>• Television Repair</li>
                <li>• Refrigerator Repair</li>
                <li>• Air Conditioner Repair</li>
                <li>• Purifier Repair</li>
                <li>• Laptop Repair</li>
                <li>• Others</li>
              </ul>
            </div>
          </li>

          <li className="hover:text-blue-700 cursor-pointer" onClick={onDashboardClick}>
            Dashboard
          </li>

          <li>
            <a href="#testimonials">Happy Customers</a>
          </li>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 text-gray-700">
            <Phone className="w-4 h-4" />
            <a href="tel:919685530890" className="underline">
              91 96855 30890
            </a>
          </div>

          <button className="bg-[#0C1B33] text-white px-5 py-2 rounded-lg">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mounted && (
        <div
          ref={mobileMenuRef}
          className={`md:hidden transition-all overflow-hidden ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } bg-white border-t`}
        >
          <ul className="flex flex-col gap-5 py-5 px-6 text-gray-700 font-medium">

            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <details
                open={serviceOpen}
                onClick={() => setServiceOpen(!serviceOpen)}
                className="w-full group cursor-pointer"
              >
                <summary className="flex items-center gap-1 hover:text-blue-700 list-none">
                  Services <ChevronDown className="w-4 h-4" />
                </summary>

                <ul className="mt-3 ml-3 space-y-2 text-sm">
                  <li>• Washing Machine Repair</li>
                  <li>• Television Repair</li>
                  <li>• Refrigerator Repair</li>
                  <li>• Air Conditioner Repair</li>
                  <li>• Purifier Repair</li>
                  <li>• Laptop Repair</li>
                  <li>• Others</li>
                </ul>
              </details>
            </li>

            <li className="hover:text-blue-700 cursor-pointer" onClick={onDashboardClick}>
              Dashboard
            </li>

            <li>
              <a href="#testimonials">Happy Customers</a>
            </li>

            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:919685530890" className="underline">
                  91 96855 30890
                </a>
              </div>

              <button className="bg-[#0C1B33] text-white px-5 py-2 rounded-lg">
                Book Now
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}


