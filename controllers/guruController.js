const db = require('../utils/database');

// function untuk read data di tabel.
exports.guruPage = (req,res)=>{
  const data = {
    title: "Data Guru"
  }
  const query = "SELECT * FROM guru";

  db.query(query, (err,results)=>{

    if(err){
      throw err;
    }

    else if(!err){
      res.render('data_guru',{
        guruData:data,
        tableGuru:results,

        // notifikasi condition.
        notifSuksesTambah : false
      });
    }
  });
}

// function untuk halaman tambah data guru
exports.guruAddPage = (req,res) =>{
  const data = {
    title: "Tambah Data Guru"
  };

  res.render('add_guru',{
    guruData:data,
    errorDuplikat : false
  });
}

// fungsi query utk tambah data
exports.guruAdd = (req,res)=>{

  const guruFields = {
    nama_lengkap : req.body.nama_lengkap, 
    nip : req.body.nip,
    bidang: req.body.bidang,
    email : req.body.email,
    password : req.body.password,
    role : req.body.role,
    no_hp : req.body.no_hp,
    alamat : req.body.alamat,
    jenis_kelamin : req.body.jenis_kelamin
  };

  const data = {
    title: "Data Guru"
  }

  const queryInsert = 'INSERT INTO guru SET ?';
  const queryCheck = "SELECT * FROM guru WHERE nama_lengkap = ?"

  db.query(queryCheck,[guruFields.nama_lengkap], (err,results)=>{
    if(err){
      throw err;
    }

    //cek apa sudah ADA DI DATABASE. dan sekaligus memberi peringatan ke FE
    else if(results.length > 0){
      res.render('add_guru',{
        guruData:data,
        errorDuplikat : true
      })
    }

    else if(!err & !results.length > 0 ){
      db.query(queryInsert, guruFields, (err,results)=>{
        if(err){
          throw err;
        }

        else if (!err){
          // res.send('SUKSES');
          res.render('data_guru',{
            tableGuru:results,
            guruData:data,
    
            // notifikasi condition.
            notifSuksesTambah : true

    
          })
        }
      });
    }
  });
};


exports.deleteGuru = (req,res)=>{
  const id = req.body.id_guru;

  const query = "DELETE FROM guru WHERE id_guru = ?"

  db.query(query,id,(err,results)=>{
    if(err){
      res.status(200).json({err});
    }

    else if(results.affectedRows === 0){
      res.status(404).json({ error: 'Admin not found' });
    }
    else{
      res.status(200).json({ message: 'deleted successfully' })
    }
  });
}