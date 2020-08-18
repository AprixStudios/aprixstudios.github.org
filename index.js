const express = require("express");
const app = express();
app.listen(8080, () => console.log("Listening..."));

const fetch = require("node-fetch");
// setInterval(() => fetch("https://aprix.gq"), 10000);
// connect domain first



app.get(`*`, (req, res) => res.redirect(`https://www.aprixstudios.xyz/${req.path}`))