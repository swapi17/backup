const express = require('express');
const router = express.Router();
const agencyController = require("./../controllers/agency.controller");
const appConfig = require("./../config/appConfig")

module.exports.setRouter = function(app){

	//let baseUrl = appConfig.apiVersion+'/blogs';
	
	

    app.post('/createAgency',agencyController.createAgency);
	app.patch('/updateClient',agencyController.updateClient);
	app.get('/maxBill',agencyController.maxBill);

	



    

}


