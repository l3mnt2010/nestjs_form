import android from "../assets/images/android-smartphone-free-mockup 1.png";
import About from "../components/About";

const AboutApp: React.FC<any> = () => {
  const review = [
    {
      title: "Creative design",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "easy to use",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Best user experince",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className=" w-5/6 mx-10 my-16 shadow-2xl sm:w-4/6 sm:mx-auto">
      <div className="w-full flex flex-col justify-around gap-5 ">
        <h1 className="mx-auto text-xl font-bold">About Our App</h1>
        <p className="w-full text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae.
        </p>
        <div className="w-full sm:flex sm:gap-10">
          <img className="mx-5 sm:w-1/3 sm:h-1/2" src={android} />
          <div className="w-full sm:w-1/3 sm:h-2/3">
            {review.map((itm) => {
              let text = itm.text;
              let title = itm.title;
              return <About title={title} text={text} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
