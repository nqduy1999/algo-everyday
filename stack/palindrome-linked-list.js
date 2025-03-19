//Given the head of a singly linked list, return true if it is a palindromeor false otherwise.

const palindromeLinkedList = (head) => {
  let stack = [];
  let i = 0;
  while (head.length > i) {
    if (stack[i] === stack[stack.length - 1]) {
      stack.pop();
    }
    stack.push(head[i]);
    i++;
  }
  console.log(stack);
};

palindromeLinkedList([1, 2, 2, 1]);
