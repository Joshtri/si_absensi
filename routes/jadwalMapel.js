const express = require('express');
const router = express.Router();
const jadwalMapelController = require('../controllers/mapelJadwalControlller');

router.get('/data_jadwal_mapel', jadwalMapelController.mapelJadwalPage);
router.get('/add_jadwalMapel', jadwalMapelController.addMapelJadwalPage);


router.post('/post_mapelJadwal', jadwalMapelController.addMapelJadwal);

router.post('/delete_mapelJadwal', jadwalMapelController.deleteMapelJadwal);

router.get('/mapel_list', jadwalMapelController.mapelOption);

module.exports = router;