const express = require('express');
const router = express.Router();
const kelasController = require('../controllers/kelasController');
const db = require('../utils/database');

router.get('/data_kelas', kelasController.kelasPage);
router.get('/add_kelas', kelasController.addKelasPage)

router.post('/post_kelas', kelasController.addKelas);


// Endpoint API untuk mengambil data kelas berdasarkan ID


router.post('/delete_kelas', kelasController.deleteKelas);

module.exports = router;