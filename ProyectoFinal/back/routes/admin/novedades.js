const express = require("express");
const router = express.Router();
const novedadesModel = require("./../../models/novedadesModel");
const util = require("util");
const { default: cluster } = require("cluster");
const cloudinary = require("cloudinary").v2;

const uploader = util.promisify(cloudinary.uploader.upload);

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
    let img_id = "";
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }
    if (
      req.body.titulo != "" &&
      req.body.subtitulo != "" &&
      req.body.cuerpo != ""
    ) {
      await novedadesModel.insertNovedad({
        ...req.body,
        img_id,
      });
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

//GET para las imagenes
router.get("/", async function (req, res, next) {
  const novedades = await novedadesModel.getNovedades();
  novedades = novedades.map((novedad) => {
    if (novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 100,
        height: 100,
        crop: "fill",
      });
      return {
        ...novedad,
        imagen,
      };
    } else {
      return {
        ...novedad,
        imagen: "",
      };
    }
  });
  res.render("admin/novedades", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    novedades,
  });
});

module.exports = router;
