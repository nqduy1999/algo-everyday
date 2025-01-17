function hasDuplicate(nums) {
  const hashMapNums = {};

  for (let i = 0; i < nums.length; i++) {
    hashMapNums[nums[i]] = (hashMapNums[nums[i]] ?? 0) + 1;
    if (hashMapNums[nums[i]] > 1) {
      return true;
    }
  }
  return false;
}

console.log(hasDuplicate([1, 2, 3, 3]));
