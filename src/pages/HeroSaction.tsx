import { useState, useEffect } from "react";
import PrApp from "./PrApp";
import menu from "../assets/images/menu-line.png";
import logo from "../assets/images/Logo4 1.png";
import Menu from "../components/Menu";

const HeroSaction: React.FC<any> = (props) => {
  const [native, isNative] = useState(false);
  const setNative = () => {
    isNative(false);
  };
  const isClose = () => {
    isNative(true);
  };
  useEffect(() => {}, [isNative]);

  return (
    <div className="bg-purple-500">
      <div className="sticky w-5/6 mx-auto top-5 shadow-xl flex items-center justify-between z-50 bg-white sm:w-5/6 sm:mx-auto">
        <img
          src={menu}
          alt="this is menu icon"
          className="w-9 pl-2 py-1"
          onClick={setNative}
        />
        <h1 className="hidden sm:block sm:font-bold hover:underline">About</h1>
        <h1 className="hidden sm:block sm:font-bold hover:underline">
          Features
        </h1>
        {!native && <Menu onClose={isClose} />}
        <img className="w-40 ml-3" src={logo} alt="this is logo" />
        <h1 className="hidden sm:block sm:font-bold hover:underline">
          Screenshot
        </h1>
        <h1 className="hidden sm:block sm:font-bold hover:underline">Blog</h1>
        <button className="font-bold text-white h-full rounded-lg px-1 py-1 my-2 bg-blue-600 ring-inherit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3">
          Download
        </button>
      </div>
      <PrApp />
    </div>
  );
};

export default HeroSaction;
