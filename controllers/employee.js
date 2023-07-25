const Employee = require("../models/Employee");

const addEmployee = async (req, res) => {
  try {
    const nameEmployee = req.body.nameEmployee;
    const lastName = req.body.lastName;
    const salary = req.body.salary; 

    const newEmployee = new Employee({
      nameEmployee: nameEmployee,
      lastName: lastName,
      salary: salary
    });

    await newEmployee.save();

    return res
      .status(200)
      .json({ message: "Empleado registrado correctamente"});
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: "Ha ocurrido un error al crear el empleado" });
  }
};


module.exports = {
  addEmployee,
};
