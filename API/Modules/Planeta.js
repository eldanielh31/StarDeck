const mongoose = require('mongoose');

const PlanetaSchema = new mongoose.Schema({
    _id:{
        type:String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    abilitie: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    }
});

const Planeta = mongoose.model('Planeta', PlanetaSchema);

module.exports = Planeta;