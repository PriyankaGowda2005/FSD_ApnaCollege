// ============================================
// JAVASCRIPT ARRAYS - COMPREHENSIVE GUIDE
// From Basic to Advanced
// ============================================

// ============================================
// PART 1: BASIC ARRAY CONCEPTS
// ============================================

// 1. Array Declaration - Three ways to create arrays
let arrLiteral = [1, 2, 3, 4, 5];                    // Array literal (most common)
let arrConstructor = new Array(1, 2, 3, 4, 5);          // Using Array constructor
let arrNoNew = Array(1, 2, 3, 4, 5);              // Without 'new' keyword

// 2. Empty Arrays
let empty1 = [];                               // Empty array literal
let empty2 = new Array();                      // Empty array using constructor
let empty3 = new Array(5);                     // Array with 5 empty slots (sparse array)

// 3. Mixed Data Types
let mixed = [1, "hello", true, null, undefined, {name: "John"}, [1, 2, 3]];
// Arrays can contain any data type

// 4. Array Properties
let numbers = [10, 20, 30, 40, 50];
console.log(numbers.length);                   // Returns 5 (number of elements)

// 5. Array Indexing
console.log(numbers[0]);                       // Returns 10 (first element)
console.log(numbers[4]);                       // Returns 50 (last element)
console.log(numbers[10]);                      // Returns undefined (index out of range)

// 6. Modifying Array Elements
numbers[0] = 100;                              // Changes first element to 100
numbers[5] = 60;                               // Adds new element at index 5

// ============================================
// PART 2: ARRAY ITERATION METHODS
// ============================================

let fruits = ["apple", "banana", "orange", "grape"];

// 1. for Loop - Traditional iteration
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 2. for...of Loop (ES6) - Iterate over values
for (let fruit of fruits) {
    console.log(fruit);
}

// 3. for...in Loop - Iterate over indices (not recommended for arrays)
for (let index in fruits) {
    console.log(fruits[index]);
}

// 4. forEach() - Execute function for each element
fruits.forEach(function(fruit, index) {
    console.log(index, fruit);
});

// Using arrow function (ES6)
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

// 5. map() - Transform each element and return new array
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);                     // Returns ["APPLE", "BANANA", "ORANGE", "GRAPE"]

let doubledNums = [1, 2, 3, 4].map(num => num * 2);
console.log(doubledNums);                         // Returns [2, 4, 6, 8]

// 6. filter() - Filter elements based on condition
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);                      // Returns ["banana", "orange"]

let evenNumbers = [1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0);
console.log(evenNumbers);                     // Returns [2, 4, 6]

// 7. reduce() - Reduce array to single value
let sumReduce = [1, 2, 3, 4, 5].reduce((accumulator, current) => accumulator + current, 0);
console.log(sumReduce);                             // Returns 15

let product = [1, 2, 3, 4].reduce((acc, curr) => acc * curr, 1);
console.log(product);                         // Returns 24

// 8. reduceRight() - Reduce from right to left
let subtract = [10, 5, 2].reduceRight((acc, curr) => acc - curr);
console.log(subtract);                        // Returns 3 (10 - 5 - 2)

// 9. find() - Find first element matching condition (ES6)
let found = fruits.find(fruit => fruit.length > 5);
console.log(found);                           // Returns "banana" (first match)

let user = [{id: 1, name: "John"}, {id: 2, name: "Jane"}].find(u => u.id === 2);
console.log(user);                            // Returns {id: 2, name: "Jane"}

// 10. findIndex() - Find index of first matching element (ES6)
let index = fruits.findIndex(fruit => fruit.length > 5);
console.log(index);                           // Returns 1 (index of "banana")

// 11. findLast() - Find last element matching condition (ES2023)
// Note: May not be available in all browsers
let lastFound = [1, 2, 3, 4, 5].findLast(num => num % 2 === 0);
console.log(lastFound);                       // Returns 4

// 12. findLastIndex() - Find index of last matching element (ES2023)
let lastIndex = [1, 2, 3, 4, 5].findLastIndex(num => num % 2 === 0);
console.log(lastIndex);                       // Returns 3

// ============================================
// PART 3: ARRAY SEARCH METHODS
// ============================================

let searchArray = [10, 20, 30, 20, 40];

// 1. indexOf(element, startIndex) - Find first occurrence index
console.log(searchArray.indexOf(20));         // Returns 1
console.log(searchArray.indexOf(20, 2));      // Returns 3 (starts from index 2)
console.log(searchArray.indexOf(100));        // Returns -1 (not found)

// 2. lastIndexOf(element, startIndex) - Find last occurrence index
console.log(searchArray.lastIndexOf(20));     // Returns 3
console.log(searchArray.lastIndexOf(20, 2));  // Returns 1 (searches backwards from index 2)

// 3. includes(element, startIndex) - Check if array contains element (ES6)
console.log(searchArray.includes(20));        // Returns true
console.log(searchArray.includes(100));       // Returns false
console.log(searchArray.includes(20, 2));     // Returns true (starts from index 2)

// 4. some() - Check if at least one element passes test
let hasEven = [1, 3, 5, 8, 9].some(num => num % 2 === 0);
console.log(hasEven);                         // Returns true

let hasNegative = [1, 2, 3].some(num => num < 0);
console.log(hasNegative);                     // Returns false

// 5. every() - Check if all elements pass test
let allPositive = [1, 2, 3, 4].every(num => num > 0);
console.log(allPositive);                     // Returns true

let allEven = [2, 4, 6, 7].every(num => num % 2 === 0);
console.log(allEven);                         // Returns false

// ============================================
// PART 4: ARRAY MODIFICATION METHODS
// ============================================

// 1. push() - Add element(s) to end of array (mutates array)
let pushArray = [1, 2, 3];
pushArray.push(4);
console.log(pushArray);                       // Returns [1, 2, 3, 4]
pushArray.push(5, 6, 7);
console.log(pushArray);                       // Returns [1, 2, 3, 4, 5, 6, 7]

// 2. pop() - Remove and return last element (mutates array)
let popArray = [1, 2, 3, 4];
let last = popArray.pop();
console.log(last);                            // Returns 4
console.log(popArray);                        // Returns [1, 2, 3]

// 3. unshift() - Add element(s) to beginning of array (mutates array)
let unshiftArray = [2, 3, 4];
unshiftArray.unshift(1);
console.log(unshiftArray);                    // Returns [1, 2, 3, 4]
unshiftArray.unshift(-1, 0);
console.log(unshiftArray);                    // Returns [-1, 0, 1, 2, 3, 4]

// 4. shift() - Remove and return first element (mutates array)
let shiftArray = [1, 2, 3, 4];
let firstElement = shiftArray.shift();
console.log(firstElement);                           // Returns 1
console.log(shiftArray);                      // Returns [2, 3, 4]

// 5. splice(start, deleteCount, ...items) - Add/remove elements at any position (mutates array)
let spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(2, 1);                     // Remove 1 element at index 2
console.log(spliceArray);                     // Returns [1, 2, 4, 5]

spliceArray.splice(1, 0, 10, 20);            // Insert 10, 20 at index 1 (delete 0)
console.log(spliceArray);                     // Returns [1, 10, 20, 2, 4, 5]

spliceArray.splice(2, 2, 30);                // Replace 2 elements at index 2 with 30
console.log(spliceArray);                     // Returns [1, 10, 30, 4, 5]

// 6. fill(value, start, end) - Fill array with value (ES6) (mutates array)
let fillArray = new Array(5).fill(0);
console.log(fillArray);                       // Returns [0, 0, 0, 0, 0]

let fillArray2 = [1, 2, 3, 4, 5];
fillArray2.fill(0, 1, 3);                     // Fill with 0 from index 1 to 3 (exclusive)
console.log(fillArray2);                      // Returns [1, 0, 0, 4, 5]

// 7. copyWithin(target, start, end) - Copy elements within array (ES6) (mutates array)
let copyArray = [1, 2, 3, 4, 5];
copyArray.copyWithin(0, 3);                   // Copy elements from index 3 to start
console.log(copyArray);                       // Returns [4, 5, 3, 4, 5]

let copyArray2 = [1, 2, 3, 4, 5, 6, 7];
copyArray2.copyWithin(1, 4, 6);              // Copy elements from index 4-6 to index 1
console.log(copyArray2);                      // Returns [1, 5, 6, 4, 5, 6, 7]

// ============================================
// PART 5: ARRAY EXTRACTION METHODS (Non-mutating)
// ============================================

let extractArray = [1, 2, 3, 4, 5];

// 1. slice(start, end) - Extract portion of array (doesn't mutate)
let sliced = extractArray.slice(1, 4);
console.log(sliced);                          // Returns [2, 3, 4]
console.log(extractArray);                    // Original unchanged: [1, 2, 3, 4, 5]

let sliced2 = extractArray.slice(2);          // From index 2 to end
console.log(sliced2);                         // Returns [3, 4, 5]

let sliced3 = extractArray.slice(-3);         // Last 3 elements
console.log(sliced3);                         // Returns [3, 4, 5]

let sliced4 = extractArray.slice(1, -1);      // From index 1 to second-to-last
console.log(sliced4);                         // Returns [2, 3, 4]

// 2. concat() - Merge arrays (doesn't mutate)
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];
let merged = arrA.concat(arrB);
console.log(merged);                          // Returns [1, 2, 3, 4, 5, 6]
console.log(arrA);                            // Original unchanged

let merged2 = arrA.concat(arrB, [7, 8], 9);   // Can merge multiple arrays and values
console.log(merged2);                         // Returns [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Using spread operator (ES6) - Alternative to concat
let merged3 = [...arrA, ...arrB];
console.log(merged3);                         // Returns [1, 2, 3, 4, 5, 6]

// ============================================
// PART 6: ARRAY SORTING AND REVERSING
// ============================================

// 1. sort() - Sort array elements (mutates array)
let sortArray = [3, 1, 4, 1, 5, 9, 2, 6];
sortArray.sort();
console.log(sortArray);                       // Returns [1, 1, 2, 3, 4, 5, 6, 9]

// Sort as strings (default behavior)
let stringSort = [10, 2, 5, 1];
stringSort.sort();
console.log(stringSort);                      // Returns [1, 10, 2, 5] (sorted as strings!)

// Sort numbers correctly
let numSort = [10, 2, 5, 1];
numSort.sort((a, b) => a - b);                // Ascending order
console.log(numSort);                         // Returns [1, 2, 5, 10]

numSort.sort((a, b) => b - a);                // Descending order
console.log(numSort);                         // Returns [10, 5, 2, 1]

// Sort objects
let users = [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Bob", age: 35}
];
users.sort((a, b) => a.age - b.age);          // Sort by age
console.log(users);

// 2. reverse() - Reverse array order (mutates array)
let reverseArray = [1, 2, 3, 4, 5];
reverseArray.reverse();
console.log(reverseArray);                    // Returns [5, 4, 3, 2, 1]

// ============================================
// PART 7: ARRAY TO STRING CONVERSION
// ============================================

let stringArray = ["apple", "banana", "orange"];

// 1. toString() - Convert to comma-separated string
console.log(stringArray.toString());          // Returns "apple,banana,orange"

// 2. join(separator) - Join with custom separator
console.log(stringArray.join(", "));          // Returns "apple, banana, orange"
console.log(stringArray.join("-"));           // Returns "apple-banana-orange"
console.log(stringArray.join(""));            // Returns "applebananaorange"
console.log(stringArray.join(" | "));         // Returns "apple | banana | orange"

// 3. String conversion
console.log(String(stringArray));             // Returns "apple,banana,orange"

// ============================================
// PART 8: ARRAY FLATTENING METHODS
// ============================================

// 1. flat(depth) - Flatten nested arrays (ES2019)
let nested = [1, 2, [3, 4], [5, [6, 7]]];
console.log(nested.flat());                   // Returns [1, 2, 3, 4, 5, [6, 7]] (depth 1)
console.log(nested.flat(2));                  // Returns [1, 2, 3, 4, 5, 6, 7] (depth 2)
console.log(nested.flat(Infinity));           // Flatten all levels

// 2. flatMap() - Map then flatten one level (ES2019)
let words = ["hello world", "foo bar"];
let letters = words.flatMap(word => word.split(" "));
console.log(letters);                         // Returns ["hello", "world", "foo", "bar"]

// Equivalent to map().flat()
let letters2 = words.map(word => word.split(" ")).flat();
console.log(letters2);                        // Same result

// ============================================
// PART 9: ARRAY COMBINATION METHODS
// ============================================

// 1. entries() - Returns iterator of [index, value] pairs (ES6)
let entriesArray = ["a", "b", "c"];
for (let [index, value] of entriesArray.entries()) {
    console.log(index, value);                 // Prints: 0 'a', 1 'b', 2 'c'
}

// 2. keys() - Returns iterator of array indices (ES6)
for (let key of entriesArray.keys()) {
    console.log(key);                          // Prints: 0, 1, 2
}

// 3. values() - Returns iterator of array values (ES6)
for (let value of entriesArray.values()) {
    console.log(value);                        // Prints: 'a', 'b', 'c'
}

// ============================================
// PART 10: ARRAY CREATION METHODS
// ============================================

// 1. Array.from() - Create array from array-like or iterable (ES6)
let arrayLike = {0: "a", 1: "b", 2: "c", length: 3};
let fromArray = Array.from(arrayLike);
console.log(fromArray);                       // Returns ["a", "b", "c"]

let fromString = Array.from("hello");
console.log(fromString);                      // Returns ["h", "e", "l", "l", "o"]

// With mapping function
let doubledFrom = Array.from([1, 2, 3], x => x * 2);
console.log(doubledFrom);                         // Returns [2, 4, 6]

// 2. Array.of() - Create array from arguments (ES6)
let ofArray = Array.of(1, 2, 3, 4);
console.log(ofArray);                         // Returns [1, 2, 3, 4]

// Difference from Array constructor
console.log(Array.of(7));                     // Returns [7]
console.log(Array(7));                        // Returns array with 7 empty slots

// 3. Spread Operator (ES6) - Create new array
let originalSpread = [1, 2, 3];
let spread = [...originalSpread];                   // Copy array
console.log(spread);                          // Returns [1, 2, 3]

let combined = [...[1, 2], ...[3, 4]];        // Combine arrays
console.log(combined);                        // Returns [1, 2, 3, 4]

// ============================================
// PART 11: ARRAY CHECKING METHODS
// ============================================

// 1. Array.isArray() - Check if value is an array
console.log(Array.isArray([1, 2, 3]));       // Returns true
console.log(Array.isArray("hello"));          // Returns false
console.log(Array.isArray({}));               // Returns false
console.log(Array.isArray(null));             // Returns false

// 2. instanceof - Alternative way to check
console.log([1, 2, 3] instanceof Array);      // Returns true

// ============================================
// PART 12: ADVANCED ARRAY OPERATIONS
// ============================================

// 1. Chaining Array Methods
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = numbers
    .filter(num => num % 2 === 0)             // [2, 4, 6, 8, 10]
    .map(num => num * 2)                      // [4, 8, 12, 16, 20]
    .reduce((acc, curr) => acc + curr, 0);    // 60
console.log(result);                          // Returns 60

// 2. Removing Duplicates
let duplicates = [1, 2, 2, 3, 3, 3, 4];
let unique1 = [...new Set(duplicates)];       // Using Set (ES6)
console.log(unique1);                         // Returns [1, 2, 3, 4]

let unique2 = duplicates.filter((value, index, self) => self.indexOf(value) === index);
console.log(unique2);                         // Returns [1, 2, 3, 4]

// 3. Array Intersection
let arrIntersect1 = [1, 2, 3, 4, 5];
let arrIntersect2 = [3, 4, 5, 6, 7];
let intersection = arrIntersect1.filter(x => arrIntersect2.includes(x));
console.log(intersection);                   // Returns [3, 4, 5]

// 4. Array Difference
let difference = arrIntersect1.filter(x => !arrIntersect2.includes(x));
console.log(difference);                      // Returns [1, 2]

// 5. Array Union
let union = [...new Set([...arrIntersect1, ...arrIntersect2])];
console.log(union);                           // Returns [1, 2, 3, 4, 5, 6, 7]

// 6. Grouping Array Elements
let people = [
    {name: "John", age: 25},
    {name: "Jane", age: 30},
    {name: "Bob", age: 25},
    {name: "Alice", age: 30}
];

let grouped = people.reduce((acc, person) => {
    let age = person.age;
    if (!acc[age]) {
        acc[age] = [];
    }
    acc[age].push(person);
    return acc;
}, {});
console.log(grouped);
// Returns: {25: [{name: "John", age: 25}, {name: "Bob", age: 25}], 30: [...]}

// 7. Partitioning Array
function partition(array, predicate) {
    return array.reduce((acc, item) => {
        acc[predicate(item) ? 0 : 1].push(item);
        return acc;
    }, [[], []]);
}

let numbers2 = [1, 2, 3, 4, 5, 6];
let [evens, odds] = partition(numbers2, n => n % 2 === 0);
console.log(evens);                           // Returns [2, 4, 6]
console.log(odds);                            // Returns [1, 3, 5]

// 8. Array Shuffling (Fisher-Yates algorithm)
function shuffle(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
let originalShuffle = [1, 2, 3, 4, 5];
console.log(shuffle(originalShuffle));               // Returns shuffled array

// 9. Array Chunking
function chunk(array, size) {
    let chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}
let chunked = chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(chunked);                         // Returns [[1, 2, 3], [4, 5, 6], [7, 8]]

// 10. Array Rotation
function rotate(array, positions) {
    let rotated = [...array];
    for (let i = 0; i < positions; i++) {
        rotated.push(rotated.shift());
    }
    return rotated;
}
let rotated = rotate([1, 2, 3, 4, 5], 2);
console.log(rotated);                         // Returns [3, 4, 5, 1, 2]

// 11. Finding Maximum and Minimum
let numbers3 = [5, 2, 8, 1, 9, 3];
let max = Math.max(...numbers3);
let min = Math.min(...numbers3);
console.log(max, min);                        // Returns 9, 1

// Using reduce
let max2 = numbers3.reduce((a, b) => a > b ? a : b);
let min2 = numbers3.reduce((a, b) => a < b ? a : b);
console.log(max2, min2);                      // Returns 9, 1

// 12. Array Sum and Average
let sumAvg = numbers3.reduce((a, b) => a + b, 0);
let average = sumAvg / numbers3.length;
console.log(sumAvg, average);                    // Returns 28, 4.666...

// 13. Array Transpose (Matrix)
function transpose(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(transpose(matrix));               // Returns [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

// ============================================
// PART 13: MULTIDIMENSIONAL ARRAYS
// ============================================

// 1. Creating 2D Arrays
let matrix2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Accessing elements
console.log(matrix2D[0][0]);                 // Returns 1
console.log(matrix2D[1][2]);                 // Returns 6

// 2. Iterating 2D Arrays
for (let i = 0; i < matrix2D.length; i++) {
    for (let j = 0; j < matrix2D[i].length; j++) {
        console.log(matrix2D[i][j]);
    }
}

// Using forEach
matrix2D.forEach(row => {
    row.forEach(cell => {
        console.log(cell);
    });
});

// 3. Creating 3D Arrays
let matrix3D = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];
console.log(matrix3D[0][1][0]);              // Returns 3

// ============================================
// PART 14: ARRAY DESTRUCTURING (ES6)
// ============================================

// 1. Basic Destructuring
let colors = ["red", "green", "blue"];
let [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);            // Returns "red", "green", "blue"

// 2. Skipping Elements
let [firstSkip, , thirdSkip] = colors;
console.log(firstSkip, thirdSkip);          // Returns "red", "blue"

// 3. Default Values
let [a, b, c, d = "yellow"] = colors;
console.log(d);                               // Returns "yellow" (default)

// 4. Rest Operator
let [primary, ...others] = colors;
console.log(primary);                         // Returns "red"
console.log(others);                          // Returns ["green", "blue"]

// 5. Swapping Variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y);                            // Returns 2, 1

// 6. Destructuring from Function Return
function getNumbers() {
    return [1, 2, 3];
}
let [num1, num2, num3] = getNumbers();
console.log(num1, num2, num3);                // Returns 1, 2, 3

// ============================================
// PART 15: ARRAY METHODS SUMMARY TABLE
// ============================================

/*
METHOD                  | MUTATES | DESCRIPTION                          | RETURNS
------------------------|---------|--------------------------------------|------------------
push(...items)          | Yes     | Add to end                           | New length
pop()                   | Yes     | Remove from end                      | Removed element
unshift(...items)       | Yes     | Add to beginning                     | New length
shift()                 | Yes     | Remove from beginning                | Removed element
splice(start, del, ...) | Yes     | Add/remove at position               | Array of removed
sort(compareFn)         | Yes     | Sort array                           | Same array
reverse()               | Yes     | Reverse array                        | Same array
fill(value, start, end) | Yes     | Fill with value                      | Same array
copyWithin(target, ...) | Yes     | Copy within array                    | Same array

slice(start, end)       | No      | Extract portion                      | New array
concat(...arrays)       | No      | Merge arrays                         | New array
map(fn)                 | No      | Transform elements                   | New array
filter(fn)              | No      | Filter elements                      | New array
reduce(fn, initial)     | No      | Reduce to single value               | Single value
reduceRight(fn, init)   | No      | Reduce from right                    | Single value
flat(depth)             | No      | Flatten nested arrays                | New array
flatMap(fn)             | No      | Map then flatten                     | New array

forEach(fn)             | No      | Execute for each                     | undefined
find(fn)                | No      | Find first match                     | Element/undefined
findIndex(fn)           | No      | Find first match index               | Number/-1
findLast(fn)            | No      | Find last match                      | Element/undefined
findLastIndex(fn)       | No      | Find last match index                | Number/-1
indexOf(element)        | No      | Find first occurrence                | Number/-1
lastIndexOf(element)    | No      | Find last occurrence                 | Number/-1
includes(element)       | No      | Check if contains                    | Boolean
some(fn)                | No      | Test if any passes                   | Boolean
every(fn)               | No      | Test if all pass                     | Boolean

join(separator)         | No      | Join to string                       | String
toString()              | No      | Convert to string                    | String
toLocaleString()        | No      | Convert to locale string             | String

keys()                  | No      | Iterator of indices                 | Iterator
values()                | No      | Iterator of values                  | Iterator
entries()               | No      | Iterator of [index, value]          | Iterator

Array.from(arrayLike)   | N/A     | Create from array-like               | Array
Array.of(...items)      | N/A     | Create from arguments                | Array
Array.isArray(value)    | N/A     | Check if is array                    | Boolean
*/

// ============================================
// PART 16: PERFORMANCE CONSIDERATIONS
// ============================================

// 1. Prefer for loops for performance-critical code
// for loops are generally faster than forEach/map for large arrays

// 2. Use Set for fast lookups
let largeArray = [1, 2, 3, 4, 5, /* ... thousands more */];
let lookupSet = new Set(largeArray);
console.log(lookupSet.has(3));                // O(1) lookup vs O(n) with includes()

// 3. Avoid unnecessary array creation
// Use methods that don't create new arrays when possible

// 4. Consider typed arrays for numeric data
let typedArray = new Int32Array([1, 2, 3, 4, 5]);
// More memory efficient for large numeric arrays

// ============================================
// END OF JAVASCRIPT ARRAYS GUIDE
// ============================================

