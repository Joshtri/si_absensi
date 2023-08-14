const ejs = require('ejs');
const db = require('../utils/database');

exports.kelasPage = (req,res)=>{
  const data ={
    title:"Data Kelas"
  }

  const query = 'SELECT * FROM kelas ORDER BY nama_kelas ASC'
  // const query = 'SELECT *, UPPER(nama_kelas) AS nama_kelas_upper FROM kelas';
  db.query(query, (err,results)=>{

    if(err){
      throw err;
    }
    else if(!err){
      res.render('data_kelas',{
        kelasData:data,
        tableKelas: results,
        //notifikasi
        notifSuksesTambah : false,
        notifSuksesUpdate : false
      });
    }
  });
}

exports.addKelasPage = (req,res)=>{

  const data = {
    title:"Tambah Data Kelas"
  }

  res.render('add_kelas',{
    addKelasData:data,
    errorDuplikat : false
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

  const queryInsert = 'INSERT INTO kelas SET ?';
  const queryCheck = 'SELECT * FROM kelas WHERE nama_kelas = ? '

  db.query(queryCheck,[kelasFields.nama_kelas],(err,results)=>{
    if(err){
      console.error('error checking data ' + err)
      res.status(500).send({message:"error"})
      return;
    }
    else if(results.length > 0){
      // res.status(500).send('Data sudah ada di database')
      res.render('add_kelas',{
        addKelasData:data,
        errorDuplikat : true
      })
    }

    else if(!err & !results.length > 0){

      db.query(queryInsert,kelasFields,(err, results)=>{
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

//UPDATE KELAS
// exports.updateKelas = (req,res) =>{

//   const id = req.body.id;
//   const { nama_kelas, nama_wali_kelas } = req.body;

//   const queryUpdate = 'UPDATE kelas SET nama_kelas = ?, nama_wali_kelas = ? WHERE id_kelas = ?';
//   db.query(queryUpdate, [nama_kelas, nama_wali_kelas, id], (err, results) => {
//     if (err) {
//       console.error('Error updating data in MySQL:', err);
//       res.status(500).json({ message: 'Error updating data' });
//       return;
//     }

//     // Ambil data kelas yang baru saja di-update
//     const updatedData = {
//       nama_kelas: nama_kelas,
//       nama_wali_kelas: nama_wali_kelas
//     };

//     // Render modal dengan data yang baru saja di-update
//     ejs.renderFile('update_kelas.ejs', { updateData: updatedData }, (err, renderedHtml) => {
//       if (err) {
//         console.error('Error rendering modal template:', err);
//         res.status(500).json({ message: 'Error rendering modal template' });
//         return;
//       }

//       // Kirim HTML modal yang telah dirender sebagai respons
//       res.status(200).send(renderedHtml);
//     });
//   });
// }


// exports.updateKelas = (req,res)=>{

//   const id_kelas = req.body.id_Kelas;
//   const query = 'SELECT * FROM kelas WHERE id_kelas = ?'

//   db.query(query,[id_kelas], (err,resultFind)=>{
//     if(err){
//       throw err;
//     }
    
//     else if(!err){
//       res.send('Hadeh' + resultFind);
//     }
//   });
// };


//API UPDATE KELAS
exports.updateKelas = (req, res) => {
  const id_kelas = req.params.id_kelas;
  const { nama_kelas, nama_wali_kelas } = req.body;

  const queryUpdate = 'UPDATE kelas SET nama_kelas = ?, nama_wali_kelas = ? WHERE id_kelas = ?';
  const queryRead = 'SELECT * FROM kelas';

  const data ={
    title:"Data Kelas"
  }

  db.query(queryRead,(errRead,resultsRead)=>{
    if(errRead){
      console.error(err);
      res.status(500).send(err);
    }

    else if(!errRead){
      db.query(queryUpdate, [nama_kelas, nama_wali_kelas, id_kelas], (err, results) => {
        if (err) {
          console.error('Error updating data in MySQL:', err);
          res.status(500).json({ message: 'Error updating data' });
          return;
        }
        // res.status(200).json({ message: 'Data updated successfully' });
        res.render('data_kelas',{
          kelasData:data,
          tableKelas: resultsRead,

          //notifikasi
          notifSuksesUpdate : true,
          notifSuksesTambah : false
        })
      });
    }
  })
};


// exports.showUpdateModal = (req, res) => {
//   // Ambil data yang diperlukan untuk modal

//   const query =
//   const updateData = {
//     id_kelas: ...,
//     nama_kelas: ...,
//     nama_wali_kelas: ...
//   };
  
//   res.render('update_kelas.ejs', { updateData });
// };


// exports.updateKelas = (req,res) =>{

//   const id = req.params.id;
//   const { nama_kelas, nama_wali_kelas } = req.body;

//   const queryUpdate = 'UPDATE kelas SET nama_kelas = ?, nama_wali_kelas = ? WHERE id_kelas = ?';
//   db.query(queryUpdate, [nama_kelas, nama_wali_kelas, id], (err, results) => {
//     if (err) {
//       console.error('Error updating data in MySQL:', err);
//       res.status(500).json({ message: 'Error updating data' });
//       return;
//     }
//     res.status(200).json({ message: 'Data updated successfully' });
//   });
// }


