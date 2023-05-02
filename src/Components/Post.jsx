import Image from "../assets/Guess Which Stars Have Never Attended The Met Gala.png";
function Post(props) {
  return (
    <>
      <div className="columns container is-shadow">
        <div className="column is-3">
          <img src={props.url} alt="" style={{ height: "100%" }} />
        </div>
        <div className="column">
          <p className="is-size-5 text-align-center mb-2">{props.title}</p>
          <p>{props.description}</p>
          <a href="">Read More....</a>
        </div>
      </div>
    </>
  );
}

export default Post;
