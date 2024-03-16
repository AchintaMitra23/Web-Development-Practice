const express = require('express');
const router = express.Router();
const { register, login, getUserById, deleteUserById } = require('../controllers/userControllers');

router.post('/register', register);

router.get('/login/:email/:password', login);

router.get('/getUserById/:id', getUserById);

router.delete('/deleteUserById/:id', deleteUserById);

module.exports = router;