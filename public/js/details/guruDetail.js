$(document).ready(function () {
  $('#detailModalGuru').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    
    var namaGuru = button.data('nama_guru');
    var nip = button.data('nip');
    var email = button.data('email');
    var role = button.data('role');
    var no_hp = button.data('no_hp');
    var alamat = button.data('alamat');
    var jenis_kelamin = button.data('jenis_kelamin');

    var modal = $(this);

    modal.find('#modalNamaGuru').val(namaGuru);
    modal.find('#modalnip').val(nip);
    modal.find('#modalemail').val(email);
    modal.find('#modalnoHP').val(no_hp);
    modal.find('#modalalamat').val(alamat);
    modal.find('#modalJenisKelamin').val(jenis_kelamin);
    modal.find('#modalrole').val(role);

  });
});