var express = require("express");
var router = express.Router();

/* get Us page*/
router.get("/", function (req, res, next) {
  res.send("Soy la pagina de nosotros, hecha con manejadores de ruta");
});

module.exports = router;
