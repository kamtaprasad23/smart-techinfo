"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

export default function Navbar({
  onDashboardClick,
}: {
  onDashboardClick: () => void;
}) {

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // GSAP Refs
  const navbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const phoneRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLAnchorElement>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // GSAP Animations
  useEffect(() => {
    if (!mounted) return;

    if (!navbarRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Navbar Fade-In
    tl.from(navbarRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.7,
    });

    // Logo Slide-In
    if (logoRef.current) {
      tl.from(logoRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.6,
      });
    }

    // Menu Items Stagger
    if (menuItemsRef.current.length) {
      gsap.from(menuItemsRef.current, {
        opacity: 0,
        y: 15,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      });
    }

    // Phone + Book Now Button
    if (phoneRef.current && bookRef.current) {
      gsap.from([phoneRef.current, bookRef.current], {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.6)",
      });
    }

  }, [mounted]);

  // Mobile Menu Animation
  useEffect(() => {
    if (!mounted) return;
    if (!open || !mobileMenuRef.current) return;

    gsap.fromTo(
      mobileMenuRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
    );

  }, [open, mounted]);

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

  // Close services dropdown when main closes
  useEffect(() => {
    if (!open) setServiceOpen(false);
  }, [open]);


  return (
    <nav ref={navbarRef} className="w-full bg-white text-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <Link href="/">
          <img
            ref={logoRef}
            src="/LOGO1.png"
            className="w-14 h-14"
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

          <li ref={(el) => { if (el) menuItemsRef.current[0] = el; }}>
            <Link href="/">Home</Link>
          </li>

          {/* ⚡ Services dropdown removed + navigation added */}
          <li
            ref={(el) => { if (el) menuItemsRef.current[1] = el; }}
            className="cursor-pointer hover:text-blue-700"
          >
            <Link href="/services">Services</Link>
          </li>

          <li
            ref={(el) => { if (el) menuItemsRef.current[2] = el; }}
            className="hover:text-blue-700 cursor-pointer"
            onClick={onDashboardClick}
          >
            Dashboard
          </li>

          <li ref={(el) => { if (el) menuItemsRef.current[3] = el; }}>
            <a href="#testimonials">Happy Customers</a>
          </li>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-6">
          <div ref={phoneRef} className="flex items-center gap-1 text-gray-700">
            <Phone className="w-4 h-4" />
            <a href="tel:919685530890" className="underline">
              91 96855 30890
            </a>
          </div>

          <Link
            ref={bookRef}
            href="/Book"
            className="bg-[#0C1B33] text-white px-5 py-2 rounded-lg inline-block"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle mobile menu"
          aria-expanded={open}
        >
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

            {/* ⚡ Mobile Services dropdown removed + navigation added */}
            <li className="hover:text-blue-700 cursor-pointer">
              <Link href="/services">Services</Link>
            </li>

            <li onClick={onDashboardClick} className="hover:text-blue-700 cursor-pointer">
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

              <Link 
                href="/Book"
                className="bg-[#0C1B33] text-white px-5 py-2 rounded-lg inline-block"
              >
                Book Now
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
