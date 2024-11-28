//////////////////////Loop//////////////////////
    // for loop
    for (let i = 1; i <= 5; i++) {
        console.log("For loop: ", i); 
    }
        // for of loop
    let nums = ["one", "two", "three"];
    for (let element of nums) {
        console.log("For of loop: ", element); // element is value of array
    }
        // for in loop
    for (let index in nums) {
        console.log("For in loop: ", index); // "index" access index of array
    }
    
    const obj = { a: 1, b: 2, c: 3 };
    for (const key in obj) {
        console.log(`for in loop in object -- ${key}: ${obj[key]}`); // access property in object
        // Output:
        // a: 1
        // b: 2
        // c: 3
    }
    
        // forEach loop
    nums.forEach((num, index) => {
        console.log(`forEach loop Index: ${index}, Value: ${num}`);
        // Output:
        // Index: 0, Value: one
        // Index: 1, Value: two
        // Index: 2, Value: three
    });
    
        // while loop
    let count = 0;
    while (count < 5) {
        console.log("while loop: ", count); // Output: 0, 1, 2, 3, 4
        count++;
    }
    
        // do while loop
    let count1 = 0;
    do {
        console.log("do while loop: ", count1); // Output: 0
        count1++;
    } while (count1 < 0);