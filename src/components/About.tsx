import img from "../assets/images/checkbox-circle-fill.svg";
interface Abouts {
  title: string;
  text: string;
}

const style = { display: "grid", gridTemplateColumns: "20% 80%" };

const About: React.FC<Abouts> = (props) => {
  return (
    <div
      style={style}
      className="px-5 rounded-lg my-10 w-full grid grid-cols-2 border-2 border-cyan-50 shadow-md bg-pink-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3"
    >
      <div className="w-full h-full">
        <img className="" src={img} />
      </div>
      <div className="text-left bg-purple-100 shadow-xl">
        <h1 className="w-full content-start font-bold p-1">{props.title}</h1>
        <p className="sm:w-full md:w-full shadow-xl">{props.text}</p>
      </div>
    </div>
  );
};

export default About;
