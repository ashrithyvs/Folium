const express = require("express");
const router = express.Router();
const config = require("config");
const { getJson } = require("serpapi");

const auth = require("../../middleware/auth");
const Scholar = require("../../models/scholar.js");
const User = require("../../models/Users.js");
const scholar = require("../../models/scholar.js");

router.post("/get-authors-list", async (req, res) => {
  try {
    const params = {
      api_key:
        "2262da02cc78dc902a708fdef759866b0efdb4d45e6b95f97d6ec6caedda4799",
      hl: "en",
      mauthors: req.body.queriedAuthor,
    };

    // Show result as JSON
    const response = await getJson("google_scholar_profiles", params);
    res.json(response);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});
router.post("/get-author", async (req, res) => {
  try {
    const params = {
      api_key:
        "2262da02cc78dc902a708fdef759866b0efdb4d45e6b95f97d6ec6caedda4799",
      hl: "en",
      author_id: req.body.authorId,
    };

    // Show result as JSON
    const response = await getJson("google_scholar_author", params);
    res.json(response);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", auth, async (req, res) => {
  try {
    console.log(req.body);
    let scholarProfile = await Scholar.findOneAndUpdate(
      { user: req.user.id },
      { $set: { ...req.body } },
      { new: true, upsert: true }
    );
    res.json(scholarProfile);
    console.log("from backend scholarProfile ", scholarProfile);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong in /scholar/ route");
  }
});
router.get("/me", auth, async (req, res) => {
  try {
    const scholarProfile = await Scholar.findOne({
      user: req.user.id,
    }).populate("user", ["firstName", "lastName", "avatar", "email"]);
    if (!scholarProfile) {
      return res
        .status(400)
        .json({ msg: "There is no scholarProfile for this user" });
    }
    res.json(scholarProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Something went wrong in /scholar/me route");
  }
});
module.exports = router;
