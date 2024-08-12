var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "ACCMA admin - Home",
    cantidad: "10",
    activado: true,
  });
});

module.exports = router;
