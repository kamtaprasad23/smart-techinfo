import { Headphones, Wrench, Home, CreditCard, House } from "lucide-react";

export default function Features() {
  return (
    <section className="py-10 bg-white text-black text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Item 1 */}
        <div>
          <Headphones className="w-12 h-12 mx-auto text-gray-700" />
          <h3 className="mt-4 text-xl font-semibold">24x7</h3>
          <p className="text-gray-600">Customer Support</p>
        </div>

        {/* Item 2 */}
        <div>
          <Wrench className="w-12 h-12 mx-auto text-gray-700" />
          <h3 className="mt-4 text-xl font-semibold">Best Technicians</h3>
          <p className="text-gray-600">Super Technical Support</p>
        </div>

        {/* Item 3 */}
        <div>
          <Home className="w-12 h-12 mx-auto text-gray-700" />
          <h3 className="mt-4 text-xl font-semibold">Eco Repair</h3>
          <p className="text-gray-600">Minimize waste, maximize life</p>
        </div>

        {/* Item 4 */}
        <div>
          <CreditCard className="w-12 h-12 mx-auto text-gray-700" />
          <h3 className="mt-4 text-xl font-semibold">Smart Booking</h3>
          <p className="text-gray-600">Quick. Simple. Secure</p>
        </div>

        {/* Item 5 */}
        <div>
          <House className="w-12 h-12 mx-auto text-gray-700" />
          <h3 className="mt-4 text-xl font-semibold">Service Visit</h3>
          <p className="text-gray-600">Doorstep Repair Professionals</p>
        </div>
      </div>
    </section>
  );
}
