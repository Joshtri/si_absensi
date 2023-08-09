const db = require('../utils/database');

exports.kelasPage = (req,res)=>{
  const data ={
    title:"Data Kelas"
  }

  const query = 'SELECT * FROM kelas'
  // const query = 'SELECT *, UPPER(nama_kelas) AS nama_kelas_upper FROM kelas';
  db.query(query, (err,results)=>{

    if(err){
      throw err;
    }
    else if(!err){
      res.render('data_kelas',{
        kelasData:data,
        tableKelas: results,
        notifSuksesTambah : false
      });
    }
  });
}

exports.addKelasPage = (req,res)=>{

  const data = {
    title:"Tambah Data Kelas"
  }

  res.render('add_kelas',{
    addKelasData:data
  });
}

//CREATE
exports.addKelas = (req,res)=>{

  const kelasFields = {
    nama_kelas: req.body.nama_kelas,
    nama_wali_kelas : req.body.nama_wali_kelas
  }

  const data ={
    title:"Data Kelas"
  }

  const query = 'INSERT INTO kelas SET ?';

  db.query(query,kelasFields,(err,results)=>{
    if(err){
      throw err;
    }

    else if (!err){
      res.render('data_kelas',{
        kelasData:data,
        tableKelas: results,
        notifSuksesTambah : true
      });
    }

  })
}

exports.deleteKelas = (req,res)=>{
  const id = req.body.id_kelas;
  const query  = 'DELETE FROM kelas WHERE id_kelas = ?'

  db.query(query,id,(err,results)=>{
    if(err){
      res.status(500).json({ error: 'Failed to delete admin' });
    }
    
    else if(results.affectedRows === 0){
      res.status(404).json({ error: 'Admin not found' });
    }

    else{
      res.status(200).json({ message: 'Admin deleted successfully' })
    }
  });
}