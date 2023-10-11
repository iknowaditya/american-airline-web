import React from "react";
import img1 from "../Assets/email.png";
import img2 from "../Assets/service.png";

function Contact() {
  return (
    <div className="justify-between items-center max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="flex justify-between items-center  bg-neutra h-12  ">
        <h1 className="text-3xl font-semibold leading-tight flex items-center">
          <img src={img1} alt="" className="w-28 h-20  " />
          support@americanairline.co.in
        </h1>
        <h1 className="text-3xl font-semibold leading-tight flex items-center">
          <img src={img2} alt="" className="w-20 h-20  " />
          +1 (307) 200-4912
        </h1>
      </div>
    </div>
  );
}

export default Contact;

// sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24
