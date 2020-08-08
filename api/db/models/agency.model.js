const mongoose = require('mongoose');

const AgencySchema = new mongoose.Schema({
    agencyName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
	address1: {
		type: String,
        required: true,
        minlength: 1,
        trim: true
	},
	address2: {
		type: String,
        minlength: 1,
        trim: true
	},
	state: {
		type: String,
        required: true,
        minlength: 1,
        trim: true
	},
	city: {
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
	}
	

})

const Agency = mongoose.model('Agency', AgencySchema);

module.exports = { Agency }