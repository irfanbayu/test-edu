function printDigitValue(value) {
  var newArr = "9.86-A5.321";
  var option = newArr.replace(/\D/g, "");
  console.log(option);
  var splitArr = option.split("");
  const len = splitArr.length;
  for (let i = 0; i < len; i++) {
    console.log(splitArr[i].padEnd(len - i, "0"));
  }
}

printDigitValue();
