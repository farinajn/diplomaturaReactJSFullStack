const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("admin/novedades", {
    layout: "admin/layout",
    title: "ACCMA admin - novedades",
    usuario: req.session.nombre,
  });
});

module.exports = router;
