const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
	name: {
		type: String,
		required: [true, "Name is required"]
	},
	email: {
		type: String,
		required: [true, "Lastname is required"],
    unique:true
	},
	phone: {
		type: Number,
		required: [true, "Phone number is required"]
	},
	message: {
		type: String,
		required: [true, "Message is required. "]
	},
});

module.exports = mongoose.model("contact_us", ContactSchema);
