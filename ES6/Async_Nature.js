////////Timer Work///////////
/*
Asynchronous: Asynchronous means that things can happen independently of the main program flow.
Syncronous: Syncronous means that you can only execute one thing at a time.

Javasricpt is synchronous or asyncronous? Answer is both. How?
Answer is javascript is Synchronous but it can be asynchronous by using callback function.
Callback function: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
*/

// Example of synchronous code
console.log('Start');
console.log('End');

// Example of asynchronous code

// setTimeout(callback, time(milliseconds), ...args)
console.log('Start');
setTimeout((greeting) => {
    console.log(`${greeting}, We are in the setTimeout()`); // Hello, We are in the timeout. After 2 seconds
}, 2000, 'Hello');
console.log('End');

const timerId = setTimeout(() => {
    console.log("This won't run"); // This won't run
}, 1000);
clearTimeout(timerId); // Cancels the timeout


//////////Promises//////////
/*
A promise is an object representing the eventual completion or failure of an asynchronous operation.
A promise is a placeholder for a value that we don't have yet.
A promise can be in one of three states:
    1. Pending: Initial state, neither fulfilled nor rejected.
    2. Fulfilled: Meaning that the operation completed successfully.
    3. Rejected: Meaning that the operation failed.
*/

// Creating a promise using Promis Constructor. Promise(callback(resolve, reject){}). then(). catch(). finally()
const promise = new Promise((resolve, reject) => {
    let success = true;
  
    if(success) {
      resolve("Promise operation was successful!");
    } else {
      reject("Promise operation failed.");
    }
});

// Using a Promise. Use .then() for handling a fulfilled promise and .catch() for handling a rejected promise.
promise
  .then(result => { // Promise.then(callback(result){})
    console.log(result);  // "Operation was successful!"
  })
  .catch(error => { // Promise.catch(callback(error){})
    console.log(error);   // "Operation failed."
  })
  .finally(() => { // Promise.finally(callback(){})
    console.log("Execute all time. Promise success of failed"); // Execute all time. Promise success of failed
  });




//////////Async and Await//////////
// async and await are modern ways to handle asynchronous operations more readably, avoiding nested .then() chains.

// async function
// An async function always returns a promise. It allows you to use await within it.
async function myAsyncFunction() {
    return "Async function has been called";
}
/*
This is the same as:
function myAsyncFunction() {
  return Promise.resolve("Hello, World!");
}
*/

// await keyword
// await pauses the execution of an async function until the promise is resolved (or rejected). You can only use await inside async functions.
async function myAsyncFunction() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise is resolved!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    console.log(result); // "Promise is resolved!"
}
myAsyncFunction();

// Simulating API call with a Promise:
function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: "Alice", age: 25 };
        resolve(data);
      }, 2000);
    });
}
// Using async and await to handle the promise
async function getUserData() {
    try {
      const data = await fetchDataFromAPI();  // Pauses execution of an async function until a promise is resolved. Wait for the promise to resolve. wait 2 seconds
      console.log("User Data:", data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
getUserData();  // Output after 2 seconds: User Data: { name: "Alice", age: 25 }


// Error handling with async and await. You can handle errors in async/await using try...catch.
async function myAsyncFunction() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
}

console.log('I am running'); // Continue to run. Do not wait for the async function
