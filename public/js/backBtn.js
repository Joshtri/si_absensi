// Function to handle the click event of the "Kembali" button
function backBtnMapel() {
  // Redirecting to the main page
  window.location.href = '/data/data_mapel';
}

$(document).ready(function() {
  // Attaching the click event handler to the "Kembali" button
  $('#btnKembali').click(backBtnMapel);
});


function backBtnKelas(){
    // Redirecting to the main page
    window.location.href = '/data/data_kelas';
  }
  
  $(document).ready(function() {
    // Attaching the click event handler to the "Kembali" button
    $('#btnKembali').click(backBtnKelas);

});

function backBtnguru(){
  // Redirecting to the main page
  window.location.href = '/data/data_guru';
}

$(document).ready(function() {
  // Attaching the click event handler to the "Kembali" button
  $('#btnKembali').click(backBtnguru);

});

function backBtnsiswa(){
  // Redirecting to the main page
  window.location.href = '/data/data_siswa';
}

$(document).ready(function() {
  // Attaching the click event handler to the "Kembali" button
  $('#btnKembali').click(backBtnsiswa);

});

function backBtnjadwalMapel(){
  // Redirecting to the main page
  window.location.href = '/data/data_jadwal_mapel';
}

$(document).ready(function() {
  // Attaching the click event handler to the "Kembali" button
  $('#btnKembali').click(backBtnjadwalMapel);

});
