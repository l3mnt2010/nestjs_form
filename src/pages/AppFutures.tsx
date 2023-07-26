import Future from "../components/Futures";
import comment from "../assets/images/comment.png";
import browser from "../assets/images/browser.png";
import vector from "../assets/images/vector.png";
import cellphone from "../assets/images/cell-phone.png";
import eye from "../assets/images/eye-scanner 1.png";
import male_textmarker from "../assets/images/male-telemarketer.png";
import Futures from "../components/Futures";
import app from "../assets/images/App.png";

const img = [comment, browser, vector, cellphone, eye, male_textmarker];
const review = [
  {
    title: "Full free chat",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: comment,
  },
  {
    title: "unlimiter features",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: browser,
  },
  {
    title: "awsome ui design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: vector,
  },
];

const reviews = [
  {
    title: "riso & androind version",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: cellphone,
  },
  {
    title: "retina ready greaphics",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: eye,
  },
  {
    title: "24/7 support by real pepole",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: male_textmarker,
  },
];

const AppFutures = () => {
  return (
    <div className="shadow-xl mx-10 py-7 flex flex-col gap-7 bg-purple-400 sm:w-full sm:mx-auto">
      <h1 className="w-full text-center font-bold text-xl">AppFutures</h1>
      <p className="w-full text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </p>
      <div className="w-full sm:flex">
        {review.map((itm) => (
          <Futures title={itm.title} text={itm.text} img={itm.img} />
        ))}
        <img
          className="w-full flex justify-center items-center mx-4 sm:w-1/6"
          src={app}
          alt="đây là app của tôi"
        />
        {reviews.map((itm) => (
          <Future title={itm.title} text={itm.text} img={itm.img} />
        ))}
      </div>
    </div>
  );
};

export default AppFutures;
