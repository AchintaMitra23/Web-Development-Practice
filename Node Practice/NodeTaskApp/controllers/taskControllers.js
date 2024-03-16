const Task = require('../models/Task');
const dotenv = require('dotenv');
dotenv.config();

const getAllTasks = async(_req, res) => {
    try {
        const tasks = await Task.find({});
        return res.status(200).json({
            message: `${process.env.SUCCESS}`,
            value: tasks
        });
    } catch (error) {
        return res.status(500).json({
            message: `${process.env.FAILURE} :: Internal Server Error: ${error.message}`
        });
    }
};

const createNewTask = async(req, res) => {
    try {
        const taskModel = new Task({
            title: req.body.title,
            description: req.body.description,
            userId: req.body.userId
        });
        const savedTask = await taskModel.save();
        return res.status(201).json({
            message: `${process.env.SUCCESS}`,
            value: savedTask
        });
    } catch (error) {
        return res.status(500).json({
            message: `${process.env.FAILURE} :: Internal Server Error: ${error.message} `
        });
    }
};

const getTaskById = async(req, res) => {
    try {
        if (req.params.id == null) {
            return res.status(400).json({
                message: `${process.env.FAILURE} :: Bad Request...`
            });
        }
        let task = await Task.findById({
            _id: req.params.id
        });
        if (task == null) {
            return res.status(400).json({
                message: `${process.env.FAILURE} :: Task Not found with ID : ${req.params.id}`
            });
        }
        return res.status(200).json({
            message: `${process.env.SUCCESS}`,
            value: task
        });
    } catch (error) {
        return res.status(500).json({
            message: `${process.env.FAILURE} :: Internal Server Error: ${error.message}`
        });
    }
};

const updateTaskById = async(req, res) => {
    try {
        if (req.params.id == null) {
            return res.status(400).json({
                message: `${process.env.FAILURE} :: Bad Request...`
            });
        }
        let task = await Task.findById({
            _id: req.params.id
        });
        if (task == null) {
            return res.status(400).json({
                message: `${process.env.FAILURE } :: Task Not found with ID: ${req.params.id}`
            });
        }
        task.title = req.body.title != null ? req.body.title : task.title;
        task.description = req.body.description != null ? req.body.description : task.description;
        const savedTask = await task.save();
        return res.status(200).json({
            message: `${process.env.SUCCESS}`,
            value: savedTask
        });
    } catch (error) {
        return res.status(500).json({
            message: `${process.env.FAILURE} :: Internal Server Error: ${error.message}`
        });
    }
};

const deleteTaskById = async(req, res) => {
    try {
        if (req.params.id == null) {
            return res.status(400).json({
                message: `${process.env.FAILURE} :: Bad Request...`
            });
        }
        let task = await Task.findById({
            _id: req.params.id
        });
        if (task == null) {
            return res.status(400).json({
                message: `${process.env.FAILURE} :: Task Not found with ID: ${req.params.id}`
            });
        }
        await task.deleteOne();
        return res.status(200).json({
            message: process.env.SUCCESS
        });
    } catch (error) {
        return res.status(500).json({
            message: `${process.env.FAILURE} :: Internal Server Error: ${error.message}`
        });
    }
};

const completeTaskById = async(req, res) => {
    try {
        if (req.params.id == null) {
            return res.status(400).json({
                message: `${process.env.FAILURE} :: Bad Request...`
            });
        }
        let task = await Task.findById({
            _id: req.params.id
        });
        if (task == null) {
            return res.status(400).json({
                message: `${process.env.FAILURE} :: Task Not found with ID: ${req.params.id}`
            });
        }
        task.completedFlag = true;
        const savedTask = await task.save();
        return res.status(200).json({
            message: `${process.env.SUCCESS}`,
            value: savedTask
        });
    } catch (error) {
        return res.status(500).json({
            message: `${process.env.FAILURE} :: Internal Server Error: ${error.message}`
        });
    }
};

const getTasksByUserId = async(req, res) => {
    try {
        const allTasks = await Task.find({});
        let taskByUser = [];
        if (allTasks && allTasks.length > 0) {
            taskByUser = allTasks.filter((task) => task.userId == req.params.id);
        }
        return res.status(200).json({
            message: `${process.env.SUCCESS}`,
            value: taskByUser
        });
    } catch (error) {
        return res.status(500).json({
            message: `${process.env.FAILURE} :: Internal Server Error: ${error.message}`
        });
    }
};

module.exports = {
    getAllTasks,
    createNewTask,
    getTaskById,
    updateTaskById,
    deleteTaskById,
    completeTaskById,
    getTasksByUserId
};