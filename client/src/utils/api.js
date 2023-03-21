import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: false,
  headers: {
    "x-auth-token": JSON.stringify(localStorage.getItem("user")).replace(
      /['"]+/g,
      ""
    ),
  },
});
export const register = (newUser) => {
  return instance
    .post("api/users", {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
    })
    .then(() => {
      console.log("Registered");
    });
};

export const login = (user) => {
  return instance
    .post("api/auth", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      console.log("from the api.js", res);
      if (res.data.token) {
        localStorage.setItem("user", res.data.token);
      }
      console.log(res.data.token);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      alert("Please enter valid information");
      window.location.href = "/";
    });
};

export const home = (user) => {
  return instance
    .get("api/auth")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const mainProfile = (user) => {
  return instance
    .get("api/profile/me")
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const scholarProfile = (user) => {
  return instance
    .get("api/scholar/me")
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getAuthors = (queriedAuthor) => {
  console.log(queriedAuthor);
  return instance
    .post("api/scholar/get-authors-list", { queriedAuthor: queriedAuthor })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getAuthor = (id) => {
  return instance
    .post("api/scholar/get-author", { authorId: id })
    .then((res) => {
      return res.data;
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
    .post("api/profile", newUser, {})
    .then((res) => {
      console.log("profile sent to backend");
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const scholar = (newUser) => {
  console.log("from api", newUser);
  return instance
    .post("api/scholar", newUser)
    .then((res) => {
      console.log("profile sent to backend");
      return res.data;
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
    .then((res) => {
      console.log("This new page holds - ", res);
    });
};
