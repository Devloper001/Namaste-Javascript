// ____________________________
// |                            |
// |   Execution Context        |
// |                            |
// |   ___________     ________|_______
// |  | Memory    |   |  Code         |
// |  | Component |   |  Component    |
// |  |___________|   |______________|
// |____________________________|

// The execution context is an abstract concept that contains information about the environment within which the current code is being executed in JavaScript.
// It can be imagined as a sealed-off container where JavaScript runs.
// The container has two components: the memory component and the code component.
// The memory component holds all the variables and functions in key-value pairs and is also known as the Variable environment.
// The code component is where the code is executed one line at a time and is also known as the Thread of Execution.
// JavaScript is a synchronous, single-threaded language, meaning it processes one command at a time in a specific synchronous order.
