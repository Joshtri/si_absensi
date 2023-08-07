const express = require("express");
const router = express.Router();
const mapelController = require('../controllers/mapelController');


router.get('/data_mapel', mapelController.mapelPage);
router.get('/add_mapel', mapelController.addMapelPage);


router.post('/post_mapel', mapelController.addMapel);
router.get('/guru_list', mapelController.optionPengajar);


router.post('/delete_mapel', mapelController.deleteMapel);


module.exports = router;