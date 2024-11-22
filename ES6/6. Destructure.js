//Destructure object
let person = {
    name: 'Jhon Doe',
    age: 30,
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
};

// Destructuring using same variable name
let {name, age, address} = person; // Use curly braces to destructure object
console.log("Destructure object using same variable name     : ", name, age, address); // name = Jhon Doe, age = 30, address = {city: 'Dhaka', country: 'Bangladesh'}

// Destructuring using different variable name
let { name: fullName, age: userAge, address: userAddress } = person;
console.log("Destructure object using different variable name: ", fullName, userAge, userAddress); // fullName = Jhon Doe, userAge = 30, userAddress = {city: 'Dhaka', country: 'Bangladesh'}




// Destructuring array
let country = ['Bangladesh', 'Nepal','Bhutan'];
let [firstCountry, secondCountry, thirdCountry] = country; // Use square brackets to destructure array
console.log("Destructure array: ", firstCountry, secondCountry, thirdCountry); // firstCountry = Bangladesh, secondCountry = Nepal, thirdCountry = Bhutan

// Destructuring array using rest parameter
let [poor, ...rich] = country;
console.log("Destructure array using rest parameter: ", poor, rich); // poor = Bangladesh, rich = ['Nepal','Bhutan']