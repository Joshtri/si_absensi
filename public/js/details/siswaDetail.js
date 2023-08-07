$(document).ready(function () {
  $('#detailModalSiswa').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);

    var namaSiswa = button.data('nama_siswa');
    var nis = button.data('nis');
    var kelasSiswa = button.data('kelas_siswa');
    var alamat = button.data('alamat');
    var noHP = button.data('no_hp');
    var jenisKelamin = button.data('jenis_kelamin');

    var modal = $(this);

    modal.find('#modalNamaSiswa').val(namaSiswa);
    modal.find('#modalnis').val(nis);
    modal.find('#modalKelasSiswa').val(kelasSiswa);
    modal.find('#modalAlamat').val(alamat);
    modal.find('#modalNoHP').val(noHP);
    modal.find('#modalJenisKelamin').val(jenisKelamin);
  });
});