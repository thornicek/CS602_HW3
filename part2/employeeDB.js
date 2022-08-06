const mongoose = require('mongoose');

const credentials = require("./credentials.js");

const dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

let connection = null;
let model = null;

let Schema = mongoose.Schema;

// Step 1. Fill in the schema definition

// Step 2. For collection, replace lastName below with your lastName 

let employeeSchema = new Schema({
	firstName: "string",
	lastName: "string"
	

}, {
	collection: 'employees_Hornicek'
});

module.exports = {	
	getModel: () => {
		if (connection == null) {
			console.log("Creating connection and model...");
			console.log("connection URL is ", dbUrl)
			connection = mongoose.createConnection(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
			model = connection.model("EmployeeModel", 
							employeeSchema);
		};
		return model;
	}
};
























