const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        number: {
            type: Number,
            required: true,
            unique: true
        },
        adress: {
            type: String,
            required: false,
            unique: false
        },
        company: {
            type: String,
            required: false,
            unique: false
        },
        /*  foto: {
             type: String,
             default: ""
         } */
    },
    { timestamps: true }
)
module.exports = mongoose.model('Contact', ContactSchema)