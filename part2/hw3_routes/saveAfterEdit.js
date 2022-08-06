const { connection } = require('mongoose');
const employeeDB = require('../employeeDB.js');
const Employee = employeeDB.getModel();

module.exports = async (req , res , next) => {
    console.log("saveAfterEdit called")
    let employeeId = req.body.id
    let updatedFirstName = req.body.fname
    let updatedLastName = req.body.lname

    console.log(`employee id ${employeeId}, updatedFirstname ${updatedFirstName}, updatedLastName ${updatedLastName}`)
    Employee.update({_id: employeeId}, 
        {firstName: updatedFirstName, lastName: updatedLastName},
        function(err, result) {
            connection.close()
            if (err) throw err
            console.log("\n Update...")
            console.log("Affected docs:", result)
            res.redirect('/employees')
        })
 };
