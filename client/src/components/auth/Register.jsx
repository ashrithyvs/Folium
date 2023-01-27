import React from "react";
import { register } from "../../utils/api.js";
import { Link } from "react-router-dom";
import Nav from "../Navbar";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
    };
    this.submitForm = this.submitForm.bind(this);
  }
  validateEmail(email) {
    const pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === true) {
      this.setState({
        emailError: false,
        email: email,
      });
    } else {
      this.setState({
        emailError: true,
      });
    }
  }
  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    if (e.target.name === "firstname") {
      if (e.target.value === "" || e.target.value === null) {
        this.setState({
          firstnameError: true,
        });
      } else {
        this.setState({
          firstnameError: false,
          firstName: e.target.value,
        });
      }
    }
    if (e.target.name === "lastname") {
      if (e.target.value === "" || e.target.value === null) {
        this.setState({
          lastnameError: true,
        });
      } else {
        this.setState({
          lastnameError: false,
          lastName: e.target.value,
        });
      }
    }
    if (e.target.name === "email") {
      this.validateEmail(e.target.value);
    }
    if (e.target.name === "password") {
      if (
        e.target.value === "" ||
        e.target.value === null ||
        e.target.value.length <= 5
      ) {
        this.setState({
          passwordError: true,
        });
      } else {
        this.setState({
          passwordError: false,
          password: e.target.value,
        });
      }
    }
    if (
      this.state.firstnameError === false &&
      this.state.lastnameError === false &&
      this.state.emailError === false &&
      this.state.passwordError === false
    ) {
      this.setState({
        isDisabled: false,
      });
    }
  }
  submitForm(e) {
    e.preventDefault();
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    register(data).then((res) => {
      this.props.history.push("/login");
    });
  }
  render() {
    return (
      <div>
        <div className="w-1/4 mx-auto min-h-[90vh] flex flex-col justify-center">
          <div className="mx-auto w-full">
            <h4 className="mb-4 text-center font-semibold text-3xl tracking-wider">
              Register
            </h4>
            <form id="signup-form">
              <div className="form-group">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="form-control"
                  placeholder="Enter firstname"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
                {this.state.firstnameError ? (
                  <span style={{ color: "red" }}>Please Enter some value</span>
                ) : (
                  ""
                )}
              </div>{" "}
              <div className="form-group">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="form-control"
                  placeholder="Enter lastname"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
                {this.state.lastnameError ? (
                  <span style={{ color: "red" }}>Please Enter some value</span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
                {this.state.emailError ? (
                  <span style={{ color: "red" }}>
                    Please Enter valid email address
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
                {this.state.passwordError ? (
                  <span style={{ color: "red" }}>
                    Your password must be at least 6 characters
                  </span>
                ) : (
                  ""
                )}
              </div>
              <button
                className="custom-btn-outline"
                disabled={this.state.isDisabled}
                onClick={this.submitForm}
              >
                Signup
              </button>
            </form>
            <p className="my-1 text-white flex flex-col text-center">
              Already have an account
              <Link to="/login" className="text-white">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
