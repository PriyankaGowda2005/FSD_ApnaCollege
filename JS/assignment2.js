// ============================================
// JS (Part 4) Practice Questions - Assignment 2
// ============================================

// ============================================
// Q1: Write a JS program to delete all occurrences of element 'num' in a given array.
// Example: if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]
// ============================================

/**
 * Solution 1: Using filter() method (Recommended - Non-mutating)
 * filter() creates a new array with elements that pass the test
 * This solution doesn't modify the original array
 */
function deleteAllOccurrences1(arr, num) {
    // Validate input
    if (!Array.isArray(arr)) {
        return [];
    }
    
    // filter() keeps only elements that are NOT equal to num
    // This effectively removes all occurrences of num
    return arr.filter(element => element !== num);
}

// Test cases for Q1
let arr1 = [1, 2, 3, 4, 5, 6, 2, 3];
console.log("Q1 - Solution 1:");
console.log("Original array:", arr1);
console.log("After deleting 2:", deleteAllOccurrences1(arr1, 2));  // Output: [1, 3, 4, 5, 6, 3]
console.log("Original array unchanged:", arr1);  // Original array is not modified

let arr1b = [1, 2, 2, 2, 3, 2, 4];
console.log("After deleting 2:", deleteAllOccurrences1(arr1b, 2));  // Output: [1, 3, 4]

/**
 * Solution 2: Using for loop (Mutating original array)
 * Iterate backwards to avoid index shifting issues
 */
function deleteAllOccurrences2(arr, num) {
    if (!Array.isArray(arr)) {
        return;
    }
    
    // Iterate backwards to avoid index shifting when removing elements
    // If we iterate forwards, removing an element shifts all subsequent indices
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === num) {
            // splice(i, 1) removes 1 element at index i
            arr.splice(i, 1);
        }
    }
    
    // This function modifies the original array
    return arr;
}

let arr2 = [1, 2, 3, 4, 5, 6, 2, 3];
console.log("\nQ1 - Solution 2:");
console.log("Original array:", arr2);
console.log("After deleting 2:", deleteAllOccurrences2(arr2, 2));  // Output: [1, 3, 4, 5, 6, 3]
console.log("Original array modified:", arr2);  // Original array is modified

/**
 * Solution 3: Using while loop with indexOf (Mutating)
 * Keep finding and removing until no more occurrences
 */
function deleteAllOccurrences3(arr, num) {
    if (!Array.isArray(arr)) {
        return;
    }
    
    // indexOf() finds the first occurrence
    // Keep removing until indexOf returns -1 (not found)
    let index;
    while ((index = arr.indexOf(num)) !== -1) {
        arr.splice(index, 1);  // Remove element at found index
    }
    
    return arr;
}

let arr3 = [1, 2, 3, 4, 5, 6, 2, 3];
console.log("\nQ1 - Solution 3:");
console.log("After deleting 2:", deleteAllOccurrences3(arr3, 2));  // Output: [1, 3, 4, 5, 6, 3]

/**
 * Solution 4: Using reduce() method (Non-mutating)
 * Build new array excluding the target element
 */
function deleteAllOccurrences4(arr, num) {
    if (!Array.isArray(arr)) {
        return [];
    }
    
    // reduce() builds a new array, only including elements that are not equal to num
    return arr.reduce((result, element) => {
        if (element !== num) {
            result.push(element);
        }
        return result;
    }, []);
}

let arr4 = [1, 2, 3, 4, 5, 6, 2, 3];
console.log("\nQ1 - Solution 4:");
console.log("After deleting 2:", deleteAllOccurrences4(arr4, 2));  // Output: [1, 3, 4, 5, 6, 3]

// ============================================
// Q2: Write a JS program to find the number of digits in a number.
// Example: if number = 287152, count = 6
// ============================================

/**
 * Solution 1: Convert to string and get length (Simplest)
 * Convert number to string and count characters
 */
function countDigits1(number) {
    // Handle edge cases
    if (number === 0) {
        return 1;  // 0 has 1 digit
    }
    
    // Handle negative numbers (remove negative sign)
    if (number < 0) {
        number = Math.abs(number);
    }
    
    // Convert to string and get length
    // Each character in the string represents one digit
    return String(number).length;
}

// Test cases for Q2
console.log("\n\nQ2 - Solution 1:");
console.log("Number of digits in 287152:", countDigits1(287152));  // Output: 6
console.log("Number of digits in 0:", countDigits1(0));            // Output: 1
console.log("Number of digits in 123:", countDigits1(123));        // Output: 3
console.log("Number of digits in -456:", countDigits1(-456));      // Output: 3
console.log("Number of digits in 999999:", countDigits1(999999));  // Output: 6

/**
 * Solution 2: Using logarithm (Mathematical approach)
 * log10(n) + 1 gives the number of digits
 * Math.floor() rounds down to nearest integer
 */
function countDigits2(number) {
    if (number === 0) {
        return 1;
    }
    
    // Handle negative numbers
    number = Math.abs(number);
    
    // log10(number) gives the power of 10
    // For example: log10(100) = 2, log10(1000) = 3
    // Adding 1 gives the number of digits
    // Math.floor() ensures we get an integer
    return Math.floor(Math.log10(number)) + 1;
}

console.log("\nQ2 - Solution 2:");
console.log("Number of digits in 287152:", countDigits2(287152));  // Output: 6
console.log("Number of digits in 123:", countDigits2(123));        // Output: 3

/**
 * Solution 3: Using while loop (Division method)
 * Keep dividing by 10 until number becomes 0
 */
function countDigits3(number) {
    if (number === 0) {
        return 1;
    }
    
    // Handle negative numbers
    number = Math.abs(number);
    
    let count = 0;
    
    // Keep dividing by 10 and counting
    // Each division removes one digit
    while (number > 0) {
        number = Math.floor(number / 10);  // Remove last digit
        count++;  // Increment digit count
    }
    
    return count;
}

console.log("\nQ2 - Solution 3:");
console.log("Number of digits in 287152:", countDigits3(287152));  // Output: 6
console.log("Number of digits in 123:", countDigits3(123));         // Output: 3

/**
 * Solution 4: Using recursion
 * Recursively divide by 10 and count
 */
function countDigits4(number) {
    if (number === 0) {
        return 1;
    }
    
    number = Math.abs(number);
    
    // Base case: if number is less than 10, it has 1 digit
    if (number < 10) {
        return 1;
    }
    
    // Recursive case: divide by 10 and add 1
    return 1 + countDigits4(Math.floor(number / 10));
}

console.log("\nQ2 - Solution 4:");
console.log("Number of digits in 287152:", countDigits4(287152));  // Output: 6

// ============================================
// Q3: Write a JS program to find the sum of digits in a number.
// Example: if number = 287152, sum = 25
// ============================================

/**
 * Solution 1: Convert to string and iterate (Simple approach)
 * Convert number to string, iterate through each character, convert back to number and sum
 */
function sumOfDigits1(number) {
    // Handle negative numbers
    number = Math.abs(number);
    
    // Convert to string
    let numStr = String(number);
    let sum = 0;
    
    // Iterate through each character (digit)
    for (let i = 0; i < numStr.length; i++) {
        // Convert character back to number and add to sum
        sum += parseInt(numStr[i], 10);
    }
    
    return sum;
}

// Test cases for Q3
console.log("\n\nQ3 - Solution 1:");
console.log("Sum of digits in 287152:", sumOfDigits1(287152));  // Output: 2+8+7+1+5+2 = 25
console.log("Sum of digits in 123:", sumOfDigits1(123));      // Output: 1+2+3 = 6
console.log("Sum of digits in 999:", sumOfDigits1(999));      // Output: 9+9+9 = 27
console.log("Sum of digits in 0:", sumOfDigits1(0));           // Output: 0

/**
 * Solution 2: Using modulo and division (Mathematical approach)
 * Extract digits using modulo 10 and division
 */
function sumOfDigits2(number) {
    number = Math.abs(number);
    
    let sum = 0;
    
    // Keep extracting last digit and adding to sum
    while (number > 0) {
        // number % 10 gives the last digit
        // For example: 287152 % 10 = 2
        sum += number % 10;
        
        // Remove last digit by dividing by 10 and flooring
        // For example: Math.floor(287152 / 10) = 28715
        number = Math.floor(number / 10);
    }
    
    return sum;
}

console.log("\nQ3 - Solution 2:");
console.log("Sum of digits in 287152:", sumOfDigits2(287152));  // Output: 25
console.log("Sum of digits in 123:", sumOfDigits2(123));        // Output: 6

/**
 * Solution 3: Using reduce() with string conversion
 * Convert to string, split into array, reduce to sum
 */
function sumOfDigits3(number) {
    number = Math.abs(number);
    
    // Convert to string, split into array of characters
    // Then reduce to sum all digits
    return String(number)
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

console.log("\nQ3 - Solution 3:");
console.log("Sum of digits in 287152:", sumOfDigits3(287152));  // Output: 25

/**
 * Solution 4: Using recursion
 * Recursively extract last digit and sum
 */
function sumOfDigits4(number) {
    number = Math.abs(number);
    
    // Base case: if number is 0, sum is 0
    if (number === 0) {
        return 0;
    }
    
    // Recursive case: last digit + sum of remaining digits
    return (number % 10) + sumOfDigits4(Math.floor(number / 10));
}

console.log("\nQ3 - Solution 4:");
console.log("Sum of digits in 287152:", sumOfDigits4(287152));  // Output: 25

// ============================================
// Q4: Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers 
//  less than or equal to a given positive integer and denoted by that integer.]
// Example: 
//   7! (factorial of 7) = 1 x 2 x 3 x 4 x 5 x 6 x 7 = 5040
//   5! (factorial of 5) = 1 x 2 x 3 x 4 x 5 = 120
//   3! (factorial of 3) = 1 x 2 x 3 = 6
//   0! is always 1
// ============================================

/**
 * Solution 1: Using for loop (Iterative approach)
 * Multiply numbers from 1 to n
 */
function factorial1(n) {
    // Handle edge cases
    if (n < 0) {
        return undefined;  // Factorial is not defined for negative numbers
    }
    
    if (n === 0 || n === 1) {
        return 1;  // 0! = 1 and 1! = 1
    }
    
    let result = 1;
    
    // Multiply all numbers from 1 to n
    for (let i = 2; i <= n; i++) {
        result *= i;  // result = result * i
    }
    
    return result;
}

// Test cases for Q4
console.log("\n\nQ4 - Solution 1:");
console.log("Factorial of 7:", factorial1(7));   // Output: 5040
console.log("Factorial of 5:", factorial1(5));   // Output: 120
console.log("Factorial of 3:", factorial1(3));   // Output: 6
console.log("Factorial of 0:", factorial1(0));   // Output: 1
console.log("Factorial of 1:", factorial1(1));   // Output: 1
console.log("Factorial of 10:", factorial1(10)); // Output: 3628800

/**
 * Solution 2: Using recursion (Classic approach)
 * n! = n * (n-1)!
 */
function factorial2(n) {
    // Base cases
    if (n < 0) {
        return undefined;
    }
    
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Recursive case: n! = n * (n-1)!
    return n * factorial2(n - 1);
}

console.log("\nQ4 - Solution 2:");
console.log("Factorial of 7:", factorial2(7));   // Output: 5040
console.log("Factorial of 5:", factorial2(5));   // Output: 120
console.log("Factorial of 3:", factorial2(3));   // Output: 6

/**
 * Solution 3: Using while loop
 * Similar to for loop but using while
 */
function factorial3(n) {
    if (n < 0) {
        return undefined;
    }
    
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let result = 1;
    let i = 2;
    
    while (i <= n) {
        result *= i;
        i++;
    }
    
    return result;
}

console.log("\nQ4 - Solution 3:");
console.log("Factorial of 7:", factorial3(7));   // Output: 5040

/**
 * Solution 4: Using reduce() with array
 * Create array from 1 to n, then reduce to multiply
 */
function factorial4(n) {
    if (n < 0) {
        return undefined;
    }
    
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Create array [1, 2, 3, ..., n]
    // Array.from({length: n}, (_, i) => i + 1) creates [1, 2, 3, ..., n]
    // Then reduce to multiply all elements
    return Array.from({length: n}, (_, i) => i + 1)
        .reduce((product, num) => product * num, 1);
}

console.log("\nQ4 - Solution 4:");
console.log("Factorial of 7:", factorial4(7));   // Output: 5040

/**
 * Solution 5: Tail recursion (Optimized recursion)
 * More efficient for large numbers (if JavaScript engine supports tail call optimization)
 */
function factorial5(n, accumulator = 1) {
    if (n < 0) {
        return undefined;
    }
    
    if (n === 0 || n === 1) {
        return accumulator;
    }
    
    // Tail recursive: accumulator holds the result so far
    return factorial5(n - 1, n * accumulator);
}

console.log("\nQ4 - Solution 5:");
console.log("Factorial of 7:", factorial5(7));   // Output: 5040

// ============================================
// Q5: Find the largest number in an array with only positive numbers.
// ============================================

/**
 * Solution 1: Using Math.max() with spread operator (Simplest - Recommended)
 * Math.max() finds the maximum value
 * Spread operator (...) expands array into individual arguments
 */
function findLargest1(arr) {
    // Validate input
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;  // Return undefined for empty array
    }
    
    // Math.max() returns the largest number
    // Spread operator converts array to individual arguments
    // Example: Math.max(...[1, 5, 3]) becomes Math.max(1, 5, 3)
    return Math.max(...arr);
}

// Test cases for Q5
let arr5a = [5, 2, 8, 1, 9, 3];
console.log("\n\nQ5 - Solution 1:");
console.log("Array:", arr5a);
console.log("Largest number:", findLargest1(arr5a));  // Output: 9

let arr5b = [10, 25, 7, 42, 15];
console.log("Array:", arr5b);
console.log("Largest number:", findLargest1(arr5b));  // Output: 42

let arr5c = [100];
console.log("Array:", arr5c);
console.log("Largest number:", findLargest1(arr5c));  // Output: 100

/**
 * Solution 2: Using for loop (Manual approach)
 * Iterate through array and keep track of maximum
 */
function findLargest2(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }
    
    // Initialize max with first element
    let max = arr[0];
    
    // Compare with each element
    for (let i = 1; i < arr.length; i++) {
        // If current element is greater than max, update max
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

console.log("\nQ5 - Solution 2:");
console.log("Largest number:", findLargest2(arr5a));  // Output: 9

/**
 * Solution 3: Using reduce() method (Functional approach)
 * Reduce array to single maximum value
 */
function findLargest3(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }
    
    // reduce() compares each element with accumulator
    // Keep the larger value between accumulator and current element
    return arr.reduce((max, current) => {
        return current > max ? current : max;
    }, arr[0]);  // Start with first element
}

console.log("\nQ5 - Solution 3:");
console.log("Largest number:", findLargest3(arr5a));  // Output: 9

/**
 * Solution 4: Using sort() method
 * Sort array in descending order and return first element
 * Note: This modifies the original array
 */
function findLargest4(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }
    
    // Sort in descending order (b - a)
    // Then return first element (largest)
    // Note: This modifies the original array
    arr.sort((a, b) => b - a);
    return arr[0];
}

let arr5d = [5, 2, 8, 1, 9, 3];
console.log("\nQ5 - Solution 4:");
console.log("Largest number:", findLargest4(arr5d));  // Output: 9
console.log("Array after sort:", arr5d);  // Array is now sorted

/**
 * Solution 5: Using for...of loop (Modern syntax)
 * Similar to for loop but with cleaner syntax
 */
function findLargest5(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }
    
    let max = arr[0];
    
    // Iterate through each element
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    
    return max;
}

let arr5e = [5, 2, 8, 1, 9, 3];
console.log("\nQ5 - Solution 5:");
console.log("Largest number:", findLargest5(arr5e));  // Output: 9

/**
 * Solution 6: Using Math.max.apply() (Older approach)
 * Alternative to spread operator (for older JavaScript versions)
 */
function findLargest6(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }
    
    // Math.max.apply(null, arr) is equivalent to Math.max(...arr)
    // null is used as 'this' context (not needed for Math.max)
    return Math.max.apply(null, arr);
}

console.log("\nQ5 - Solution 6:");
console.log("Largest number:", findLargest6(arr5a));  // Output: 9

// ============================================
// ADDITIONAL NOTES AND BEST PRACTICES
// ============================================

/*
 * IMPORTANT NOTES:
 * 
 * 1. Q1 (Delete all occurrences):
 *    - filter() is recommended as it doesn't mutate original array
 *    - If you need to modify original array, use splice() with backwards iteration
 *    - Consider edge cases: empty array, element not found, multiple occurrences
 * 
 * 2. Q2 (Count digits):
 *    - String conversion is simplest and most readable
 *    - Logarithm method is more efficient for very large numbers
 *    - Handle edge cases: 0, negative numbers
 * 
 * 3. Q3 (Sum of digits):
 *    - Modulo and division method is most efficient
 *    - String conversion is easiest to understand
 *    - Handle negative numbers (use Math.abs())
 * 
 * 4. Q4 (Factorial):
 *    - Iterative approach (for loop) is most efficient
 *    - Recursive approach is more elegant but can cause stack overflow for large numbers
 *    - Remember: 0! = 1 and factorial is undefined for negative numbers
 *    - For very large numbers, consider using BigInt to avoid precision issues
 * 
 * 5. Q5 (Find largest):
 *    - Math.max() with spread operator is simplest and most readable
 *    - For loop is most efficient for very large arrays
 *    - Always handle empty array case
 *    - Question specifies "only positive numbers" but code should still work with any numbers
 */

// ============================================
// BONUS: Additional utility functions
// ============================================

/**
 * Delete all occurrences (mutating version that returns modified array)
 */
function deleteAllOccurrencesMutating(arr, num) {
    if (!Array.isArray(arr)) {
        return [];
    }
    
    // Create a copy to avoid modifying original
    let result = [...arr];
    
    for (let i = result.length - 1; i >= 0; i--) {
        if (result[i] === num) {
            result.splice(i, 1);
        }
    }
    
    return result;
}

/**
 * Count digits with validation
 */
function countDigitsSafe(number) {
    // Validate input
    if (typeof number !== 'number' || isNaN(number)) {
        return 0;
    }
    
    if (number === 0) {
        return 1;
    }
    
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

/**
 * Factorial with BigInt support for very large numbers
 */
function factorialBigInt(n) {
    if (n < 0) {
        return undefined;
    }
    
    if (n === 0 || n === 1) {
        return 1n;  // BigInt literal
    }
    
    let result = 1n;  // Start with BigInt
    
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    
    return result;
}

// Example: 100! is too large for regular number
// console.log(factorialBigInt(100));  // Works with BigInt

// ============================================
// END OF ASSIGNMENT 2
// ============================================

