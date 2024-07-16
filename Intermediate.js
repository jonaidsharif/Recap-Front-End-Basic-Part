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


// function fibonacciSeries(num){
//     const fibo = [0, 1];

//     for(let i = 2; i <= num; i++){
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }

// const fiboSeries = fibonacciSeries([13]);
// console.log(fiboSeries);


// [
//     0, 1, 1, 2, 3, 5,
//     8, 13, 21, 34, 55, 89,
//     144, 233
// ]



// function fibonacciSeries(num) {
//     const fibo = [0, 1];

//     for (let i = 2; i <= num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }

// const fiboSeries = fibonacciSeries([1]);
// console.log(fiboSeries);

// [ 0, 1 ]



// function fibonacciSeries(num) {
//     const fibo = [0, 1];

//     for (let i = 2; i <= num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }

// const fiboSeries = fibonacciSeries(['jonaid']);
// console.log(fiboSeries);

// [0, 1]

// function fibonacciSeries(num) {
//     const fibo = [0, 1];

//     for (let i = 2; i <= num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }

// const fiboSeries = fibonacciSeries([20]);
// console.log(fiboSeries);

// [
//     0, 1, 1, 2, 3, 5,
//     8, 13, 21, 34, 55, 89,
//     144, 233, 377, 610, 987, 1597,
//     2584, 4181, 6765
// ]



// function fibonacciSeries(num) {
//     console.log(typeof num);
//     const fibo = [0, 1];

//     for (let i = 2; i <= num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }

// const fiboSeries = fibonacciSeries([20]);
// console.log(fiboSeries);


// [
//     0, 1, 1, 2, 3, 5,
//     8, 13, 21, 34, 55, 89,
//     144, 233, 377, 610, 987, 1597,
//     2584, 4181, 6765
// ]



// function fibonacciSeries(num) {
//     if(typeof num != 'number'){
//         return 'Please give me a number';
//     }
//     const fibo = [0, 1];

//     for (let i = 2; i <= num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }

// const fiboSeries = fibonacciSeries([1]);
// console.log(fiboSeries);


// Please give me a number



// function fibonacciSeries(num) {
//     if (typeof num != 'number') {
//         return 'Please give me a number';
//     }
//     if(num < 2){
//         return 'Please enter a positive number greater than 1';
//     }
//     const fibo = [0, 1];

//     for (let i = 2; i <= num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }

// const fiboSeries = fibonacciSeries(['23']);
// console.log(fiboSeries);


// Please give me a number



// function fibonacciSeries(num) {
//     if (typeof num != 'number') {
//         return 'Please give me a number';
//     }
//     if(num < 2){
//         return 'Please enter a positive number greater than 1';
//     }
//     const fibo = [0, 1];

//     for (let i = 2; i < num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }

// const fiboSeries = fibonacciSeries([3]);
// console.log(fiboSeries);


// Please give me a number



// Remove Duplicate Items From An Array


// const names = ['jonaid', 'sharif', 'karim', 'jamal', 'bashar', 'john', 'shakil', 'sajib', 'kabris', 'giyas'];

// function duplicatedRemoveValues(names){
//   const unique = [];

//   for(let i=0;i<names.length;i++){
//     const element = names[i];
//     console.log(element);
//   }
// }

// const uniqueNames = duplicatedRemoveValues(names);
// console.log(uniqueNames);


// jonaid
// sharif
// karim
// jamal
// bashar
// john
// shakil
// sajib
// kabris
// giyas
// undefined



// const names = ['jonaid', 'sharif', 'karim', 'jamal', 'bashar', 'john', 'shakil', 'sajib', 'kabris', 'giyas'];

// function duplicatedRemoveValues(names) {
//   const unique = [];

//   // for (let i = 0; i < names.length; i++) {
//   //   const element = names[i];
//     // console.log(element);
//   // }

//   for(const element of names){
//     console.log(element);
//   }
// }

// const uniqueNames = duplicatedRemoveValues(names);
// console.log(uniqueNames);


// jonaid
// sharif
// karim
// jamal
// bashar
// john
// shakil
// sajib
// kabris
// giyas
// undefined




// const names = ['jonaid', 'sharif', 'karim', 'jamal', 'bashar', 'john', 'shakil', 'sajib', 'kabris', 'giyas'];

// function duplicatedRemoveValues(names) {
//   const unique = [];

  // for (let i = 0; i < names.length; i++) {
  //   const element = names[i];
  // console.log(element);
  // }

//   for (const element of names) {
//     console.log(element);
//     if(unique.indexOf(element) == -1){
//       unique.push(element);
//     }
//   }
//   return unique;
// }

// const uniqueNames = duplicatedRemoveValues(names);
// console.log(uniqueNames);



// const greetings = "Hello, how are you baby";

// function reverseString(text){
//   for(const letter of text){
//     console.log(letter);
//   }
// }

// const reversed = reverseString(greetings);
// console.log(reversed);


//H
// e
// l
// l
// o
//   ,

//   h
// o
// w

// a
// r
// e

// y
// o
// u

// b
// a
// b
// y





// const greetings = "Hello, how are you baby";
//
// function reverseString(text) {
//   let reverse = "";
//   for (const letter of text) {
//     console.log(letter);
//     reverse = letter + reverse;
//   }
// }

// const reversed = reverseString(greetings);
// console.log(reversed);




// Handle Unexpected Function Input Parameter Error


// function addSum(num1, num2){
//   const sum = num1 + num2;
//   return sum;
// }

// const firstlyTotal = addSum(76, 77);
// console.log(firstlyTotal);

// 153


// function addSum(num1, num2) {
//   const sum = num1 + num2;
//   return sum;
// }

// const secondTotal = addSum(978, 467);
// console.log(secondTotal);

// 1445


// function multplyNumber(num1, num2){
//   const result = num1 * num2;
//   return result;
// }

// const firstResult = multplyNumber(34 + 98);
// console.log(firstResult);

// NaN



// function multplyNumber(num1, num2) {
//   const result = num1 * num2;
//   return result;
// }

// const firstResult = multplyNumber(34 * 98);
// console.log(firstResult);

// NaN

// function multplyNumber(num1, num2) {
//   console.log('Parameter: ', num1, num2); // Parameter:  3332 undefined
//   const result = num1 * num2;
//   return result;
// }

// const firstResult = multplyNumber(34 * 98);
// console.log(firstResult); // Nan



// function multplyNumber(num1, num2) {
//   console.log('Parameter: ', num1, num2); // Parameter:  34 98
//   const result = num1 * num2;
//   return result;
// }

// const firstResult = multplyNumber(34, 98);
// console.log(firstResult);

// 3332


// Use Add And Multiplication To Calculate Wood Requirements

// chairWood = 3cft/chairWood
// tableWood = 10cft/tableWood
// bedWood = 50cft/bed


// function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
//   const perChairWood = 3;
//   const perTableWood = 10;
//   const perBedWood = 50;
//   // wood calculation
//   const chairWoodCalculation = chairQuantity * perChairWood;
//   const tableWoodCalculation = chairQuantity * perTableWood;
//   const bedWoodCalculation = chairQuantity * perBedWood;

//   const totalWood = chairWoodCalculation + tableWoodCalculation + bedWoodCalculation;
// }

// const firstOption = woodCalculator(1, 1, 1);
// console.log(firstOption);

// undefined


// function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
//   const perChairWood = 3;
//   const perTableWood = 10;
//   const perBedWood = 50;
//   // wood calculation
//   const chairWoodCalculation = chairQuantity * perChairWood;
//   const tableWoodCalculation = chairQuantity * perTableWood;
//   const bedWoodCalculation = chairQuantity * perBedWood;

//   const totalWood = chairWoodCalculation + tableWoodCalculation + bedWoodCalculation;

//   return totalWood;
// }

// const firstOption = woodCalculator(1, 1, 1);
// console.log(firstOption);

// 63



// function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
//   const perChairWood = 3;
//   const perTableWood = 10;
//   const perBedWood = 50;
//   // wood calculation
//   const chairWoodQuantity = chairQuantity * perChairWood;
//   const tableWoodQuantity = tableQuantity * perTableWood;
//   const bedWoodQuantity = perBedWood * perBedWood;

//   const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

//   return totalWood;
// }

// const firstOption = woodCalculator(1, 0, 0);
// console.log(firstOption);

// 2513



// function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
//   const perChairWood = 3;
//   const perTableWood = 10;
//   const perBedWood = 50;
//   // wood calculation
//   const chairWoodQuantity = chairQuantity * perChairWood;
//   const tableWoodQuantity = tableQuantity * perTableWood;
//   const bedWoodQuantity = perBedWood * perBedWood;

//   const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

//   return totalWood;
// }

// const firstOption = woodCalculator(1, 2, 3);
// console.log(firstOption);

// 2523




// Write Foo, Bar, Foobar If Divisible By 3 Or 5 Or Both



// for(let i=1; i<= 50;i++){
//   if(i%3 == 0){
//     console.log('foo');
//   }
//   console.log(i);
// }


// 1
// 2
// foo
// 3
// 4
// 5
// foo
// 6
// 7
// 8
// foo
// 9
// 10
// 11
// foo
// 12
// 13
// 14
// foo
// 15
// 16
// 17
// foo
// 18
// 19
// 20
// foo
// 21
// 22
// 23
// foo
// 24
// 25
// 26
// foo
// 27
// 28
// 29
// foo
// 30
// 31
// 32
// foo
// 33
// 34
// 35
// foo
// 36
// 37
// 38
// foo
// 39
// 40
// 41
// foo
// 42
// 43
// 44
// foo
// 45
// 46
// 47
// foo
// 48
// 49
// 50


// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0) {
//     console.log('foo');
//   }
//   else if (i % 5 == 0) {
//     console.log('bar');
//   }
//   else{
//     console.log(i);
//   }
// }


// 1
// 2
// foo
// 4
// bar
// foo
// 7
// 8
// foo
// bar
// 11
// foo
// 13
// 14
// foo
// 16
// 17
// foo
// 19
// bar
// foo
// 22
// 23
// foo
// bar
// 26
// foo
// 28
// 29
// foo
// 31
// 32
// foo
// 34
// bar
// foo
// 37
// 38
// foo
// bar
// 41
// foo
// 43
// 44
// foo
// 46
// 47
// foo
// 49
// bar


// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0) {
//     console.log('foo');
//   }
//   else if (i % 5 == 0) {
//     console.log('bar');
//   }
//   else if (i % 3 == 0 && i % 5 == 0) {
//     console.log('foobar');
//   }
//   else {
//     console.log(i);
//   }
// }


// 1
// 2
// foo
// 4
// bar
// foo
// 7
// 8
// foo
// bar
// 11
// foo
// 13
// 14
// foo
// 16
// 17
// foo
// 19
// bar
// foo
// 22
// 23
// foo
// bar
// 26
// foo
// 28
// 29
// foo
// 31
// 32
// foo
// 34
// bar
// foo
// 37
// 38
// foo
// bar
// 41
// foo
// 43
// 44
// foo
// 46
// 47
// foo
// 49
// bar




// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log('foobar');
//   }
//   else if (i % 3 == 0) {
//     console.log('foo');
//   }
//   else if (i % 5 == 0) {
//     console.log('bar');
//   }
//   else {
//     console.log(i);
//   }
// }


// 1
// 2
// foo
// 4
// bar
// foo
// 7
// 8
// foo
// bar
// 11
// foo
// 13
// 14
// foobar
// 16
// 17
// foo
// 19
// bar
// foo
// 22
// 23
// foo
// bar
// 26
// foo
// 28
// 29
// foobar
// 31
// 32
// foo
// 34
// bar
// foo
// 37
// 38
// foo
// bar
// 41
// foo
// 43
// 44
// foobar
// 46
// 47
// foo
// 49
// bar



// Find The Cheapest Phone From An Array Of Phone Objects


// const phones = [
//   { name: 'sumsung s5', price: 45000, camera: 10, storage: 32},
//   { name: 'Walton m35', price: 15000, camera: 8, storage: 8},
//   { name: 'Xiaomi m89', price: 12000, camera: 8, storage: 16},
//   { name: 'Oppo a78', price: 17000, camera: 8, storage: 32},
//   { name: 'Nokia a34', price: 10000, camera: 8, storage: 8},
//   { name: 'HTC h81c', price: 25000, camera: 8, storage: 16}
// ];

// let cheapest = phones[0];
// for(const phone of phones){
//   // Compare price only
//   if(phone.price < cheapest.price){
//     cheapest = phone;
//   }
// }

// console.log(cheapest);

// { name: 'Nokia a34', price: 10000, camera: 8, storage: 8 }



// Calculate The Total Cost Of The Products In A Shopping Cart


// const products = [
//   { name: 'Laptop', price: 43000 },
//   { name: 'Shirt', price: 2500 },
//   { name: 'Watch', price: 8000 },
//   { name: 'Phone', price: 33000 },
//   { name: 'Wallet', price: 2000 },
// ]

// let totalPrice = 0;

// for(const product of products){
//   totalPrice = totalPrice + product;
// }
// console.log(totalPrice);


// 0[object Object][object Object][object Object][object Object][object Object]



// const products = [
//   { name: 'Laptop', price: 43000 },
//   { name: 'Shirt', price: 2500 },
//   { name: 'Watch', price: 8000 },
//   { name: 'Phone', price: 33000 },
//   { name: 'Wallet', price: 2000 }
// ];

// let totalPrice = 0;

// for (const product of products) {
//   totalPrice = totalPrice + product.price;
// }
// // console.log(totalPrice); // 88500


// const cart = [
//   { name: 'Laptop', price: 43000, quantity: 1 },
//   { name: 'Shirt', price: 2500, quantity:  8},
//   { name: 'Watch', price: 8000, quantity:  3},
//   { name: 'Phone', price: 33000, quantity:  1},
//   { name: 'Wallet', price: 2000, quantity:  2}
// ];

// let cartTotal = 0

// for (const product of cart){
//   console.log(product);
//   const productTotal = product.price * product.quantity;
//   cartTotal = cartTotal + productTotal;
// }





// Traveling In A Jungle And Counting Wild Animals


// function animalCount(miles) {
//   if(miles <= 10) {
//     const count = miles * 10;
//     return count;
//   }
// }

// const animals = animalCount(8);
// console.log(animals);

// 80


// function animalCount(miles) {
//   if (miles <= 10) {
//     const count = miles * 10;
//     return count;
//   }
// }

// const animals = animalCount(13);
// console.log(animals);

// undefined



// function animalCount(miles) {
//   const animalDensityFirst10Miles = 10;
//   const animalDensitySecond10Miles = 50;
//   if (miles <= 10) {
//     const count = miles * animalDensityFirst10Miles;
//     return count;
//   }
//   else if(miles <=20) {
//     const firstDenseAnimals = 10 * animalDensityFirst10Miles;
//     const restMiles = miles - 10;
//     const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
//     const totalAnimals = firstDenseAnimals + secondDenseAnimals;
//     return totalAnimals;
//   }
// }

// const animals = animalCount(13);
// console.log(animals);

// 250


// function animalCount(miles) {
//   const animalDensityFirst10Miles = 10;
//   const animalDensitySecond10Miles = 50;
//   if (miles <= 10) {
//     const count = miles * animalDensityFirst10Miles;
//     return count;
//   }
//   else if (miles <= 20) {
//     const firstDenseAnimals = 10 * animalDensityFirst10Miles;
//     const restMiles = miles - 10;
//     const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
//     const totalAnimals = firstDenseAnimals + secondDenseAnimals;
//     return totalAnimals;
//   }
// }

// const animals = animalCount(17);
// console.log(animals);

// 450

// function animalCount(miles) {
//   const animalDensityFirst10Miles = 10;
//   const animalDensitySecond10Miles = 50;
//   if (miles <= 10) {
//     const count = miles * animalDensityFirst10Miles;
//     return count;
//   }
//   else if (miles <= 20) {
//     const firstDenseAnimals = 10 * animalDensityFirst10Miles;
//     const restMiles = miles - 10;
//     const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
//     const totalAnimals = firstDenseAnimals + secondDenseAnimals;
//     return totalAnimals;
//   }
// }

// const animals = animalCount(23);
// console.log(animals);


// undefined



// function animalCount(miles) {
//   const animalDensityFirst10Miles = 10;
//   const animalDensitySecond10Miles = 50;
//   const animalDensityRestMiles = 100;
//   if (miles <= 10) {
//     const count = miles * animalDensityFirst10Miles;
//     return count;
//   }
//   else if (miles <= 20) {
//     const firstDenseAnimals = 10 * animalDensityFirst10Miles;
//     const restMiles = miles - 10;
//     const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
//     const totalAnimals = firstDenseAnimals + secondDenseAnimals;
//     return totalAnimals;
//   }
//   else {
//     const firstDenseAnimals = 10 * animalDensityFirst10Miles;
//     const secondDenseAnimals = 10 * animalDensitySecond10Miles;
//     const restMiles = miles - 20;
//     const restDenseAnimals = restMiles * animalDensityRestMiles;
//     const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimals;
//     return totalAnimals;
//   }
// }

// const animals = animalCount(25);
// console.log(animals);

// 23 -> 900 or 25 -> 1100



// 1. Write three variables (number, string, boolean)




// 2. Two variables using (let, const)

// 3. Simple Math Operations( +, -, *, /, % )

// 4. Comparison ()

// 5. Two conditions, case-01: fulfill both conditions
                  //  case-02: fulfill at least one conditions

// 6. if-else

// 7. While loop to display 7 to 19 all numbers. Only display add numbers including 7 to 19

// 8. Declare an array number of elements. Update or change 4th position element. Add or remove elements. Check whelther a specific value exists in the array

// 9. Use any for loop to display every elements of an array.

// 10. You have an array of numbers. Display only the numbers bigger than 80


// 11. Write a function that three numbers and returns the multiplication of the three numbers

// 12. Declare an object and change any property of that

// 13. Conversation feetToInch, centimeterToMeter

// 14. Calculation -> paperRequirements

// books has 100 pages
// books has 200 pages
// books has 300 pages

// 15. friends   -> bestFriend

// 16. Will stop the loop if the array havs any negative number and returns all the positive number before the negative number -> onlyPositive

// Probelm 1: ana to vori -> anaToVori

// Problem 2: pandaCost -> three parameter like sangara, shomosa and jilafe

// Problem 3: picnicBudget

// Problem 4: oddFriend

// Understand For Loop In A Forward And Reverse Way - Recursion

// for(let i=1; i<6; i++) {
//   console.log(i);
// }

// 1
// 2
// 3
// 4
// 5


// function consoleNumber(i) {
//   console.log(i);
// }

// consoleNumber(1);

// 1





// function consoleNumber(i) {
//   console.log(i);
//   consoleNumber(i);

// }

// consoleNumber(1);


// infinity loop passing 1 1 1....... value



// function consoleNumber(i) {
//   console.log(i);
//   consoleNumber(i++);

// }

// consoleNumber(1);

// infinity loop passing 1 1 1.... value


// function consoleNumber(i) {
//   console.log(i);
//   consoleNumber(i+1);

// }

// consoleNumber(1);


// infinity loop passing 1 2 3......... value


// for(let i=1;i<6;i++) {
//   console.log(i);
// }

// function consoleNumber(i) {
//   if(i > 5) {
//     return;
//   }
//   console.log(i);
//   consoleNumber(i+1);

// }

// consoleNumber(1);


// 1
// 2
// 3
// 4
// 5



// Understand Recursion Using Sum Of Numbers


// let sum = 0;

// for(let i=5;i >= 1;i--) {
//   sum += i;
// }

// console.log(sum);

// 15

// function sum(i) {
//   return i+sum(i--);
// }

// console.log(sum(5))


// return i + sum(i--);
//   ^

//   RangeError: Maximum call stack size exceeded



// function sum(i) {
//   console.log(i);
//   return i + sum(i--);
// }

// console.log(sum(5));

// infinity looping about 5 5 5 5....... value runnig/

// function sum(i) {
//   console.log(i);
//   return i + sum(--i);
// }

// console.log(sum(5));

// infinity looping -1 -2 -3 -4........... about running




function sum(i) {
  console.log(i);
  if(i == 1) {
    return 1;
  }
  return i + sum(--i);
}

console.log(sum(5));

// 5
// 4
// 3
// 2
// 1
// 15
