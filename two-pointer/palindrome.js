/**
 * @param {string} s
 * @return {boolean}
 */

var s = "a man, a plan, a canal: Panama";
const regexChar = /[^a-zA-Z0-9]/gi; // just get chars isn't matched (a - z, 0 - 9) includes uppercase char

function getCharsOnly(text) {
  return text.replace(regexChar, "").toLowerCase();
}

// two-pointer
var isPalindrome = function (s) {
  let leftToRight = 0; // index = 0
  const cleanText = getCharsOnly(s);
  let rightToLeft = cleanText.length - 1;

  while (leftToRight < rightToLeft) {
    if (cleanText[leftToRight] === cleanText[rightToLeft]) {
      leftToRight += 1;
      rightToLeft -= 1;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(s));
