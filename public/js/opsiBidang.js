const bidangOptions =
[
  "bahasa sastra inggris",
  "bahasa sastra indonesia",
  "bahasa sastra german",
  "Sejarah",
  "ipa - kimia".toUpperCase(),
  "ipa - fisika".toUpperCase(),
  "ipa - biologi".toUpperCase(),
  "ips - sosiologi".toUpperCase(),
  "ips - geografi".toUpperCase(),
  "ips - ekonomi".toUpperCase(),
  "ilmu keolahragaan",
  "pendidikan kewarganegaraan",
  "pendidikan agama kristen",
  "pendidikan agama islam",
  "pendidikan agama hindu",
  "pendidikan agama katholik",
  "ilmu matematika",
  "seni budaya",
  "teknik informatika"  
];


// Dapatkan elemen select
var selectElement = document.getElementById("bidangSelect");

// Tambahkan opsi ke elemen select
for (var i = 0; i < bidangOptions.length; i++) {
  var option = document.createElement("option");
  option.value = bidangOptions[i];
  option.text = bidangOptions[i];
  selectElement.appendChild(option);
}