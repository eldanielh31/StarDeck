const express = require('express');
const router = express.Router();
const Planeta = require('../Modules/Planeta');

router.get('/', async (req, res) => {
    try {
        const planetas = await Planeta.find();
        res.send(planetas);
    } catch (error) {
        console.log('Error getting examples:', error);
        res.status(500).send('Error getting planetas');
    }
});

router.post('/', async (req, res) => {
    const planeta = new Planeta({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        abilitie: req.body.abilitie,
        type: req.body.type,
        id: req.body.id
    });

    try {
        const savedPlaneta = await planeta.save();
        res.send(savedPlaneta);
    } catch (error) {
        console.log('Error creating example:', error);
        res.status(500).send('Error creating planeta');
    }
});

module.exports = router;
