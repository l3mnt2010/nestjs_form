import React from "react";
import appscreen from "../assets/images/App Screen.png";
import slider from "../assets/images/Slider.png";

const AppScreensort = () => {
  return (
    <div className="w-full shadow-2xl flex flex-col my-20 gap-7 sm:w-2/3 sm:mx-auto">
      <h1 className="w-full text-center font-bold text-xl shadow-sm">
        Checkout Our App Interface Look
      </h1>
      <p className="w-full text-center font-bold p-11 shadow-xl sm:shadow-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </p>
      <img className="sm:w-1/2 sm:mx-auto" src={appscreen} />
      <img className="w-1/3 mx-auto sm:w-1/6 sm:mx-auto" src={slider} />
    </div>
  );
};

export default AppScreensort;
