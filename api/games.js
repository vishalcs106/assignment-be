const express = require("express");
const router = express.Router();
const crypto = require('crypto')


router.get("/", async (req, res) => {
  try {
    const games = []
    const axie = {id: crypto.randomUUID(), name: "Axie Infinity", imageUrl: "https://storage.googleapis.com/axie-cdn/new-banner.png", appUrl: "https://axieinfinity.com/", gameForm: "BROWSER", packageId: ""} 
    const dream11 = {id: crypto.randomUUID(), name: "Castle Crush", imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/Castle%20Crush:%20Epic%20Strategy%20Game.jpg", appUrl: "https://files.an1.net/castle-crush_4.10.1-an1.com.apk", gameForm: "ANDROID", packageId:"com.tfgco.games.strategy.free.castlecrush"} 
    games.push(axie)
    games.push(dream11)
    res.send(games)
  } catch (error) {
    return res.status(500).send("Server error");
  }
});

module.exports = router;
