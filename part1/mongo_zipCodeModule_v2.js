const MongoClient = require('mongodb').MongoClient;
const credentials = require("./credentials.js");

const dbUrl = 'mongodb+srv://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + '/' + credentials.database;

let client = null;

const getConnection = async () => {
	if (client == null)
		client = await MongoClient.connect(dbUrl,  { useNewUrlParser: true ,  useUnifiedTopology: true });
	return client;
}

module.exports.lookupByZipCode =  async (zip) => {
		
	let client = await getConnection();
	let collection = client.db(credentials.database).collection('zipcodes');
	
	let result = await collection.find({'_id': zip}).toArray();
	
	if (result.length > 0)
		return result[0];
	else
		return undefined;
};

// Complete the code for the following

module.exports.lookupByCityState = async (city, state) => {
	console.log(`lookupByCityState, city is ${city}, state is ${state}`)

	let client = await getConnection();
	let collection = client.db(credentials.database).collection('zipcodes');
	
	// Fill in the rest
	let cursor = await collection.find({"city": city, "state": state})

	let result = await cursor.toArray();

	if (result.length > 0) {
		console.log("if entered")
		let mappedResult = result.map(cityObject => {return {"_id": cityObject._id, "pop": cityObject.pop}})
		let resultObject = {
			"city": city,
			"state": state,
			"data": mappedResult
		}
		return resultObject
	}
	else {
		console.log("else entered")
		return undefined;
	}
		


};

module.exports.getPopulationByState = 
	async (state) => {

		let client = await getConnection();
		let collection = client.db(credentials.database).collection('zipcodes');
	
		// Fill in the rest
		let cursor = await collection.find({"state": state})

		let resultArray = await cursor.toArray()

		if (resultArray.length > 0) {
			let total = resultArray.reduce(function (previousValue, currentValue){
				return previousValue + currentValue.pop;
				},0);
				
			// create results object
			let result = {
				"state": state,
				"pop": total
			}
			return result
		}
		else {
			return undefined;
		}


	};

