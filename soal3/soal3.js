function printDigitValue(value) {
  var newArr = value.split("");
  for (var i = 0; i < newArr.length; i++) {
    if (!isNaN(newArr[i])) {
      console.log(newArr[i]);
    }
  }
}
console.log("9865321");
printDigitValue("9.86-A5.321");
