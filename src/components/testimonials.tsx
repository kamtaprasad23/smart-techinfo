export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 bg-white text-black w-full">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6">
          Our Happy Customers and their Reviews
        </h2>

        <p className="text-gray-600 leading-relaxed text-center max-w-3xl mb-10">
          Our customers are at the heart of everything we do, and their satisfaction
          is our greatest reward. Each review reflects the trust they place in us
          and the experience they enjoy through our dedicated service.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div
            className="
              rounded-xl overflow-hidden shadow bg-white 
              transition-all duration-300 
              hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
            "
          >
            <img
              src="https://www.shutterstock.com/image-photo/happy-cute-latin-teenage-student-260nw-2438190507.jpg"
              alt="Customer"
              className="
                w-full h-64 object-cover 
                transition-all duration-500 
                hover:scale-110
              "
            />
          </div>

          {/* Card 2 */}
          <div
            className="
              rounded-xl overflow-hidden shadow bg-white 
              transition-all duration-300 
              hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
            "
          >
            <img
              src="https://media.istockphoto.com/id/1332358775/photo/young-couple-shaking-hands-deal-contract-real-estate-investment-business-agreement-agent.jpg?s=612x612&w=0&k=20&c=tADtuQ9F_eKe_hMH0k5Ldg7N4p5BojisWf2n-jXar_I="
              alt="Happy Customer"
              className="
                w-full h-64 object-cover 
                transition-all duration-500 
                hover:scale-110
              "
            />
          </div>

          {/* Card 3 */}
          <div
            className="
              rounded-xl overflow-hidden shadow bg-white 
              transition-all duration-300 
              hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
            "
          >
            <img
              src="https://www.searchenginejournal.com/wp-content/uploads/2023/01/customer-reviews-63d8b1a454172-sej.png"
              alt="Customer Review"
              className="
                w-full h-64 object-cover 
                transition-all duration-500 
                hover:scale-110
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}
