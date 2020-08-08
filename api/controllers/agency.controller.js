const db = require("../models");
const Agency = db.agency;
const Client = db.client;


const createNewAgency = async (agency) => {
 

  // Create agency
  const agency = new Agency({
    agency
    
  });

  // Save agency in the database
  const data = await Agency.save(agency);
  
  res.send(data);
  
  // Agency
    // .save(agency)
    // .then(data => {
      // res.send(data);
    // })
    // .catch(err => {
      // res.status(500).send({
        // message:
          // err.message || "Some error occurred while creating the Tutorial."
      // });
    // });
};



const createNewClient = async (client) => {
  

  // Create agency
  const client = new Client({
    client 
  });
  
  cosnt data = await Client.save(client);
  
  res.send(data);

  // // Save agency in the database
  // Client
    // .save(client)
    // .then(data => {
      // res.send(data);
    // })
    // .catch(err => {
      // res.status(500).send({
        // message:
          // err.message || "Some error occurred while creating the Tutorial."
      // });
    // });
 };

exports.createAgency = async (req,res) => {
 

    let agency = req.body.agencyDetails;
	let client = req.body.clientDetails;
	
	let agencyName = agency.name;
    let address1 = agency.address1;
	let address2 = agency.address2;
	let city = agency.city,
	let state: agency.state,
	let phoneNumber = agency.state,

    let agency = await createAgency({
    agencyName: agency.name,
    address1: agency.address1,
	address2: agency.address2,
	city: agency.city,
	state: agency.state,
	phoneNumber: agency.phoneNumber
  });
    console.log("\n>> Agency:\n", agency);
	
    let client = await createClient(agency._id, {
    clientName: client.name,
    email: client.email,
	phoneNumber: client.phoneNumber,
	totalBill: client.totalBill,
	agencyId: agency._id
  });
   console.log("\n>> Client:\n", client);
};





exports.updateClient = async (req, res) => {
  
  await Client.findOneAndUpdate({ _id: req.body.id}, {
        $set: req.body
    });
  res.send({ 'message': 'updated successfully'});
  // Client.findOneAndUpdate({ _id: req.body.id}, {
        // $set: req.body
    // }).then(() => {
        // res.send({ 'message': 'updated successfully'});
    // });
};

exports.maxBill = async (req, res) => {
  
    const maxClient = await Client.find({}).sort({totalBill:-1}).limt(1);
	const agency = await Agency.findById(maxClient.agencyId);
	res.send({'agencyName':agency.name, 'clientName': maxClient.name, 'totalBill':maxClient.totalBill})
};


