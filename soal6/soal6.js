function remove(numbers) {
  // get this first so we only need to calculate it once
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  // create a new array from all numbers that are NOT `max`
  return numbers.filter((number) => number !== max && number !== min);
}

console.log(remove([2, 4, 7, 9, 12, 15]));
