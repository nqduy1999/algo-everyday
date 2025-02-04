/**
 * @param {string} s
 * @return {boolean}
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.length - 1];
  }

  get length() {
    return this.stack.length;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const matchParenthese = {
  "{": "}",
  "(": ")",
  "[": "]",
};

var isValid = function (s) {
  const matchingBracket = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  if (s.length === 1) {
    if (matchingBracket[s[0]]) return false;
    return true;
  }
  const stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (!s[i]) break;
    if (matchingBracket[stack.peek()] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  if (stack.length === 0) return true;
  return false;
};

console.log(isValid("([])"));
