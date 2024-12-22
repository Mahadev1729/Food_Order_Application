import React, { useContext } from "react";
import User from "./User";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-white to-green-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-10">
        {/* Title Section */}
        <h1 className="text-4xl font-extrabold text-green-600 mb-6 text-center">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
          Welcome to <span className="font-semibold text-green-700">Food Palace</span>,
          where your cravings meet convenience. Discover and order your favorite meals with ease and enjoy a seamless dining experience.
        </p>

        {/* Features Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Personalized Recommendations
              </h3>
              <p className="text-gray-600">
                Get meal suggestions tailored to your taste preferences.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Real-Time Tracking
              </h3>
              <p className="text-gray-600">
                Know exactly where your food is with our live tracking feature.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Exclusive Deals
              </h3>
              <p className="text-gray-600">
                Enjoy discounts and offers available only for our loyal users.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Secure Payments
              </h3>
              <p className="text-gray-600">
                Pay with confidence using our secure and hassle-free payment methods.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            At <span className="font-semibold text-green-700">Foodie Haven</span>, we believe food connects people and creates memories.
            Our mission is to make delicious meals accessible to everyone,
            delivering happiness one bite at a time.
          </p>
        </div>

        {/* User Section */}
        <div className="bg-green-100 p-6 rounded-lg shadow-sm mb-10 text-center">
          <h3 className="text-xl font-bold text-green-800 mb-2">
            Logged-In User
          </h3>
          <p className="text-lg text-gray-800 font-semibold">{loggedInUser}</p>
        </div>

        {/* User Component */}
        <User name={"Mahadev Athani"} />

        {/* Action Button */}
        <div className="mt-10 text-center">
          <button className="bg-green-500 text-white font-medium py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300">
            Explore Our Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
