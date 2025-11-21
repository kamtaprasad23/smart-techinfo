import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0C1B33] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              alt="Smart Service"
              className="w-12 h-12 rounded-full bg-white"
            />
            <h2 className="text-xl font-semibold text-white">Smart Service</h2>
          </div>

          <p className="text-sm leading-relaxed">
            Professional home appliance and
            electronics repair services.
            <br />
            Quality assured, trusted by
            thousands.
          </p>

          <div className="flex items-center gap-4 mt-4 md:hidden">
            <a href="#" className="hover:text-white" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-white">About Us</li>
            <li className="cursor-pointer hover:text-white">Our Services</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-white">Washing Machine</li>
            <li className="cursor-pointer hover:text-white">Refrigerator</li>
            <li className="cursor-pointer hover:text-white">Air Conditioner</li>
            <li className="cursor-pointer hover:text-white">Television</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>

          <div className="flex items-center gap-3 mb-2">
            <Phone className="w-4 h-4" />
            <span>+9196855 30890</span>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <Mail className="w-4 h-4" />
            <span>info@smartservice.com</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">
              123 Service Street, Mumbai,<br /> India
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left">
            © 2025 Smart Service. All rights reserved.
          </p>
          <div className="hidden md:flex items-center gap-4">
              <a href="#" className="hover:text-white" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
