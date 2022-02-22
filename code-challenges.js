// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"




// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// create a function called boilingPoint that takes in a number called temperature. Use conditional if else statements to indicate whether the number is at he boiling point, below the boiling point or above the boiling point.
const boilingPoint = (temperature) => {
  if(temperature == 212) {
    return "At boiling point"
  }
  else if (temperature > 212) {
    return  "Above boiling point"
  }
  else if (temperature < 212) {
    return "Below boiling point"
  }
}

console.log(boilingPoint(temp1)) //output should be "Below boiling point"
console.log(boilingPoint(temp2)) //output should be "Above boiling point"
console.log(boilingPoint(temp3)) //output should be "At boiling point"




// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10
// I combined the two arrays and created a new variable called comboArray to store this. Then I used .length to find the length of this combined array, which gives the output 10.
const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

const comboArray = myNumbers1.concat(myNumbers2)
console.log(comboArray.length)

// create the code that will combine combine the two arrays and return the length using the variables provided above


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

const currentCohort = "Alpha 2022"

const currentCohort = "Alpha 2022"
console.log(currentCohort.reverse())
// Output: ["Alpha 2022"]


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]
var finalArray = []
var oddOrEven
for (let i=0; i<myArray.length; i++){
  if myArray[i] % 2 == 0 {
    oddOrEven = "even"
  }
  else {
    oddOrEven = "odd"
  }
  finalArray.push(oddOrEven)
}
console.log(finalArray)
// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24
