const express = require("express");
const router = express.Router();
const config = require("config");
const { getJson } = require("serpapi");

const auth = require("../../middleware/auth");
const Profile = require("../../models/profile.js");
const User = require("../../models/Users.js");

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
    res.status(500).send("Server Error");
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

// @route    post api/profile
// @desc     Register user
// @access   Private

router.post("/", auth, async (req, res) => {
  try {
    res.json();
    console.log("from backend profile ");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});
module.exports = router;
