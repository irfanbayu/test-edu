function remove(numbers) {
  // get data max and min
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  // create a new array from all numbers that are NOT `max` & `min`
  return numbers.filter((number) => number !== max && number !== min);
}

jumlah = remove([2, 4, 7, 9, 12, 15]);

console.log(jumlah.length);
