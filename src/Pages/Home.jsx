import "bulma/css/bulma.min.css";
import Post from "../Components/Post";
import Image from "../assets/1xBet-app.webp";
import Imagesecond from "../assets/second.png";
import Imagethird from "../assets/third.png";
import Imagefourth from "../assets/fourth.png";
import Imagefifth from "../assets/fifth.png";
import ImageSixth from "../assets/sixth.png";
import ImageSeventh from "../assets/seven.png";

const data1 = [
  {
    title: "Proof Kendall Jenner and Bad Bunny Are Still Going Strong",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur.",
    Image: Imagesecond,
  },
  {
    title:
      "Kourtney Kardashian Accuses Kim of Using Her Wedding as Business Move",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur.",
    Image: Imagethird,
  },
  {
    title: "Prince William's Role in King Charles III's Coronation Revealed",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur.",
    Image: Imagefourth,
  },
  {
    title: "Davido Spends Close to ₦460m on new Maybach, Patek Philippe watch",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur.",
    Image: Imagefifth,
  },
  {
    title:
      "Jim Iyke Apologises After Yelling At Ini Edo, Making Her Cry On Movie Set",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur.",
    Image: ImageSixth,
  },
  {
    title: "Tobi Bakre Speaks on Fatherhood, how he met his wife",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur.",
    Image: ImageSeventh,
  },
];

function Home() {
  return (
    <>
      <div className="section">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <h1 className="title">Latest Post!</h1>
              <Post
                title={data1[0].title}
                description={data1[0].description}
                url={data1[0].Image}
              />
              <Post
                title={data1[1].title}
                description={data1[1].description}
                url={data1[1].Image}
              />
              <Post
                title={data1[2].title}
                description={data1[2].description}
                url={data1[2].Image}
              />
              <Post
                title={data1[3].title}
                description={data1[3].description}
                url={data1[3].Image}
              />
              <Post
                title={data1[4].title}
                description={data1[4].description}
                url={data1[4].Image}
              />
              <Post
                title={data1[5].title}
                description={data1[5].description}
                url={data1[5].Image}
              />
            </div>
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
                <p className="sub-title">Sponsored Ad</p>
                <img src={Image} alt="" />
                <p className="pt-2">
                  1XBET Number 1 Betting Site. Over 1000+ Events with High Odds.
                  Register and Win!
                </p>
              </div>
              <div className="tile is-child box">
                <p className="title">Trending Post</p>
                <img src={Imagefifth} alt="" />
                <p>
                  Davido Spends Close to ₦460m on new Maybach, Patek Philippe
                  watch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
