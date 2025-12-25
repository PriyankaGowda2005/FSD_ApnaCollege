// ============================================
// JAVASCRIPT STRINGS - COMPREHENSIVE GUIDE
// From Basic to Advanced
// ============================================

// ============================================
// PART 1: BASIC STRING CONCEPTS
// ============================================

// 1. String Declaration - Three ways to create strings
let strDouble = "Double quotes";           // Using double quotes
let strSingle = 'Single quotes';           // Using single quotes
let strTemplate = `Template literals`;       // Using backticks (ES6)

// 2. String Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName1 = firstName + " " + lastName;              // Using + operator
let fullName2 = firstName.concat(" ", lastName);         // Using concat() method
let fullName3 = `${firstName} ${lastName}`;              // Using template literals (ES6)

// 3. Template Literals (ES6) - Advanced string formatting
let personAge = 25;
let message = `My name is ${firstName} and I am ${personAge} years old.`;
// Template literals support multi-line strings
let multiLine = `This is line 1
This is line 2
This is line 3`;

// 4. String Properties
let text = "Hello World";
console.log(text.length);  // Returns the length of the string (11)

// 5. String Immutability
// Strings are immutable - they cannot be changed, only replaced
let original = "Hello";
original[0] = "h";  // This won't work - strings are immutable
let modified = original.replace("H", "h");  // Creates a new string

// ============================================
// PART 2: STRING ACCESS METHODS
// ============================================

let example = "JavaScript";

// 1. charAt(index) - Returns character at specified index
console.log(example.charAt(0));        // Returns "J"
console.log(example.charAt(4));        // Returns "S"
console.log(example.charAt(100));      // Returns "" (empty string if index out of range)

// 2. charCodeAt(index) - Returns Unicode of character at index
console.log(example.charCodeAt(0));    // Returns 74 (Unicode for "J")
console.log(example.charCodeAt(1));    // Returns 97 (Unicode for "a")

// 3. String.fromCharCode() - Converts Unicode to character
console.log(String.fromCharCode(74));  // Returns "J"
console.log(String.fromCharCode(65, 66, 67));  // Returns "ABC"

// 4. Bracket Notation - Access character by index (ES5)
console.log(example[0]);               // Returns "J"
console.log(example[4]);               // Returns "S"
console.log(example[100]);             // Returns undefined (if index out of range)

// ============================================
// PART 3: STRING SEARCH METHODS
// ============================================

let searchText = "Hello World, Hello JavaScript";

// 1. indexOf(searchValue, startIndex) - Returns first occurrence index
console.log(searchText.indexOf("Hello"));        // Returns 0
console.log(searchText.indexOf("Hello", 1));     // Returns 13 (starts searching from index 1)
console.log(searchText.indexOf("xyz"));          // Returns -1 (not found)

// 2. lastIndexOf(searchValue, startIndex) - Returns last occurrence index
console.log(searchText.lastIndexOf("Hello"));    // Returns 13
console.log(searchText.lastIndexOf("Hello", 10)); // Returns 0 (searches backwards from index 10)

// 3. search(regexp) - Searches for a match and returns index
console.log(searchText.search("World"));         // Returns 6
console.log(searchText.search(/world/i));        // Returns 6 (case-insensitive regex)
console.log(searchText.search(/xyz/));           // Returns -1 (not found)

// 4. includes(searchValue, startIndex) - Returns true/false (ES6)
console.log(searchText.includes("World"));       // Returns true
console.log(searchText.includes("world"));       // Returns false (case-sensitive)
console.log(searchText.includes("World", 10));   // Returns false (starts from index 10)

// 5. startsWith(searchValue, startIndex) - Checks if string starts with value (ES6)
let url = "https://www.example.com";
console.log(url.startsWith("https"));            // Returns true
console.log(url.startsWith("http", 0));          // Returns true
console.log(url.startsWith("www", 8));           // Returns true (starts checking from index 8)

// 6. endsWith(searchValue, length) - Checks if string ends with value (ES6)
let filename = "document.pdf";
console.log(filename.endsWith(".pdf"));          // Returns true
console.log(filename.endsWith(".doc"));          // Returns false
console.log(filename.endsWith("ment", 10));      // Returns true (checks first 10 characters)

// ============================================
// PART 4: STRING EXTRACTION METHODS
// ============================================

let extractText = "JavaScript Programming";

// 1. slice(startIndex, endIndex) - Extracts part of string (endIndex not included)
console.log(extractText.slice(0, 10));           // Returns "JavaScript"
console.log(extractText.slice(11));              // Returns "Programming" (to end)
console.log(extractText.slice(-11));             // Returns "Programming" (negative index from end)
console.log(extractText.slice(-11, -1));         // Returns "Programmin" (negative indices)

// 2. substring(startIndex, endIndex) - Similar to slice but doesn't accept negative indices
console.log(extractText.substring(0, 10));       // Returns "JavaScript"
console.log(extractText.substring(11));          // Returns "Programming"
console.log(extractText.substring(11, 0));      // Returns "JavaScript" (swaps if start > end)

// 3. substr(startIndex, length) - DEPRECATED - Use slice() instead
// Extracts specified number of characters from start index
console.log(extractText.substr(0, 10));          // Returns "JavaScript"
console.log(extractText.substr(11, 5));         // Returns "Progr"

// ============================================
// PART 5: STRING MODIFICATION METHODS
// ============================================

// 1. toUpperCase() - Converts to uppercase
let lower = "hello world";
console.log(lower.toUpperCase());                // Returns "HELLO WORLD"

// 2. toLowerCase() - Converts to lowercase
let upper = "HELLO WORLD";
console.log(upper.toLowerCase());                // Returns "hello world"

// 3. concat(str1, str2, ...) - Joins strings
let strA = "Hello";
let strB = "World";
console.log(strA.concat(" ", strB, "!"));       // Returns "Hello World!"

// 4. trim() - Removes whitespace from both ends
let spaced = "   Hello World   ";
console.log(spaced.trim());                      // Returns "Hello World"

// 5. trimStart() / trimLeft() - Removes whitespace from start (ES10)
let leftSpaced = "   Hello World";
console.log(leftSpaced.trimStart());             // Returns "Hello World"
console.log(leftSpaced.trimLeft());              // Same as trimStart() (alias)

// 6. trimEnd() / trimRight() - Removes whitespace from end (ES10)
let rightSpaced = "Hello World   ";
console.log(rightSpaced.trimEnd());              // Returns "Hello World"
console.log(rightSpaced.trimRight());            // Same as trimEnd() (alias)

// 7. padStart(targetLength, padString) - Pads string from start (ES8)
let num = "5";
console.log(num.padStart(3, "0"));               // Returns "005"
console.log(num.padStart(4, "x"));               // Returns "xxx5"

// 8. padEnd(targetLength, padString) - Pads string from end (ES8)
console.log(num.padEnd(3, "0"));                 // Returns "500"
console.log(num.padEnd(4, "x"));                 // Returns "5xxx"

// 9. repeat(count) - Repeats string specified number of times (ES6)
let word = "Hello";
console.log(word.repeat(3));                     // Returns "HelloHelloHello"
console.log("abc".repeat(2));                    // Returns "abcabc"

// ============================================
// PART 6: STRING REPLACEMENT METHODS
// ============================================

let replaceText = "Hello World, Hello JavaScript";

// 1. replace(searchValue, replaceValue) - Replaces first occurrence
console.log(replaceText.replace("Hello", "Hi"));        // Returns "Hi World, Hello JavaScript"
console.log(replaceText.replace(/hello/i, "Hi"));       // Returns "Hi World, Hello JavaScript" (case-insensitive)

// 2. replaceAll(searchValue, replaceValue) - Replaces all occurrences (ES2021)
console.log(replaceText.replaceAll("Hello", "Hi"));     // Returns "Hi World, Hi JavaScript"
console.log(replaceText.replaceAll(/hello/gi, "Hi"));   // Returns "Hi World, Hi JavaScript" (regex with global flag)

// Note: For older browsers, use replace() with global regex
console.log(replaceText.replace(/Hello/g, "Hi"));       // Returns "Hi World, Hi JavaScript"

// ============================================
// PART 7: STRING SPLITTING AND JOINING
// ============================================

// 1. split(separator, limit) - Splits string into array
let csv = "apple,banana,orange,grape";
console.log(csv.split(","));                     // Returns ["apple", "banana", "orange", "grape"]
console.log(csv.split(",", 2));                  // Returns ["apple", "banana"] (limit to 2)

let sentence = "Hello World JavaScript";
console.log(sentence.split(" "));               // Returns ["Hello", "World", "JavaScript"]
console.log(sentence.split(""));                // Returns ["H", "e", "l", "l", "o", " ", ...] (each character)
console.log(sentence.split());                  // Returns ["Hello World JavaScript"] (no separator)

// 2. Array.join(separator) - Joins array elements into string
let fruits = ["apple", "banana", "orange"];
console.log(fruits.join(", "));                  // Returns "apple, banana, orange"
console.log(fruits.join("-"));                   // Returns "apple-banana-orange"
console.log(fruits.join(""));                    // Returns "applebananaorange"

// ============================================
// PART 8: STRING MATCHING METHODS (REGEX)
// ============================================

let matchText = "Hello123World456";

// 1. match(regexp) - Returns array of matches or null
console.log(matchText.match(/\d+/));            // Returns ["123"] (first match)
console.log(matchText.match(/\d+/g));           // Returns ["123", "456"] (all matches with global flag)
console.log(matchText.match(/xyz/));            // Returns null (no match)

// 2. matchAll(regexp) - Returns iterator of all matches (ES2020)
// Note: Must use global flag (g)
let matches = matchText.matchAll(/\d+/g);
for (let match of matches) {
    console.log(match[0]);                      // Prints "123", then "456"
}

// 3. test() - Regex method to test if pattern exists
let regex = /\d+/;
console.log(regex.test(matchText));             // Returns true

// ============================================
// PART 9: STRING COMPARISON METHODS
// ============================================

// 1. localeCompare(otherString) - Compares strings based on locale
let compareStr1 = "apple";
let compareStr2 = "banana";
console.log(compareStr1.localeCompare(compareStr2));          // Returns negative (apple < banana)
console.log(compareStr2.localeCompare(compareStr1));          // Returns positive (banana > apple)
console.log(compareStr1.localeCompare("apple"));       // Returns 0 (equal)

// With options
console.log("ä".localeCompare("z", "de"));      // German locale comparison
console.log("ä".localeCompare("z", "sv"));      // Swedish locale comparison

// 2. Comparison Operators
console.log("apple" < "banana");                 // Returns true
console.log("Apple" < "apple");                  // Returns true (uppercase < lowercase in ASCII)
console.log("apple" === "apple");                // Returns true (strict equality)

// ============================================
// PART 10: ADVANCED STRING OPERATIONS
// ============================================

// 1. String Interpolation with Template Literals
let personName = "John";
let personAge2 = 30;
let city = "New York";
let info = `Name: ${personName}, Age: ${personAge2}, City: ${city}`;
console.log(info);

// 2. Multi-line Strings
let multiLine1 = "Line 1\nLine 2\nLine 3";      // Using escape sequence
let multiLine2 = `Line 1
Line 2
Line 3`;                                         // Using template literals (cleaner)

// 3. Tagged Template Literals (Advanced)
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        return result + string + (values[i] ? `<mark>${values[i]}</mark>` : '');
    }, '');
}
let name2 = "John";
let age2 = 25;
let highlighted = highlight`Hello, my name is ${name2} and I am ${age2} years old.`;
console.log(highlighted);

// 4. String Validation
function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}
console.log(isValidEmail("user@example.com"));  // Returns true

// 5. String Reversal
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));            // Returns "olleH"

// 6. Palindrome Check
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}
console.log(isPalindrome("racecar"));           // Returns true
console.log(isPalindrome("Hello"));            // Returns false

// 7. Word Count
function countWords(str) {
    return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}
console.log(countWords("Hello World JavaScript"));  // Returns 3

// 8. Capitalize First Letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("hello"));               // Returns "Hello"

// 9. Title Case
function toTitleCase(str) {
    return str.split(" ").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(" ");
}
console.log(toTitleCase("hello world"));       // Returns "Hello World"

// 10. Remove Duplicate Characters
function removeDuplicates(str) {
    return [...new Set(str.split(""))].join("");
}
console.log(removeDuplicates("hello"));         // Returns "helo"

// ============================================
// PART 11: STRING ITERATION
// ============================================

let iterateText = "Hello";

// 1. For Loop
for (let i = 0; i < iterateText.length; i++) {
    console.log(iterateText[i]);
}

// 2. For...of Loop (ES6)
for (let char of iterateText) {
    console.log(char);
}

// 3. forEach (on split array)
iterateText.split("").forEach(char => {
    console.log(char);
});

// 4. Array.from() with forEach
Array.from(iterateText).forEach(char => {
    console.log(char);
});

// ============================================
// PART 12: STRING TYPE CONVERSION
// ============================================

// 1. Number to String
let num1 = 123;
console.log(String(num1));                      // Returns "123"
console.log(num1.toString());                   // Returns "123"
console.log(num1.toString(2));                  // Returns "1111011" (binary)
console.log(num1.toString(16));                 // Returns "7b" (hexadecimal)

// 2. Boolean to String
let bool = true;
console.log(String(bool));                      // Returns "true"
console.log(bool.toString());                   // Returns "true"

// 3. Array to String
let arr = [1, 2, 3];
console.log(String(arr));                       // Returns "1,2,3"
console.log(arr.toString());                    // Returns "1,2,3"
console.log(arr.join(""));                      // Returns "123"

// 4. Object to String
let obj = { name: "John" };
console.log(String(obj));                       // Returns "[object Object]"
console.log(JSON.stringify(obj));               // Returns '{"name":"John"}'

// ============================================
// PART 13: ESCAPE SEQUENCES
// ============================================

let escaped = "Hello\nWorld";                   // Newline
let escaped2 = "Hello\tWorld";                  // Tab
let escaped3 = "Hello\rWorld";                  // Carriage return
let escaped4 = "Hello\\World";                  // Backslash
let escaped5 = "Hello\"World";                  // Double quote
let escaped6 = 'Hello\'World';                   // Single quote
let escaped7 = "Hello\u0041";                   // Unicode escape

// ============================================
// PART 14: RAW STRINGS (ES6)
// ============================================

// String.raw - Returns raw string without processing escape sequences
let rawString = String.raw`Hello\nWorld`;
console.log(rawString);                         // Returns "Hello\nWorld" (literal \n, not newline)

// ============================================
// PART 15: STRING METHODS SUMMARY TABLE
// ============================================

/*
METHOD                  | DESCRIPTION                          | RETURNS
------------------------|--------------------------------------|------------------
charAt(index)           | Character at index                   | String
charCodeAt(index)       | Unicode at index                     | Number
concat(str1, str2...)   | Joins strings                        | String
includes(search)        | Checks if contains                   | Boolean
indexOf(search)         | First occurrence index               | Number
lastIndexOf(search)     | Last occurrence index                | Number
match(regex)            | Matches regex                        | Array/null
replace(search, repl)   | Replaces first match                 | String
replaceAll(search, repl)| Replaces all matches                 | String
search(regex)           | Searches for match                   | Number
slice(start, end)       | Extracts substring                   | String
split(separator)        | Splits into array                    | Array
startsWith(search)      | Checks if starts with                | Boolean
endsWith(search)        | Checks if ends with                  | Boolean
substring(start, end)   | Extracts substring                   | String
toLowerCase()           | Converts to lowercase                | String
toUpperCase()           | Converts to uppercase                | String
trim()                  | Removes whitespace                   | String
trimStart()             | Removes leading whitespace           | String
trimEnd()                | Removes trailing whitespace          | String
padStart(length, pad)   | Pads from start                      | String
padEnd(length, pad)     | Pads from end                        | String
repeat(count)           | Repeats string                       | String
localeCompare(other)    | Compares strings                     | Number
*/

// ============================================
// END OF JAVASCRIPT STRINGS GUIDE
// ============================================

