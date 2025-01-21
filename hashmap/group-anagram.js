/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

const validPanagram = (s, t) => {
  let hashMapS = {};
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    hashMapS[s[i]] = (hashMapS[s[i]] ?? 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (hashMapS[t[i]] === undefined) return false;
    hashMapS[t[i]] = hashMapS[t[i]] - 1;
    if (hashMapS[t[i]] < 0) {
      return false;
    }
  }
  return true;
};

var groupAnagrams = function (strs) {
  let hashMap = {};
  let i = 0;
  while (i < strs.length) {
    
  }
};
