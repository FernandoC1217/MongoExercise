const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Articulo = require("./Articulo");

const ticketSchema = new Schema({
    subtotal: { type: Number, default: 0},
    itbms: { type: Number, default: 0},
    total: { type: Number, default: 0},
    articulos: [ { type: mongoose.Schema.ObjectId, ref: 'Articulo', required: true} ]
});


// Exportar el modelo ticket
module.exports = mongoose.model("Ticket", ticketSchema);;
