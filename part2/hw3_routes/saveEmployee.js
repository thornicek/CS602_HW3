const employeeDB = require('../employeeDB.js');
const Employee = employeeDB.getModel();

module.exports = async (req , res , next) => {

  console.log("saveEmployee called")
 
    // Fill in the code
    var employee = new Employee({
      firstName: req.body.fname,
      lastName: req.body.lname
    })

    employee.save(function (err){
      if (err)
        console.log("Error : %s", err)
      res.redirect('/employees');
    })

  };
