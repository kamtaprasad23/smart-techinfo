"use client";

import { Phone,ChevronDown} from "lucide-react";
import Link from "next/link";

export default function Navbar({ onDashboardClick }: { onDashboardClick: () => void }) {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <Link href="/">
          <img src="/logo.png" className="w-20" />
        </Link>

        <ul className="flex items-center gap-10 text-gray-700 font-medium">
          <li><Link href="/">Home</Link></li>

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

          {/* Dashboard → Login Popup */}
          <li className="hover:text-blue-700 cursor-pointer" onClick={onDashboardClick}>
            Dashboard
          </li>

          <li><a href="#testimonials">Happy Customers</a></li>
        </ul>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 text-gray-700">
            <Phone className="w-4 h-4" />
            <a href="tel:919685530890" className="underline">91 96855 30890</a>
          </div>

          <button className="bg-[#0C1B33] text-white px-5 py-2 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
