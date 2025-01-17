// input n, print into screen

const randomShit = (n) => {
  let currentNumber = 0;
  let index = 0;
  let arr = [];

  while (currentNumber < n) {
    currentNumber += 1;
    if (currentNumber % 2 === 0) {
      arr.push(index % 2 !== 0 ? -currentNumber : currentNumber);
      index++;
    }
  }
  return arr;
};
