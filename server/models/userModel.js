const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    picture_path: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    interests: {
        type: [String],
        required: true
    },
    achievements: {
        type: [String],
        required: true
    },
    communities: {
        type: [String],
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);