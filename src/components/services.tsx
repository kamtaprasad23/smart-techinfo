const servicesData = [
  {
    id: 1,
    title: "Washing Machine",
    subtitle: "Repair",
    image: "https://whirlpoolindia.vtexassets.com/arquivos/ids/167790/Xpert-care-Silver-lid-open-7kg_1500x1500.jpg?v=638731268018600000",
  },
  {
    id: 2,
    title: "Television",
    subtitle: "Repair",
    image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Television/Images/304445_0_luf86t.png",
  },
  {
    id: 3,
    title: "Air Conditioner",
    subtitle: "Repair",
    image: "https://i0.wp.com/acs-installations.co.uk/wp-content/uploads/2022/03/Air-vs-water-cooled-ac-2-1024x536.png",
  },
  {
    id: 4,
    title: "Refrigerator",
    subtitle: "Repair",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbfjuUjNuBL61CJzdR-tdyjsy952-D-yUGg&s",
  },
  
];

export default function Services() {
  return (
    <section id="services" className="w-full text-black py-16 bg-white">
      
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-lg text-gray-600 mt-2">
          Professional repair services for all major appliances
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {servicesData.map((item) => (
          <div 
            key={item.id}
            className="rounded-2xl shadow-lg shadow-gray-400 p-4 transition hover:scale-105 duration-300"
          >
            <img src={item.image} alt={item.title} className="w-full h-56 object-contain" />
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-500 -mt-1">{item.subtitle}</p>

            <button className="mt-3 w-full bg-[#0C1B33] text-white py-2 rounded-xl hover:bg-blue-900">
              Book Now
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}
