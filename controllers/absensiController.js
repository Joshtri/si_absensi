const db = require('../utils/database');


exports.seninPage = (req,res) =>{
  const data = {
    title: "Absensi Senin"
  };

  const query  = "SELECT * FROM jadwal_mapel WHERE hari = 'Senin' ORDER BY nama_kelas ASC"
  

  db.query(query,(err,results)=>{
    
    if(err){
      res.status(500).json({err});
    }

    else if(!err){
      res.render('senin',{
        seninKelas:results,
        seninData:data
      });
    }
  });
}

exports.selasaPage = (req,res)=>{
  res.render('selasa',{

  });
}

exports.rabuPage = (req,res)=>{
  res.render('rabu');

}

exports.kamisPage = (req,res)=>{
  res.render('kamis');
}

exports.jumatPage = (req,res)=>{

  res.render('jumat');
}

exports.sabtuPage = (req,res)=>{
  res.render('sabtu');
}