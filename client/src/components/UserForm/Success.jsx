import React, { Component } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@mui/styles";
import { Link } from "react-router-dom";
import Nav from "../Navbar";

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <div>
        <Nav />
        <MuiThemeProvider>
          <div>
            <Dialog open fullWidth maxWidth="sm">
              <Link to="/home">
                <button>x</button>
              </Link>
              <AppBar title="Success" />
              <h1>Thank You For Your Submission</h1>
              <p>You will get an email with further instructions.</p>
            </Dialog>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Success;
