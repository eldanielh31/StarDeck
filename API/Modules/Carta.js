const mongoose = require('mongoose');

const CartaSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    raza: {
        type: String,
        required: true
    },
    costo: {
        type: Number,
        required: true
    },
    energia: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    },
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
});

const Carta = mongoose.model('Carta', CartaSchema);

module.exports = Carta;
