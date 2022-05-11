var nilai = [4, 2, 6, 88, 3, 11];
for (var i = 0; i < nilai.length; i++) {
  if (i == 0) {
    var nilai_mak = nilai[i];
    var nilai_min = nilai[i];
  } else {
    if (nilai[i] > nilai_mak) {
      nilai_mak = nilai[i];
    }
    if (nilai[i] < nilai_min) {
      nilai_min = nilai[i];
    }
  }
}
console.log(`low:${nilai_min}, high:${nilai_mak}`);
