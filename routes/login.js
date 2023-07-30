const express = require ('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/login', loginController.loginPage);
router.post('/post_login', loginController.loginUser)


module.exports = router;