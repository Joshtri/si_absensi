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
    errorDuplikat : false,
    mapelAddData :data
  })
}


// Backend untuk data mapel.
exports.addMapel = (req,res) =>{

  const mapelFields = {

    nama_mapel:req.body.nama_mapel,
    // nama pengajar ada 3
    nama_pengajar : req.body.nama_pengajar,
    nama_pengajar_2 : req.body.nama_pengajar_2
  }

  const data = {
    title:"Data Mapel"
  }

  const queryInsert = 'INSERT INTO mata_pelajaran SET ?'
  const queryCheck = 'SELECT * FROM mata_pelajaran WHERE nama_mapel = ?'

  db.query(queryCheck,[mapelFields.nama_mapel], (err,results)=>{
    if(err){
      console.error('Error checking data:', err);
      res.status(500).send({ message: 'Internal Server Error' });
      return;
      
    }
    else if(results.length > 0){
      res.render('add_mapel',{
        mapelAddData:data,
        tableMapel:results,
        notifSuksesTambah : true,
        errorDuplikat : true
      })
    }

    else if (!err && !results.length > 0){

      db.query(queryInsert,mapelFields,(err,results)=>{

        if (err) {
          console.error('Error inserting data:', insertError);
          res.status(500).send({ message: 'Internal Server Error' });
          return;
        }

        else if(!err){
          res.render('data_mapel',{
            mapelAddData:data,
            mapelData :data,
            tableMapel:results,
            notifSuksesTambah : true
            
          })
        }
      });
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


exports.updateMapel = (req,res) =>{

  //fields mapel
  const id_mapel = req.params.id_mapel;
  const {nama_mapel,nama_pengajar,nama_pengajar_2} = req.body;

  const queryUpdate = "UPDATE mapel SET ? nama_mapel = ?, nama_pengajar = ?, nama_pengajar_2 = ? WHERE id_mapel = ?";

  db.query(queryUpdate, [nama_mapel,nama_pengajar,nama_pengajar_2,id_mapel], (err,results)=>{
    if(err){
      console.log(err);
      res.status(500).send("errro saat update" +err);
    }

    else if(!err){
      res.status(200).json({ message: 'Data updated successfully' });
    }
  })
}


