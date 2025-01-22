/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let nodeRight = nums.length - 1;
  let nodeLeft = 0;
  let currentIndex = 0;
  if (!nums.includes(target)) return -1;
  while (nodeLeft <= nodeRight) {
    currentIndex = Math.floor((nodeRight + nodeLeft) / 2);
    let root = nums[currentIndex];
    if (root < target) {
      nodeLeft = currentIndex + 1;
    } else if (root > target) {
      nodeRight = currentIndex;
    } else {
      return currentIndex;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 2));
