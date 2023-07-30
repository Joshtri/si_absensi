const mysql = require('mysql');


const db = mysql.createConnection({
  host:"localhost",
  user: "root",
  database:"db_absensi_smakristen",
  password:"",
});

db.connect((req,res,err)=>{
  if(err){
    res.send(err);
  }
  else if(!err){
   console.log("database connected");
  }
});



module.exports = db;