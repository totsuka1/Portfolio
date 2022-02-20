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
    // code for emailjs
  }

  render() {
    return (
      <div id="contact">
        <div className="text-container">
          <div className="contact-intro">
            <h2>Get In Touch!</h2>
          </div>
        </div>
        <div className="contact-container">
          <form name="message-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              className="form-contents"
              value={this.state.name}
              placeholder="Name"
              required
              onChange={this.handleChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              className="form-contents"
              value={this.state.email}
              placeholder="Email"
              required
              onChange={this.handleChange}
            />
            <br />
            <textarea
              name="message"
              className="form-contents"
              value={this.state.message}
              placeholder="Message"
              required
              onChange={this.handleChange}
            />
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
