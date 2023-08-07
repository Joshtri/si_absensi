
/* 
  UNTUK DATA MAPEL
*/

// const { response } = require("express");
//fetch data untuk list guru option.
fetch('/data/guru_list').then(response => response.json()).then(data=>{
  
  const select = document.getElementById('nama_guru');

  data.forEach(guru_list =>{

    const option = document.createElement('option');

    option.value = guru_list.nama_lengkap;
    option.text = guru_list.nama_lengkap;

    select.appendChild(option);
  });
}).catch(error => console.error('Error fetching guru list ', error))


/* 
  UNTUK DATA SISWA & Jadwal MAPEL.
*/
fetch('/data/kelas_list').then(response => response.json()).then(data =>{

  const select = document.getElementById('kelas');

  data.forEach(kelas_list =>{

    const option = document.createElement('option');

    option.value = kelas_list.nama_kelas;
    option.text = kelas_list.nama_kelas;

    select.appendChild(option)
  });
}).catch(error => console.error('Failed to fetching', error));


fetch('/data/mapel_list').then(response => response.json()).then(data =>{

  const select = document.getElementById('nama_mapel');

  data.forEach(mapel_list =>{

    const option = document.createElement('option');

    option.value = mapel_list.nama_mapel;
    option.text = mapel_list.nama_mapel;

    select.appendChild(option);
  });
}).catch(error => console.error('fail to fetch data', error));