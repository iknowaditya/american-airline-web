import React from "react";
import logo from "../Assets/aa-logo.png";
import service from "../Assets/customer.png";

function Nav() {
  return (
    <nav className="text-white mt-4 px-6 sm:px-8 lg:px-16 xl:px-20 flex items-center justify-between">
      <img
        src={logo}
        alt="airplane logo"
        className="w-[12rem] h-auto sm:w-[14rem] lg:w-[16rem] xl:w-[18rem]"
      />

      <div className="flex items-center">
        <img
          src={service}
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mr-4"
        />

        <a
          className="text-base sm:text-xl lg:text-2xl xl:text-3xl py-2 leading-none text-neutral-800 "
          href="/"
        >
          +1 (307) 200-4912
        </a>
      </div>
    </nav>
  );
}

export default Nav;
