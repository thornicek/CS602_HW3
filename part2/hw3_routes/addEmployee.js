const employeeDB = require('../employeeDB.js');
const Employee = employeeDB.getModel();

module.exports = (req , res , next) => {
		
		// Fill in the code
		res.render("addEmployeeView")

};
