var nilai = prompt("Output ", 0);

var hasil = "";

if (nilai > 1 && nilai <= 4) {
  hasil = "empat";
} else if (nilai > 4 && nilai <= 20) {
  hasil = "dua puluh";
} else if (nilai > 21 && nilai <= 39) {
  hasil = "tiga puluh sembilan";
} else if (nilai > 100) {
  hasil = "silahkan masukkan bilangan 1-100";
}

console.log("Output adalah: " + hasil);
