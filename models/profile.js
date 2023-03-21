const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  navColor: { type: String },
  navText: { type: String },
  navImage: { type: String },
  introText: { type: String },
  introTitle: { type: String },
  bio: { type: String },
  aboutBgColor: { type: String },
  profileImage: { type: String },
  resumeUrl: { type: String },
  githubLink: { type: String },
  linkdin: { type: String },
  footer: { type: String },
  education: { type: Array },
  experience: { type: Array },
  skills: { type: Array },
  projects: { type: Array },
  date: { type: Date, default: Date.now },
  // CustomPage {    }
});

module.exports = mongoose.model("profile", userSchema);
