var express = require("express");
var router = express.Router();

/* GET Contact page. */
router.get("/", function (req, res, next) {
  res.render("contacto", { title: "Contacto" });
  //res.send("Hola, soy la pagina de contacto, hecha con manejadores de ruta");
});

module.exports = router;
