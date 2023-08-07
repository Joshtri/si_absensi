const express = require('express');
const router = express.Router();
const siswaController = require('../controllers/siswaController');


router.get('/data_siswa', siswaController.siswaPage);
router.get('/add_siswa', siswaController.addSiswaPage);

router.get('/kelas_list', siswaController.kelasOption);

router.post('/post_siswa', siswaController.addSiswa);
router.post('/delete_siswa', siswaController.deleteSiswa)
module.exports = router;