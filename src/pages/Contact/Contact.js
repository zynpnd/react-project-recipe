import "./Contact.css";
import axios from "axios";
import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    alert("Message Sent.");
    this.resetForm();
  }
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="contact">
        <div className="container contact-form">
          <div className="contact-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KF_8fkzS1249qshNYsF6HST4cQ82x2owoCndTzOwyeTQVXcYyYFk4x2CUdt_s3IMk1g&usqp=CAU"
              alt="rocket_contact"
            />
          </div>
          <form onSubmit={this.handleSubmit.bind(this)}>
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
                    id="name"
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="txtEmail"
                    className="form-control"
                    placeholder="Your Email *"
                    required
                    id="email"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="txtMsg"
                    className="form-control"
                    placeholder="Your Message *"
                    rows="5"
                    /* style={{ width: "100%", height: "200px" }}*/
                    required
                    id="message"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
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
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default Contact;
