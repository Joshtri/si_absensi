function checkNIPLength() {
  const nipInput = document.getElementById("nip");
  const maxNipLength = 18;

  if (nipInput.value.length >= maxNipLength) {
      toastr.error("Panjang NIP tidak boleh melebihi 18 digit!", "Peringatan");
      nipInput.value = nipInput.value.slice(0, maxNipLength); // Potong nilai NIP jika terlalu panjang
  } else {
      toastr.clear();
  }
}