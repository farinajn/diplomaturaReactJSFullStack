const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

//Declaration of express session variable
var session = require("express-session");

require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const adminLoginRouter = require("./routes/admin/login");
const { title } = require("process");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Use of express session variable
app.use(
  session({
    secret: "accma123...",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin/login", adminLoginRouter);

const pool = require("./models/bd");

//select - consulta a la base de datos
pool.query("select * from usuarios").then(function (resultados) {
  console.log(resultados);
});

/*
var id = 20;
var obj = {
  nombre: "Natanael",
};
pool
  .query("update usuarios set ? where id=?", [obj, id])
  .then(function (resultados) {
    console.log(resultados);
  })
  .catch(function (error) {
    console.error(error);
  });
*/

/*
//Insert a la BD
var obj = {
  nombre: "prueba insert",
  apellido: "apellido",
  edad: "1000",
  mail: "prueba@insert.com",
};

pool.query("insert into usuarios set ?", [obj]).then(function (resultados) {
  console.log(resultados);
});

*/

/*
var id = 8;
pool.query("delete from usuarios where id=?", [id]).then(function (resultados) {
  console.log(resultados);
});*/

// Login GET
app.get("/", function (req, res) {
  var conocido = Boolean(req.session.nombre);
  console.log(conocido);

  res.render("index", {
    title: "Inicio de sesión y captura de datos con Express",
    conocido: conocido,
    nombre: req.session.nombre,
  });
});

//POST to enter name
app.post("/ingresar", function (req, res) {
  var nombre = req.body.nombre;
  console.log(nombre);

  if (req.body.nombre) {
    req.session.nombre = req.body.nombre;
  }
  res.redirect("/");
});

//GET to logout session
app.get("/salir", function (req, res) {
  req.session.destroy();
  res.redirect("/");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
