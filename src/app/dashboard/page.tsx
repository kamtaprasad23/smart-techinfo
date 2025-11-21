import React from "react";
import {
  Bell,
  Clock,
  Settings,
  LogOut,
  BookCopy,
  CheckCheck,
  Wallet,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 text-black">
      {/* Header */}
      <h2 className="text-2xl font-semibold">Welcome back</h2>
      <h1 className="text-3xl font-bold mt-1">User!</h1>

      {/* Stats Top Cards */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
          <div>
            <p className="text-gray-600">Total bookings</p>
            <h2 className="text-3xl font-bold">8</h2>
          </div>
          <BookCopy className="text-blue-500" size={28} />
        </div>
        <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
          <div>
            <p className="text-gray-600">Active bookings</p>
            <h2 className="text-3xl font-bold">3</h2>
          </div>
          <Clock className="text-yellow-500" size={28} />
        </div>
        <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
          <div>
            <p className="text-gray-600">Completed</p>
            <h2 className="text-3xl font-bold">1</h2>
          </div>
          <CheckCheck className="text-green-500" size={28} />
        </div>
        <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
          <div>
            <p className="text-gray-600">Money Saved</p>
            <h2 className="text-3xl font-bold">6</h2>
          </div>
          <Wallet className="text-indigo-500" size={28} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8">
        {/* Left Section - Bookings */}
        <div className="col-span-2 bg-white p-6 rounded-xl shadow">
          <div className="flex gap-6 border-b pb-3 mb-4">
            <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
              Active bookings
            </button>
            <button className="text-gray-500 font-semibold pb-1">Booking History</button>
          </div>

          {/* Booking card 1 */}
          <div className="border rounded-xl p-4 mb-4">
            <h3 className="font-bold text-lg">Washing machine Repair</h3>
            <p className="text-gray-600 text-sm mt-1">Samsung - Front Load</p>
            <ul className="list-disc ml-5 text-gray-700 text-sm mt-2">
              <li>Inspection</li>
              <li>Repair check</li>
              <li>Technician on the way</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
              Schedule
            </button>
          </div>

          {/* Booking card 2 */}
          <div className="border rounded-xl p-4">
            <h3 className="font-bold text-lg">AC Servicing</h3>
            <p className="text-gray-600 text-sm mt-1">Split AC | Cooling issue</p>
            <ul className="list-disc ml-5 text-gray-700 text-sm mt-2">
              <li>Gas check</li>
              <li>Outdoor unit wash</li>
              <li>Deep cleaning</li>
            </ul>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg">
              In Progress
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Profile card */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">User Name</h3>
            <p className="text-gray-600 text-sm">username@gmail.com</p>
            <div className="flex items-center gap-2 mt-3 text-green-600 font-semibold">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span> Active
            </div>
            <button className="flex items-center gap-2 text-red-600 font-medium mt-3">
              <LogOut size={18} /> Log Out
            </button>
          </div>

          {/* Quick actions */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">Quick actions</h3>
            <button className="block w-full text-left mt-4 text-blue-600 font-semibold">
              Book New Service
            </button>
            <button className="block w-full text-left mt-2 text-gray-700 font-medium">
              View All Services
            </button>
            <button className="block w-full text-left mt-2 text-gray-700 font-medium">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}