interface Recent {
  img: string;
  text: string;
}

const RecentPost: React.FC<Recent> = (props) => {
  return (
    <div className="w-full">
      <div>
        <img className="w-full" src={props.img} />
        <p className="w-5/6 mx-auto">{props.text}</p>
      </div>
    </div>
  );
};

export default RecentPost;
