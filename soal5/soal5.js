// String index 0 tidak digunakan
var satuan = [
  "",
  "satu ",
  "dua",
  "tiga ",
  "empat ",
  "lima ",
  "enam ",
  "tujuh ",
  "delapan ",
  "sembilan ",
  "sepuluh ",
  "sebelas ",
  "dua belas ",
  "tiga belas ",
  "empat belas ",
  "lima belas ",
  "enam belas",
  "tujuh belas ",
  "delapan belas",
  "sembilan belas",
];

// Strings index 0 dan 1 tidak digunakan
var puluhan = [
  "",
  "",
  "dua puluh ",
  "tiga puluh ",
  "empat puluh ",
  "lima puluh ",
  "enam puluh ",
  "tujuh puluh ",
  "delapan puluh ",
  "sembilan puluh ",
];

// n adalah 1- or 2-digit angka
function numToWords(n, s) {
  var str = "";
  // jika n lebih dari 19
  if (n > 19) {
    str += puluhan[parseInt(n / 10)] + satuan[n % 10];
  } else {
    str += satuan[n];
  }

  // jika n bukan angka 0
  if (n != 0) {
    str += s;
  }

  return str;
}

// fungsi number convert to words
function convertToWords(n) {
  var out = "";

  if (n > 100) {
    out += "silahkan masukkan angka 1-100 ";
  } else {
    // menghandle digit dalam satuan dan puluhan ata lebih
    out += numToWords(parseInt(n % 100), "");
  }

  return out;
}

var n = 18123;

// convert angka ke huruf
console.log(convertToWords(n));
