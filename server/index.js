// Servidor en express
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// BODY PARSER
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importar el modelo Articulo
const Articulo = require("../models/Articulo");
const Ticket = require("../models/Ticket");

// ------------------------------- CRUD -------------------------------------//

// Server activado
app.get("/", (req, res) => {
  res.send("SERVER");
});

// -------------------- GET --------------------
app.get("/articulos/", (req, res) => {
  Articulo.find()
    .then(item => res.status(200).send({ mensaje: "Get exitoso", res: item }))
    .catch(err => res.send({ msj: "Error en get", res: err }));
});

// -------------------- GET by ID --------------------
app.get("/articulo  /:id", (req, res) => {
  Articulo.findById(req.params.id)
    .then(item => {
      item
      ? res.status(200).send({ mensaje: "Get exitoso", res: item})
      : res.status(404).send({ mensaje: "No Encontrado", res: item});  
    })
    .catch(err => res.status(409).send({ msj: "Error en getById", res: err }));
});

// -------------------- POST --------------------
app.post("/crear/articulo", (req, res) => {
  console.log(req.body);
  const nuevoArticulo = new Articulo(req.body);
  nuevoArticulo.save((err, articulo) => {
    return !err
      ? res.status(201).send({ mensaje: "Articulo creado", res: articulo })
      : res.status(400).send({ msj: "Error en get", res: err });
  });
});

// -------------------- UPDATE --------------------

app.put("/update/articulo/:id", (req, res) => {
  const idArticulo = req.params.id;
  Articulo.findByIdAndUpdate(idArticulo, { $set: req.body }, { new: true })
    .then(UpdateArticulo => res.status(200).send(UpdateArticulo))
    .catch(UpdateArticulo => res.status(400).send(UpdateArticulo));
});

// -------------------- DELETE --------------------

app.delete("/borrar/articulo/:id", (req, res) => {
  Articulo.findByIdAndRemove(req.params.id)
    .then(DeletePelicula => res.status(200).send(DeletePelicula))
    .catch(DeletePelicula => res.status(400).send(DeletePelicula));
});

module.exports = { app, port };
