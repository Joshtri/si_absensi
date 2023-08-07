$(document).ready(function(){
  $('#detailModalMapel').on('show.bs.modal', function(event){

    var button = $(event.relatedTarget);

    var namaMapel = button.data('nama_mapel');
    var namaPengajar = button.data('nama_pengajar');

    var modal = $(this);

    modal.find('#modalNamaMapel').val(namaMapel);
    modal.find('#modalNamaPengajar').val(namaPengajar);
  });
});