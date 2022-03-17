// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "Alpha 2022"
// console.log(cohort.length)

// a) Your answer: This code will log the variable cohort name as "Alpha 2022" and generate the output as 1.
// b) Verify and explain: When I typed the code it rendered the output as 1.
const cohort = ["Alpha 2022"]
console.log(cohort.length)


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: This code will designate the variable greeting as "Hello World" and generate the output as "o".
// b) Verify and explain: When I typed the code it isolated and rendered only the 4th designated letter in the greeting which is "o".
const greeting = "Hello World!"
console.log(greeting[4])

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: This code will display Ruby as the output because "Ruby" is index 1 in the array.
// b) Verify and explain: WHen I typed the code it render "Ruby" as the output because it is index 1 in the array of languages.
const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: This code will indicate an error message because there is nothing in the second set of parenthesis.
// b) Verify and explain: When I typed the code it rendered an error message because weekendDays.toUpperCase is not a function, and there is nothing within the second set of parenthesis.
const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: This code will indicate "number" as the output.
// b) Verify and explain: When I typed this code it render "number" as the output because typeof returns the data type, and datatype.length is the number.
const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)
