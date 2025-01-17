const stringX = "acbb";
const stringY = "aabbbb";

// Check character string X into string Y

const findRequentlyAppearance = (x, y) => {
  const objectX = {};

  for (const itemy of y) {
    objectX[itemy] = Number(objectX[itemy] ?? 0) + 1;
  }

  for (const itemx of x) {
    objectX[itemx] = Number(objectX[itemx] ?? 0) - 1;
    if (objectX[itemx] < 0) return false;
  }

  return true;
};

console.log(findRequentlyAppearance(stringX, stringY));
