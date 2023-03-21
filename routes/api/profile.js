const express = require("express");
const router = express.Router();
const config = require("config");

const auth = require("../../middleware/auth");
const Profile = require("../../models/profile.js");
const User = require("../../models/Users.js");

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["firstName", "lastName", "avatar", "email"]);
    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Something went wrong in /profile/me route");
  }
});

router.post("/", auth, async (req, res) => {
  try {
    console.log({ ...req.body });
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: { ...req.body } },
      { new: true, upsert: true }
    );
    res.json(profile);
    console.log("from backend profile ", profile);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong in /profile/ route");
  }
});
module.exports = router;
