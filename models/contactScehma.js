const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ContactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Firstname is required"]
    }, 
    email: {
        type: String,
        required: [true, "Lastname is required"]
    },
    phone: {
      type: Number,
      required: [true,"Phone number is required"]
    },
    message:{
      type: String,
      required: [true,"Message is required. "]
    }
})

const ContactSchema1 = mongoose.model("contact", ContactSchema)
module.exports = ContactSchema1