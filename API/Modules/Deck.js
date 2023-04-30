const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    _id: {
        type: String,
        required: true,
        unique: true
    },
    id_Usuario: {
        type: String,
        required: true
    },
    list_Card: {
        type: Array,
        require: true
    }
});

const Example = mongoose.model('Example', exampleSchema);

module.exports = Example;
