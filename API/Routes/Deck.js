const express = require('express');
const router = express.Router();
const Deck = require('../Modules/Deck');

router.get('/', async (req, res) => {
    try {
        const decks = await Deck.find();
        res.send(decks);
    } catch (error) {
        console.log('Error getting examples:', error);
        res.status(500).send('Error getting examples');
    }
});

router.post('/', async (req, res) => {
    const deck = new Deck({
        name: req.body.name,
        id_User: req.body.id_User,
        id: req.body.id,
        cards: req.body.cards
    });

    try {
        const savedExample = await deck.save();
        res.send(savedExample);
    } catch (error) {
        console.log('Error creating example:', error);
        res.status(500).send('Error creating example');
    }
});

module.exports = router;
