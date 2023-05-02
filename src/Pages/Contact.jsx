import Contactimage from "../assets/contact.png";

function Contact() {
  return (
    <div className="section">
      <h1 className="title">Contact Us</h1>
      <div className="column">
        <p className="is-size-5">
          {"We'd"} love to hear from you! Here at Duke, we believe in creating a
          community that values interaction and engagement. {"That's"} why we
          welcome all feedback, comments, and suggestions from our readers. We
          want to ensure that your experience on our website is the best it can
          be, and {"we're"} always looking for ways to improve. Whether you have
          an entertainment-related question, a suggestion for an article, or
          just want to let us know how {"we're"} doing, {"we're"} here to
          listen. You can reach us using the contact form below, or by emailing
          us at contact@dukeentertainment.com. We do our best to respond to all
          inquiries within 24-48 hours. If {"you're"} interested in
          collaborating with Duke or would like to submit an article for
          publication, please visit our {'"Write for Us"'} page for more
          information. Thank you for choosing Duke as your go-to entertainment
          source. We look forward to hearing from you! - The Duke Team.
        </p>
        <div className="columns mt-3">
          <div className="column is-two-thirds">
            <form action="">
              <h2 className="subtitle size-6">Contact Form:</h2>
              <div className="control">
                <label className="label"> Name</label>
                <input className="input is-focused " type="text" />
              </div>
              <div className="control">
                <label className="label"> Email</label>
                <input className="input is-focused " type="text" />
              </div>
              <div className="control">
                <label className="label"> Subject</label>
                <input className="input is-focused " type="text" />
              </div>
              <textarea className="textarea mt-5" rows="5"></textarea>
              <button className="button mt-3 is-link"> Submit</button>
            </form>
          </div>
          <div className="column">
            <img src={Contactimage} alt="contactus" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
