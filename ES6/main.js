// Declaring variables using let and const
let variable1 = 'Hello'; // let allows you to reassign the variable
const variable2 = 'World'; // const means the variable cannot be reassigned

// Arrow functions
const add = (a, b) => {
    return a + b;
};

// Template literals
let greeting = `${variable1}, ${variable2}!`; // Embedding variables in strings

// Destructuring assignment
const person = {
    name: 'John',
    age: 30
};

const { name, age } = person; // Extracting properties from an object

// Default parameters
function multiply(a, b = 2) {
    return a * b;
}

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; // Spreading elements of an array

// Classes
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.