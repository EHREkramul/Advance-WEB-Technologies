//////////////////////Variable//////////////////////

// 1. var
var name = 'Jhon';
var name = 'Alex'; // No error
name = 1234; // can be assign different type of value
console.log("Var variable: ", name);

// 2. let
let name1 = 'Jhon';
// let name = 'Alex'; // Error
name1 = 1234; // can be assign different type of value
console.log("Let variable: ", name1);

// 3. const
const age = 30;
// const age = 32; // Error
// age = 32; // Error
console.log("Const variable: ", age);

// 123. Block Scope
var height = 5;
let fullName = 'Smith Doe';
const age2 = 18;
if (true) {
    var height = 7; // re-assigned. It's same variable. available outside block
    let fullName = 'Alex Doe'; // re-declared. It's a new variable. Not available outside block
    const age2 = 32; // re-declared. It's a new variable. Not available outside block

    console.log("Inside block Block Scope Variable: ", fullName, " Age: ", age2, " Height: ", height);
}

console.log("Outside block Block Scope Variable: ", fullName, " Age: ", age2, " Height: ", height);