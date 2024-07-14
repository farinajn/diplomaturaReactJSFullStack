var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Este es el login del admin");
  //res.render("/admin/login", { layout: "admintitle: "Express" });
});

module.exports = router;
