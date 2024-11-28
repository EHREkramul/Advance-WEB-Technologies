/////////////Module Concept/////////////
/*
## What is Module?
Modules are reusable pieces of code that can be exported from one program and imported for use in another program. 
There are a few different ways to export a module from a file, you can export a module as a default or export multiple modules by name.
*/
/*
## Difference between default and named exports:
Default exports are used to export only a single module, which can be imported using any name.
Named exports are used to export multiple modules, which can be imported using the same name.
*/

//////////// 1. Named Exports
/*
* Named exports allow you to export multiple items from a module.
  You can export variables, functions, or objects by their names, and import them by the same name.
* You can export a variable, function, or class either inline or by using the export keyword at the point of declaration or later.
*/
  // Inline Named Export:
export const name1 = "Alice";
export function greet1() {
  return `Hello, ${name1}!`;
}

  // Named Exports After Declaration:
const name2 = "Alice";
function greet2() {
  return `Hello, ${name2}!`;
}

export { name2, greet2 }; // Export after declaration

//////////// 2. Default Exports
/*
* A default export allows you to export a single value or object from a module. 
  You can only have one default export per module. 
  It is commonly used when you want to export a main function, class, or object from a module.
* You can export a value directly or export it with a specific declaration.
*/

// Inline Default Export:
/*
export default function greet3() {
  return "Hello, Alice!";
}
*/

// Default Export After Declaration:
/*
function greet() {
  return "Hello, World!";
}

export default greet;
*/


//////////// 3. Exporting Both Named and Default Exports

export const name3 = "Alice";
export function greetings() {
  return `Hello, ${name3}!`;
}

export default function farewell() {
  return "Goodbye, World!";
}
