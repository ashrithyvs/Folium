import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: false,
});
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
export const scholarProfile = (user) => {
  return instance
    .get("api/scholar/me", {
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

export const profile = (newUser) => {
  console.log("from api", newUser);
  return instance
    .post("api/profile", newUser, {
      headers: {
        "x-auth-token": JSON.stringify(localStorage.getItem("user")).replace(
          /['"]+/g,
          ""
        ),
      },
    })
    .then((response) => {
      console.log("profile sent to backend");
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const scholar = (newUser) => {
  console.log("from api", newUser);
  return instance
    .post("api/scholar", newUser, {
      headers: {
        "x-auth-token": JSON.stringify(localStorage.getItem("user")).replace(
          /['"]+/g,
          ""
        ),
      },
    })
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
