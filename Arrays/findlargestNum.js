/* Question: Write a function that takes an array of numbers as input and 
 returns the largest number in the array. */

function findLargestNum(arr) {
  if (!arr || arr.length === 0) {
    return null; // Return null for empty array or invalid input
  }

  let largestNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

// Test cases
console.log(findLargestNum([1, 2, 3, 4, 5])); // Expected output: 5
console.log(findLargestNum([-1, -2, -3, -4, -5])); // Expected output: -1
console.log(findLargestNum([0])); // Expected output: 0
console.log(findLargestNum([])); // Expected output: null
console.log(findLargestNum(null)); // Expected output: null
