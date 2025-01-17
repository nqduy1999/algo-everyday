function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var majorityElement = function (nums) {
  let index = 0;

  while (true) {
    let randomEl = nums[index];
    let randomElCount = 0;
    for (let el of nums) {
      if (el === randomEl) {
        randomElCount++;
        if (randomElCount > nums.length / 2) {
          return randomEl;
        }
      }
    }
    index++;
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
