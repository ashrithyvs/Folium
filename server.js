const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
// import { AbortSignal } from "node-abort-controller";

// fix for Reference error AbortSignal in `lru-cache`
// global.AbortSignal = AbortSignal;
// var originsWhitelist = [
//   "http://localhost:3000/",
//   "http://localhost:3001/",
//   "http://localhost:3002/",
//   "https://h-ash.vercel.app/",
//   "https://folium-380907.el.r.appspot.com/",
// ];
// var corsOptions = {
//   origin: function (origin, callback) {
//     var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
//     callback(null, isWhitelisted);
//   },
//   credentials: true,
// };

// app.use(cors(corsOptions));
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/generatepage", require("./routes/api/generatepage"));
app.use("/api/scholar", require("./routes/api/scholar"));

app.get("/", (req, res) => res.send("Api Running"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
