const db = require('../utils/database');

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
        tableGuru:results
      });
    }
  });
}


exports.guruAddPage = (req,res) =>{
  const data = {
    title: "Tambah Data Guru"
  };

  res.render('add_guru',{
    guruData:data
  });
}
exports.guruAdd = (req,res)=>{

  const guruFields = {
    nama_lengkap : req.body.nama_lengkap, 
    nip : req.body.nip,
    email : req.body.email,
    password : req.body.password,
    role : req.body.role,
    no_hp : req.body.no_hp,
    alamat : req.body.alamat,
    jenis_kelamin : req.body.jenis_kelamin
  };

  const query = 'INSERT INTO guru SET ?';

  db.query(query,guruFields, (err,results)=>{
    if(err){
      throw err;
    }

    else if (!err){
      res.send('SUKSES');
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