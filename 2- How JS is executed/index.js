var n = 2;
function square(num) {
  var ans = num * num;
  return;
  ans;
}
var square2 = square(n);
var square4 = square(4);

//  first thing which JS does is memory creation phase, so it goes to line one of above code snippet, and
//  allocates a memory space for variable 'n' and then goes to line two, and allocates a memory space for function 'square'....
//  in second phase code is executed values are replaced.

// Javascript manages code execution context creation and deletion with the the help of CallStack.
// Call Stack is a mechanism to keep track of its place in script that calls multiple function.
