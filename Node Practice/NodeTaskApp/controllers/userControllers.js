const User = require('../models/User');
const Task = require('../models/Task');
const dotenv = require('dotenv');
dotenv.config();

const checkValidation = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let contact = req.body.contact;
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email != null && email != '' && !emailRegex.test(email)) {
        return res.status(400).json({
            message: process.env.FAILURE,
            value: `Email format should be abc123@abchgf.com...`
        });
    }
    if (password != null && password != '' && !passwordRegex.test(password)) {
        return res.status(400).json({
            message: process.env.FAILURE,
            value: `Password length should be 8 or more, with at least a symbol, upper and lower case letters and a number...`
        });
    }
    if (contact != null && contact != '' && contact.length != 10) {
        return res.status(400).json({
            message: process.env.FAILURE,
            value: `Mobile Number should be of length 10...`
        });
    }
    return res.status(200);
};

const register = async(req, res) => {
    try {
        let val = checkValidation(req, res);
        if (val.statusCode == 200) {
            const userModel = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                contact: req.body.contact
            });
            let registeredUser = await userModel.save();
            return res.status(201).json({
                message: `${process.env.SUCCESS}`,
                value: registeredUser
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: `${process.env.FAILURE} :: Internal Server Error: ${error.message}`
        });
    }
};

const login = async(req, res) => {
    try {
        const user = await User.find({ email: req.params.email, password: req.params.password });
        if (user.length == 0) {
            return res.status(200).json({
                message: `${process.env.FAILURE}`,
                value: `INVALID_CREDENTIAL`
            })
        }
        return res.status(200).json({
            message: `${process.env.SUCCESS}`,
            value: user[0]
        });
    } catch (error) {
        return res.status(500).json({
            message: `${process.env.FAILURE} :: Internal Server Error: ${error.message}`
        });
    }
};

const getUserById = async(req, res) => {
    try {
        if (req.params.id == null) {
            return res.status(400).json({
                message: `${process.env.FAILURE} :: Bad Request...`
            });
        }
        let user = await User.findById({
            _id: req.params.id
        });
        if (user == null) {
            return res.status(400).json({
                message: `${process.env.FAILURE} :: User Not found with ID : ${req.params.id}`
            });
        }
        return res.status(200).json({
            message: `${process.env.SUCCESS}`,
            value: user
        });
    } catch (error) {
        return res.status(500).json({
            message: `${process.env.FAILURE} :: Internal Server Error: ${error.message}`
        });
    }
};

let deleteUserById = async(req, res) => {
    try {
        if (req.params.id == null) {
            return res.status(400).json({
                message: `${process.env.FAILURE} :: Bad Request...`
            });
        }
        let user = await User.findById({
            _id: req.params.id
        });
        if (user == null) {
            return res.status(400).json({
                message: `${process.env.FAILURE} :: User Not found with ID : ${req.params.id}`
            });
        }
        deleteTasksByUser(req, res);
        await user.deleteOne();
        return res.status(200).json({
            message: process.env.SUCCESS
        });
    } catch (error) {
        return res.status(500).json({
            message: `${process.env.FAILURE} :: Internal Server Error: ${error.message}`
        });
    }
};

let deleteTasksByUser = async(req, res) => {
    try {
        const allTasks = await Task.find({});
        let taskByUser = [];
        if (allTasks && allTasks.length > 0) {
            taskByUser = allTasks.filter((task) => task.userId == req.params.id);
        }
        taskByUser.forEach(async task => {
            await task.deleteOne();
        });
    } catch (error) {
        return res.status(500).json({
            message: `${process.env.FAILURE} :: Internal Server Error: ${error.message}`
        });
    }
};

module.exports = {
    register,
    login,
    getUserById,
    deleteUserById
};