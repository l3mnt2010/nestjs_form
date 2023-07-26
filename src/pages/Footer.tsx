import { logo } from "../components/TeamMember";

const Footer = () => {
  return (
    <div className="w-full mx-auto p-10 bg-gray-700 text-white">
      <div className="flex flex-col gap-5">
        <h1 className="w-full text-left uppercase font-bold text-xl">LOGO</h1>
        <p className="w-full text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim.
        </p>
        <div className="w-full flex justify-around py-1 bg-orange-300 my-5 sm:bg-gray-700 sm:w-1/2">
          {logo.map((itm) => (
            <div className="">
              <img
                className="w-1/3 shadow-sm border-2 bg-white sm:w-1/2"
                src={itm}
                alt="this is logo"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="w-full text-left uppercase font-bold text-xl">
          quick link
        </h1>

        <div className="w-full text-left flex flex-col underline gap-1">
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Screenshot</a>
          <a href="">Blog</a>
        </div>

        <div className="w-full my-5">
          <h1 className="w-full text-left font-bold text-xl uppercase">
            news letter
          </h1>
          <p className="w-full text-left ">
            Subscribe our newsletter to get our latest update & news
          </p>
        </div>
        <input
          className="w-full px-10 h-9 border-2 border-orange-400 sm:bg-gray-700 sm:w-1/2"
          placeholder="Sent your email to us :3"
        />
        <input
          className="bg-blue-600 w-1/4 mx-auto sm:ml-10 sm:w-12 p-1"
          type="submit"
        />
        <div className="w-full flex gap-10">
          <img src="" alt="" />
          <p>Copyright 2021 .Ojjomedia. All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
