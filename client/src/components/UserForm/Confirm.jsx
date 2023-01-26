import React, { Component } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@mui/styles";
import { List, ListItem, ListItemText } from "@mui/material/";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

import { profile } from "../../utils/api.js";
import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";
import TypoGraphy from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { grey } from "@mui/material/colors";
import { withStyles } from "@mui/styles";

export const Confirm = (props) => {
  const {
    state: {
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
    },
  } = props;
  const cont = (e) => {
    e.preventDefault();
    const newUser = {
      navColor: navColor,
      navText: navText,
      navImage: navImage,
      introText: introText,
      introTitle: introTitle,
      bio: bio,
      aboutBgColor: aboutBgColor,
      profileImage: profileImage,
      projectOneTitle: projectOneTitle,
      projectOneText: projectOneText,
      projectOneUrl: projectOneUrl,
      projectOneImage: projectOneImage,
      projectTwoTitle: projectTwoTitle,
      projectTwoText: projectTwoText,
      projectTwoUrl: projectTwoUrl,
      projectTwoImage: projectTwoImage,
      projectThreeTitle: projectThreeTitle,
      projectThreeText: projectThreeText,
      projectThreeUrl: projectThreeUrl,
      projectThreeImage: projectThreeImage,
      resumeUrl: resumeUrl,
      githubLink: githubLink,
      linkdin: linkdin,
      footer: footer,
    };
    console.log("from confirm page front end", newUser);
    profile(newUser).then(function (res) {
      console.log(res);
    });

    props.nextStep();
  };
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  console.log(Object.keys(props.state));
  return (
    <div className="flex flex-col space-y-6 pt-4 px-3">
      <div className="flex flex-col space-y-4">
        {Object.keys(props.state).map((item, i) => {
          if (i !== 0 || i !== 1) {
            return (
              <div className="flex justify-between">
                <h4 className="text-xl">{item}</h4>
                <h4 className="text-base">{props.state[item]}</h4>
              </div>
            );
          }
        })}
      </div>
      <div className="flex justify-center space-x-4">
        <button className="custom-btn-outline max-w-min px-4" onClick={back}>
          Back
        </button>
        <button className="custom-btn-outline max-w-min px-4" onClick={cont}>
          Continue
        </button>
      </div>
      <br />
    </div>
  );
};

export default Confirm;
