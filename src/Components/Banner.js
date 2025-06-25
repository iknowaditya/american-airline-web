import React from "react";

function Banner() {
  return (
    <div className="">
      <div className="flex bg-neutral-300 h-16 py-1 items-center justify-center">
        <h1 className="text-3xl font-semibold leading-tight ">
          Flight Changes Without Additional Charges
        </h1>
      </div>
      <div className="items-center mt-8 px-4">
        <p className="text-center text-sm leading-5 text-neutral-500">
          Please be aware that we strictly adhere to the 24-hour free ticket
          change and cancellation policy.
          <br />
          <br />
          If you want to change your current flight schedule, or you move to the
          new flight schedule, or changing the date, etc. and you are
          responsible for paying the applicable fare difference.
        </p>
      </div>
    </div>
  );
}

export default Banner;
