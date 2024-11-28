//////////////////////Class and Object//////////////////////

// Class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method declaration
    isAdult() {
        return this.age > 18 ? true : false;
    }

    behavior(){
        return 'I am a Normal Person';
    }
    // Static method
    static isHuman() {
        return 'I am a human';
    }
}

// Object creation
let p1 = new Person('John', 30);
let p2 = new Person('Jane', 15);

console.log(`Person 1 is Adult? : ${p1.isAdult()}`); // true
console.log(`Person 2 is Adult? : ${p2.isAdult()}`); // false
console.log(Person.isHuman()); // Static method called

// Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
        this.#increment(); // Accessing private method
    }
    behavior(){ // Method overriding
        return 'I am a Student';
    }

    // Private fields and methods
    #count = 0; // Private field
    #increment() { // Private method
        this.#count++; // Accessing private field
    }
    getCount() {
        return this.#count;
    }

}

let s1 = new Student('Alice', 20, 'A');
console.log(s1); // Student { name: 'Alice', age: 20, grade: 'A' }
console.log(s1.isAdult()); // true
console.log(s1.behavior()); // I am a Student
console.log(Student.isHuman()); // Static method called
console.log("Total Student Count: ", s1.getCount()); // 1