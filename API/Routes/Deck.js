const express = require('express');
const router = express.Router();
const Example = require('./example.module');

router.get('/', async (req, res) => {
    try {
        const examples = await Example.find();
        res.send(examples);
    } catch (error) {
        console.log('Error getting examples:', error);
        res.status(500).send('Error getting examples');
    }
});

router.post('/', async (req, res) => {
    const example = new Example({
        name: req.body.name,
        description: req.body.description
    });

    try {
        const savedExample = await example.save();
        res.send(savedExample);
    } catch (error) {
        console.log('Error creating example:', error);
        res.status(500).send('Error creating example');
    }
});

module.exports = router;
