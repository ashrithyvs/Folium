import React from "react";
import { login } from "../../utils/api.js";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
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
    if (this.state.emailError === false && this.state.passwordError === false) {
      this.setState({
        isDisabled: false,
      });
    }
  }
  submitForm(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    login(data).then((res) => {
      // When user logs in they will be directed to mainprofile page
      this.props.history.push("/mainprofile");
    });
  }
  render() {
    return (
      <div className="w-1/4 mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className="mx-auto w-full">
          <h4 className="mb-4 text-center font-semibold text-3xl tracking-wider">
            Login
          </h4>
          <form id="signup-form">
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                className="custom-input"
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
                className="custom-input"
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
              Login
            </button>
          </form>
          <p className="my-1 text-white flex flex-col text-center">
            Don't have an account?
            <Link to="/register" className="text-white">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
