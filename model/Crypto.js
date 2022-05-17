const { Schema, model } = require('mongoose');

const CryptoSchema = new Schema({
    crypto: {
        type: String,
        required: true
    },
    description: String
});

module.exports = model('Crypto', CryptoSchema)