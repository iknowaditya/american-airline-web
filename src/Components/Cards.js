import React from "react";

function Cards() {
  return (
    <div>
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div class="flex items-center justify-center">
          <h1 class="text-5xl font-semibold leading-tight mb-10">
            New Bookings, Changes & Cancellations
          </h1>
        </div>
        <h1 className="text-3xl mb-8 font-medium">Travel Updates</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <div class="rounded overflow-hidden shadow-lg">
            <div class="relative">
              <a href="/">
                <img
                  class="w-full"
                  src="https://images.pexels.com/photos/4436363/pexels-photo-4436363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sunset in the mountains"
                />
                <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div class="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Photos
                </div>
              </a>

              <a href="!#">
                <div class="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  <span class="font-bold">27</span>
                  <small>March</small>
                </div>
              </a>
            </div>
            <div class="px-6 py-4">
              <a
                href="/"
                class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                Best rates on new reservations
              </a>
              <p class="text-gray-500 text-sm">
                Call us for the most competitive prices and special offers on
                your future domestic or international travel.
              </p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
              <span
                href="/"
                class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <span class="ml-1">6 mins ago</span>
              </span>
            </div>
          </div>
          <div class="rounded overflow-hidden shadow-lg">
            {/* <a href="#"></a> */}
            <div class="relative">
              <a href="/">
                <img
                  class="w-full"
                  src="https://images.pexels.com/photos/2574078/pexels-photo-2574078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sunset in the mountains"
                />
                <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div class="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Photos
                </div>
              </a>

              <a href="!#">
                <div class="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  <span class="font-bold">20</span>
                  <small>March</small>
                </div>
              </a>
            </div>
            <div class="px-6 py-4">
              <a
                href="/"
                class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                Flight Changes
              </a>
              <p class="text-gray-500 text-sm">
                Plan changes, we understand; there are not any worries Give us a
                call, and we'll get you the best deals on modifying your
                airline tickets.
              </p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
              <span
                href="#"
                class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
              >
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                    </g>
                  </g>
                </svg>
                <span class="ml-1">3 mins read</span>
              </span>
            </div>
          </div>
          <div class="rounded overflow-hidden shadow-lg">
            {/* <a href="/"></a> */}
            <div class="relative">
              <a href="/">
                <img
                  class="w-full"
                  src="https://images.pexels.com/photos/3943882/pexels-photo-3943882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sunset in the mountains"
                />
                <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div class="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Photos
                </div>
              </a>

              <a href="!#">
                <div class="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  <span class="font-bold">15</span>
                  <small>April</small>
                </div>
              </a>
            </div>
            <div class="px-6 py-4">
              <a
                href="/"
                class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                Flight Cancellations
              </a>
              <p class="text-gray-500 text-sm">
                You can request a refund if your plans change and you purchased
                a refundable ticket. Please remember to modify or cancel your
                flight before departure.{" "}
              </p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
              <span
                href="#"
                class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
              >
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                    </g>
                  </g>
                </svg>
                <span class="ml-1">6 mins read</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
