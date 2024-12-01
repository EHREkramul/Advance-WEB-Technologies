//////// Type Aliases ////////

// Type aliases let you define a custom name for a type.
// Primitive Type Alias
type UserID = string;

// Object Type Alias
type User = {
  id: UserID;
  name: string;
  age: number;
};

// Using Type Alias
let user: User = {
  id: "123",
  name: "Alice",
  age: 25,
};

// Type Union Alias
// let variable: Type1 | Type2 | Type3;
let value: string | number;
value = "Hello"; // Valid
value = 42;      // Valid
// value = true;    // Error: Type 'boolean' is not assignable to type 'string | number'.

// Using Type Alias with Union
type ID = string | number;
let userId: ID = "abc123"; // Valid
userId = 101;             // Valid
// userId = true;           // Error: Type 'boolean' is not assignable to type 'string | number'.


// Literal Type Alias
// let variable: "value1" | "value2" | "value3";
// Literal Type
let direction: "up" | "down" | "left" | "right";
direction = "up";   // Valid
direction = "left"; // Valid
// direction = "forward"; // Error: Type '"forward"' is not assignable to type '"up" | "down" | "left" | "right"'.


// Using Type Alias with Literal
type Direction = "up" | "down" | "left" | "right";

function move(dir: Direction): void {
  console.log(`Moving ${dir}`);
}

move("up");     // Valid
// move("forward"); // Error