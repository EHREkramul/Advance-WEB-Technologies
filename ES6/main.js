// Variables

// let, const
let name = 'Jhon';
// let name = 'Alex'; // Error
name = 1234; // can be assign different type of value
console.log("Let variable: ", name);

const age = 30;
// age = 32; // Error
console.log("Const variable: ", age);

// Block Scope
let fullName = 'Jhon Doe';
const age1 = 30;
if (true) {
    let fullName = 'Alex Doe'; // re-declared. It's a new variable. only available inside block
    const age1 = 32; // re-declared. It's a new variable. only available inside block
    console.log("Inside block fullName re-declared value: ", fullName, " Age: ", age1);
}
console.log("Outside block fullName: ", fullName);


let poorCountry = ['Bangladesh', 'Nepal','Bhutan'];
let richCountry = ['USA', 'UK', 'Canada'];
let allCountry = [...poorCountry, ...richCountry];
console.log("Marged array using spreed operator(...): ",allCountry);

richCountry.push(poorCountry); // Insert poorCountry array as a single element in richCountry array
console.log("Marged array using push method: ",richCountry);


// Rest parameter
function calculation(/*a,b,*/...numbers){ // use others parameter before rest. If needed
    let sum = 0;

    for(let i of numbers){
        sum += i;
    }
    return sum;
}

console.log("Rest parameter: ", calculation(1,2,3,4,5,6,7,8,9,10));

// Dynamic function
let dynamicFunction = function(a,b){
    return a+b;
}

console.log("Dynamic function: ", dynamicFunction(5,3));