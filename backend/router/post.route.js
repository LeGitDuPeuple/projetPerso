const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
const user = [
  { user: "sendo", poste: "testeur qa", img: "http://localhost:3000/backend-assets/img/icon-7797704_640.png" },
  { user: "cassandra", poste: "psycologue", img: "http://localhost:3000/backend-assets/img/icon-7797704_640.png" },
  { user: "anass", poste: "testeur qa", img: "http://localhost:3000/backend-assets/img/icon-7797704_640.png" },
  { user: "glody", poste: "mba", img: "http://localhost:3000/backend-assets/img/icon-7797704_640.png" },
  { user: "flo", poste: "power bi", img: "http://localhost:3000/backend-assets/img/icon-7797704_640.png" },
  { user: "soulayman", poste: "fils", img: "http://localhost:3000/backend-assets/img/icon-7797704_640.png" },
];


  res.json(user);
});

module.exports = router;
