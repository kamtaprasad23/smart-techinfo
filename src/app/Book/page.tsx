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

const serviceCharges: Record<string, number> = {
  "AC Repair": 499,
  "TV Repair": 399,
  "Geyser Repair": 349,
};

const visitCharge = 149;

function BookingSummary({
  service,
  address,
  onServiceChange,
}: {
  service: string;
  address: string;
  onServiceChange: (value: string) => void;
}) {
  const serviceCharge = service ? serviceCharges[service] : 0;
  const total = serviceCharge + visitCharge;

  return (
    <div className="col-span-1 p-6 border border-gray-300 rounded-xl shadow space-y-5">
      <h2 className="text-3xl mb-2">Booking Summary</h2>

      <div className="space-y-2">
        <label className="text-sm font-medium">Service</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-md"
          value={service}
          onChange={(e) => onServiceChange(e.target.value)}
        >
          <option value="">Select Service</option>
          <option value="AC Repair">AC Repair</option>
          <option value="TV Repair">TV Repair</option>
          <option value="Geyser Repair">Geyser Repair</option>
        </select>
      </div>

      <hr className="border-gray-300" />

      <div className="space-y-2">
        <label className="text-sm font-medium">Address</label>
        <textarea
          rows={3}
          className="w-full p-3 border border-gray-300 rounded-md resize-none"
          value={address}
          readOnly
        />
      </div>

      <hr className="border-gray-300" />

      <div className="flex justify-between items-center">
        <span className="text-xl font-medium">Service Charge</span>
        <span className="text-green-600 font-bold">₹{serviceCharge}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-xl font-medium">Visit Charge</span>
        <span className="text-green-600 font-bold">₹{visitCharge}</span>
      </div>

      <hr className="border-gray-300" />

      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <div className="p-3 border border-green-500 rounded-md mt-10 bg-green-50 text-green-700 text-sm">
        3 Months Warranty on All Repairs
      </div>
    </div>
  );
}

export default function BookPage() {
  const [step, setStep] = useState(1);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [issue, setIssue] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [done, setDone] = useState(false);

  const handleBookingSubmit = async () => {
    try {
      if (!fullName || !phone || !address || !service) {
        alert("Please fill name, phone, address, and select a service.");
        return;
      }

      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("service", service);
      formData.append("date", date);
      formData.append("timeSlot", timeSlot);
      formData.append("issue", issue);
      formData.append("paymentMethod", paymentMethod);

      if (photo) formData.append("photo", photo);

      const res = await fetch("http://localhost:5000/api/booking/create", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!result.success) {
        alert(result.message || "Booking failed.");
        return;
      }

      setDone(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  if (done) return <ThankYouPage />;

  return (
    <div className="min-h-screen p-6 bg-white text-black">
      <h1 className="text-4xl font-bold text-center mb-8 mt-8">
        Book Your Service
      </h1>

      {/* --- Step Progress Indicator --- */}
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

      {/* --- STEP 1 --- */}
      {step === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 p-5 md:p-10 border border-gray-300 rounded-xl shadow space-y-6">
            <h2 className="text-3xl mb-4">Personal Details</h2>

            <label className="flex items-center gap-2 mb-1 font-medium">
              <User className="w-5 h-5 text-gray-600" />
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full md:w-2/3 border border-gray-300 rounded-lg px-3 py-2 bg-gray-100"
            />

            <label className="flex items-center gap-2 mb-1 font-medium">
              <Mail className="w-5 h-5 text-gray-600" />
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-2/3 border border-gray-300 rounded-lg px-3 py-2 bg-gray-100"
            />

            <label className="flex items-center gap-2 mb-1 font-medium">
              <Phone className="w-5 h-5 text-gray-600" />
              Phone Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full md:w-2/3 border border-gray-300 rounded-lg px-3 py-2 bg-gray-100"
            />

            <label className="flex items-center gap-2 mb-1 font-medium">
              <Home className="w-5 h-5 text-gray-600" />
              Service Address
            </label>
            <textarea
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full md:w-2/3 border border-gray-300 rounded-lg px-3 py-2 bg-gray-100"
            />

            <div className="flex justify-between mt-6">
              <button disabled className="opacity-40 cursor-not-allowed">
                <ArrowLeft /> Back
              </button>

              <button
                onClick={() => setStep(2)}
                className="bg-[#0C1B33] text-white px-6 py-3 rounded-lg"
              >
                Continue
              </button>
            </div>
          </div>

          <BookingSummary
            service={service}
            address={address}
            onServiceChange={setService}
          />
        </div>
      )}

      {/* --- STEP 2 --- */}
      {step === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 p-5 md:p-10 border border-gray-300 rounded-xl shadow space-y-10">
            <h2 className="text-3xl mb-4">Schedule Service</h2>

            <label className="flex items-center gap-2 mb-2 font-medium">
              <CalendarDays className="w-5 h-5 text-gray-600" />
              Select Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full md:w-2/3 border border-gray-300 rounded-lg px-3 py-2 bg-gray-100"
            />

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
                  onClick={() => setTimeSlot(slot)}
                  className={`border rounded-lg px-4 py-3 border-gray-300 ${
                    timeSlot === slot ? "bg-[#0C1B33] text-white" : ""
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>

            <label className="flex items-center gap-2 mb-2 font-medium">
              <FileText className="w-5 h-5 text-gray-600" />
              Describe Issue (Optional)
            </label>
            <textarea
              rows={5}
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className="w-full md:w-2/3 border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 resize-none"
            ></textarea>

            <input
              type="file"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
              className="mt-2"
            />

            <div className="flex justify-between mt-10">
              <button
                onClick={() => setStep(1)}
                className="flex px-6 py-3 rounded-lg"
              >
                <ArrowLeft /> Back
              </button>

              <button
                onClick={() => setStep(3)}
                className="bg-[#0C1B33] text-white px-6 py-3 rounded-lg"
              >
                Continue
              </button>
            </div>
          </div>

          <BookingSummary
            service={service}
            address={address}
            onServiceChange={setService}
          />
        </div>
      )}

      {/* --- STEP 3 --- */}
      {step === 3 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 p-5 md:p-10 border border-gray-300 rounded-xl shadow space-y-10">
            <h2 className="text-3xl mb-6">Payment Method</h2>

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
                  <p className="font-semibold text-lg">
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

            <div className="flex justify-between mt-10">
              <button
                onClick={() => setStep(2)}
                className="flex px-6 py-3 rounded-lg"
              >
                <ArrowLeft /> Back
              </button>

              <button
                onClick={handleBookingSubmit}
                className="bg-[#0C1B33] text-white px-6 py-3 rounded-lg"
              >
                Submit Booking
              </button>
            </div>
          </div>

          <BookingSummary
            service={service}
            address={address}
            onServiceChange={setService}
          />
        </div>
      )}
    </div>
  );
}
