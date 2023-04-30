const express = require('express');
const router = express.Router();
const Carta = require('../Modules/Carta');

router.get('/', async (req, res) => {
    try {
        const cartas = await Carta.find();
        res.send(cartas);
    } catch (error) {
        console.log('Error getting examples:', error);
        res.status(500).send('Error getting examples');
    }
});

router.post('/', async (req, res) => {
    const carta = new Carta({
        id: req.body.id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        tipo: req.body.tipo,
        raza: req.body.raza,
        costo: req.body.costo,
        energia: req.body.energia,
        estado: req.body.estado
    });

    try {
        const savedCarta = await carta.save();
        res.send(savedCarta);
    } catch (error) {
        console.log('Error creating example:', error);
        res.status(500).send('Error creating example');
    }
});

module.exports = router;
