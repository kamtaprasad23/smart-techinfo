"use client";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Home,
  Clock,
  FileText,
  CalendarDays,
  ArrowLeft,
} from "lucide-react";
import ThankYouPage from "@/src/components/thankyouPage";

// Reusable Booking Summary
function BookingSummary() {
  return (
    <div className="col-span-1 p-6 border border-gray-300 rounded-xl shadow space-y-5">
      <h2 className="text-3xl mb-2">Booking Summary</h2>

      {/* SERVICE DROPDOWN */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Service</label>
        <select className="w-full p-3 border border-gray-300 rounded-md">
          <option>Select Service</option>
          <option>AC Repair</option>
          <option>TV Repair</option>
          <option>Geyser Repair</option>
        </select>
      </div>

      <hr className="border-gray-300" />

      {/* ADDRESS */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Service Address</label>
        <textarea
          rows={3}
          className="w-full p-3 border border-gray-300 rounded-md resize-none"
          placeholder="Enter your address"
        ></textarea>
      </div>

      <hr className="border-gray-300" />

      {/* SERVICE & VISIT CHARGE */}
      <div className="flex justify-between items-center">
        <span className="text-xl font-medium">Service Charge</span>
        <span className="text-green-600 font-bold text-lg">₹499</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-xl font-medium">Visit Charge</span>
        <span className="text-green-600 font-bold text-lg">₹149</span>
      </div>

      <hr className="border-gray-300" />

      {/* TOTAL */}
      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>₹648</span>
      </div>

      <div className="p-3 border border-green-500 rounded-md mt-10 bg-green-50 text-green-700 text-sm">
        3 Months Warranty on All Repairs
      </div>
    </div>
  );
}

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div className="min-h-screen p-6 bg-white text-black">
      <h1 className="text-4xl font-bold text-center mb-8 mt-8">
        Book Your Service
      </h1>

      {/* TOP STEPS TRACK */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10">
        {[1, 2, 3].map((no, idx) => (
          <div key={no} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold ${
                step >= no ? "bg-[#202a3a] text-white" : "bg-gray-300"
              }`}
            >
              {no}
            </div>

            {idx < 2 && (
              <div
                className={`h-1 w-12 sm:w-20 ${
                  step >= no + 1 ? "bg-[#0C1B33]" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FORM 2/3 */}
          <div className="col-span-2 p-5 md:p-10 border border-gray-300 rounded-xl shadow space-y-6">
            <h2 className="text-3xl mb-4">Personal Details</h2>

            {[
              { icon: User, label: "Full Name", type: "text" },
              { icon: Mail, label: "Email Address", type: "email" },
              { icon: Phone, label: "Phone Number", type: "text" },
            ].map((field) => (
              <div key={field.label}>
                <label className="flex items-center gap-2 mb-1 font-medium">
                  <field.icon className="w-5 h-5 text-gray-600" />
                  {field.label}
                </label>
                <input
                  type={field.type}
                  className="w-full md:w-2/3 border border-gray-300 rounded-lg px-3 py-2 outline-none bg-gray-100"
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                />
              </div>
            ))}

            {/* ADDRESS */}
            <div>
              <label className="flex items-center gap-2 mb-1 font-medium">
                <Home className="w-5 h-5 text-gray-600" />
                Service Address
              </label>
              <input
                type="text"
                className="w-full md:w-2/3 h-40 border border-gray-300 rounded-lg px-3 py-2 outline-none bg-gray-100"
                placeholder="Enter service address"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button disabled className="flex px-6 py-3 rounded-lg opacity-40 cursor-not-allowed">
                <ArrowLeft />
                Back
              </button>
              <button
                onClick={() => setStep(2)}
                className="bg-[#0C1B33] text-white px-6 py-3 rounded-lg"
              >
                Continue
              </button>
            </div>
          </div>

          <BookingSummary />
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 p-5 md:p-10 border border-gray-300 rounded-xl shadow space-y-8">
            <h2 className="text-3xl mb-4">Schedule Service</h2>

            {/* DATE */}
            <div>
              <label className="flex items-center gap-2 mb-2 font-medium">
                <CalendarDays className="w-5 h-5 text-gray-600" />
                Select Date
              </label>
              <input
                type="date"
                className="w-full md:w-2/3 border border-gray-300 rounded-lg px-3 py-2 outline-none bg-gray-100"
              />
            </div>

            {/* TIME SLOTS */}
            <div>
              <label className="flex items-center gap-2 mb-2 font-medium">
                <Clock className="w-5 h-5 text-gray-900" />
                Select Time Slot
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-2/3">
                {[
                  "9:00 AM – 11:00 AM",
                  "11:00 AM – 1:00 PM",
                  "1:00 PM – 3:00 PM",
                  "3:00 PM – 5:00 PM",
                  "5:00 PM – 7:00 PM",
                ].map((slot) => (
                  <button
                    key={slot}
                    className="border rounded-lg px-4 py-3 border-gray-300"
                  >
                    {slot}
                  </button>
                ))}

                <button className="px-4 py-3 rounded-lg bg-[#0C1B33] text-white font-medium">
                  Check Availability
                </button>
              </div>
            </div>

            {/* ISSUE DESCRIPTION */}
            <div>
              <label className="flex items-center gap-2 mb-2 font-medium">
                <FileText className="w-5 h-5 text-gray-600" />
                Describe Issue (Optional)
              </label>

              <textarea
                rows={5}
                className="w-full md:w-2/3 border border-gray-300 rounded-lg px-3 py-2 outline-none bg-gray-100 resize-none"
                placeholder="Describe the issue you're facing"
              ></textarea>

              <button className="mt-3 px-5 py-3 bg-[#0C1B33] text-white rounded-lg">
                Click a Picture
              </button>
            </div>

            <div className="flex justify-between mt-10">
              <button
                onClick={() => setStep(1)}
                className="flex px-6 py-3 rounded-lg"
              >
                <ArrowLeft />
                Back
              </button>

              <button
                onClick={() => setStep(3)}
                className="bg-[#0C1B33] text-white px-6 py-3 rounded-lg"
              >
                Continue
              </button>
            </div>
          </div>

          <BookingSummary />
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 p-5 md:p-10 border border-gray-300 rounded-xl shadow space-y-10">
            <h2 className="text-3xl mb-4">Payment Method</h2>

            {["cash", "online"].map((method) => (
              <button
                key={method}
                onClick={() => setPaymentMethod(method)}
                className="w-full md:w-2/3 flex items-start gap-3 px-5 py-4 rounded-lg border border-gray-300"
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 mt-4 ${
                    paymentMethod === method
                      ? "border-[#0C1B33] bg-[#0C1B33]"
                      : "border-gray-600"
                  }`}
                ></div>

                <div>
                  <p className="font-semibold text-lg flex justify-start">
                    {method === "cash" ? "Cash on Service" : "Pay Online"}
                  </p>
                  <p className="text-sm text-gray-600">
                    {method === "cash"
                      ? "Pay after service completion"
                      : "UPI, Cards, Net Banking"}
                  </p>
                </div>
              </button>
            ))}

            {/* SECURED PAYMENT BOX */}
            <div className="ml-0 md:ml-7 mt-2 w-full md:w-auto flex justify-center h-14 border border-dashed border-blue-400 bg-blue-50 text-blue-700 p-2 rounded-md text-xs">
              Secured Payment by Smart Assured
            </div>

            <div className="flex justify-between mt-10">
              <button
                onClick={() => setStep(2)}
                className="flex px-6 py-3 rounded-lg"
              >
                <ArrowLeft />
                Back
              </button>

              <button className="bg-[#0C1B33] text-white px-6 py-3 rounded-lg">
                Continue
              </button>
            </div>
          </div>

          <BookingSummary />
        </div>
      )}

      <div className="mt-20">
        <ThankYouPage />
      </div>
    </div>
  );
}
