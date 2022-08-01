const mongoose = require('mongoose');

const SensorSchema = mongoose.Schema({
    timearrive: {
        type: Date,
        required: true
    },
    CONDUCTIVITY: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    PH: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    TEMPERATURE: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    TSS: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    station: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Sensores', SensorSchema);
