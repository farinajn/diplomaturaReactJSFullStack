const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("admin/login", {
    layout: "admin/layout",
    title: "ACCMA admin - login",
  });
});

module.exports = router;
