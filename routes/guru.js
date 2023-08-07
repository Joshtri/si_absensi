const express = require('express');
const router = express.Router();
const guruController = require('../controllers/guruController');

router.get('/data_guru', guruController.guruPage);
router.get('/add_guru', guruController.guruAddPage);

router.post('/post_guru', guruController.guruAdd);

router.post('/delete_guru', guruController.deleteGuru);

module.exports = router;