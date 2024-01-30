// code
function evenOdd() {
  let number1 = Math.floor(Math.random() * 100);
  return number1 % 2
    ? `${number1} : Это четное число`
    : `${number1} : Это нечетное число`;
}

console.log(evenOdd());
