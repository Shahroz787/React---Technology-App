import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Contact.css";

export default class Contact extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    result: "",
    message: "",
  };

  handleChange = (event) => {
    if (event.target.name === "fname") {
      this.setState({ fname: event.target.value });
    } else if (event.target.name === "lname") {
      this.setState({ lname: event.target.value });
    } else if (event.target.type === "email") {
      this.setState({ email: event.target.value });
    } else if (event.target.type === "password") {
      this.setState({ password: event.target.value });
    } else if (event.target.name === "message") {
      this.setState({ message: event.target.value });
    }
  };

  handleSubmit = (event) => {
    const { fname, lname, email, password, message } = this.state;
    this.setState({ result: "Please Open your console to get the result!" });
    event.preventDefault();
    console.log({ fname, lname, email, password, message });
    window.alert("Your data has been sent to your console!");
    this.setState({
      fname: "",
      lname: "",
      email: "",
      password: "",
      message: "",
    });
  };

  render() {
    const { fname, lname, email, password, message, result } = this.state;

    return (
      <>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact__div">
          <div className="row">
            <div className="col-md-6 col-sm-10 col-lg-6 mx-auto">
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>First name :</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={this.handleChange}
                    name="fname"
                    value={fname}
                    placeholder="Enter your first name..."
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Last name :</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={this.handleChange}
                    name="lname"
                    value={lname}
                    placeholder="Enter your last name..."
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address :</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={this.handleChange}
                    name="email"
                    value={email}
                    placeholder="Enter your email..."
                    required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password :</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={this.handleChange}
                    name="password"
                    value={password}
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    onChange={this.handleChange}
                    rows={3}
                    value={message}
                    placeholder="Write your message..."
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    name="agreement"
                    label="Check me out"
                    required
                  />
                </Form.Group>

                <Button className="btn2" type="submit">
                  Submit
                </Button>
              </Form>
              <br />
              <small style={{ color: "red" }}>{result}</small>
            </div>
          </div>
        </div>
      </>
    );
  }
}
