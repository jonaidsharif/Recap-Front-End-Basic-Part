// Core Concepts
//Variable(let, const), js, var, let, const
// Array, loop(while, for), conditions, function

// Unit Convert Inch To Feet, Miles To Kilometer

// var inches = 132;
// var feet = inches / 12;
// console.log(feet);
// 11

// var inches = 144;
// var feet = inches / 12;
// console.log(feet);
// 12


// Function

// function inchToFeet(inches){
//     var feet = inches / 12;
//     return feet;
// }

// var myInches = 144;
// var feet = inchToFeet(myInches);
// console.log('myInches in feet: ', feet);
// myInches in feet:  12


// Mile to K.M.

// function mileToKilometre(miles){
//     var km = miles * 1.60934;
//     return km;
// }

// var marathon = mileToKilometre(26.5);
// console.log('Marathon in K.M: ', marathon);

// Marathon in K.M:  42.64751

// Check Even And Odd Number Using Function

// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);
// //true


// Is Even Function
// function isEven(number){
//     if(number % 2 == 0){
//         return true;
//     }
//     return false;
// }

// const myNumber = 21432;
// const isMyNumberEven = isEven(myNumber);
// console.log('Is my number even: ', isMyNumberEven);
// Is my number even:  true


// Is Odd Function

// const herNumber = 13423;
// const isHerNumberEven = isEven(myNumber);
// console.log('Is her number even: ', isHerNumberEven);

// function isOdd(number){
//     if(number % 2 == 1){
//     if(number % 2 == 1){  //or,  if(number % 2 != 0){
//         return true;
//     }
//     return false;
// }

// isOdd(myN)


// Check Whether A Year Is A Leap Year Or Not

// function isLeapYear(year){
//     if(year % 4 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const myYear = 2039;
// const isMyYearLeapYear = isLeapYear(myYear);
// console.log('Is my leap year: ', isMyYearLeapYear);

// Is my leap year: false



// function isLeapYear(year) {
//     if (year % 4 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const myYear = 543209;
// const isMyYearLeapYear = isLeapYear(myYear);
// console.log('Is my leap year: ', isMyYearLeapYear);

// Is my leap year:  false


// Calculate Factorial Of A Number Using For Loop

// for(var i = 1; i <= 7; i++){
//     console.log(i);
//     var factorial = 1;
//     factorial *= i;
// }

//1
// 2
// 3
// 4
// 5
// 6
// 7


// var factorial = 1;
// for (var i = 1; i <= 7; i++) {
//     console.log(i);

//     factorial *= i;
// }


// 1
// 2
// 3
// 4
// 5
// 6
// 7


// var factorial = 1;
// for (var i = 1; i <= 7; i++) {
//     factorial *= i;  //or factorial = factorial * i;
// }
// console.log(factorial);

// 5040



// Recalculate Factorial Multiple Times Using A Function


// let factorial = 1;
// for(let i = 0; i <=5; i++){
//     factorial *= i;
// }
// console.log(factorial);

// 0


// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial *= i;
// }
// console.log(factorial);

// 120


// function getFactorial(number){
//     let fact = 1;
//     for(let i = 1;i<= number; i++){
//         fact *= i;
//     }
//     return fact;
// }
// var firstFactorial = getFactorial(7);
// console.log('Factorial of 7 is:', firstFactorial);

// Factorial of 7 is: 5040


// Factorial Using A While Loop Or A Decrementing Loop

// function getFactorial(number){
//     let factorial = 1;
//     let i = 1;
//     while(i <= number){
//         factorial *= i;
//         i++;
//     }
//     return factorial;
// }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);

// 720


// function getFactorial(number){
//     let factorial = 1;
//     let i = number;

//     while(i >= 1){
//         factorial *= i;
//         i--;
//     }
// }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);

// undefined


// function getFactorial(number) {
//     let factorial = 1;
//     let i = number;

//     while (i >= 1) {
//         factorial *= i;
//         i--;
//     }
//     return factorial;
// }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);

// 720


// For loop reverse

// function getFactorial(number){
//     let factorial = 1;
//     for(let i = number; i >= 1; i--){
//         factorial *= i;
//     }
//     return factorial;
// }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);

// 720


// From Celsius to Fahrenheit

// Grade Calculation

// Simple Interest




// Module Introduction, Math And Random Number

// const myNumber = -5;
// const output = Math.abs(myNumber);
// console.log(output);

// 5

// const myNumber = 6.3509;
// const output = Math.ceil(myNumber);
// console.log(output);

// 7



// const myNumber = 6.3509;
// const output = Math.floor(myNumber);
// console.log(output);

// 6

// const myNumber = 6.509;
// const output = Math.floor(myNumber);
// console.log(output);

// 6



// const myNumber = 6.609;
// const output = Math.floor(myNumber);
// console.log(output);

// 6


// const myNumber = 6.509;
// const output = Math.round(myNumber);
// console.log(output);

// 7


// const myNumber = 6.309;
// const output = Math.floor(myNumber);
// console.log(output);

// 6



// const myNumber = 21.324;
// const output = Math.random() * 10;
// console.log(rounded);

// const myNumber = 21.324;
// const output = Math.random() * 10;
// const rounded = Math.floor(output);
// console.log(rounded);

// Given answer are so randomly

//  Swap Variable, Swap Without Temp, Destructing

// var first = 5;
// var second = 7;
// console.log(first, second); // 5 7

// var temp = first;
// first = second;
// second = temp;
// console.log(first, second); // 7 5

// [first, second] = [second, first];
// console.log(first, second); // 7 5


// Find Max Of Two Values, Find Max Of Three Values

// const business = 450;
// const minister = 550;
// const army = 600;
// if(business > minister){
//     console.log('Businessman on is bigger than Minister Son')
// }
// else{
//     console.log('Minister son is bigger than Business Son')
// }

// Businessman on is bigger than Minister Son


// if(business > minister && business > army){
//     console.log('Business is bigger!!!');
// }

// else if (minister > business && minister > army) {
//     console.log('Minister is bigger!!!');
// }
// else if(army > business && army > minister) {
//     console.log('Army is bigger!!!');
// }

// Army is bigger!!!

// var max = Math.max(business, minister, army);
// console.log('Largest is:', max);

// Largest is: 600


// function findLargest(first, second){
//     if(first > second){
//         return first;
//     }
//     else{
//         return second;
//     }
// }

// const largest = findLargest(234, 435);
// console.log('Largest is: ', largest);

// Largest is:  435



// Task - 01: Create a function that takes three numbers as input parameters and returns you the largest number of the three.

// function maxOfThreeNumbers(num1, num2, num3) {
//     if (num1 >= num2 && num1 >= num3) {
//         return num1;
//     }
//     else if (num2 >= num1 && num2 >= num3) {
//         return num2;
//     }
//     else {
//         return num3;
//     }
// }

// const largestNumber = maxOfThreeNumbers(345, 434, 874);
// console.log("Largest Number: ", largestNumber);

// Largest Number:  874

// Task - 02: Write a function to find the smallest of three numbers.


// Sum Of All Numbers In An Array


// const numbers = [45, 24, 42, 35, 89, 97, 18, 49, 58, 75, 68];
// for(let i = 0; i < numbers.length; i++){
//     console.log(i);
// }

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// const numbers = [45, 24, 42, 35, 89, 97, 18, 49, 58, 75, 68];
// for (let i = 0; i < numbers.length; i++) {
//     numbers[i];
//     console.log(i);
// }

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// const numbers = [45, 24, 42, 35, 89, 97, 18, 49, 58, 75, 68];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);
// }

// 45
// 24
// 42
// 35
// 89
// 97
// 18
// 49
// 58
// 75
// 68



// const numbers = [45, 24, 42, 35, 89, 97, 18, 49, 58, 75, 68];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const sum = 0;
//     sum += element;
// }

// TypeError: Assignment to constant variable.


const numbers = [45, 24, 42, 35, 89, 97, 18, 49, 58, 75, 68];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum += element;
// }
// console.log(sum);

// 600

// function arrayTotal(numbers){
//     let sum = 0;
//     for(let i = 0;i < numbers.length; i++){
//         const element = numbers[i];
//         sum += element;
//         return sum;
//     }
// }

// const total = arrayTotal([32, 45, 67]);
// console.log('Total array number: ', total);

// Total array number: 32


// function arrayTotal(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         sum += element;
//     }
//     return sum;
// }

// const total = arrayTotal([32, 45, 67]);
// console.log('Total array number: ', total);

// Total array number:  144


// Find The Largest Element Of An Array

// function largestElement(numbers){
//     const largest = 0;
//     for(let i = 0; i < numbers.length; i++){
//         console.log(i);
//     }
// }

// const ages = [12, 32, 45, 35, 49, 61, 53, 79, 83, 94];
// const oldest = largestElement(ages);

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9



// function largestElement(numbers) {
//     const largest = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         console.log(element);
//     }
// }

// const ages = [12, 32, 45, 35, 49, 61, 53, 79, 83, 94];
// const oldest = largestElement(ages);

// 12
// 32
// 45
// 35
// 49
// 61
// 53
// 79
// 83
// 94


// function largestElement(numbers) {
//     const largest = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }

// const ages = [12, 32, 45, 35, 49, 61, 53, 79, 83, 94];
// const oldest = largestElement(ages);
// console.log('Largest Version:', oldest);

// TypeError: Assignment to constant variable.



// function largestElement(numbers) {
//     let largest = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// const ages = [12, 32, 45, 35, 49, 61, 53, 79, 83, 94];
// const oldest = largestElement(ages);
// console.log('Largest Version:', oldest);

// Largest Version: 94



// function largestElement(numbers) {
//     let largest = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// const ages = [12, 32, 45, 35, 49, 61, 53, 79, 83, 94];
// const oldest = largestElement(ages);
// console.log('Largest Version:', oldest);

// Largest Version: 94




// function largestElement(numbers) {
//     let largest = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }

// const oldestTwo = largestElement([-2, -10, -98]);
// console.log('Largest Version:', oldestTwo);


// Largest Version: 0

// Task - 03: Find the lowest element of an array

// let array = [34, 7, 23, 32, 5, 62];

// let lowestValue = Math.min(array);

// console.log(lowestValue);  // Output: 5


// Create A Fibonacci Series Using A For Loop

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

/* 

3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 3th
7th = 6th + 5th
8th = 7th + 6th
119th = 118th + 117th
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th

*/

// const fibo = [0, 1];
// for(let i = 2; i <= 10; i++){
//     // nth = (n - 1)th + (n - 2)th
//     // ith = (i - 1)th + (i - 2)th

//     fibo[i] = fibo[i-1] + fibo[i-2];
// }

// console.log(fibo);

/*

[
   0, 1,  1,  2,  3,
   5, 8, 13, 21, 34,
  55
]

*/

// Handle Unexpected Input Using Simple Return


function fibonacciSeries(num){
    const fibo = [0, 1];

    for(let i = 0; i <= num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSeries = fibonacciSeries([234]);
console.log(fiboSeries);


21.7
