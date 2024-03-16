const express = require('express');
const router = express.Router();
const {
    getAllEmployees,
    getEmployeeByID,
    updateEmployeeByID,
    deleteEmployeeByID,
    createEmployee,
    getEmployeeByDesignation
} = require('../controllers/employeeControllers');

// get all employees route
router.get('/getAllEmployees', getAllEmployees);

// get employee by id route
router.get('/getEmployee/:id', getEmployeeByID);

// update employee by id route
router.put('/updateEmployee/:id', updateEmployeeByID);

// delete employee by id route
router.delete('/deleteEmployee/:id', deleteEmployeeByID);

// create employee route
router.post('/createEmployee', createEmployee);

// get employees by designation
router.get('/getEmployeesByDesignation/:position', getEmployeeByDesignation);

module.exports = router;