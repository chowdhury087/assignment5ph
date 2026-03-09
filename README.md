1.Qus: What is the difference between var, let, and const?
Ans:
In JavaScript, var, let, and const are used to declare variables.

var is the older way of declaring variables. It is function scoped and can be re-declared.

let was introduced in ES6. It is block scoped and you cannot declare the same variable again, but you can change its value.

const is also block scoped, but the value of a const variable cannot be changed after it is assigned.

Example:

var a = 10;
let b = 20;
const c = 30;

Here, the values of a and b can be changed later, but c cannot be changed.

2.Qus: What is the spread operator (...)?
Ans:
The spread operator (...) is used to expand elements of an array or object.

It is commonly used to copy arrays or combine multiple arrays into one.

Example:

const nums1 = [1,2,3];
const nums2 = [4,5,6];

const allNums = [...nums1, ...nums2];

Now allNums will be:

[1,2,3,4,5,6]
3.Qus: What is the difference between map(), filter(), and forEach()?
Ans:
These three methods are used to work with arrays, but they do different things.

map() → runs a function on every element and returns a new array.

filter() → returns a new array with elements that match a specific condition.

forEach() → runs a function for each element but does not return a new array.

Example:

const numbers = [1,2,3,4];

numbers.map(n => n * 2);
numbers.filter(n => n > 2);
numbers.forEach(n => console.log(n));
4.Qus: What is an arrow function?
Ans:
An arrow function is a shorter way to write a function in JavaScript.

Example:

Normal function:

function add(a,b){
  return a + b;
}

Arrow function:

const add = (a,b) => {
  return a + b;
}

Arrow functions make the code shorter and easier to read.

5.Qus: What are template literals?
Ans:
Template literals are used to create strings that can include variables or expressions.

They are written using backticks ( ) instead of normal quotes.

Example:

const name = "Shuvo";

const message = `Hello ${name}`;

Output:

Hello Shuvo

This makes it easier to include variables inside strings.
