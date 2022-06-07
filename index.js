const express = require("express");
const app = express();
const games = require("./api/games");
const admin = require('firebase-admin')
const serviceAccount = require("./firebase-key.json");
const authorize = require("./auth/authorization");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cute-mouse.firebaseio.com"
});


app.use(express.json({ extended: false }));

app.use("/api/games", authorize(admin), games);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
