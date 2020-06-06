const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    userID: {
        type: String
    },

    userPhoto : {
        type: String,
    },

    originalArt: {
        type: String
    },

    accuracy: {
        type: String
    },

    mode: {
        type: String
    }
});

module.exports = mongoose.model('Photo', PhotoSchema);