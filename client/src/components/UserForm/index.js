import React, { Component } from "react";
import NavBarDetails from "./NavBarDetails";
import AboutMeDetails from "./AboutMeDetails";
import ProjectDetails from "./ProjectDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import Nav from "../Navbar";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    navColor: "",
    navText: "",
    navImage: "",
    introText: "",
    introTitle: "",
    bio: "",
    aboutBgColor: "",
    profileImage: "",
    projectOneTitle: "",
    projectOneText: "",
    projectOneUrl: "",
    projectOneImage: "",
    projectTwoTitle: "",
    projectTwoText: "",
    projectTwoUrl: "",
    projectTwoImage: "",
    projectThreeTitle: "",
    projectThreeText: "",
    projectThreeUrl: "",
    projectThreeImage: "",
    resumeUrl: "",
    githubLink: "",
    linkdin: "",
    footer: "",
  };

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      navColor,
      navText,
      navImage,
      introText,
      introTitle,
      bio,
      aboutBgColor,
      profileImage,
      projectOneTitle,
      projectOneText,
      projectOneUrl,
      projectOneImage,
      projectTwoTitle,
      projectTwoText,
      projectTwoUrl,
      projectTwoImage,
      projectThreeTitle,
      projectThreeText,
      projectThreeUrl,
      projectThreeImage,
      resumeUrl,
      githubLink,
      linkdin,
      footer,
    } = this.state;
    const values = {
      firstName,
      lastName,
      navColor,
      navText,
      navImage,
      introText,
      introTitle,
      bio,
      aboutBgColor,
      profileImage,
      projectOneTitle,
      projectOneText,
      projectOneUrl,
      projectOneImage,
      projectTwoTitle,
      projectTwoText,
      projectTwoUrl,
      projectTwoImage,
      projectThreeTitle,
      projectThreeText,
      projectThreeUrl,
      projectThreeImage,
      resumeUrl,
      githubLink,
      linkdin,
      footer,
    };

    switch (step) {
      case 1:
        return (
          <div>
            <Nav />
            <NavBarDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <Nav />
            <AboutMeDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <Nav />
            <ProjectDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <Nav />
            <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
          </div>
        );
      case 5:
        return (
          <div>
            <Nav />
            <Success
              nextStep={this.props.history.push(`/quickdesign`)}
              values={values}
            />
          </div>
        );
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}

export default UserForm;
