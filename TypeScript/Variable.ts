/////////////////Basic TypeScript/////////////////

// 1. Basic variable types and declarations.

// Boolean
let isDone: boolean = false; // Boolean: true or false

// Number
let decimal: number = 6; // Number: All numbers, no differentiation between integers or floats
let hex: number = 0xf00d; // Hexadecimal: 0x prefix
let binary: number = 0b1010; // Binary: 0b prefix
let octal: number = 0o744; // Octal: 0o prefix

// String
let color: string = "blue"; // String: All text values
color = 'red'; // Single quotes or double quotes

// Array
let list: number[] = [1, 2, 3]; // Array: Type[] or Array<Type>
let list2: Array<number> = [1, 2, 3]; // Array: Type[] or Array<Type>

// Tuple
let x: [string, number]; // Tuple: Array with fixed number of elements whose types are known
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error

// Enum
enum Color {
  Red,
  Green,
  Blue
}; // Enum: Set of numeric values
let c: Color = Color.Green;

// Any
let notSure: any = 4; // Any: Any value
notSure = "maybe a string instead"; // OK
notSure = false; // OK

// Void
function warnUser(): void { // Void: Absence of having any type at all
    console.log("This is my warning message");
}

warnUser();

// Null and Undefined
let u: undefined = undefined; // Undefined: variable has not been assigned a value
let n: null = null; // Null: variable is assigned a value of null

// Never
function error(message: string): never { // Never: Function never returns a value
    throw new Error(message);
}

// Type assertions
let someValue: any = "this is a string"; // Type assertions: Type casting
let strLength: number = (<string>someValue).length; // angle-bracket syntax. what happens here is that you are telling the compiler that you know what the type of someValue is and that you are sure that someValue is actually of that type.
let strLength2: number = (someValue as string).length; // as-syntax. This is equivalent to the above example.