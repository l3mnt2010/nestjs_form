import eslip from "../assets/images/Ellipse 16.png";
import image from "../assets/images/Image.png";
import videofill from "../assets/images/video-fill.png";

const UseApp = () => {
  return (
    <div className="relative top-20 w-full bg-blue-500 py-10 h-1/2 sm:h-96 sm:bg-white sm:shadow-sm sm:w-full mx-auto">
      <h1 className="w-full text-center font-bold text-xl">
        How to use the app perfectly
      </h1>
      <p className="w-full text-center p-5 sm:mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </p>
      <div className="relative lett-1/2">
        <img
          className="absolute -bottom-72 sm:w-1/3 sm:left-1/3 sm:top-1/4"
          src={image}
          alt="đây là bộ ảnh"
        />
        {/* <img
          className="absolute left-44 top-16 w-10"
          src={eslip}
          alt="đây là bộ ảnh"
        /> */}
        <img
          className="absolute left-48 w-8 top-20 z-50 sm:hidden"
          src={videofill}
          alt="đây là bộ ảnh"
        />
      </div>
    </div>
  );
};

export default UseApp;
