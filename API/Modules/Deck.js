const mongoose = require('mongoose');

const DeckSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id_User: {
        type: String,
        required: true
    },
    cards: {
        type: Array,
        require: true
    },
    id:{
        type : String,
        require: true,
    }
});

const Deck = mongoose.model('Deck', DeckSchema);

module.exports = Deck;
