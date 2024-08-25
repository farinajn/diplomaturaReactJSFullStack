const express = require("express");
const router = express.Router();
var novedadesModel = require("./../../models/novedadesModel");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades();
  res.render("admin/novedades", {
    layout: "admin/layout",
    title: "ACCMA admin - novedades",
    usuario: req.session.nombre,
    novedades,
  });
});

/*GET to access insertNovedad form*/
router.get("/agregar", (req, res, next) => {
  res.render("admin/novedades/agregar", {
    layout: "admin/layout",
    title: "ACCMA admin - agregar novedades",
  });
});

/*POST to insert a new Novedad*/
router.post("/agregar", async (req, res, next) => {
  try {
    if (
      req.body.titulo != "" &&
      req.body.subtitulo != "" &&
      req.body.cuerpo != ""
    ) {
      await novedadesModel.insertNovedad(req.body);
      res.redirect("/admin/novedades");
    } else {
      res.render("admin/novedades/agregar", {
        layout: "admin/layout",
        error: true,
        message: "Todos los campos son requeridos",
      });
    }
  } catch (error) {
    console.log(error);
    res.render("admin/novedades/agregar", {
      layout: "admin/layout",
      error: true,
      message: "No se cargo la novedad",
    });
  }
});

/*GET to access insertNovedad form*/
router.get("/eliminar/:id", async (req, res, next) => {
  var { id } = req.params;
  try {
    await novedadesModel.deleteNovedadById(id);
    res.redirect("/admin/novedades");
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar la novedad");
  }
});

router.get("/modificar/:id", async (req, res, next) => {
  let { id } = req.params;
  let novedad = await novedadesModel.getNovedadesById(id);
  res.render("admin/novedades/modificar", {
    layout: "admin/layout",
    novedad,
  });
});

router.post("/modificar", async (req, res, next) => {
  try {
    let obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
    };
    if (
      req.body.titulo != "" &&
      req.body.subtitulo != "" &&
      req.body.cuerpo != ""
    ) {
      await novedadesModel.modificarNovedadById(obj, req.body.id);
      res.redirect("/admin/novedades");
    } else {
      res.render("/admin/novedades/modificar/:id", {
        layout: "admin/layout",
        error: true,
        message: "Todos los campos son requeridos",
      });
    }
  } catch (error) {
    console.log(error);
    res.render("/admin/novedades/modificar/:id", {
      layout: "admin/layout",
      error: true,
      message: "No se cargo la novedad",
    });
  }
});

router.get("/detalle/:id", async (req, res, next) => {
  let { id } = req.params;
  let novedad = await novedadesModel.getNovedadesById(id);
  res.render("admin/novedades/detalle", {
    layout: "admin/layout",
    novedad,
  });
});

module.exports = router;
