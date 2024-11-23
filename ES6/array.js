// Simple array
let arr = ["A", "B", "C", "D", "E"];
let arr1 = new Array("A", "B", "C", "D", "E");

console.log(arr); // ["A", "B", "C", "D", "E"]
console.log(arr[0]); // A

for(let item of arr) {
    console.log(item);
}

// Array with different data types
let arr2 = ["A", 1, true, {name: "John"}];
console.log(arr2); // ["A", 1, true, {name: "John"}]

// Array with undefined values
let arr3 = new Array(5);
console.log(arr3); // [undefined, undefined, undefined, undefined, undefined]
arr3[0] = "A";
console.log(arr3); // ["A", undefined, undefined, undefined, undefined]

// Multi-dimensional array
let arr4 = [[1, 2], [3, 4], [5, 6]]; // 3x2 array. Array of arrays
console.log(arr4); // [[1, 2], [3, 4], [5, 6]]
console.log(arr4[0][0]); // 1
console.log(arr4[1][1]); // 4

let bangladesh = ["Dhaka", "Chittagong", "Sylhet"];
let india = ["Mumbai", "Delhi", "Kolkata"];
let pakistan = ["Karachi", "Lahore", "Islamabad"];

let asia = [bangladesh, india, pakistan];
console.log(asia[0][1]); // Chittagong
