// ============================================
// JS (Part 3) Practice Questions - Assignment 3
// ============================================

// ============================================
// Q1: Write a JavaScript program to get the first n elements of an array.
// [n can be any positive number]
// Example: for array [7, 9, 0, -2] and n = 3, Print [7, 9, 0]
// ============================================

/**
 * Solution 1: Using slice() method (Recommended)
 * slice(start, end) extracts elements from start index to end index (end not included)
 * If n is greater than array length, it returns the entire array
 */
function getFirstNElements1(arr, n) {
    // Check if n is valid (positive number)
    if (n <= 0) {
        return [];
    }
    
    // slice(0, n) gets elements from index 0 to n (n not included)
    // This means it gets first n elements
    return arr.slice(0, n);
}

// Test cases for Q1
let arr1 = [7, 9, 0, -2];
console.log("Q1 - Solution 1:");
console.log("Array:", arr1);
console.log("First 3 elements:", getFirstNElements1(arr1, 3));  // Output: [7, 9, 0]
console.log("First 2 elements:", getFirstNElements1(arr1, 2));  // Output: [7, 9]
console.log("First 5 elements:", getFirstNElements1(arr1, 5));  // Output: [7, 9, 0, -2] (all elements)
console.log("First 0 elements:", getFirstNElements1(arr1, 0));  // Output: []

/**
 * Solution 2: Using for loop
 * Manually iterate and push elements to new array
 */
function getFirstNElements2(arr, n) {
    if (n <= 0) {
        return [];
    }
    
    let result = [];
    // Loop from 0 to n-1 (or array length if n is greater)
    let endIndex = Math.min(n, arr.length);
    
    for (let i = 0; i < endIndex; i++) {
        result.push(arr[i]);
    }
    
    return result;
}

console.log("\nQ1 - Solution 2:");
console.log("First 3 elements:", getFirstNElements2(arr1, 3));  // Output: [7, 9, 0]

/**
 * Solution 3: Using filter() method
 * Filter elements where index is less than n
 */
function getFirstNElements3(arr, n) {
    if (n <= 0) {
        return [];
    }
    
    return arr.filter((element, index) => index < n);
}

console.log("\nQ1 - Solution 3:");
console.log("First 3 elements:", getFirstNElements3(arr1, 3));  // Output: [7, 9, 0]

// ============================================
// Q2: Write a JavaScript program to get the last n elements of an array.
// [n can be any positive number]
// Example: for array [7, 9, 0, -2] and n = 3, Print [9, 0, -2]
// ============================================

/**
 * Solution 1: Using slice() with negative index (Recommended)
 * slice(-n) gets the last n elements
 * If n is greater than array length, it returns the entire array
 */
function getLastNElements1(arr, n) {
    // Check if n is valid (positive number)
    if (n <= 0) {
        return [];
    }
    
    // slice(-n) gets elements from (length - n) to the end
    // This means it gets last n elements
    return arr.slice(-n);
}

// Test cases for Q2
let arr2 = [7, 9, 0, -2];
console.log("\n\nQ2 - Solution 1:");
console.log("Array:", arr2);
console.log("Last 3 elements:", getLastNElements1(arr2, 3));  // Output: [9, 0, -2]
console.log("Last 2 elements:", getLastNElements1(arr2, 2));  // Output: [0, -2]
console.log("Last 5 elements:", getLastNElements1(arr2, 5));  // Output: [7, 9, 0, -2] (all elements)
console.log("Last 0 elements:", getLastNElements1(arr2, 0));  // Output: []

/**
 * Solution 2: Using slice() with calculated start index
 * Start from (array.length - n) to the end
 */
function getLastNElements2(arr, n) {
    if (n <= 0) {
        return [];
    }
    
    // Calculate start index: if n > length, start from 0, else start from (length - n)
    let startIndex = Math.max(0, arr.length - n);
    return arr.slice(startIndex);
}

console.log("\nQ2 - Solution 2:");
console.log("Last 3 elements:", getLastNElements2(arr2, 3));  // Output: [9, 0, -2]

/**
 * Solution 3: Using for loop
 * Start from (length - n) and iterate to the end
 */
function getLastNElements3(arr, n) {
    if (n <= 0) {
        return [];
    }
    
    let result = [];
    let startIndex = Math.max(0, arr.length - n);
    
    for (let i = startIndex; i < arr.length; i++) {
        result.push(arr[i]);
    }
    
    return result;
}

console.log("\nQ2 - Solution 3:");
console.log("Last 3 elements:", getLastNElements3(arr2, 3));  // Output: [9, 0, -2]

// ============================================
// Q3: Write a JavaScript program to check whether a string is blank or not.
// ============================================

/**
 * Solution 1: Using trim() method (Recommended)
 * trim() removes leading and trailing whitespace
 * If result is empty, string is blank
 */
function isStringBlank1(str) {
    // Check if string is null or undefined first
    if (str === null || str === undefined) {
        return true;
    }
    
    // Convert to string (in case number or other type is passed)
    str = String(str);
    
    // trim() removes spaces, tabs, newlines, etc. from both ends
    // If length is 0 after trimming, string is blank
    return str.trim().length === 0;
}

// Test cases for Q3
console.log("\n\nQ3 - Solution 1:");
console.log("Is '   ' blank?", isStringBlank1("   "));        // Output: true (only spaces)
console.log("Is '' blank?", isStringBlank1(""));              // Output: true (empty string)
console.log("Is 'Hello' blank?", isStringBlank1("Hello"));    // Output: false
console.log("Is '  Hello  ' blank?", isStringBlank1("  Hello  "));  // Output: false (has content)
console.log("Is '\\t\\n' blank?", isStringBlank1("\t\n"));    // Output: true (only whitespace)
console.log("Is null blank?", isStringBlank1(null));          // Output: true

/**
 * Solution 2: Using regex to check for whitespace
 * /^\s*$/ matches strings that contain only whitespace (or empty)
 */
function isStringBlank2(str) {
    if (str === null || str === undefined) {
        return true;
    }
    
    str = String(str);
    // ^\s*$ means: start of string, zero or more whitespace characters, end of string
    return /^\s*$/.test(str);
}

console.log("\nQ3 - Solution 2:");
console.log("Is '   ' blank?", isStringBlank2("   "));        // Output: true
console.log("Is 'Hello' blank?", isStringBlank2("Hello"));     // Output: false

/**
 * Solution 3: Manual check using loop
 * Check each character to see if all are whitespace
 */
function isStringBlank3(str) {
    if (str === null || str === undefined) {
        return true;
    }
    
    str = String(str);
    
    // If length is 0, it's blank
    if (str.length === 0) {
        return true;
    }
    
    // Check each character - if any is not whitespace, return false
    for (let i = 0; i < str.length; i++) {
        // Check if character is not a whitespace character
        // Whitespace includes: space, tab, newline, carriage return, etc.
        if (str[i] !== ' ' && str[i] !== '\t' && str[i] !== '\n' && str[i] !== '\r') {
            return false;
        }
    }
    
    return true;
}

console.log("\nQ3 - Solution 3:");
console.log("Is '   ' blank?", isStringBlank3("   "));        // Output: true
console.log("Is 'Hello' blank?", isStringBlank3("Hello"));     // Output: false

// ============================================
// Q4: Write a JavaScript program to test whether the character at the given 
// (character) index is lowercase.
// ============================================

/**
 * Solution 1: Using toLowerCase() and comparison (Recommended)
 * Compare the character with its lowercase version
 */
function isLowerCaseAt1(str, index) {
    // Validate inputs
    if (str === null || str === undefined) {
        return false;
    }
    
    str = String(str);
    
    // Check if index is valid
    if (index < 0 || index >= str.length) {
        return false;
    }
    
    let char = str[index];
    
    // Check if character is a letter (not a number or special character)
    if (!/[a-zA-Z]/.test(char)) {
        return false;  // Not a letter, so can't be lowercase
    }
    
    // If character equals its lowercase version, it's lowercase
    // If it's already lowercase, toLowerCase() won't change it
    return char === char.toLowerCase() && char !== char.toUpperCase();
}

// Test cases for Q4
let testStr = "Hello World";
console.log("\n\nQ4 - Solution 1:");
console.log("String:", testStr);
console.log("Character at index 0 ('H') is lowercase?", isLowerCaseAt1(testStr, 0));  // Output: false
console.log("Character at index 1 ('e') is lowercase?", isLowerCaseAt1(testStr, 1));  // Output: true
console.log("Character at index 4 ('o') is lowercase?", isLowerCaseAt1(testStr, 4));   // Output: true
console.log("Character at index 6 ('W') is lowercase?", isLowerCaseAt1(testStr, 6));   // Output: false
console.log("Character at index 7 ('o') is lowercase?", isLowerCaseAt1(testStr, 7));  // Output: true

/**
 * Solution 2: Using regex to check if character is lowercase
 * /[a-z]/ matches lowercase letters
 */
function isLowerCaseAt2(str, index) {
    if (str === null || str === undefined) {
        return false;
    }
    
    str = String(str);
    
    if (index < 0 || index >= str.length) {
        return false;
    }
    
    let char = str[index];
    // /[a-z]/ matches any lowercase letter from a to z
    return /[a-z]/.test(char);
}

console.log("\nQ4 - Solution 2:");
console.log("Character at index 1 ('e') is lowercase?", isLowerCaseAt2(testStr, 1));  // Output: true
console.log("Character at index 0 ('H') is lowercase?", isLowerCaseAt2(testStr, 0));  // Output: false

/**
 * Solution 3: Using charCodeAt() to check ASCII values
 * Lowercase letters have ASCII codes from 97 (a) to 122 (z)
 */
function isLowerCaseAt3(str, index) {
    if (str === null || str === undefined) {
        return false;
    }
    
    str = String(str);
    
    if (index < 0 || index >= str.length) {
        return false;
    }
    
    let charCode = str.charCodeAt(index);
    // ASCII codes: 'a' = 97, 'z' = 122
    return charCode >= 97 && charCode <= 122;
}

console.log("\nQ4 - Solution 3:");
console.log("Character at index 1 ('e') is lowercase?", isLowerCaseAt3(testStr, 1));  // Output: true
console.log("Character at index 0 ('H') is lowercase?", isLowerCaseAt3(testStr, 0));  // Output: false

// ============================================
// Q5: Write a JavaScript program to strip leading and trailing spaces from a string.
// ============================================

/**
 * Solution 1: Using trim() method (Recommended - Built-in)
 * trim() removes whitespace from both ends of a string
 */
function stripSpaces1(str) {
    // Handle null/undefined
    if (str === null || str === undefined) {
        return "";
    }
    
    // Convert to string and trim
    return String(str).trim();
}

// Test cases for Q5
console.log("\n\nQ5 - Solution 1:");
console.log("Original: '  Hello World  '");
console.log("Stripped:", stripSpaces1("  Hello World  "));  // Output: "Hello World"
console.log("Original: '\\t\\n  Test  \\n\\t'");
console.log("Stripped:", stripSpaces1("\t\n  Test  \n\t"));  // Output: "Test"
console.log("Original: '   '");
console.log("Stripped:", stripSpaces1("   "));              // Output: ""
console.log("Original: 'NoSpaces'");
console.log("Stripped:", stripSpaces1("NoSpaces"));         // Output: "NoSpaces"

/**
 * Solution 2: Using trimStart() and trimEnd() separately
 * trimStart() removes leading spaces, trimEnd() removes trailing spaces
 */
function stripSpaces2(str) {
    if (str === null || str === undefined) {
        return "";
    }
    
    str = String(str);
    // Remove leading spaces first, then trailing spaces
    return str.trimStart().trimEnd();
}

console.log("\nQ5 - Solution 2:");
console.log("Stripped:", stripSpaces2("  Hello World  "));  // Output: "Hello World"

/**
 * Solution 3: Using regex replace (Manual implementation)
 * Replace leading and trailing whitespace with empty string
 */
function stripSpaces3(str) {
    if (str === null || str === undefined) {
        return "";
    }
    
    str = String(str);
    // ^\s+ matches one or more whitespace at start
    // \s+$ matches one or more whitespace at end
    // Replace both with empty string
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
}

console.log("\nQ5 - Solution 3:");
console.log("Stripped:", stripSpaces3("  Hello World  "));  // Output: "Hello World"

/**
 * Solution 4: Manual implementation using loops
 * Find first non-whitespace character from start and end
 */
function stripSpaces4(str) {
    if (str === null || str === undefined) {
        return "";
    }
    
    str = String(str);
    
    // Find first non-whitespace character from start
    let startIndex = 0;
    while (startIndex < str.length && /\s/.test(str[startIndex])) {
        startIndex++;
    }
    
    // Find last non-whitespace character from end
    let endIndex = str.length - 1;
    while (endIndex >= startIndex && /\s/.test(str[endIndex])) {
        endIndex--;
    }
    
    // Extract substring from startIndex to endIndex (inclusive)
    return str.substring(startIndex, endIndex + 1);
}

console.log("\nQ5 - Solution 4:");
console.log("Stripped:", stripSpaces4("  Hello World  "));  // Output: "Hello World"

// ============================================
// Q6: Write a JavaScript program to check if an element exists in an array or not.
// ============================================

/**
 * Solution 1: Using includes() method (Recommended - ES6)
 * includes() returns true if element exists, false otherwise
 */
function elementExists1(arr, element) {
    // Validate input
    if (!Array.isArray(arr)) {
        return false;
    }
    
    // includes() checks if array contains the element
    // Uses strict equality (===) for comparison
    return arr.includes(element);
}

// Test cases for Q6
let testArray = [1, 2, 3, 4, 5, "hello", true, null];
console.log("\n\nQ6 - Solution 1:");
console.log("Array:", testArray);
console.log("Does 3 exist?", elementExists1(testArray, 3));           // Output: true
console.log("Does 10 exist?", elementExists1(testArray, 10));        // Output: false
console.log("Does 'hello' exist?", elementExists1(testArray, "hello")); // Output: true
console.log("Does true exist?", elementExists1(testArray, true));     // Output: true
console.log("Does null exist?", elementExists1(testArray, null));     // Output: true

/**
 * Solution 2: Using indexOf() method
 * indexOf() returns index if found, -1 if not found
 */
function elementExists2(arr, element) {
    if (!Array.isArray(arr)) {
        return false;
    }
    
    // indexOf() returns -1 if element not found, otherwise returns index (>= 0)
    return arr.indexOf(element) !== -1;
}

console.log("\nQ6 - Solution 2:");
console.log("Does 3 exist?", elementExists2(testArray, 3));           // Output: true
console.log("Does 10 exist?", elementExists2(testArray, 10));         // Output: false

/**
 * Solution 3: Using find() method
 * find() returns the element if found, undefined otherwise
 */
function elementExists3(arr, element) {
    if (!Array.isArray(arr)) {
        return false;
    }
    
    // find() returns element if found, undefined if not found
    return arr.find(item => item === element) !== undefined;
}

console.log("\nQ6 - Solution 3:");
console.log("Does 3 exist?", elementExists3(testArray, 3));           // Output: true
console.log("Does 10 exist?", elementExists3(testArray, 10));         // Output: false

/**
 * Solution 4: Using some() method
 * some() returns true if at least one element passes the test
 */
function elementExists4(arr, element) {
    if (!Array.isArray(arr)) {
        return false;
    }
    
    // some() returns true if any element equals the search element
    return arr.some(item => item === element);
}

console.log("\nQ6 - Solution 4:");
console.log("Does 3 exist?", elementExists4(testArray, 3));           // Output: true
console.log("Does 10 exist?", elementExists4(testArray, 10));         // Output: false

/**
 * Solution 5: Using for loop (Manual implementation)
 * Iterate through array and check each element
 */
function elementExists5(arr, element) {
    if (!Array.isArray(arr)) {
        return false;
    }
    
    // Loop through each element
    for (let i = 0; i < arr.length; i++) {
        // Use strict equality (===) for comparison
        if (arr[i] === element) {
            return true;  // Found it!
        }
    }
    
    return false;  // Not found
}

console.log("\nQ6 - Solution 5:");
console.log("Does 3 exist?", elementExists5(testArray, 3));           // Output: true
console.log("Does 10 exist?", elementExists5(testArray, 10));          // Output: false

/**
 * Solution 6: Using for...of loop
 * More modern syntax for iteration
 */
function elementExists6(arr, element) {
    if (!Array.isArray(arr)) {
        return false;
    }
    
    // Iterate through each element
    for (let item of arr) {
        if (item === element) {
            return true;
        }
    }
    
    return false;
}

console.log("\nQ6 - Solution 6:");
console.log("Does 3 exist?", elementExists6(testArray, 3));           // Output: true
console.log("Does 10 exist?", elementExists6(testArray, 10));          // Output: false

// ============================================
// ADDITIONAL NOTES AND BEST PRACTICES
// ============================================

/*
 * IMPORTANT NOTES:
 * 
 * 1. Q1 & Q2 (Array slicing):
 *    - slice() doesn't modify original array (non-mutating)
 *    - Always validate n to be positive
 *    - Handle cases where n > array.length
 * 
 * 2. Q3 (Blank string check):
 *    - Consider null, undefined, and empty string cases
 *    - Whitespace includes: spaces, tabs, newlines, etc.
 *    - trim() is the simplest and most reliable method
 * 
 * 3. Q4 (Lowercase check):
 *    - Only letters can be lowercase (not numbers or special chars)
 *    - Validate index bounds before accessing
 *    - Consider edge cases (null, undefined, out of bounds)
 * 
 * 4. Q5 (Strip spaces):
 *    - trim() is the built-in method (recommended)
 *    - Works with all types of whitespace characters
 *    - Returns empty string if input is only whitespace
 * 
 * 5. Q6 (Element existence):
 *    - includes() is the modern, recommended method
 *    - Uses strict equality (===) for comparison
 *    - Works with all data types including objects (by reference)
 *    - For object comparison, you may need custom logic
 */

// ============================================
// END OF ASSIGNMENT 3
// ============================================

