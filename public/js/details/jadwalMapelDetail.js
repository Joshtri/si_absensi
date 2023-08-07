$(document).ready(function(){
  $('#detailModalJadwalMapel').on('show.bs.modal', function(event){
    var button = $(event.relatedTarget);

    //get value. 
    var namaMapel = button.data('nama_mapel');
    var namaKelas = button.data('nama_kelas');
    var jamMulai = button.data('jam_mulai');
    var jamSelesai = button.data('jam_selesai');
    var hari = button.data('hari');


    var modal = $(this);

    modal.find('#modalnamaMapel').val(namaMapel);
    modal.find('#modalnamaKelas').val(namaKelas);
    modal.find('#modaljamMulai').val(jamMulai);
    modal.find('#modaljamSelesai').val(jamSelesai);
    modal.find('#modalhari').val(hari);
  });
})