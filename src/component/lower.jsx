import React from "react";


const ExampleGrid = () => {
  return (
    <div className="p-4">
      {/* Grid container for overall layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Logo Grid */}
        <div className="flex justify-center items-center mb-[200px]">
          <img
            src="./image/maharaju.png"
            alt="Logo"
            className="w-[600px] h-[300px]"
          />{" "}
          {/* Adjust the path and size */}
        </div>

        {/* Contact Information Grid */}
        <div className="p-4 max-w-2xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-4 mt-[50px]">Contact Us</h2>

          {/* Sales Contact */}
          <div className="flex items-center mb-2">
            <i className="fas fa-phone mr-2 text-blue-600"></i>
            <strong>Sales:</strong> <span>+917799988139</span>
          </div>

          {/* HR Contact */}
          <div className="flex items-center mb-2">
            <i className="fas fa-phone mr-2 text-blue-600"></i>
            <strong>HR:</strong> <span>+91 8341534663, +91 7799988136</span>
          </div>

          {/* Email Contact */}
          <div className="flex items-center mb-2">
            <i className="fas fa-envelope mr-2 text-blue-600"></i>
            <strong>Email:</strong>
            <div className="ml-2">
              <span>info@maharajuhealthcare.com</span>
              <br />
              <span>Sales@clyptus.com</span>
            </div>
          </div>

          {/* Address Contact */}
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt mr-2 text-blue-600"></i>
            <strong>Address:</strong>
            <div className="ml-2">
              <span>
                Aditya Trade Center, 6th Floor, 604C, Hyderabad, Telangana
                500016
              </span>
            </div>
          </div>
        </div>

        {/* Map Grid */}
        <div className="flex justify-center items-center lg:col-span-1 mt-4 lg:mt-[550px] pl-[50px] pr-[150px]">
          <div className="mt-[-550px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4829240619465!2d78.44391147462801!3d17.436585201387054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e351b9cdeb%3A0x935c63c6ac6bf3a3!2sMaharaju%20Healthcare%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1729884332605!5m2!1sen!2sin"
              width="150%"
              height="450px"
              style={{ border: 0 }} // Change to style={{ border: 0 }} for React
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md" // Add Tailwind CSS classes for styling
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleGrid;
