{
  /**
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different. 
*/
}

// hashmap here to check if
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

console.log(validPanagram("aacc", "ccac"));
