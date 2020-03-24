const mongoose = require('mongoose');
const requiredMsg = "{PATH} is required.";

const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, requiredMsg],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."]
        },
        type: {
            type: String,
            required: [true, requiredMsg],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."]
        },
        description: {
            type: String,
            required: [true, requiredMsg],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."]
        },
        skill1: {
            type: String
        },
        skill2: {
            type: String
        },
        skill3: {
            type: String
        },
        like: {
            type: Number,
            default: 0
        }
    }, { timestamps: true }
);
module.exports.Pet = mongoose.model('Pet', PetSchema);