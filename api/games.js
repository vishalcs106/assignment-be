const express = require("express");
const router = express.Router();
const crypto = require('crypto')


router.get("/", async (req, res) => {
  try {
    const games = []
    const axie = {id: crypto.randomUUID(), name: "Axie Infinity", imageUrl: "https://storage.googleapis.com/axie-cdn/new-banner.png", appUrl: "https://axieinfinity.com/", gameForm: "BROWSER"} 
    const dream11 = {id: crypto.randomUUID(), name: "Dream11", imageUrl: "https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/Dream11_Vertical_WhiteonRedBG.jpg", appUrl: "https://dl.dream11.in/tf/dream11.apk", gameForm: "ANDROID"} 
    games.push(axie)
    games.push(dream11)
    res.send(games)
  } catch (error) {
    return res.status(500).send("Server error");
  }
});

module.exports = router;
