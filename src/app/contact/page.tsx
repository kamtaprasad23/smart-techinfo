import ThankYouPage from "@/src/components/thankyouPage";
import {
  Phone,
  Mail,
  MessageSquare,
  ChevronDown,
  User,
  PencilLine,
} from "lucide-react";

export default function Page() {
  const faqs = [
    "How do I reset my password?",
    "How can I contact customer service?",
    "How do I update my profile?",
    "How can I change my subscription?",
    "How do refunds work?",
    "How do I manage notifications?",
    "Where can I download invoice?",
    "How to delete my account?",
    "Can I track my order?",
    "How do I update app settings?",
  ];

  return (
    <div className="min-h-screen p-6 bg-white text-black">

      {/* Page Heading */}
      <h1 className="text-5xl font-bold text-center my-8">
        Help & Support
      </h1>

      <p className="text-gray-600 text-lg text-center p-3">
        We're here to help! Find answers to common questions or reach out to our support team.
      </p>

      {/* Support Cards */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="w-80 mx-auto rounded-2xl shadow-xl bg-gradient-to-br from-[#11202D] to-[#2D5679]
                        text-white p-6 flex flex-col items-center text-center">
          <Phone size={40} className="mb-4" />
          <h2 className="text-xl font-semibold mb-3">Call Support</h2>
          <p>Your service</p>
          <p>Partner anytime, anywhere</p>
          <p>Available 24/7</p>
          <h2 className="text-xl mt-5">+9196855 30890</h2>
        </div>

        {/* Card 2 */}
        <div className="w-80 mx-auto rounded-2xl shadow-xl bg-gradient-to-br from-[#11202D] to-[#2D5679]
                        text-white p-6 flex flex-col items-center text-center">
          <Mail size={40} className="mb-4" />
          <h2 className="text-xl font-semibold mb-3">Email Us</h2>
          <p>Support that's</p>
          <p>only an email away</p>
          <p>Available 24/7</p>
          <h2 className="text-xl mt-5">info@smartservice.com</h2>
        </div>

        {/* Card 3 */}
        <div className="w-80 mx-auto rounded-2xl shadow-xl bg-gradient-to-br from-[#11202D] to-[#2D5679]
                        text-white p-6 flex flex-col items-center text-center">
          <MessageSquare size={40} className="mb-4" />
          <h2 className="text-xl font-semibold mb-3">Live Chat</h2>
          <p>Connect with</p>
          <p>our experts in real time</p>
          <p>Available 24/7</p>
          <h2 className="text-xl mt-5">SMT</h2>
        </div>
      </div>

      {/* FAQ and Contact Form */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 p-5 rounded-xl">

        {/* FAQ Section (2/3 width) */}
        <div className="md:col-span-2 space-y-4 border border-gray-300 rounded p-6">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

          <div className="space-y-3">
            {faqs.map((q, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-4 rounded-xl bg-gray-100 cursor-pointer hover:bg-gray-200 transition"
              >
                <span className="text-sm md:text-base">{q}</span>
                <ChevronDown size={20} />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form (1/3 width) */}
        <div className="bg-white p-6 border border-gray-300 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Send us a Message</h2>

          {/* Name */}
          <label className="text-sm font-medium flex items-center gap-2">
            <User size={18} /> Full Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mt-1 mb-4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-gray-100"
          />

          {/* Email */}
          <label className="text-sm font-medium flex items-center gap-2">
            <Mail size={18} /> Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full mt-1 mb-4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-gray-100"
          />

          {/* Subject */}
          <label className="text-sm font-medium flex items-center gap-2">
            <PencilLine size={18} /> Subject
          </label>
          <input
            type="text"
            placeholder="Subject"
            className="w-full mt-1 mb-4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-gray-100"
          />

          {/* Message */}
          <label className="text-sm font-medium flex items-center gap-2">
            <MessageSquare size={18} /> Message
          </label>
          <textarea
            rows={4}
            placeholder="Write your message"
            className="w-full mt-1 mb-6 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 resize-none bg-gray-100"
          ></textarea>

         <span className="flex justify-end">
 {/* Send Button */}
          <button className="bg-[#11202D] text-white p-2 rounded-lg transition">
            Send
          </button>


         </span>
        </div>
      </div>

      {/* Common Issues Section */}
      <div className="mt-10">
        <h2 className="font-semibold text-[#11202D] text-5xl flex justify-center">
          Common Issues & Solutions
        </h2>

        <div className="w-full mt-12 bg-gradient-to-br from-[#11202D] to-[#2D5679]
                        rounded-xl p-8 text-white flex justify-between">

          {/* Issue Box 1 */}
          <div className="space-y-3 p-3">
            <h3 className="text-3xl">Booking Issues</h3>
            <p className="text-sm text-gray-400">
              Having trouble booking a service? <br />
              Make sure you have logged in and all required <br />
              fields are filled correctly.
            </p>

            <div className="text-xl mt-6">
              <p className="cursor-pointer hover:underline">Try booking again</p>
            </div>
          </div>

          {/* Issue Box 2 */}
          <div className="space-y-3 p-3">
            <h3 className="text-3xl">Payment Issues</h3>
            <p className="text-sm text-gray-400">
              Payment not going through? <br />
              Try a different payment method <br />
              or contact your bank for online <br />
              payment issues.
            </p>

            <div className="text-xl mt-6">
              <p className="cursor-pointer hover:underline">Contact support</p>
            </div>
          </div>

          {/* Issue Box 3 */}
          <div className="space-y-3 p-3">
            <h3 className="text-3xl">Booking Issues</h3>
            <p className="text-sm text-gray-400">
              Want to know the status of your booking? <br />
              Check your dashboard for real-time <br />
              updates and technician <br />
              details.
            </p>

            <div className="text-xl mt-6">
              <p className="cursor-pointer hover:underline">Go to dashboard</p>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Section */}
      <div className="mt-14">
        <ThankYouPage />
      </div>

    </div>
  );
}
