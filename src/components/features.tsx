import { Headphones, Wrench, Home, CreditCard, House } from "lucide-react";

export default function Features() {
  return (
    <section className="py-10 bg-white text-black text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Item 1 */}
        <div
          className="
            group p-6 rounded-xl bg-white shadow-md 
            hover:shadow-2xl transition-all duration-300 
            hover:scale-105 cursor-pointer
          "
        >
          <Headphones
            className="
              w-12 h-12 mx-auto text-gray-700 
              transition-all duration-300 group-hover:text-blue-700
              group-hover:scale-110
            "
          />
          <h3 className="mt-4 text-xl font-semibold group-hover:text-blue-800 transition-all duration-300">
            24x7
          </h3>
          <p className="text-gray-600 group-hover:text-gray-800 transition-all duration-300">
            Customer Support
          </p>
        </div>

        {/* Item 2 */}
        <div
          className="
            group p-6 rounded-xl bg-white shadow-md 
            hover:shadow-2xl transition-all duration-300 
            hover:scale-105 cursor-pointer
          "
        >
          <Wrench
            className="
              w-12 h-12 mx-auto text-gray-700 
              transition-all duration-300 group-hover:text-blue-700
              group-hover:scale-110
            "
          />
          <h3 className="mt-4 text-xl font-semibold group-hover:text-blue-800 transition-all duration-300">
            Best Technicians
          </h3>
          <p className="text-gray-600 group-hover:text-gray-800 transition-all duration-300">
            Super Technical Support
          </p>
        </div>

        {/* Item 3 */}
        <div
          className="
            group p-6 rounded-xl bg-white shadow-md 
            hover:shadow-2xl transition-all duration-300 
            hover:scale-105 cursor-pointer
          "
        >
          <Home
            className="
              w-12 h-12 mx-auto text-gray-700 
              transition-all duration-300 group-hover:text-blue-700
              group-hover:scale-110
            "
          />
          <h3 className="mt-4 text-xl font-semibold group-hover:text-blue-800 transition-all duration-300">
            Eco Repair
          </h3>
          <p className="text-gray-600 group-hover:text-gray-800 transition-all duration-300">
            Minimize waste, maximize life
          </p>
        </div>

        {/* Item 4 */}
        <div
          className="
            group p-6 rounded-xl bg-white shadow-md 
            hover:shadow-2xl transition-all duration-300 
            hover:scale-105 cursor-pointer
          "
        >
          <CreditCard
            className="
              w-12 h-12 mx-auto text-gray-700 
              transition-all duration-300 group-hover:text-blue-700
              group-hover:scale-110
            "
          />
          <h3 className="mt-4 text-xl font-semibold group-hover:text-blue-800 transition-all duration-300">
            Smart Booking
          </h3>
          <p className="text-gray-600 group-hover:text-gray-800 transition-all duration-300">
            Quick. Simple. Secure
          </p>
        </div>

        {/* Item 5 */}
        <div
          className="
            group p-6 rounded-xl bg-white shadow-md 
            hover:shadow-2xl transition-all duration-300 
            hover:scale-105 cursor-pointer
          "
        >
          <House
            className="
              w-12 h-12 mx-auto text-gray-700 
              transition-all duration-300 group-hover:text-blue-700
              group-hover:scale-110
            "
          />
          <h3 className="mt-4 text-xl font-semibold group-hover:text-blue-800 transition-all duration-300">
            Service Visit
          </h3>
          <p className="text-gray-600 group-hover:text-gray-800 transition-all duration-300">
            Doorstep Repair Professionals
          </p>
        </div>

      </div>
    </section>
  );
}
