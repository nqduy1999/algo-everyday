// NOTE: We just can two-sum technique with sorted array

const arrays = [2, 3, 4, 5, 8, 9];
const expected = 13;

var twoSum = function (nums, target) {
  //the first step we need to sort array numbes
  const sortedNums = nums.sort((a, b) => a - b);

  // define 2 vars (left and right)
  let left = 0;
  let right = sortedNums.length - 1;

  // if (left === right) finish loop all property in array
  while (left < right) {
    let sum = sortedNums[left] + sortedNums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

console.log(twoSum(arrays, expected));
