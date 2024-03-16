const Employee = require('./../models/employeeModel');
const asyncHandler = require('express-async-handler');

const getAllEmployees = asyncHandler(async(req, res) => {
    try {
        const employeesData = await Employee.find({});
        res.status(200).json(employeesData);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

const getEmployeeByID = asyncHandler(async(req, res) => {
    try {
        const _id = req.params.id;
        const employeeData = await Employee.findById({ _id });
        res.status(200).json(employeeData);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

const updateEmployeeByID = asyncHandler(async(req, res) => {
    try {
        const _id = req.params.id;
        const employeeData = await Employee.findByIdAndUpdate({ _id }, req.body);
        if (!employeeData) {
            res.status(404);
            throw new Error(`Can't find product ID : ${_id}`);
        } else {
            const updatedEmployeeData = await Employee.findById({ _id });
            res.status(200).json(updatedEmployeeData);
        }
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

const deleteEmployeeByID = asyncHandler(async(req, res) => {
    try {
        const _id = req.params.id;
        const employeeData = await Employee.findByIdAndDelete({ _id });
        if (!employeeData) {
            res.status(404);
            throw new Error(`Can't find product ID : ${_id}`);
        } else {
            res.status(200).json(employeeData);
        }
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

const createEmployee = asyncHandler(async(req, res) => {
    try {
        const employeeData = await Employee.create(req.body);
        res.status(200).json({ employeeData });
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

const getEmployeeByDesignation = asyncHandler(async(req, res) => {
    try {
        const position = req.params.position;
        const employeeData = await Employee.find({
            designation: position
        });
        res.status(200).json(employeeData);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

module.exports = {
    getAllEmployees,
    getEmployeeByID,
    updateEmployeeByID,
    deleteEmployeeByID,
    createEmployee,
    getEmployeeByDesignation
};