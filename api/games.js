const express = require("express");
const router = express.Router();
const crypto = require('crypto')


router.get("/", async (req, res) => {
  try {
    const games = []
    const axie = {id: crypto.randomUUID(), name: "Axie Infinity", imageUrl: "https://storage.googleapis.com/axie-cdn/new-banner.png", appUrl: "https://axieinfinity.com/", gameForm: "BROWSER", packageId: ""} 
    const cc = {id: crypto.randomUUID(), name: "Castle Crush", imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/Castle%20Crush:%20Epic%20Strategy%20Game.jpg", appUrl: "https://files.an1.net/castle-crush_4.10.1-an1.com.apk", gameForm: "ANDROID", packageId:"com.tfgco.games.strategy.free.castlecrush", isOnPlayStore:true} 
    const ik = {id: crypto.randomUUID(), name: "Infinity Kingdom", imageUrl: "https://scontent.fblr21-1.fna.fbcdn.net/v/t1.6435-9/94258474_133278804940757_4325590842317209600_n.png?stp=dst-png_p843x403&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=8HdJLGur0dwAX9TnP2u&_nc_ht=scontent.fblr21-1.fna&oh=00_AT9xJX3VhrMCJlJ6MJAXoZapYO30YSeaUZNhmCQpiaPJgw&oe=62D975E7", appUrl: "https://wp-content/themes/APKMirror/download.php?id=3624802", gameForm: "ANDROID", packageId:"com.gtarcade.ioe.global", isOnPlayStore:false} 
    games.push(axie)
    games.push(cc)
    games.push(ik)
    res.send(games)
  } catch (error) {
    return res.status(500).send("Server error");
  }
});

module.exports = router;
