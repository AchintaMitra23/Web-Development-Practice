const express = require('express');
const router = express.Router();
const { getAllTasks, createNewTask, getTaskById, updateTaskById, deleteTaskById, completeTaskById, getTasksByUserId } = require('../controllers/taskControllers');

router.get('/getAllTasks', getAllTasks);

router.post('/createNewTask', createNewTask);

router.get('/getTaskById/:id', getTaskById);

router.patch('/updateTaskById/:id', updateTaskById);

router.delete('/deleteTaskById/:id', deleteTaskById);

router.patch('/completeTaskById/:id', completeTaskById);

router.get('/getTasksByUserId/:id', getTasksByUserId);

module.exports = router;