const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {db} = require('./utils/database').connect;
const session = require('express-session');
const app = express();


// bagian ini untuk panggil file routes.
const dashboardRoutes = require('./routes/dashboard');
const loginRoutes = require('./routes/login');
const guruRoutes = require('./routes/guru');
const siswaRoutes = require('./routes/siswa')
const mapelRoutes = require('./routes/mapel');
const kelasRoutes = require('./routes/kelas');
const jadwalMapelRoutes = require('./routes/jadwalMapel');
const absenRoutes = require('./routes/absen');


app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", dashboardRoutes);
app.use("/",loginRoutes);
app.use("/data",guruRoutes,siswaRoutes, mapelRoutes,kelasRoutes,jadwalMapelRoutes,absenRoutes);


// Inisialisasi middleware session
app.use(session({
  secret: 'secret-key', // Ganti dengan secret key yang lebih kompleks
  resave: false, // False jika tidak ada perubahan pada session
  saveUninitialized: false // False jika Anda tidak ingin menyimpan session kosong
}));


app.set("views",[
  path.join(__dirname, "/views"),
  path.join(__dirname, "/views/layouts"),
  path.join(__dirname, "/views/data/"),
  path.join(__dirname, "/views/add/")
])
app.use(express.static(__dirname + '/public'));


app.listen(3001, (err)=>{
  if(err){
    throw err;
  }
  else if(!err){
    console.log('sukses on port 3000');
  }
})