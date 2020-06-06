const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: [true, 'Add a user']
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