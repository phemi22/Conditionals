// CONDITIONALS

// Single case Comparison
// A program to checck if a user's age is 18 or not

let x = 10
let y = 5

if(x > y){
    console.log("Yes X is greater")
}else{
    console.log("This condition is not true")
}

let age = 30

if(age >= 30){
    console.log("Give them a credit card")
}else{
    console.log("Don't give them a credit card")
}

let userAge = prompt("Enter Your Age: ")
let agreedAge = 18

if(userAge >= agreedAge){
    console.log("Let the user in")
}else{
    console.log("Tell user to come back when they are 18")
}

// Double case Comparison
// if and

let enterAge = prompt("Enter Your Age: ")
let specifiedAge = 18
let enterCity = prompt("Enter Your City: ")
let agreedCity = "London"

if(enterAge >= specifiedAge && enterCity === agreedCity){
    console.log("Let them into the event")
}else{
    console.log("Do not let them into the event")
}

// if or

let theAge = prompt("Enter Your Age: ")
let ourSpecifiedAge = 18
let theCity = prompt("Enter Your City: ")
let ourAgreedCity = "London"

if(theAge >= specifiedAge || theCity === agreedCity){
    console.log("Let them into the event")
}else{
    console.log("Do not let them into the event")
}

// Ternary operator: It is a modern way of writing if else statement for a single case comparison mostly

let a = 10
let b = 20

a > b ? console.log("YES!") : console.log("NO!")

// else if statement: used for multiple case comparison

let theirAge = prompt("Enter Your Age")
theirAge = Number(theirAge)

if(theirAge > 0 && theirAge <= 12){
    console.log("User is a Toddler!")
}else if(theirAge > 12 && theirAge <= 19){
    console.log("User is a Teenager!")
}else if(theirAge > 19 && theirAge <= 50){
    console.log("User is a Youth!")
}else{
    console.log("This age checker is not for you!")
}

// Building a school grading system

let studentScore = prompt("Enter Your Score")
studentScore = Number(studentScore)

if(studentScore >= 0 && studentScore <= 40){
    console.log("FAIL!")
}else if(studentScore > 40 && studentScore < 60){
    console.log("PASS!")
}else if(studentScore >= 60 && studentScore < 70){
    console.log("GOOD!")
}else if(studentScore >= 70 && studentScore < 80){
    console.log("VERY GOOD!")
}else if(studentScore >= 80 && studentScore <= 100){
    console.log("EXCELLENT!")
}else{
    console.log("ABSENT!")
}

// P.S: The switch statement can be used in the place of else if

// To remove and element from an array and replace it

const myArray = [1, 2, 3, 4, 5]
myArray.splice(1, 1, "Joseph")
console.log(myArray)

const myObj = {
    name : "Joseph"
}

const array = [6, 7, 8, 9, 10]
array.splice(1, 1, "myObj")
console.log(array)

// Extract the account number and the accaount balance of a User called Sandra in a database of a bank with 4 Customers

const bankCustomers = [
    {
        customerName : "Prisca",
        accountNumber : 23567189,
        accountBalance : 500
    },
    {
        customerName : "Paul",
        accountNumber : 2368890980,
        accountBalance : 700
    },
    {
        customerName : "Sandra",
        accountNumber : 2356666669,
        accountBalance : 1500
    },
    {
        customerName : "Kingsley",
        accountNumber : 235009876,
        accountBalance : 900
    }
]

bankCustomers.forEach(function(item){
    if(item.customerName === "Sandra"){
        let accountStatement = `The customer name is ${item.customerName}, the account number is ${item.accountNumber} and the account balance is ${item.accountBalance}`
    }

    console.log(accountStatement)
})

// Do the same thing with a for loop
