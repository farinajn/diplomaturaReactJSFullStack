var express = require("express");
var router = express.Router();

/* get login page */
router.get("/", function (req, res, next) {
  res.render("login", { title: "Login" });
  //res.send("Soy la pagina de login, hecha con manejadores de ruta");
});

module.exports = router;
