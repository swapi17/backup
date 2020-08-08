const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
	email: {
		type: String,
        required: true,
        minlength: 1,
        trim: true
	},
	phoneNumber: {
		type: String,
        required: true,
        minlength: 10,
        trim: true
	},
	totalBill: {
		type: Number,
        required: true,
        minlength: 1,
        trim: true
	},
	agencyId: {
		type: mongoose.Types.ObjectId,
		ref: "Agency",
        required: true,
        
	}
	
	

})

const Client = mongoose.model('Client', ClientSchema);

module.exports = { Client }