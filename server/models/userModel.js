const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    profession: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);