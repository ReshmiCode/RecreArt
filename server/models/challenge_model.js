const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
    originalArt: {
        type: String
    },

    photos: [
        mongoose.Schema.Types.ObjectId
    ]
});

module.exports = mongoose.model('Challenge', ChallengeSchema);