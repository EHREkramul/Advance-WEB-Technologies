//////////////////////Functions//////////////////////

// Simple Function
function showHello() {
    console.log('Simple Function: Hello World');
}
showHello();

// Function with parameter
function showName(name) {
    console.log('Function with parameter: ', name);
}
showName('Alex');

// Function with return value
function add(a, b) {
    return a + b;
}
console.log('Function with return value: ', add(5, 3));

// Arrow Function (If the function body has only one expression, the result is returned implicitly without needing the return keyword.)
let arrowFunction = (a, b) => a + b;
console.log('Arrow Function: ', arrowFunction(5, 3));

// Arrow Function with single parameter
let arrowFunctionSingleParam = a => a*2; // if use braces{} then need to use return keyword.
console.log('Arrow Function with single parameter: ', arrowFunctionSingleParam(5));

// Arrow Function with no parameter
let arrowFunctionNoParam = () => 'No parameter';
console.log('Arrow Function with no parameter: ', arrowFunctionNoParam());

// Arrow Function with multiple statement
let arrowFunctionMultipleStatement = (a, b) => {
    let sum = a + b;
    return sum;
}
console.log('Arrow Function with multiple statement: ', arrowFunctionMultipleStatement(5, 3));

// Arrow Function with object
let arrowFunctionObject = (a, b) => ({a, b});
console.log('Arrow Function with object: ', arrowFunctionObject(5, 3)); // {a: 5, b: 3}

// Rest parameter
function calculation(...numbers) {
    let sum = 0;

    for (let i of numbers) {
        sum += i;
    }
    return sum;
}
console.log('Rest parameter: ', calculation(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Dynamic function
let dynamicFunction = function (a, b) { // declared using function constructor
    return a + b;
}
console.log('Dynamic function: ', dynamicFunction(5, 3));

// Function with default parameter
function defaultParameter(a, b = 2) { // use 2 as default value of b, if no value pass for b
    return a + b;
}
console.log('Function with default parameter: ', defaultParameter(5)); // 7