const { Schema, model } = require('mongoose');

const CryptoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String
});

module.exports = model('Crypto', CryptoSchema)