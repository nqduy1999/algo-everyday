const fashionInBerland = (nums) => {
  let count = 1;
  if (nums.length === 1) {
    if (nums[0] === 1) return "YES";
    return "NO";
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count--;
    }
    if (count < 0) return "NO";
  }
  if (count === 1) return "NO";
  return "YES";
};

const fashionInBerlandTwoPointer = (nums) => {
  let count = 1;
  let pointer = 0;
  let pointerEnd = nums.length - 1;

  if (nums.length === 1) {
    if (nums[0] === 1) return "YES";
    return "NO";
  }

  while (pointer <= pointerEnd) {
    if (nums[pointer] === 0 || nums[pointerEnd] === 0) {
      count--;
    }
    if (count < 0) return "NO";
    pointer++;
    pointerEnd--;
  }
  if (count === 1) return "NO";
  return "YES";
};

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];

console.log("normal");
console.time(fashionInBerland(arr));
console.timeEnd(fashionInBerland(arr));

console.log("two-pointer");
console.time(fashionInBerlandTwoPointer(arr));
console.timeEnd(fashionInBerlandTwoPointer(arr));
