/////////////////Template Literal/////////////////////
// Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

// Syntax: `string text ${expression} string text`
// The expression is enclosed in ${}.

// Example:
const name = 'John';
const age = 25;
const city = 'New York';

const greeting = `Hello, my name is ${name}, I am ${age} years old and I live in ${city}.`;
console.log(greeting); // Hello, my name is John, I am 25 years old and I live in New York.

// Multi-line strings
const multiLineString = 
`This is a multi-line string.
It can span multiple lines.
It is enclosed in backticks.`;
console.log(multiLineString);

// Expression Embedding. You can embed any valid JavaScript expression, including function calls or calculations, inside ${}.
const nestedTemplateLiteral = `The result of 2 + 3 is ${2 + 3}.`;
console.log(nestedTemplateLiteral); // The result of 2 + 3 is 5.