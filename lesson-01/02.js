// code
function evenOdd() {
  let number = Math.floor(Math.random() * 100);
  return number % 2 === 0
    ? `${number} :Это четное число`
    : `${number} :Это нечетное число`;
}

console.log(evenOdd());
