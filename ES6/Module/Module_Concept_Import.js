///////// Importing Named Exports:
/*
 * To import named exports, you must use the exact name from the module.
*/
import { name1, greet1 } from './Module_Concept_Export.js';
console.log(name1);   // Output: Alice
console.log(greet1()); // Output: Hello, Alice!

// You can also rename imports to avoid naming conflicts:
import { greet2 as sayHello } from './Module_Concept_Export.js';
console.log(sayHello()); // Output: Hello, Alice!

///////// Importing Default Exports:
/*
 * When importing a default export, you can name the imported item anything you
 * You don't need curly braces when importing a default export.
*/
import myGreetFarewell from './Module_Concept_Export.js';
console.log("Default Import in different Name: ",myGreetFarewell()); // Output: Hello, Alice!

///////// Importing Both Named and Default Exports:

import farewell, { name3, greetings } from './Module_Concept_Export.js';

console.log(name3);      // Output: Alice
console.log(greetings());   // Output: Hello, Alice!
console.log("Default Import in same name: ",farewell()); // Output: Goodbye, World!
