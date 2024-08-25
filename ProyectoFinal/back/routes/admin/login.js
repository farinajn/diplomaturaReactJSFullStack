const express = require("express");
const router = express.Router();
var usuariosModel = require("./../../models/usuariosModel");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("admin/login", {
    layout: "admin/layout",
    title: "ACCMA admin - login",
  });
});

router.get("/logout", function (req, res, next) {
  req.session.destroy(); //destruir las variables de sesion (id y usuario)
  res.render("admin/login", {
    layout: "admin/layout",
    title: "ACCMA admin - login",
  });
});

router.post("/", async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUsernameAndPassword(usuario, password);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect("./novedades");
    } else {
      res.render("./admin/login", { layout: "admin/layout", error: true });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
