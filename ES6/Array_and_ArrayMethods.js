//////////////////////Array and Array-Methods//////////////////////

//////////////////////// Array Declaration

// Normal Array
const arr = [1, 2, 3, 4, 5]; // Declare normally
const arr2 = new Array(1, 2, 3, 4, 5); // Declare using new keyword and Array constructor
console.log("Normal Array: ",arr);

// Multi-dimensional Array
const multiDimArr = [[1, 2], [3, 4], [5, 6]];
console.log("Multi-dimensional Array: ",multiDimArr);

const bangladesh = ['Dhaka', 'Chittagong', 'Sylhet'];
const pakistan = ['Karachi', 'Lahore', 'Islamabad'];
const countries = [bangladesh, pakistan];
console.log("Multi-dimensional Array: ",countries);
console.log("Accessing single element of multi-dimensional array: ",countries[1][2]); // Islamabad


//////////////////////// Array Methods
// arr = [1, 2, 3, 4, 5];

// Array.filter() - Creates a new array with elements that pass a condition (callback function). Do not change the original array.
const filteredArr = arr.filter((element) => element %2 == 0); // Filter even numbers
console.log("Array.filter() - Filter even numbers: ",filteredArr); // [2, 4]

// Array.slice() - Returns a shallow copy of a portion of an array into a new array object. Do not change the original array.
const slicedArr = arr.slice(1, 4); // Slice from index 1 to before 4
console.log("Array.slice() - Slice from index 1 to before 4: ",slicedArr); // [2, 3, 4]

// Array.find() - Returns the first element in the array that satisfies a condition. Returns undefined if no match is found. Do not change the original array.
const foundElement = arr.find((element) => element > 3); // Find element > 3
console.log("Array.find() - Find element > 3: ",foundElement); // 4

// Array.findIndex() - Returns the index of the first element in the array that satisfies a condition. Returns -1 if no match is found. Do not change the original array.
const foundIndex = arr.findIndex((element) => element == 3); // Find index of element 3
console.log("Array.findIndex() - Find index of element 3: ",foundIndex); // 2

//Array.concat() - Concatenates two or more arrays and returns a new array. Do not change the original array.
const arr3 = [6, 7, 8, 9, 10];
const concatenatedArr = arr.concat(arr3); // Concatenate arr and arr3
console.log("Array.concat() - Concatenate arr and arr3: ",concatenatedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Array.splice() - Adds or removes elements from an array. array.splice(startIndex, deleteCount, ...itemsToAdd); Changes the original array.
arr.splice(2, 0, 6); // Add 6 at index 2
console.log("Array.splice() - Add 6 at index 2: ",arr); // [1, 2, 6, 3, 4, 5]
arr.splice(2, 1); // Remove 6 from index 2
console.log("Array.splice() - Remove 6 from index 2: ",arr); // [1, 2, 3, 4, 5]

// Array.push() - Adds one or more elements to the end of an array and returns the new length of the array. Changes the original array.
arr.push(6); // Add 6 at the end
console.log("Array.push() - Add 6 at the end: ",arr); // [1, 2, 3, 4, 5, 6]

// Array.join() - Joins all elements of an array into a string, separated by a specified delimiter. Do not change the original array.
const joinedArr = arr.join('-'); // Join with '-'
console.log("Array.join() - Join with '-': ",joinedArr); // 1-2-3-4-5-6

// Array.map() - Creates a new array with the results of calling a provided function on every element in the array. Do not change the original array.
const mappedArr = arr.map((element) => element * 2); // Multiply each element by 2. 
console.log("Array.map() - Multiply each element by 2: ",mappedArr); // [2, 4, 6, 8, 10, 12]

// Array.reduce() - Reduces the array to a single value by applying a callback function. Do not change the original array.
const reducedArr = arr.reduce((accumulator, element) => accumulator + element); // Sum of all elements
console.log("Array.reduce() - Sum of all elements: ",reducedArr); // 28
/*
How reduce method works:

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num);
console.log(sum); // 10

Iteration	total-(Accumulator)	num-(Current Element)	Expression-(total + num)	Updated total
Start        1                   -                       -                           1
1st pass     1                   2                       1 + 2                       3
2nd pass     3                   3                       3 + 3                       6
3rd pass     6                   4                       6 + 4                       10
End          10                  -                       -                           -

*/