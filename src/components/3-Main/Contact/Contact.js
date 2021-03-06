import React from "react";
import emailjs from "emailjs-com";

import "./contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.clearState = this.clearState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearState() {
    this.setState({ name: "", email: "", message: "" });
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState((state) => ({ ...state, [name]: value }));
  }

  handleSubmit(evt) {
    evt.preventDefault();
    emailjs
      .sendForm(
        "service_1zhevqb",
        "template_wkt694r",
        evt.target,
        "user_Ko4TcRG0NsACgUN0KDG3O"
      )
      .then(
        (result) => {
          console.log(result.text), this.clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  render() {
    return (
      <div id="contact">
        <div className="text-container">
          <div className="contact-intro">
            <h2>Get In Touch!</h2>
          </div>
          <h4>
            //Contact intro text placeholder. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit...
          </h4>
        </div>
        <div className="contact-container">
          <form name="message-form" onSubmit={this.handleSubmit}>
            <div className="contact-name-and-email">
              <input
                type="text"
                id="name"
                name="name"
                className="form-contents form-name"
                value={this.state.name}
                placeholder="Name"
                required
                onChange={this.handleChange}
              />
              <input
                type="email"
                id="email"
                name="email"
                className="form-contents form-email"
                value={this.state.email}
                placeholder="Email"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="contact-message">
              <textarea
                name="message"
                className="form-contents form-message"
                value={this.state.message}
                placeholder="Message"
                required
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="contact-submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
