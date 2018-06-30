const Stack = () => {

  let top = 0;
  let dataStore = [];

  const push = (elem) => {
    dataStore[top] = elem;
    top++;
  }
  const pop = () => {
    --top;
    return dataStore[top];
  }
  const isEmpty = () => {
      if(top == 0) {
        return true;
      }
      return false;
  }
  return {
      push,
      pop,
      isEmpty
  }
};

const Q = () => {
    let St1 = Stack();
    let St2 = Stack();

    const push = (elem) => {
      St1.push(elem);
    }

    const pop = () => {
      if(St2.isEmpty()) {
        if(St1.isEmpty()) {
          return "Queue is empty";
        }
        while(!St1.isEmpty()) {
          let popedElem = St1.pop();
          St2.push(popedElem);
        }
      }
      return St2.pop();
    }
  return {
    push,
    pop
  };
}

let myStack = Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.pop()); // 3
console.log(myStack.pop()); // 2
console.log(myStack.pop()); // 1

let myQ = Q();

myQ.push(1);
myQ.push(2);
myQ.push(3);

console.log(myQ.pop()); // 1
console.log(myQ.pop()); // 2
console.log(myQ.pop()); // 3
