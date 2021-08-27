import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container contact-form">
        <div className="contact-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KF_8fkzS1249qshNYsF6HST4cQ82x2owoCndTzOwyeTQVXcYyYFk4x2CUdt_s3IMk1g&usqp=CAU"
            alt="rocket_contact"
          />
        </div>
        <form>
          <h3>Drop Us a Message</h3>
          <div className="row">
            <div className="container">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Your Email *"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "200px" }}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="btnSubmit"
                  className="btnContact"
                  value="Send Message"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;