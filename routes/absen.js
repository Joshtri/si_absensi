const express = require('express');
const router = express.Router();


router.get('/data_absen',(req,res)=>{
  res.render('data_absen');
});

module.exports = router;