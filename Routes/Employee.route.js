const express = require('express');
const router = express.Router();

// Import the Employee model
const Employee = require('../Model/Employee');

// GET all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ GET employee by ID
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// POST a new employee
router.post('/', async (req, res) => {
  const { firstName, lastName, email } = req.body;

  const newEmployee = new Employee({ firstName, lastName, email });

  try {
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE an employee by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) return res.status(404).json({ message: 'Employee not found' });
    res.json({ message: 'Employee deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;



/*


employeeRoute.route('/addEmployee').post(function(req,res))
});


employeeRoute.route('/editEmployee/:id).get(async function(req,res)){
        let id=req.params.id;
        await employeeModel.findById (id,function(err,employee)
        {
            res.json(employee);
        });
});

employeeRoute.route('/updateEmployee/:id').post(async function(req,res,next)){

});


*/