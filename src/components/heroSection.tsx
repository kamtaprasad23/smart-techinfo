import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto px-6 text-white">
        <h1 className="text-4xl font-bold leading-tight">
          Get your appliances fixed fast,
          <br />
          trusted experts at your door
          <br />
          in just <span className="text-blue-300">2 hours</span>
        </h1>

        <div className="flex gap-4 mt-6">

          <Link href="/Book">
            <button className="bg-[#0C1B33] px-6 py-3 rounded-xl text-white font-semibold border border-white cursor-pointer 
              transition-all duration-300 hover:bg-[#16294d] hover:shadow-lg hover:scale-105 active:scale-95">
              Book Now
            </button>
          </Link>

          <Link href="/contact">
            <button className="bg-transparent border border-white px-6 py-3 rounded-xl text-white cursor-pointer 
              transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg hover:scale-105 active:scale-95">
              Enquire Now
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}
