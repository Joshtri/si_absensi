const db = require('../utils/database')

exports.mapelJadwalPage = (req,res)=>{
  const data = {
    title : "Data Jadwal Mapel"
  }
  const query = "SELECT * FROM jadwal_mapel";

  db.query(query, (err,results)=>{
    if(err){
      throw err;
    }

    else if(!err){
      res.render('data_mapelJadwal',{
        mapelJadwalData : data,
        tableJadwalMapel : results,

        //notifikasi condition.
        notifSuksesTambah:false
      })
    }
  });
}


exports.addMapelJadwalPage = (req,res)=>{
  const data = {
    title :"Tambah Data Jadwal Mapel"
  }

  res.render('add_jadwalMapel',{
    jadwalMapelData : data,
  })

}

exports.addMapelJadwal = (req,res)=>{
  const mapelJadwalFields = {
    nama_mapel : req.body.nama_mapel,
    nama_kelas : req.body.nama_kelas,
    jam_mulai : req.body.jam_mulai,
    jam_selesai : req.body.jam_selesai,
    hari : req.body.hari
  }

  const data = {
    title : "Data Jadwal Mapel"
  }

  const query = 'INSERT INTO jadwal_mapel SET ?';

  db.query(query,mapelJadwalFields,(err,results)=>{
    if(err){
      throw err;
    }

    else if (!err){
      res.render('data_mapelJadwal',{
        mapelJadwalData : data,
        tableJadwalMapel : results,
        
        //notifikasi condition
        notifSuksesTambah:true

      })
    };
  });
}



exports.mapelOption = (req,res)=>{
  const query =  'SELECT * FROM mata_pelajaran';

  db.query(query, (err,results)=>{
    if(err){
      throw err;
    }

    else if(!err){
      res.json(results);
    }
  })

}

exports.deleteMapelJadwal = (req,res)=>{
  const id = req.body.id_jadwal_mapel;
  const query = "DELETE FROM jadwal_mapel WHERE id_jadwal_mapel = ?"


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
};