const express = require('express');
const router = express.Router();
const absenController = require('../controllers/absensiController')


router.get('/data_absen',(req,res)=>{
  res.render('data_absen');
});


//DATA DARI HARI SENIN SAMPAI SELASA.
router.get('/data_senin', absenController.seninPage);
router.get('/data_selasa', absenController.selasaPage)
router.get('/data_rabu', absenController.rabuPage)
router.get('/data_kamis', absenController.kamisPage)
router.get('/data_jumat', absenController.jumatPage)
router.get('/data_sabtu', absenController.sabtuPage)


module.exports = router;