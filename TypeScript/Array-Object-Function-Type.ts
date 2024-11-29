////////////// Array Type //////////////


let list: number[] = [1, 2, 3]; // Array: Type[] or Array<Type>
let list2: Array<number> = [1, 2, 3]; // Array: Type[] or Array<Type>. Array generic type

// Tuple Type
let x: [string, number]; // Tuple: For fixed-length arrays with specific types at each position:
x = ["hello", 10]; // OK. No more than 2 elements. Elements must be in order
// x = [10, "hello"]; // Error
x.push(10); // OK. Push is an exception
x.push("323"); // OK.
console.log(x.length); // 4



////////////// Object Type //////////////


let user: { name: string; age: number } = { name: "Alice", age: 30 }; // type of key and value are defined.
// let user: {name: string = "Ekramul", age: number = 22}; // Error. You can't assign default value in object type. A type literal property cannot have an initializer.
// let user: { name: string; age: number } = { name: "Alice" }; // Error. age is missing
console.log(`Object User name is ${user.name}`); // Output: Alice

// Optional Properties: Use the ? operator to make properties optional.
let user1: { name: string; age?: number } = { name: "Bob" }; // Valid

// Readonly properties: Use the readonly keyword to make properties read-only(immutable).
let config: { readonly apiKey: string } = { apiKey: "12345" };
// config.apiKey = "67890"; // Error: Cannot assign to 'apiKey' because it is a read-only property


////////////// Function Type //////////////

// Defining Function Parameters and Return Type
function add(a: number, b: number): number {
    return a + b;
}

// Optional Parameters: Use the ? operator to make parameters optional.
function greet(name: string, age?: number): string { // age value is "undefined" if not passed.
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
  
// Default Parameters: Use the = operator to assign a default value.
function greet1(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}

// Void Return Type: Use the void keyword to specify that a function does not return a value.
function logMessage(message: string): void {
    console.log(message);
}  