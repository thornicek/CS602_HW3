const { connection } = require('mongoose');
const employeeDB = require('../employeeDB.js');
const Employee = employeeDB.getModel();

module.exports =  async (req , res , next) => {
  console.log("deleteEmployeeAfterConfirm called")
  let employeeId = req.body.id
  Employee.remove({_id: employeeId},
    function (err, result) {
      connection.close()
      if (err) throw err
      console.log("\nDelete...")
      console.log("Affected docs: ", result)
      res.redirect('/employees')
    })
    
        
  };

  