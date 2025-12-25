// =====================================================
// JAVASCRIPT BASICS - Complete Guide
// =====================================================
// This file contains all basic JavaScript commands and syntax
// with detailed comments for easy understanding

// =====================================================
// 1. VARIABLES - Three ways to declare variables
// =====================================================

{
    // var - Function scoped (old way, avoid in modern JS)
    var oldVariable = "This is var";

    // let - Block scoped, can be reassigned
    let name = "Priyanka";
    let age = 20;
    age = 21; // Can be changed

    // const - Block scoped, cannot be reassigned (preferred for constants)
    const PI = 3.14159;
    const country = "India";
    // country = "USA"; // Error: Cannot reassign const
}

// =====================================================
// 2. DATA TYPES
// =====================================================

{
    // String - Text data
    let firstName = "Priyanka";
    let lastName = 'Gowda';
    let fullName = `Hello, I am ${firstName} ${lastName}`; // Template literal

    // Number - Integer or decimal
    let integer = 25;
    let decimal = 3.14;
    let negative = -10;

    // Boolean - true or false
    let isStudent = true;
    let isWorking = false;

    // Undefined - Variable declared but not assigned
    let undefinedVar;
    console.log(undefinedVar); // undefined

    // Null - Intentionally empty value
    let emptyValue = null;

    // Object - Collection of key-value pairs
    let person = {
        name: "Priyanka",
        age: 20,
        city: "Bangalore"
    };

    // Array - List of values
    let fruits = ["Apple", "Banana", "Orange"];
    let numbers = [1, 2, 3, 4, 5];
}

// =====================================================
// 3. OPERATORS
// =====================================================

{
    // Arithmetic Operators
    let a = 10;
    let b = 5;
    console.log(a + b); // 15 (Addition)
    console.log(a - b); // 5 (Subtraction)
    console.log(a * b); // 50 (Multiplication)
    console.log(a / b); // 2 (Division)
    console.log(a % b); // 0 (Modulus - remainder)
    console.log(a ** b); // 100000 (Exponentiation)

    // Assignment Operators
    let x = 10;
    x += 5; // x = x + 5 (x becomes 15)
    x -= 3; // x = x - 3 (x becomes 12)
    x *= 2; // x = x * 2 (x becomes 24)
    x /= 4; // x = x / 4 (x becomes 6)
}

// Comparison Operators
console.log(5 == 5);   // true (loose equality)
console.log(5 == "5"); // true (type coercion)
console.log(5 === 5);  // true (strict equality)
console.log(5 === "5"); // false (no type coercion)
console.log(5 != 6);   // true (not equal)
console.log(5 !== "5"); // true (strict not equal)
console.log(5 > 3);    // true (greater than)
console.log(5 < 3);    // false (less than)
console.log(5 >= 5);   // true (greater than or equal)
console.log(5 <= 4);   // false (less than or equal)

// Logical Operators
console.log(true && true);   // true (AND - both must be true)
console.log(true && false);  // false
console.log(true || false);  // true (OR - at least one true)
console.log(false || false); // false
console.log(!true);          // false (NOT - reverses boolean)

// Ternary Operator (Conditional Operator)
{
    let age = 20;
    let status = age >= 18 ? "Adult" : "Minor";
    // If age >= 18, status = "Adult", else "Minor"
}

// =====================================================
// 4. STRING METHODS
// =====================================================

let text = "Hello World";

// Length of string
console.log(text.length); // 11

// Convert to uppercase
console.log(text.toUpperCase()); // "HELLO WORLD"

// Convert to lowercase
console.log(text.toLowerCase()); // "hello world"

// Get character at index
console.log(text.charAt(0)); // "H"
console.log(text[0]); // "H" (alternative)

// Find index of substring
console.log(text.indexOf("World")); // 6
console.log(text.indexOf("xyz")); // -1 (not found)

// Extract substring
console.log(text.substring(0, 5)); // "Hello"
console.log(text.slice(0, 5)); // "Hello"

// Replace text
console.log(text.replace("World", "JavaScript")); // "Hello JavaScript"

// Split string into array
let words = text.split(" "); // ["Hello", "World"]

// Check if string includes substring
console.log(text.includes("Hello")); // true

// Trim whitespace
let spaced = "  Hello  ";
console.log(spaced.trim()); // "Hello"

// =====================================================
// 5. ARRAYS
// =====================================================

{
    let fruits = ["Apple", "Banana", "Orange"];

// Access array elements (index starts at 0)
console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"

// Array length
console.log(fruits.length); // 3

// Add element to end
fruits.push("Mango"); // ["Apple", "Banana", "Orange", "Mango"]

// Remove last element
fruits.pop(); // Removes "Mango"

// Add element to beginning
fruits.unshift("Grapes"); // ["Grapes", "Apple", "Banana", "Orange"]

// Remove first element
fruits.shift(); // Removes "Grapes"

// Find index of element
console.log(fruits.indexOf("Banana")); // 1

// Check if array includes element
console.log(fruits.includes("Apple")); // true

// Join array elements into string
console.log(fruits.join(", ")); // "Apple, Banana, Orange"

// Slice - Extract portion of array
let sliced = fruits.slice(0, 2); // ["Apple", "Banana"]

    // Splice - Add/remove elements
    fruits.splice(1, 1, "Kiwi"); // Remove 1 element at index 1, add "Kiwi"
}

// =====================================================
// 6. ARRAY METHODS (Advanced)
// =====================================================

{
    let numbers = [1, 2, 3, 4, 5];

// forEach - Execute function for each element
numbers.forEach(function(num) {
    console.log(num * 2);
});

// map - Create new array by transforming each element
let doubled = numbers.map(function(num) {
    return num * 2;
}); // [2, 4, 6, 8, 10]

// filter - Create new array with elements that pass test
let evens = numbers.filter(function(num) {
    return num % 2 === 0;
}); // [2, 4]

// find - Find first element that passes test
let found = numbers.find(function(num) {
    return num > 3;
}); // 4

// reduce - Reduce array to single value
let sum = numbers.reduce(function(acc, num) {
    return acc + num;
}, 0); // 15

// some - Check if at least one element passes test
let hasEven = numbers.some(function(num) {
    return num % 2 === 0;
}); // true

    // every - Check if all elements pass test
    let allPositive = numbers.every(function(num) {
        return num > 0;
    }); // true
}

// =====================================================
// 7. OBJECTS
// =====================================================

{
    // Object creation
    let person = {
    name: "Priyanka",
    age: 20,
    city: "Bangalore",
    // Method (function inside object)
    greet: function() {
        return "Hello, I am " + this.name;
    }
};

// Access object properties
console.log(person.name); // "Priyanka"
console.log(person["age"]); // 20 (bracket notation)

// Add new property
person.email = "priyanka@example.com";

// Update property
person.age = 21;

// Delete property
delete person.city;

// Call object method
console.log(person.greet()); // "Hello, I am Priyanka"

// Object.keys - Get all keys
let keys = Object.keys(person); // ["name", "age", "email", "greet"]

    // Object.values - Get all values
    let values = Object.values(person);
}

// =====================================================
// 8. FUNCTIONS
// =====================================================

// Function Declaration
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Priyanka")); // "Hello, Priyanka"

{
    // Function Expression
    let add = function(a, b) {
        return a + b;
    };
    console.log(add(5, 3)); // 8

// Arrow Function (ES6)
let multiply = (a, b) => {
    return a * b;
};

// Arrow Function (shorthand - single expression)
let divide = (a, b) => a / b;

// Arrow Function (single parameter - no parentheses needed)
let square = x => x * x;

    // Function with default parameters
    function greetUser(name = "Guest") {
        return "Hello, " + name;
    }
    console.log(greetUser()); // "Hello, Guest"
    console.log(greetUser("Priyanka")); // "Hello, Priyanka"
}

// =====================================================
// 9. CONDITIONAL STATEMENTS
// =====================================================

{
    // if-else
    let age = 20;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// if-else if-else
let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

    // Switch statement
    let day = "Monday";
    switch(day) {
        case "Monday":
            console.log("Start of week");
            break;
        case "Friday":
            console.log("Weekend coming");
            break;
        default:
            console.log("Regular day");
    }
}

// =====================================================
// 10. LOOPS
// =====================================================

{
    // for loop
    for (let i = 0; i < 5; i++) {
        console.log(i); // 0, 1, 2, 3, 4
    }

    // while loop
    let count = 0;
    while (count < 5) {
        console.log(count);
        count++;
    }

    // do-while loop (executes at least once)
    let num = 0;
    do {
        console.log(num);
        num++;
    } while (num < 5);

    // for...of loop (iterate over array values)
    let fruits = ["Apple", "Banana", "Orange"];
    for (let fruit of fruits) {
        console.log(fruit);
    }

    // for...in loop (iterate over object keys)
    let person = {name: "Priyanka", age: 20};
    for (let key in person) {
        console.log(key + ": " + person[key]);
    }

    // forEach loop (array method)
    fruits.forEach(function(fruit, index) {
        console.log(index + ": " + fruit);
    });
}

// =====================================================
// 11. TYPE CONVERSION
// =====================================================

// String to Number
let str = "123";
let num1 = Number(str); // 123
let num2 = parseInt(str); // 123 (integer)
let num3 = parseFloat("123.45"); // 123.45 (decimal)

// Number to String
let number = 123;
let string1 = String(number); // "123"
let string2 = number.toString(); // "123"

// Boolean conversion
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("text")); // true

// =====================================================
// 12. MATH OBJECT
// =====================================================

// Math constants
console.log(Math.PI); // 3.14159...
console.log(Math.E); // 2.71828...

// Math methods
console.log(Math.round(4.7)); // 5 (round to nearest)
console.log(Math.floor(4.7)); // 4 (round down)
console.log(Math.ceil(4.2)); // 5 (round up)
console.log(Math.max(5, 10, 3)); // 10 (maximum)
console.log(Math.min(5, 10, 3)); // 3 (minimum)
console.log(Math.random()); // Random number 0-1
console.log(Math.pow(2, 3)); // 8 (2 to power 3)
console.log(Math.sqrt(16)); // 4 (square root)
console.log(Math.abs(-5)); // 5 (absolute value)

// Generate random integer between min and max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// =====================================================
// 13. DATE OBJECT
// =====================================================

// Create date object
let now = new Date();
let specificDate = new Date(2024, 0, 15); // January 15, 2024

// Get date components
console.log(now.getFullYear()); // Current year
console.log(now.getMonth()); // 0-11 (0 = January)
console.log(now.getDate()); // Day of month (1-31)
console.log(now.getDay()); // Day of week (0-6, 0 = Sunday)
console.log(now.getHours()); // Hours (0-23)
console.log(now.getMinutes()); // Minutes (0-59)
console.log(now.getSeconds()); // Seconds (0-59)

// Format date
let dateString = now.toDateString(); // "Mon Jan 15 2024"
let timeString = now.toTimeString(); // "10:30:45 GMT+0530"

// =====================================================
// 14. ERROR HANDLING
// =====================================================

// try-catch block
try {
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("Division by zero");
    }
} catch (error) {
    console.log("Error: " + error.message);
} finally {
    console.log("This always executes");
}

// =====================================================
// 15. SCOPE
// =====================================================

// Global scope
let globalVar = "I am global";

function testScope() {
    // Local scope
    let localVar = "I am local";
    console.log(globalVar); // Can access global
    console.log(localVar); // Can access local
}

// console.log(localVar); // Error: localVar is not defined

// Block scope (let and const)
if (true) {
    let blockVar = "I am in block";
    const blockConst = "I am also in block";
}
// console.log(blockVar); // Error: blockVar is not defined

// =====================================================
// 16. HOISTING
// =====================================================

// Function declarations are hoisted (can be called before declaration)
sayHello(); // Works!

function sayHello() {
    console.log("Hello!");
}

// var is hoisted (but initialized as undefined)
console.log(hoistedVar); // undefined (not error)
var hoistedVar = "I am hoisted";

// let and const are NOT hoisted
// console.log(hoistedLet); // Error: Cannot access before initialization
let hoistedLet = "I am not hoisted";

// =====================================================
// 17. DESTRUCTURING
// =====================================================

{
    // Array destructuring
    let colors = ["Red", "Green", "Blue"];
    let [first, second, third] = colors;
    console.log(first); // "Red"
    console.log(second); // "Green"

    // Object destructuring
    let person = {name: "Priyanka", age: 20, city: "Bangalore"};
    let {name, age} = person;
    console.log(name); // "Priyanka"
    console.log(age); // 20
}

// =====================================================
// 18. SPREAD OPERATOR
// =====================================================

{
    // Spread in arrays
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

    // Spread in objects
    let obj1 = {a: 1, b: 2};
    let obj2 = {c: 3, d: 4};
    let merged = {...obj1, ...obj2}; // {a: 1, b: 2, c: 3, d: 4}
}

// =====================================================
// 19. TEMPLATE LITERALS
// =====================================================

{
    let name = "Priyanka";
    let age = 20;

// Old way (concatenation)
let message1 = "Hello, I am " + name + " and I am " + age + " years old";

// New way (template literal)
let message2 = `Hello, I am ${name} and I am ${age} years old`;

    // Multi-line strings
    let multiLine = `
        This is line 1
        This is line 2
        This is line 3
    `;
}

// =====================================================
// 20. DOM MANIPULATION (Basic)
// =====================================================

// Get element by ID
// let element = document.getElementById("myId");

// Get element by class
// let elements = document.getElementsByClassName("myClass");

// Get element by tag name
// let paragraphs = document.getElementsByTagName("p");

// Query selector (modern way)
// let element = document.querySelector("#myId");
// let elements = document.querySelectorAll(".myClass");

// Change text content
// element.textContent = "New text";

// Change HTML content
// element.innerHTML = "<strong>Bold text</strong>";

// Change attribute
// element.setAttribute("class", "newClass");

// Add event listener
// element.addEventListener("click", function() {
//     console.log("Clicked!");
// });

// =====================================================
// 21. CLOSURES
// =====================================================

{
    // Closure - function that has access to outer function's variables
    function outerFunction(x) {
        // Outer function variable
        let outerVar = x;
        
        // Inner function (closure)
        function innerFunction(y) {
            return outerVar + y; // Can access outerVar
        }
        
        return innerFunction;
    }

    let addFive = outerFunction(5);
    console.log(addFive(3)); // 8
}

// =====================================================
// 22. CALLBACKS
// =====================================================

{
    // Callback - function passed as argument to another function
    function greetWithCallback(name, callback) {
        console.log("Hello, " + name);
        if (typeof callback === 'function') {
            callback(); // Execute callback
        }
    }

    function sayGoodbye() {
        console.log("Goodbye!");
    }

    // Example usage (commented out - uncomment to test)
    // greetWithCallback("Priyanka", sayGoodbye);
    // Output:
    // Hello, Priyanka
    // Goodbye!
}

// =====================================================
// 23. PROMISES (Basic)
// =====================================================

// Create promise
let myPromise = new Promise(function(resolve, reject) {
    let success = true;
    
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

// Use promise
myPromise
    .then(function(message) {
        console.log(message); // "Operation successful!"
    })
    .catch(function(error) {
        console.log(error); // "Operation failed!"
    });

// =====================================================
// 24. ASYNC/AWAIT (Basic)
// =====================================================

// Async function
async function fetchData() {
    try {
        // Simulate API call
        let response = await new Promise(resolve => {
            setTimeout(() => resolve("Data received"), 1000);
        });
        console.log(response);
    } catch (error) {
        console.log("Error: " + error);
    }
}

// fetchData(); // Uncomment to test

// =====================================================
// 25. CLASSES (ES6)
// =====================================================

// Class definition
class Person {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    greet() {
        return `Hello, I am ${this.name}`;
    }
    
    // Getter
    get info() {
        return `${this.name} is ${this.age} years old`;
    }
}

// Create instance
let person1 = new Person("Priyanka", 20);
console.log(person1.greet()); // "Hello, I am Priyanka"
console.log(person1.info); // "Priyanka is 20 years old"

// =====================================================
// 26. MODULES (ES6) - Basic Export/Import
// =====================================================

// Export (in another file)
// export function add(a, b) {
//     return a + b;
// }
// export const PI = 3.14159;

// Import (in this file)
// import { add, PI } from './math.js';
// import * as math from './math.js';

// =====================================================
// 27. USEFUL ARRAY METHODS (More Examples)
// =====================================================

{
    let numbers = [1, 2, 3, 4, 5];

    // reverse - Reverse array
    let reversed = numbers.slice().reverse(); // [5, 4, 3, 2, 1]

    // sort - Sort array
    let unsorted = [3, 1, 4, 1, 5];
    let sorted = unsorted.slice().sort(); // [1, 1, 3, 4, 5]

    // concat - Combine arrays
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    let combined = arr1.concat(arr2); // [1, 2, 3, 4]
}

// =====================================================
// 28. STRING TEMPLATE EXAMPLES
// =====================================================

{
    let name = "Priyanka";
    let age = 20;

// Expression evaluation
console.log(`Next year I will be ${age + 1}`); // "Next year I will be 21"

    // Function calls
    function getGreeting() {
        return "Hello";
    }
    console.log(`${getGreeting()}, ${name}!`); // "Hello, Priyanka!"
}

// =====================================================
// 29. COMMON PATTERNS
// =====================================================

{
    // Check if variable exists
    let value;
    if (value !== undefined && value !== null) {
        console.log("Value exists");
    }

    // Short-circuit evaluation
    let name = "Priyanka";
    let displayName = name || "Guest"; // "Priyanka" (if name is falsy, use "Guest")

    // Optional chaining (ES2020)
    // let city = person?.address?.city; // Safe property access

    // Nullish coalescing (ES2020)
    // let value = input ?? "default"; // Use default only if null/undefined
}

// =====================================================
// 30. BEST PRACTICES
// =====================================================

{
    // 1. Use const by default, let when reassignment needed
    const PI = 3.14159;
    let counter = 0;

    // 2. Use meaningful variable names
    let userName = "Priyanka"; // Good
    let u = "Priyanka"; // Bad

    // 3. Use arrow functions for short functions
    let add = (a, b) => a + b;

    // 4. Use template literals for strings
    let message = `Hello, ${userName}`;

    // 5. Always use === instead of ==
    let age = 20;
    if (age === 20) { } // Good
    if (age == 20) { } // Bad

    // 6. Use semicolons (optional but recommended)
    let x = 5;

    // 7. Comment your code
    // This function calculates the sum
    function sum(a, b) {
        return a + b;
    }
}

// =====================================================
// END OF JAVASCRIPT BASICS
// =====================================================

// To test this file:
// 1. Open browser console (F12)
// 2. Copy and paste sections to test
// 3. Or link this file in HTML: <script src="jsBasic.js"></script>

