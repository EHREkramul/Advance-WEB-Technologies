// Spread Operator with Arrays (Spreading Elements)
let poorCountry = ['Bangladesh', 'Nepal','Bhutan'];
let richCountry = ['USA', 'UK', 'Canada'];
let allCountry = [...richCountry, ...poorCountry];
console.log("Marged array using spreed operator(...): ",allCountry); // Output: [ 'USA', 'UK', 'Canada', 'Bangladesh', 'Nepal', 'Bhutan' ]

console.log("poorCountry: ",...poorCountry); // Output: Bangladesh Nepal Bhutan. Return each element as single value

richCountry.push(poorCountry); // Insert poorCountry array as a single element in richCountry array
console.log("Marged array using push method: ",richCountry); // Output: ['USA', 'UK', 'Canada', ['Bangladesh', 'Nepal','Bhutan']]


// Spread Operator with Objects (Spreading Properties)
const person = { name: 'John', age: 30 };
const updatedPerson = { ...person, city: 'New York' };

console.log(updatedPerson); // Output: { name: 'John', age: 30, city: 'New York' }




// Rest Operator (...) Function Arguments (Collecting Parameters)
function sum(...numbers) {
    let sum = 0;
    numbers.forEach((num) => sum += num);
    return sum;
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// Rest Operator (...) Object Destructuring (Collecting Remaining Properties)
const person1 = { name: 'John', age: 30, city: 'New York' };

const { name, ...rest } = person1;

console.log(name);  // Output: John
console.log(rest);  // Output: { age: 30, city: 'New York' }