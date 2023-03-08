import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: false,
});
// Front end route for signup
export const register = (newUser) => {
  return instance
    .post("api/users", {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
    })
    .then((response) => {
      console.log("Registered");
    });
};

// Route for login
export const login = (user) => {
  return instance
    .post("api/auth", {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      console.log("from the api.js", response);
      if (response.data.token) {
        localStorage.setItem("user", response.data.token);
      }
      console.log(response.data.token);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      alert("Please enter valid information");
      window.location.href = "/";
    });
};

export const home = (user) => {
  return instance
    .get("api/auth", {
      headers: {
        "x-auth-token": JSON.stringify(localStorage.getItem("user")).replace(
          /['"]+/g,
          ""
        ),
      },
    })
    .then((response) => {
      // console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Route for getting main profile
export const mainProfile = (user) => {
  return instance
    .get("api/profile/me", {
      headers: {
        "x-auth-token": JSON.stringify(localStorage.getItem("user")).replace(
          /['"]+/g,
          ""
        ),
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getAuthors = (queriedAuthor) => {
  console.log(queriedAuthor);
  return instance
    .post(
      "api/scholar/get-authors-list",
      { queriedAuthor: queriedAuthor },
      {
        headers: {
          "x-auth-token": JSON.stringify(localStorage.getItem("user")).replace(
            /['"]+/g,
            ""
          ),
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getAuthor = (id) => {
  return instance
    .post(
      "api/scholar/get-author",
      { authorId: id },
      {
        headers: {
          "x-auth-token": JSON.stringify(localStorage.getItem("user")).replace(
            /['"]+/g,
            ""
          ),
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function logout() {
  localStorage.removeItem("user");
  window.location.reload();
}

// Post route for profile from wizard
export const profile = (newUser) => {
  console.log("from api", newUser);
  return instance
    .post(
      "api/profile",
      {
        navColor: newUser.navColor,
        navText: newUser.navText,
        navImage: newUser.navImage,
        introText: newUser.introText,
        introTitle: newUser.introTitle,
        bio: newUser.bio,
        aboutBgColor: newUser.aboutBgColor,
        profileImage: newUser.profileImage,
        projectOneTitle: newUser.projectOneTitle,
        projectOneText: newUser.projectOneText,
        projectOneUrl: newUser.projectOneUrl,
        projectOneImage: newUser.projectOneImageeducation,
        projectTwoTitle: newUser.projectTwoTitle,
        projectTwoText: newUser.projectTwoText,
        projectTwoUrl: newUser.projectTwoUrl,
        projectTwoImage: newUser.projectTwoImage,
        projectThreeTitle: newUser.projectThreeTitle,
        projectThreeText: newUser.projectThreeText,
        projectThreeUrl: newUser.projectThreeUrl,
        projectThreeImage: newUser.projectThreeImage,
        resumeUrl: newUser.resumeUrl,
        githubLink: newUser.githubLink,
        linkdin: newUser.linkdin,
        footer: newUser.footer,
        education: newUser.education,
        experience: newUser.experience,
        skills: newUser.skills,
        projects: newUser.projects,
      },
      {
        headers: {
          "x-auth-token": JSON.stringify(localStorage.getItem("user")).replace(
            /['"]+/g,
            ""
          ),
        },
      }
    )
    .then((response) => {
      console.log("profile sent to backend");
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const generatepage = (data) => {
  return instance
    .post("api/generatepage", {
      page: data,
    })
    .then((response) => {
      console.log("This new page holds - ", response);
    });
};
