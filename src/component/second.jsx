import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FormAndCards() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation
    });
  }, []);

  return (
    <div className="max-w-[1150px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start justify-center w-full p-4 sm:p-6 md:p-8 mt-[5px] md:mt-[5px] lg:mt-[5px]">
        {/* Left Section - Form */}
        <div
          className="py-8 px-4 sm:px-6 md:py-10 md:px-8 lg:py-1 lg:px-[70px] border-b-2 lg:border-r-2 lg:border-b-0"
          data-aos="fade-up"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5 mt-1">
            Get in touch
          </h2>
          <div>
            <h1 className="text-base md:text-2xl font-semibold text-black pb-4">
              For Software Related Queries
            </h1>

            <form className="space-y-4">
              <label className="text-sm md:text-base">Full Name *</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-500 rounded-md h-10 sm:h-12 md:h-12 lg:h-12 focus:border-orange-500"
              />
              <label className="text-sm md:text-base">Email *</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-500 rounded-md h-10 sm:h-12 md:h-12 lg:h-12 focus:border-orange-500"
              />
              <label className="text-sm md:text-base">Mobile *</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-500 rounded-md h-10 sm:h-12 md:h-12 lg:h-12 focus:border-orange-500"
              />
              <label className="text-sm md:text-base">Select *</label>
              <select className="w-full p-2 border border-gray-500 rounded-md h-10 sm:h-12 md:h-12 lg:h-12 focus:border-orange-500 mt-6">
                {" "}
                {/* Changed mb-4 to mb-6 for more bottom margin */}
                <option value="option1">Sales</option>
                <option value="option2">HR</option>
              </select>
              <label className="text-sm md:text-base">Message *</label>
              <textarea
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md focus:border-orange-500"
              ></textarea>
              <button
                type="submit"
                className="w-full p-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-[blueviolet] h-10 sm:h-12 md:h-12 lg:h-12"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Right Section - Three Block-Level Cards */}
        <div
          className="space-y-4 p-4 sm:p-6 md:p-8 lg:p-[70px] max-h-screen"
          data-aos="fade-up"
        >
          {/* Card 1 */}
          <div className="p-4 border-2 border-gray-300 rounded-md shadow-md hover:border-orange-500 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <h3 className="text-lg font-medium mb-2 hover:text-orange-500 font-bold">
              Sales: +917799988139
            </h3>
            <h3 className="text-lg font-medium mb-2 hover:text-orange-500">
              HR: +91834153460, +918687678678
            </h3>
          </div>

          {/* Call Now Link */}
          <a
            href="tel:+1234567890"
            className="flex items-center justify-center space-x-2 text-lg font-semibold hover:text-blue-600 text-orange-600 hover:underline"
            data-aos="fade-up"
          >
            <h1>Call Now</h1>
            <span>→</span>
          </a>

          {/* Card 2 */}
          <div className="p-4 border-2 border-gray-300 rounded-md shadow-md hover:border-orange-500 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <h3 className="text-lg font-bold mb-2">E-Mail</h3>
            <p className="text-gray-600">Sales@clyptus.com</p>
            <p className="text-gray-600">hr.india@clyptus.com</p>
          </div>

          {/* Card 3 */}
          <div className="p-4 border-2 border-gray-300 rounded-md shadow-md hover:border-orange-500 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <h3 className="text-lg font-bold mb-2">Address</h3>
            <p className="text-gray-600">
              Aditya Trade Center, 6th Floor, 604C, Hyderabad, Telangana 500016
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
