const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articuloSchema = new Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    existencias: { type: Number}
});


// Exportar el modelo articulo
module.exports = mongoose.model("Articulo", articuloSchema);;
