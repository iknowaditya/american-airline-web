import React from "react";

function Hero() {
  return (
    <div className="w-full px-6 sm:px-8 lg:px-16">
      <div className="relative h-screen text-white flex">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/11521658/pexels-photo-11521658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-start items-start text-center py-8 px-8 sm:py-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-2">
            Earn up to 30,000 Miles
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-100 mb-4">
            Additionally, your carry on bag is free on all American Airlines
            flights...
          </p>
          <a
            href="/"
            className="bg-neutral-800 text-gray-200 hover:bg-neutral-700 py-2 px-4 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
