const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const logsController = require('../controllers/logsController');

// creating the user
router.post('/create', userController.createUser);

// getting a user by number plate
router.get('/user/:number', userController.getUser);

// entrty Log
router.post('/entry', logsController.enteryLog);

// entrty Log
router.post('/exit', logsController.exitLog);

module.exports = router;