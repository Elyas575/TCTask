//======================================================================//

// TO RUN this program please run "node Task_2.js" in the command line"

//======================================================================//

// what are the inputs? the function takes in the number zero as a first parameter and and an array as a 2nd parameter
// what are the outputs? return the first missing  number
// what math/data structures do we have available? a dictionary to store key value pairs of numbers found
// what to return if the array is empty or doesn't contain numbers? always assume that the first parameter is 0 and the 2nd parameter is an array of integers

// THE algorithm
// create an object called storage to store numbers found
// loop over every element in the array, set numbers found to true and store them in the object
// loop again to check and return the missing number

function Task2(zero, array) {
  // filling the storage if found number:True
  const storage = {};
  for (let i = zero; i < array.length; i++) {
    storage[array[i]] = true;
  }

  // checking for the missing number
  for (let i = zero; i <= array.length; i++) {
    if (!storage.hasOwnProperty(i)) {
      return i;
    }
  }
}

//======================================================================//

// TO RUN this program please run "node Challenge2.js" in the command line"

//======================================================================//
console.log(
  "-------------------------- EXAMPLE 1 ------------------------------"
);
const example1 = [3, 0, 1];
console.log(Task2(0, example1));

console.log(
  "-------------------------- EXAMPLE 2 ------------------------------"
);
const example2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(Task2(0, example2));

console.log(
  "-------------------------- EXAMPLE 3 ------------------------------"
);
const example3 = [0, 1];
console.log(Task2(0, example3));
