// Any type
let notSure: any = 4; // Any: Any value is allowed
notSure = "maybe a string instead"; // Any: Any value is allowed
notSure = false; // Any: Any value is allowed
console.log(notSure); // Output: false

// Enum type
enum Days{
    Sat = "Saturday",
    Sun = "Sunday",
    Mon = "Monday",
    Tue = 4, // Heterogeneous Enums: Mix string and numeric values (not recommended for clarity).    
    Wed = "Wednesday",
    Thu = "Thursday",
    Fri = "Friday"
}
enum Color {Red, Green, Blue}

let day: Days = Days.Mon;
console.log(day); // Output: Monday
console.log(Days["Sun"]); // Output: Sunday
console.log(Days["Sunday"]); // Output: undefined
console.log(Days[1]); // Output: undefined
console.log(Color[1]); // Output: Green
console.log(typeof(day)); // Output: string
console.log(typeof(Days.Tue)); // Output: number

// Tuple type
let x: [string, number]; // Tuple: Fixed number of elements with mixed types
x = ["hello", 10]; // OK
console.log(x); // Output: [ 'hello', 10 ]

x.push(22, "Ekramul", "Student"); // Valid, but not recommended and accessing may not respect tuple typing
// x.push(22, "Ekramul", false); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// x = [10, "hello"]; // Error
console.log(x); // Output: [ 'hello', 10, 22, 'Ekramul', 'Student' ]

// Using Tuples in Functions: Return multiple values with specific types.
function getUser(): [number, string] {
    return [1, "Ekramul Haque"];
}
const [id, fullName] = getUser();
  