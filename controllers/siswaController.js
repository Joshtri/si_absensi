const db = require('../utils/database')

exports.siswaPage = (req,res)=>{
  const data = {
    title: "Data Siswa"
  };
  
  const query = "SELECT * FROM siswa";

  db.query(query, (err,results)=>{
    if(err){
      throw err;
    }

    else if(!err){
      res.render('data_siswa',{
        siswaData : data,
        tableSiswa : results,
        notifSuksesTambah : false
      });
    }
  });


}



exports.addSiswaPage = (req,res)=>{
  const data = {
    title: "Tambah Data Siswa"
  }

  res.render('add_siswa', {
    errorDuplikat : false,
    siswaData : data
  });

}

exports.addSiswa = (req,res)=>{

  const siswaFields = {
    nama_siswa : req.body.nama_siswa,
    nis : req.body.nis,
    password : req.body.password,
    kelas_siswa : req.body.kelas_siswa,
    jurusan : req.body.jurusan_siswa,
    alamat : req.body.alamat,
    no_hp : req.body.no_hp,
    jenis_kelamin : req.body.jenis_kelamin
  }
  
  const data = {
    title: "Data Siswa"
  };

  const queryInsert = 'INSERT INTO siswa SET ?'
  const queryCheckNama = "SELECT * FROM siswa WHERE nama_siswa = ?"

  db.query(queryCheckNama, [siswaFields.nama_siswa],(err,results)=>{
    if(err){
      throw err;
    }

    else if(results.length > 0){
      // res.status(500).send("data nama siswa sudah ada di database.");
      res.render('add_siswa',{

        errorDuplikat : true,
        siswaData : data
      })
    }
    
    else if (!err & !results.length > 0){
      db.query(queryInsert,siswaFields,(err,results)=>{
        if(err){
          throw err;
        }
        else if (!err){
          res.render('data_siswa',{
            siswaData: data,
            tableSiswa : results,
            notifSuksesTambah : true
          });
        }
      });
    }
  });
};

exports.kelasOption = (req,res)=>{
  const query = "SELECT * FROM kelas";

  db.query(query, (err,results)=>{
    if(err){
      throw err;
    }
    else if(!err){
      res.json(results);
    }
  });
};

exports.deleteSiswa = (req,res)=>{
  const id = req.body.id_siswa;
  const query = 'DELETE FROM siswa WHERE id_siswa = ?';

  db.query(query,id,(err,results)=>{

    if(err){
      res.status(200).json({err})
    }
    else if(results[0] === 0){

    }

    else{
      res.status(200).json({status: 'success to delete.'})
    }
  });
};