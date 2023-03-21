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
  projects: { type: Array },
  education: { type: Array },
  experience: { type: Array },
  patents: { type: Array },
  awards: { type: Array },
  subjects: { type: Array },
  researches: { type: Array },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("scholar", userSchema);
