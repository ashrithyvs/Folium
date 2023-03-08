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
  awards: { type: Array },
  researches: { type: Array },
  patents: { type: Array },
  subjects: { type: Array },
  projects: { type: Array },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("scholar", userSchema);
