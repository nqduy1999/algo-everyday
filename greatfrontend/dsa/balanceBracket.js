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

function isBalancedBrackets(str) {
  const matchingBracket = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const stack = new Stack();

  for (let i = 0; i <= str.length; i++) {
    if (matchingBracket[stack.peek()] === str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  if (stack.length === 0) return true;
  return false;
}

console.log(isBalancedBrackets(`([])`));
