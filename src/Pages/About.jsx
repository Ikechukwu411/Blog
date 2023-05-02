import Aboutimg from "../assets/aboutImg.png";
import "bulma/css/bulma.min.css";
function About() {
  return (
    <>
      <div className="section">
        <h1 className="title">About Us</h1>
        <div className="columns">
          <div className="column is-two-thirds">
            <p className="is-size-5">
              Welcome to Duke - the ultimate entertainment destination for
              everyone! Here at Duke, we believe that entertainment has the
              ability to bring people together, create memories, and make us
              feel alive. {"That's"} why we strive to provide you with the
              latest and most exciting news about the entertainment industry, as
              well as exclusive content and features that you {"won't"} find
              anywhere else. Our website is designed to cater to your every
              need, from movie reviews and trailers, to music albums and artist
              profiles, to video game guides and sneak peeks. Whether {"you're"}
              looking for the hottest new releases, or the classics that you
              hold dear to your heart, {"we've"} got you covered. We understand
              that everyone has different tastes and preferences, which is why
              we offer a wide variety of genres and topics for you to explore.
              Our team of dedicated writers and editors work tirelessly to bring
              you the most up-to-date, informative, and entertaining content
              possible. Through our articles, we aim to not only inform you, but
              also inspire you, challenge you, and make you see the world in a
              new way. We believe that entertainment has the power to influence
              society and shape culture, which is why we take our role as
              entertainment journalists very seriously. At Duke, we also value
              community and interaction. We love hearing from our readers, and
              welcome comments, feedback, and suggestions. We believe that by
              engaging with our audience, we can create a conversation that is
              meaningful, respectful, and fun. So, whether {"you're"} a movie
              buff, a music lover, or a video game fanatic, we invite you to
              explore our website and discover all that Duke has to offer. We
              promise to keep you informed, entertained, and inspired, every
              step of the way. Thank you for choosing Duke as your go-to
              entertainment source - we {"can't"} wait to share our love of
              entertainment with you!
            </p>
          </div>
          <div className="column container has-shadow">
            <img src={Aboutimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
