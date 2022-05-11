function kelipatanAngka(n) {
  const kata1 = "EDU";
  const kata2 = "WORK";

  let testAngka = "";

  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) testAngka += `${kata1}${kata2} `;
    if (i % 3 === 0) testAngka += `${kata1} `;
    if (i % 5 === 0) testAngka += `${kata2} `;
  }

  return testAngka;
}

console.log(kelipatanAngka(3));
console.log(kelipatanAngka(5));
console.log(kelipatanAngka(15));
