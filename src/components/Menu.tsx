import remove from "../assets/images/Remove.png";
interface Menus {
  onOpen?: () => void;
  onClose: () => void;
}

const Menu: React.FC<Menus> = (props) => {
  return (
    <div className="z-50 w-max sm:p-5 absolute top-16 left-5 bg-cyan-200 font-bold text-sm p-0 sm:left-10 lg:left-20 grid grid-rows-4 gap-y-5 shadow-lg p-5">
      <img
        className="absolute right-1 w-4 h-4 "
        onClick={props.onClose}
        src={remove}
      />
      <div className="font-sans text-sm hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3">
        Home
      </div>
      <div className="font-sans text-sm hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3">
        Features
      </div>
      <div className="font-sans text-sm hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3">
        Screenshot
      </div>
      <div className="font-sans text-sm hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3">
        Blog
      </div>
    </div>
  );
};
export default Menu;
