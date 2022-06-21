const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const logsController = require('../controllers/logsController');
const numberPlateController = require('../controllers/numberplate');

//generate Numberplate
router.post('/findNumber', numberPlateController.recoknizeNumber);

// creating the user
router.post('/createuser', userController.createUser);

// getting a user by number plate
router.get('/user/:number', userController.getUserByNumber);

// getting a user by ID
router.get('/userid/:id', userController.getUserById);

// editing user details
router.post('/user/:id', userController.updateUserById);

// entrty Log
router.post('/entry', logsController.enteryLog);

// entrty Log
router.post('/exit', logsController.exitLog);

module.exports = router;