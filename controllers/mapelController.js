const db = require('../utils/database');

exports.mapelPage = (req,res) =>{
  const data = {
    title:"Data Mapel"
  }

  const query = "SELECT * FROM mata_pelajaran";

  db.query(query,(err,results)=>{
    if(err){
      throw err;
    }

    else if (!err){
      
      res.render('data_mapel',
      {
        mapelData:data,
        tableMapel:results,
        notifSuksesTambah : false
      });
    } 
  });

}

exports.addMapelPage = (req,res)=>{
  const data = {
    title:"Tambah Data Mapel"
  }

  res.render('add_mapel',{
    mapelAddData :data
  })
}

exports.addMapel = (req,res) =>{

  const mapelFields = {

    nama_mapel:req.body.nama_mapel,
    nama_pengajar : req.body.nama_pengajar
  }

  const data = {
    title:"Data Mapel"
  }

  const query = 'INSERT INTO mata_pelajaran SET ?'

  db.query(query,mapelFields, (err,results)=>{
    if(err){
      throw err;
    }

    else if (!err){
      res.render('data_mapel',{
        mapelData:data,
        tableMapel:results,
        notifSuksesTambah : true
      })
    }
  });
}

exports.optionPengajar = (req,res)=>{
  const query = "SELECT * FROM guru"

  db.query(query, (err,results)=>{
    if(err){
      throw err;
    }
    else if(!err){
      res.json(results);
    }
  });

};

exports.deleteMapel = (req,res)=>{
  const id = req.body.id_mapel;

  const query = 'DELETE FROM mata_pelajaran WHERE id_mapel = ?'

  db.query(query,id,(err,results)=>{
    if(err){
      res.status(500).json({ error: 'Failed to delete admin' });
    }
    else if(results.affectedRows === 0){
      res.status(404).json({ error: 'Data Kelas not found' });
    }
    else{
      res.status(200).json({ message: 'Admin deleted successfully' })
    }
  });


};


