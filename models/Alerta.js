const mongoose = require('mongoose');

const AlertaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    station: {
        type: String,
        required: true
    },
    sensor: {
        type: String,
        required: true
    },
    umbral: {
        type: Number,
        required: true
    },
    validation: {
        type: Boolean,
        required: true
    },
    observation: {
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Alertas', AlertaSchema);
