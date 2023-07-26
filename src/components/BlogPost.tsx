interface Blog {
  img: string;
  title: string;
  text: string;
}

const BlogPost: React.FC<Blog> = (props) => {
  return (
    <div className="w-full my-10 shadow flex flex-col gap-5">
      <img className="w-full h-auto rounded-t-lg" src={props.img} />
      <h1 className="w-full font-bold text-left text-xl">{props.title}</h1>
      <p className="w-full text-center">{props.text}</p>

      <a className="w-full text-left text-xl underline text-cyan-600">
        READ MORE
      </a>
    </div>
  );
};

export default BlogPost;
