export default function ReliableServices() {
  return (
    <div className="bg-[#111827] text-white py-10 px-6 md:px-20 lg:px-32">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-5">
        Reliable Home Appliance Repair Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-10 gap-15 items-center">

        {/* LEFT TEXT SECTION */}
        <div className="md:col-span-7 leading-relaxed text-md text-gray-300 space-y-4">
          <p>
            We provide expert repair solutions for all major home appliances, including 
            washing machines, refrigerators, AC units, and televisions. Our certified and highly 
            trained technicians ensure fast, accurate, and long-lasting repairs, so your home 
            runs smoothly without any interruptions or stress.
            From quick diagnostics and precision fault detection to genuine parts replacement 
            and preventive maintenance — we take care of everything with complete professionalism 
            and care.
            Our goal is to bring comfort, convenience, and efficiency back to your home, ensuring 
            your appliances deliver optimal performance for years to come.
          
            With transparent pricing, doorstep service, timely support, and guaranteed customer 
            satisfaction, we make appliance servicing simple, reliable, and hassle-free.
          </p>

          <p>
            When you choose us, you choose quality you can trust and service you can rely on.
          </p>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="md:col-span-3 flex justify-center ">
          <img
            src="/reliableServices.png"
            alt="Reliable Repair Service Artwork"
            className="rounded-full"
          />
        </div>

      </div>
    </div>
  );
}
