const nightAtMuseum = (str) => {
  let alphabet = {};
  Array.from({ length: 26 }, (_, i) => {
    Object.assign(alphabet, {
      [String.fromCharCode(97 + i)]: i + 1,
    });
  });

  let sum = 0;

  let index = 1;
  if (str[0] !== "a") str = "a" + str;
  while (index < str.length) {
    const clockwise = Math.abs(alphabet[str[index - 1]] - alphabet[str[index]]);
    const anticlockwise = 26 - clockwise;
    const min = Math.min(anticlockwise, clockwise);
    sum += min;
    index++;
  }

  return sum;
};

console.log(nightAtMuseum("map"));
