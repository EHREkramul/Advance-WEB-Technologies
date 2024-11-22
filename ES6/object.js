//////////////////////Object//////////////////////

let person = {
    age: 30, 
    name: "John Wick", 
    height: {
        feet: {
            inch: 130 // nested object. Access using ""person.height.feet.inch"". No limit of nesting
        },
        inch: 62
    }
};
// Access object property
console.log("Access object property using dot: ", person.height); // using dot notation
console.log("Access object property using bracket: ", person["height"]); // using bracket notation

// Add new property
person.weight = 70;
console.log("Add new property: ", person);

// Delete property
delete person.weight; // delete using dot notation
delete person["height"]["feet"]; // delete using bracket notation. No limit of nesting
console.log("Delete property: ", person);