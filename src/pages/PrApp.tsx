import topping1 from "../assets/images/toppng 1.png";
import topping2 from "../assets/images/PngItem_1144050 2.png";
import telephone from "../assets/images/Free Ui View Mobile App Mockup 1.png";

export const style = {
  backgroundColor: "#7572FF",
};

const PrApp: React.FC<any> = () => {
  return (
    <div className="w-full sm:w-5/6 sm:mx-auto sm:flex">
      <div className="w-2/3 mx-14 mt-28 h-1/2 flex flex-col justify-around gap-4 border-2 px-7 shadow-2xl py-1 border-purple-100 sm:w-2/3 sm:p-11 md:mb-10 md:w-1/3 md:mt-14">
        <h1 className=" text-2xl md:text-3xl  text-black font-bold">
          A Great App Makes Your Life Better
        </h1>
        <p className="sm:text-sm font-sans">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
        <h1 className="font-bold text-xl xl:text-2xl">Download App Now</h1>
        <div className="flex gap-5">
          <img className="w-1/2" src={topping1} />
          <img className="w-1/2" src={topping2} />
        </div>
      </div>
      <img src={telephone} className="w-2/3 mx-28 mt-9 sm:w-1/3" />
    </div>
  );
};

export default PrApp;
