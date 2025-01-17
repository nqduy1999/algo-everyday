const scores = [
  [2, 4, 6],
  [8, 10, 12],
  [14, 16, 18],
];

const sum = scores.reduce((acc, row) => {
  return acc + row.reduce((rowSum, value) => rowSum + value, 0);
}, 0);

console.log(sum);
