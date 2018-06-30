const Node = (data) => {
  return {
    data,
    next: null
  };
}

const Stack = () => {
  let top = null;
  const push = (elem) => {
    let node = Node(elem);
    node.next = top;
    top = node;
  }
  const pop = () => {
    if(top !== null) {
      let topElem = top.data;
      top = top.next;
      return topElem;
    }
    return null;
  }

  return {
      push,
      pop
  }
}

const Q() {
    let St1 = Stack();
    let St2 = Stack();

    const push = (elem) => {

    }
}

let myStack = Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.pop()); // 3
console.log(myStack.pop()); // 2
console.log(myStack.pop()); // 1







let myStack = Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.pop()); // 3
console.log(myStack.pop()); // 2
console.log(myStack.pop()); // 1
