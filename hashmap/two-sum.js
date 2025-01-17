// [2, 3, 4, 5, 8, 9] // expected = 13; return array index of two nums

const arrays = [2, 7, 11, 15];
const expected = 9;

// We can solve this problems by using only one loop,
const hashMapTwoSum = (nums, target) => {
  if (nums.length === 0) return [];
  let hashmapObject = {};
  let result = [];
  let i = 0;
  while (i < nums.length) {
    const expectedValue = target - nums[i];
    if (hashmapObject?.[expectedValue]?.toString()) {
      result = [i, hashmapObject[expectedValue]];
    } else {
      hashmapObject[nums[i]] = i;
    }
    i++;
  }
  return result;
};

console.log(hashMapTwoSum(arrays, expected));
