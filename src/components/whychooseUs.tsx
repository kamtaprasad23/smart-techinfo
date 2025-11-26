export default function WhyChooseUs() {
  const items = [
    { icon: "🏅", title: "Quality Assured", desc: "Where Quality Meets Reliability" },
    { icon: "📅", title: "Same Day Service", desc: "Your Problem Solved Today" },
    { icon: "🧑‍🔧", title: "Expert Technicians", desc: "Handled by Industry Experts" },
    { icon: "🔧", title: "All Brands", desc: "Expert Repairs for Every Brand" },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose Us</h2>
        <p className="text-lg text-gray-500 mt-2">Experience the best service in the industry</p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="
              bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center border shadow-gray-300
              transition-all duration-300 cursor-pointer
              hover:shadow-2xl hover:-translate-y-2 hover:border-gray-400
              hover:scale-[1.03]
            "
          >
            {/* Icon Animation */}
            <div
              className="
                text-5xl mb-4 transition-all duration-300
                group-hover:scale-125 group-hover:rotate-3
                hover:text-blue-700
              "
            >
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-800 transition-all duration-300 group-hover:text-blue-800">
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm mt-2 transition-all duration-300 group-hover:text-gray-700">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
