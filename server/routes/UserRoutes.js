const express = require('express');
const router = express.Router();
const  UserController =  require('../controllers/auth-user-controller');

router.post('/register', UserController.UserRegister);
router.post('/login', UserController.UserLogin);

module.exports = router;
