const employeeDB = require('../employeeDB.js');
const Employee = employeeDB.getModel();

module.exports = async (req , res , next) => {
    
  let employeeId = req.params.id
  console.log("deleteEmployee called, employeeId = ", employeeId)
  let employeesArr = await Employee.find({_id: employeeId}).lean()
  console.log("array from mongo", employeesArr)
  let employee = employeesArr[0]

  console.log("employee is ", employee)

  let passedData = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      id: employee._id
  }

  res.render("deleteEmployeeView", {data: passedData, title: "Delete employee"})
        
  };

  