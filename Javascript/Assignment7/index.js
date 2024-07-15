// //1. *Reverse a String*: Write a function to reverse a given string.
// function reverseString(str) {
//   let reversedString = str.split("").reverse("").join("");
//   return reversedString;
// }
// console.log(reverseString("Harsha1801"));

// //2. *Palindrome Check*: Check if a given string is a palindrome.

// //3.*Flatten an Array*: Flatten a nested array into a single array.

// //const arrayFlattened = [1, 2, [[3, 4], 5], 6, [7], 8];
// //console.log(arrayFlattened.flat(2));

// const nestedArr = [10, 2, 3, [40, 50, [100]], 23];
// const simpleArr = [];

// for (let i = 0; i < nestedArr.length; i++) {
//   if (Array.isArray(nestedArr[i])) {
//     const secondArr = nestedArr[i];
//     console.log(secondArr);
//     for (let j = 0; j < secondArr.length; j++) {
//       if (Array.isArray(secondArr[i])) {
//         const thirdArr = secondArr[i];

//         for (let k = 0; k < thirdArr.length; j++) {
//           simpleArr.push(thirdArr[k]);
//           console.log(simpleArr);
//         }
//       } else {
//         simpleArr.push(secondArr[j]);
//       }
//     }
//   } else {
//     simpleArr.push(nestedArr[i]);
//   }
// }
// console.log(simpleArr());

// //4. *Find the Largest Number in an Array*: Write a function to find the largest number in an array.
// const numbers = [20, 3, 45, 6, 78, 23, 89, 12];
// function findLargesNnumber(arr) {
//   const largest = arr[];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > numbers) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// console.log("The largest number is:", findLargesNnumber(numbers));

// 5. *Remove Duplicates from an Array*: Remove duplicate values from an array.

// let arr = ["scale", "happy", "strength", "peace", "happy", "happy"];

// function removeDuplicates(arr) {
//   let uniqueValue = [];
//   for (i = 0; i < arr.length; i++) {
//     if (uniqueValue.indexOf(arr[i]) === -1) {
//       uniqueValue.push(arr[i]);
//     }
//   }
//   return uniqueValue;
// }

// console.log(removeDuplicates(arr));

// *FizzBuzz*: Print numbers from 1 to 100 with specific rules for multiples of 3 and 5.

// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// 7. *Anagram Check*: Check if two strings are anagrams of each other.
// def are_anagrams(str1, str2):
//     str1 = str1.replace(" ", "").lower()
//     str2 = str2.replace(" ", "").lower()

// const str1b = "hello";
// const str2b = "world";
// console.log(areAnagrams(str1b, str2b));

// 8. *Find the Missing Number*: Find the missing number in a given array of integers from 1 to n.

// let numbers = [1, 2, 4, 5, 6, 7, 8, 9];
// let n = 9;
// let totalSum = (n * (n + 1)) / 2;
// let sum = 0;
// for (num of numbers) {
//   sum += num;
// }

// console.log(totalSum - sum);

// 9. *Sum of Array*: Calculate the sum of all numbers in an array.
// let arr = [1, 2, 3, 4, 5];
// function sumOfArray(arr) {
//   let total = 0;
//   for (i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// console.log(sumOfArray(arr));

// 10. *Deep Clone an Object*: Write a function to deep clone an object.

// 11. *Capitalize the First Letter of Each Word*: Write a function to capitalize the first letter of each word in a string.

// let fruitsName = ["Apple", "Banana", "Cherry"];
// const firstUppercaseLetter = fruitsName.map(function (fruit) {
//   return fruit.charAt(0).toUpperCase() + fruit.slice(1);
// });
// console.log(firstUppercaseLetter);

// 12. *Count Vowels in a String*: Write a function to count the number of vowels in a given string.
// let string = "Hii very good morning have A nice day";

// function countVowels(str) {
//   let vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels(string));

// 13. *Longest Word in a String*: Find the longest word in a given string.
// const sentence = "i am learning fullstack ";
// function findLongestWord(str) {
//   const words = str.split(" ");
//   let longestWord = "";

//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }
// const longestWord = findLongestWord(sentence);
// console.log(longestWord);

// 14. *Binary Search*: Implement binary search on a sorted array.

// 15. *Merge Two Sorted Arrays*: Write a function to merge two sorted arrays into a single sorted array.

// function mergeSortedArrays(arr1, arr2) {
//   let mergedArray = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
//   }

//   return mergedArray;
// }

// const arrry1 = [1, 3, 5, 7];
// const arrry2 = [2, 4, 6, 8];
// const merged = mergeSortedArrays(array1, array2);

// console.log(merged);

// 16. *Rotate an Array*: Rotate an array by k positions.

// function rotateArray(arr, k) {
//   if (arr.length === 0) {
//     return arr;
//   }

//   const n = arr.length;
//   k = k % n;

//   const rotatedArray = [...arr.slice(n - k), ...arr.slice(0, n - k)];
//   return rotatedArray;
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const k = 8;
// const rotated = rotateArray(array, k);
// console.log(rotated);

// 17. *Find the Intersection of Two Arrays*: Find the intersection of two arrays.

// function intersection(arr1, arr2) {
//   const intersectionArray = [];
//   for (let i = 0; i < arr1.length; i++) {
//     const current = arr1[i];
//     if (arr2.includes(current) && !intersectionArray.includes(current)) {
//       intersectionArray.push(current);
//     }
//   }

//   return intersectionArray;
// }
// const array1 = [1, 2, 2, 3, 4, 2, 1, 3];
// const array2 = [2, 2, 2, 3, 3, 4];
// const result = intersection(array1, array2);
// console.log(result);

// 18. *Sum of Digits*: Write a function to find the sum of digits of a number.

// function sumOfDigits(num) {
//   let sum = 0;
//   const numStr = num.toString();
//   for (let i = 0; i < numStr.length; i++) {
//     sum += parseInt(numStr[i]);
//   }

//   return sum;
// }

// const number = 123456789;
// // const result = sumOfDigits(number);

// // console.log(result);
// console.log(sumOfDigits(number));

// 19. *Fibonacci Sequence*: Generate the first n numbers of the Fibonacci sequence.

// const number = parseInt(prompt("Enter the number of terms: "));
// let n1 = 0,
//   n2 = 1,
//   nextTerm;

// console.log("Fibonacci Series:");

// for (let i = 1; i <= number; i++) {
//   console.log(n1);
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }

// 20. *Factorial of a Number*: Write a function to find the factorial of a number.

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }

//   return result;
// }

// // const number = 5;
// const result = factorial(5);

// console.log(result);

// 21. *Check for Prime Number*: Write a function to check if a number is prime.

// const isPrime = function (n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isPrime(23));

// /22. *Find the Second Largest Number in an Array*: Write a function to find the second largest number in an array.

// const a1 = [3, 1, 4, 5, 2];
// function findSecondLargest(arr) {
//   let firstLargest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstLargest) {
//       secondLargest = firstLargest;
//       firstLargest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
//       secondLargest = arr[i];
//     }
//   }

//   return secondLargest;
// }

// console.log(findSecondLargest(a1));

// const a2 = [9, 7, 5, 3, 1];
// console.log(findSecondLargest(a2));

// 23. *Remove a Specific Element from an Array*: Write a function to remove a specific element from an array.

// let arr = [1, 2, 3, 4, 5];
// function removeElementFromArray(arr, elementToRemove) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== elementToRemove) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// let elementToRemove = 3;
// arr = removeElementFromArray(arr, elementToRemove);
// console.log(arr);

// 24. *Count Occurrences of a Character in a String*: Write a function to count the occurrences of a specific character in a string.

// const str = "hello world";
// const char = "l";
// function countOccurrences(str, char) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }

// // console.log(countOccurrences("Harshakumar", "r"));
// console.log(countOccurrences(str, char));

//25. *Check if a Number is Even or Odd*: Write a function to check if a number is even or odd.

// function isEvenOrOdd(num) {
//   if (num % 2 === 0) {
//     return "Even Number";
//   } else {
//     return "Odd Number";
//   }
// }

// console.log(isEvenOrOdd(4));

// 26. *Implement a Stack*: Implement a stack data structure with push, pop, and peek methods.

// 28. *Find the Median of an Array*: Write a function to find the median of an array.

// function findMedian(arr) {
//    const n = arr.length;
//   const mid = Math.floor(n / 2);

//   if (n % 2 === 0) {
//     return (arr[mid - 1] + arr[mid]) / 2;
//   } else {
//     return arr[mid];
//   }
// }

// const array = [3, 1, 5, 4, 2];
// const median = findMedian(array);
// console.log(median);

// 29. *Check for Balanced Parentheses*: Write a function to check if a string has balanced parentheses.

// 30. *Generate Random Numbers*: Write a function to generate a random number within a specified range.

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // const min = 1;
// // const max = 100;
// // const randomNumber = getRandomNumber(min, max);

// console.log(getRandomNumber(1, 20));

// 31. *Group Anagrams*: Write a function to group an array of strings into anagrams.

// function majorityElement(num) {
//   for (let i = 0; i < num.length; i++) {
//     let count = 1;
//     for (let j = i + 1; j < num.length; j++) {
//       if (num[i] === num[j]) {
//         count++;
//       }
//     }
//     if (count > num.length / 2) {
//       return num[i];
//     }
//   }
// }

// const num = [2, 2, 1, 1, 1, 2, 2];

// console.log(majorityElement(num));

// 34. *Implement Merge Sort*: Implement the merge sort algorithm.
// 35. *Implement Quick Sort*: Implement the quick sort algorithm.

// 36. *Find All Permutations of a String*: Write a function to find all permutations of a given string. ///////code dont no out it will work ?

// function findPermutations(str) {
//   const results = [];
//   function permute(arr, m = []) {
//     if (arr.length === 0) {
//       results.push(m.join(""));
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         let current = arr.slice();
//         let next = current.splice(i, 1);
//         permute(current, m.concat(next));
//       }
//     }
//   }

//   permute(str.split(""));
//   return results;
// }
// const input = "Harsha";
// const permutations = findPermutations(input);

// console.log(permutations);

// const input1 = "Druthu";
// const permutations1 = findPermutations(input1);

// console.log(permutations1);

// 37. *Convert Number to Roman Numerals*: Write a function to convert a number to its Roman numeral representation.

// function intToRoman(num) {
//   const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   const symbols = [
//     "M",
//     "CM",
//     "D",
//     "CD",
//     "C",
//     "XC",
//     "L",
//     "XL",
//     "X",
//     "IX",
//     "V",
//     "IV",
//     "I",
//   ];

//   let result = "";

//   for (let i = 0; i < values.length; i++) {
//     while (num >= values[i]) {
//       result += symbols[i];
//       num -= values[i];
//     }
//   }

//   return result;
// }

// // Example usage:
// console.log(intToRoman(3)); // Output: "III"
// console.log(intToRoman(58)); // Output: "LVIII"
// console.log(intToRoman(1994)); // Output: "MCMXCIV"

// 38. *Check if Two Strings are Rotations of Each Other*: Write a function to check if two strings are rotations of each other.

// function rotation(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const twostr = str1 + str1;
//   return twostr.includes(str2);
// }
// console.log(rotation("abcd", "acbd"));

// 39. *Find the First Non-Repeating Character*: Write a function to find the first non-repeating character in a string.

// function firstNonRepeatingChar(str) {
//   const charCount = {};

//   // First pass: count occurrences of each character
//   for (let char of str) {
//       charCount[char] = (charCount[char] || 0) + 1;
//   }

//   // Second pass: find the first character with a count of 1
//   for (let char of str) {
//       if (charCount[char] === 1) {
//           return char;
//       }
//   }

//   return null; // Return null if no non-repeating character is found
// }

// // Example usage:
// console.log(firstNonRepeatingChar("swiss")); // Output: "w"
// console.log(firstNonRepeatingChar("racecar")); // Output: "e"
// console.log(firstNonRepeatingChar("aabbcc")); // Output: null

function firstNonRepeatingChar(str) {
  const charCount = {};

  // First pass: count occurrences of each character using a loop
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Second pass: find the first character with a count of 1 using a loop
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }

//   return null; // Return null if no non-repeating character is found
// }

// Example usage:
console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("racecar")); // Output: "e"
console.log(firstNonRepeatingChar("aabbcc")); // Output: null
