// // // // console.log(5)

// // // // vary + able = variable

// // // // Numeric
// // // var price = 11;
// // // var age = 32;
// // // var temperature = 38;

// // // // String
// // // var person = "Jonaid Bin Sharif";
// // // var location = "Daulatpur, Fajil Kar Hat - 4371, Karnafulli";
// // // var special = "My Honey!"
// // // console.log(person)

// // // // 1.Variable name can not be any keywords
// // // var false = 96;
// // // var return = true;

// // // // 2.Variable name has to be in One Word, No Space
// // // var my baby home address = "New Califonia";


// // // // 3. Variable name can not have quotation
// // // var "name" = "Jonid Sharif";

// // // // 4. Variable name can not starts with a number but can end with a number

// // // var 99club = 23432;
// // // var club32 = 2023;


// // // // 5. How to use long names
// // // // can not use dash
// // // var user_name = "Fajil Kar Hat-4382";


// // // Variable Name Naming Convention
// // // var user_name = "Fajil Kar Hat-4382";
// // // var usercurrentaddressname = "Fajil Kar Hat-4382";
// // // var user_current_addressname = "Fajil Kar Hat-4382"; // Snake Case
// // // var userHomeAddress = "Fajil Kar Hat-4382"; //Camel case: We will use this one
// // // var UserHomeAddress = "Fajil Kar Hat-4382"; //Pascal Case


// // // // Variable name is case senstive

// // // var person = 25;
// // // var person = 35;


// // // // Operation
// // // var onionPrice = 30;
// // // var eggPrice = 10;

// // // var totalPrice = onionPrice + eggPrice;

// // // var priceDifference = onionPrice - eggPrice;
// // // console.log(priceDifference);

// // // console.log(totalPrice)
// // // console.log(onionPrice);
// // // console.log(eggPrice);
// // // console.log(onionPrice + eggPrice);


// // // var orangePrice = 20;
// // // var quantity = 7;

// // // var totalCose = orangePrice * quantity;
// // // console.log(totalCose);


// // // // Division
// // // var money = 500;
// // // var player = 10;
// // // var eachPlayer = money / player;
// // // console.log(eachPlayer);


// // // // Variable Declaration
// // // var tomatoPrice = 25;

// // // // Variable Value updated
// // // tomatoPrice = 30;

// // // Add something to the previous value
// // var price1 = 31;
// // var price2 = 10;

// // // Set a new value
// // // price1 = 35;

// // // Add some value to the existing value
// // price1 = price1 + 10;
// // console.log(price1)

// // // Addition to the same variable shorthand
// // // += means adding some value to the existing value
// // price += 10;
// // console.log(price1);
// // price2 = price2 - 5;

// // // shorthand -=
// // // -= Means deductiong some values from the current value of the variable
// // price2 -= 5;

// // // *=
// // price1 *= 5;
// // console.log(price1);

// // // /=
// // price1 /= 5;
// // console.log(price1);

// // var age = 115;
// // age = age + 1;
// // // ++ means adding 1 to the existing
// // age++;

// // var love = 100;
// // love = love - 1;
// // // -- Means you are deduction 1 from the existing value;
// // love--;

// // var firstName = 'Jonaid';
// // var lastName = 'Sharif';
// // var fullName = firstName + ' ' + lastName;
// // console.log(fullName);


// // var price1 = '31';
// // var price2 = '10';

// // var totalPrice = price1 + price2;
// // console.log(totalPrice); //3110

// // or

// // var price1 = '31';
// // var price2 = 10;

// // var totalPrice = price1 + price2;
// // console.log(totalPrice); //3110


// // Converted String to Number
// // console.log(price1)



// //Integer, Float Number

// // var gpa = "3.41";
// // // var gpaNumber = parseInt(gpa);
// // // console.log(gpaNumber); // 3

// // var gpaNumber = parseFloat(gpa);
// // console.log(gpaNumber); // 3.41



// // Variable Types is Number or Stringm Boolean, Undefined
// // var price = 100;
// // console.log(typeof price); // number

// // var price = '100';
// // console.log(typeof price); // string

// // var isHappy = true; 
// // console.log(typeof isHappy); //boolean

// // var romantic;
// // console.log(romantic); //undefined



// // //
// // var num1 = 0.1;
// // var num2 = 0.2;
// // var sum = num1 + num2;
// // console.log(sum); // 0.30000000000000004


// // var num1 = 0.1;
// // var num2 = 0.2;
// // var sum = num1 + num2;
// // sum = sum.toFixed(1) //. after decleared the value
// // console.log(sum); // 0.3



// var num1 = 0.1;
// var num2 = 0.2;
// var sum = num1 + num2;
// sum = sum.toFixed(2) //. after decleared the value
// console.log(sum); // 0.30



// var mangoes = 7;
// var person = 2;

// // //  / this means divided
// // //  % this person remained
// // console.log(mangoes / person); // 3.5
// console.log(mangoes % person); // 1



// var friendsAge = [11, 13, 32, 44, 23, 54, 64, 23, 65, 3];
// var picnicFee = [49352, 48325, 34235, 457735, 23435];
// var actress = ["hONEY", "bANIE", "goodfd", "babies", "kaerime"];
// var vowels = ['a', 'e', 'i', 'o', 'u'];

// console.log(vowels) // [ 'a', 'e', 'i', 'o', 'u' ]
// console.log(friendsAge.length) // 10


// var numbers = [45, 68, 78, 56, 89, 98];
// -------> index 0 = 45, ` = 68, 2 = 78, 3 = 56, 4 = 89, 5 = 98

// console.log(numbers) // [ 45, 68, 78, 56, 89, 98 ]
// // console.log(numbers[3]) // 56

// 1. Get element value by index
// var element = numbers[1];
// console.log(element);

// 2. Set element value by index
// numbers[1] = 77;
// console.log(numbers); //[ 45, 77, 78, 56, 89, 98 ]

// numbers[3] = 43;
// console.log(numbers); // [ 45, 77, 78, 43, 89, 98 ]


// 3. Find index of an element
// var positionIndex = number.indexOf(188); // this value not here
// var positionIndex = numbers.indexOf(45); // this value index 0 here
// console.log(positionIndex);



var numbers = [45, 68, 56, 78, 89, 98];

// Use push to add element to an array as the last element array
// numbers.push(232);
// console.log(numbers); // [45, 68, 56, 78, 89, 98, 232]

// var friends = ["Karim", "Mamun", "Bahir", "Kamilei", "Bomos"];
// friends.push("Dipjoy");
// console.log(friends); // [ 'Karim', 'Mamun', 'Bahir', 'Kamilei', 'Bomos', 'Dipjoy' ]

// Use pop to get last element
// console.log(numbers); // [ 45, 68, 56, 78, 89, 98 ]

// numbers.pop();
// console.log(numbers); // [ 45, 68, 56, 78, 89 ]


// numbers.pop();
// numbers.pop();
// console.log(numbers); // [ 45, 68, 56 ]


// console.log(5 < 6); // true
// console.log(5 > 6); // false
// console.log(5 == 6); // false
// console.log(6 == 6); // true
// console.log(5 != 6); // true
// console.log(5 != 16); // true

// Less than or equal
// console.log(5 <= 6); // true
// console.log(5 >= 6); // false
// console.log(15 <= 6); // false

// Greater than or equal
// console.log(5 >= 6); // false
// console.log(5 >= 2); // true


// Conditions Operator

// var iphonePrice = 89923;
// var myBudget = 9940;

// // If iphone price is less than my budget. I will buy a iphone
// if (iphonePrice > myBudget) {
//     console.log('Showing My Honey');
// }


// var iphonePrice = 89923;
// var myBudget = 98940;

// If iphone price is less than my budget. I will buy a iphone
// if(iphonePrice < myBudget){
//     console.log('Showing My Honey');
// }
// Showing My Honey

// var chickenPrice = 500;
// var myMoney = 50;
// if (chickenPrice <= myMoney){
//     console.log('Chicken Mikaan');
// }

// if (chickenPrice > myMoney){
//     console.log('Smashed potato and lentils soup');
// }
// // Smashed potato and lentils soup


// if chicken price is less than my budget
// if(chickenPrice < myMoney){
//     console.log('I ll eat Chicken');
// }
// else{
//     console.log('I ll eat Potato');
// }
//I ll eat Potato


// var isGraduated = true;
// var salary = 25000;

// if(isGraduated == true){
//     console.log('Getting ready to be married someone')
// }
// else{
//     console.log('Sorry, Bro. Your dnt prepared in married someone')
// }
// Getting ready to be married someone


// if(isGraduated == true && salary > 50000){
//     console.log('Getting ready to be married someone')
// }
// else{
//     console.log('Sorry, Bro. Your dnt prepared in married someone')
// }
// Sorry, Bro. Your dnt prepared in married someone

// var isGraduated = true;
// var salary = 50100;


// if (isGraduated == true && salary > 50000) {
//     console.log('Getting ready to be married someone')
// }
// else {
//     console.log('Sorry, Bro. Your dnt prepared in married someone')
// }
// Sorry, Bro. Your dnt prepared in married someone



// var isGraduated = true;
// var salary = 50100;
// var cars = 0;


// if(isGraduated == true && salary > 50000 && cars >= 1){
//     console.log('Getting ready to be married someone')
// }
// else{
//     console.log('Sorry, Bro. Your dnt prepared in married someone')
// }
// Sorry, Bro. Your dnt prepared in married someone



// var isGraduated = false;
// var salary = 75000;
// var cars = 1;


// if(isGraduated == true || salary > 50000){
//     console.log('Getting ready to be married someone')
// }
// else{
//     console.log('Sorry, Bro. Your friend given your number')
// }

// Getting ready to be married someone



// var isGraduated = false;
// var salary = 51000;
// var cars = 1;


// if(isGraduated == true || salary > 50000){
//     console.log('Getting ready to be married someone')
// }
// else{
//     console.log('Sorry, Bro. Your friend given your number')
// }

// Getting ready to be married someone



// var isGraduated = false;
// var salary = 41000;
// var cars = 1;


// if(isGraduated == true || salary > 50000 || cars >= 1){
//     console.log('Getting ready to be married someone')
// }
// else{
//     console.log('Sorry, Bro. Your friend given your number')
// }

// Getting ready to be married someone




// var isGraduated = false;
// var salary = 41000;
// var cars = 1;


// if((isGraduated == true && salary > 50000) || cars >= 1){
//     console.log('Getting ready to be married someone')
// }
// else{
//     console.log('Sorry, Bro. Your friend given your number')
// }

// Getting ready to be married someone





// var isGraduated = false;
// var salary = 41000;
// var cars = 1;


// if(isGraduated == true || (salary > 50000 && cars >= 1)){
//     console.log('Getting ready to be married someone')
// }
// else{
//     console.log('Sorry, Bro. Your friend given your number')
// }

// Sorry, Bro. Your friend given your number



// var money = 15;
// var danishPrice = 45;
// var butterBread = 35;
// var toastBiscuit = 20;
// var chaa = 10;

// if (danishPrice < money){
//     console.log('Danish is the better yummy')
// }
// else if(butterBread < money){
//     console.log('Butter is the better yummy')
// }
// else if(toastBiscuit < money){
//     console.log('I can eat this toast biscuit')
// }
// else{
//     console.log('Which minimum then i ate')
// }

// Which minimum then i ate


// var money = 40;
// var danishPrice = 45;
// var butterBread = 35;
// var toastBiscuit = 20;
// var chaa = 10;

// if (danishPrice < money) {
//     console.log('Danish is the better yummy')
// }
// else if (butterBread < money) {
//     console.log('Butter is the better yummy')
// }
// else if (toastBiscuit < money) {
//     console.log('I can eat this toast biscuit')
// }
// else {
//     console.log('Which minimum then i ate')
// }

// Butter is the better yummy


// var money = 58;
// var danishPrice = 45;
// var butterBread = 35;
// var toastBiscuit = 20;
// var chaa = 10;

// if (danishPrice < money) {
//     console.log('Danish is the better yummy')
// }
// else if (butterBread < money) {
//     console.log('Butter is the better yummy')
// }
// else if (toastBiscuit < money) {
//     console.log('I can eat this toast biscuit')
// }
// else {
//     console.log('Which minimum then i ate')
// }

// Danish is the better yummy



// var money = 68;
// var danishPrice = 45;
// var butterBread = 35;
// var toastBiscuit = 20;
// var chaa = 10;

// if (danishPrice < money) {
//     console.log('Danish is the better yummy')
// }
// else if (butterBread < money) {
//     console.log('Butter is the better yummy')
// }
// else if (toastBiscuit < money) {
//     console.log('I can eat this toast biscuit')
// }
// else {
//     console.log('Which minimum then i ate')
// }

// Danish is the better yummy



// var money = 151;
// var danishPrice = 45;
// var butterBread = 35;
// var toastBiscuit = 20;
// var chaa = 10;

// if (danishPrice < money) {
//     console.log('Danish is the better yummy')
// }
// else if (butterBread < money) {
//     console.log('Butter is the better yummy')
// }
// else if (toastBiscuit < money) {
//     console.log('I can eat this toast biscuit')
// }
// else {
//     console.log('Which minimum then i ate')
// }

// Danish is the better yummy


// Nested Conditions
// var math = true;
// var geometry = true;
// var straightLine = false

// if(math == true){
//     if(geometry == true){
//         if(straightLine == true){

//         }
//         else {
//             console.log('Wrong your path!!!')
//         }
//     }
//     else {
//         console.log('Pythagorean theorem know, yu dnt have')
//     }
// }
// Wrong your path!!!



// var distinations = ['Sajek Vellay', 'Coxsbazar', 'Nepal', 'Hawail', 'Singopore', 'Los Angeles']

// console.log(distinations[2]); // Nepal

// distinations[2] = 'Thailand';


// While loop, Debug and Under

// if(condition){

// }

// var roastGiven = 0;
// while(roastGiven < 7){
//     console.log('Roast Den, Please!!')
//     // roastGiven = roastGiven + 1;
//     // roastGiven += 1;
//     roastGiven++;
// }
// Roast Den, Please!!
// Roast Den, Please!!
// Roast Den, Please!!
// Roast Den, Please!!
// Roast Den, Please!!
// Roast Den, Please!!
// Roast Den, Please!!



// Loop variable
// Condition inside while
// Loop body
// Change the loop variable
// var roastGiven = 0;
// while(roastGiven < 7){
//     console.log('Roast Den, Please!!')
//     // roastGiven = roastGiven + 1;
//     // or
//     // roastGiven += 1;
//     // or
//     // roastGiven++;
// }



// var number = 0;
// while (number < 10) {
//     console.log(number);
//     number++;
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


// var number = 1;
// while (number < 10) {
//     console.log(number);
//     number++;
// }

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9



// var number = 1;
// while (number <= 10) {
//     console.log(number);
//     number++;
// }

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

// var number = 1;
// while (number <= 20) {
//     console.log(number);
//     number++;
// }


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
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20


// Target: 0 to 10 all even numbers
// var number = 0;
// while (number <= 10) {
//     console.log(number);
//     number = number + 2;
// }

// 0
// 2
// 4
// 6
// 8
// 10


// Target: 1 to 10 all odd numbers
// var number = 1;
// while (number <= 10) {
//     console.log(number);
//     number = number + 2;
// }

// 1
// 3
// 5
// 7
// 9

// for while loop

// var roastGiven = 0;
// while(roastGiven < 7){
//     console.log('Roast Den, Please!!')
//     // roastGiven = roastGiven + 1;
//     // roastGiven += 1;
//     roastGiven++;
// }

// or

// For Loop
// for(var roastGiven = 0; roastGiven < 7; roastGiven++){
//     console.log('Roast Done, Please!!');
// }

// Roast Done, Please!!
// Roast Done, Please!!
// Roast Done, Please!!
// Roast Done, Please!!
// Roast Done, Please!!
// Roast Done, Please!!
// Roast Done, Please!!


// simple version of for loop
// for(var i = 0; i < 7; i++){
//     console.log(i)
// }


// 0
// 1
// 2
// 3
// 4
// 5
// 6

// console.log('Simple for loop')
// for(var i = 0; i < 20; i += 2){
//     console.log(i)
// }

// 0
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18

// console.log('Simple for loop')
// for(var i = 1; i < 20; i += 2){
//     console.log(i)
// }


// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19


// target: display every elements of an array
// var numbers = [45, 87, 79, 56, 87, 98, 46];

// for(var i = 0; i < 8; i++){
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


// target: display every elements of an array
// var numbers = [45, 87, 79, 56, 87, 98, 46];

// for(var i = 0; i < 8; i++){
//     var number = numbers[i];
//     console.log(number);
// }

// 45
// 87
// 79
// 56
// 87
// 98
// 46


// var numbers = [45, 87, 79, 56, 87, 98, 46, 45, 987, 33, 89];
// for(var i = 0; i < 8; i++){
//     var number = numbers[i];
//     console.log(number);
// }

// 45
// 87
// 79
// 56
// 87
// 98
// 46
// 45



// var numbers = [45, 87, 79, 56, 87, 98, 46, 45, 987, 33, 89];
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
// }


// 45
// 87
// 79
// 56
// 87
// 98
// 46
// 45
// 987
// 33
// 89



// var items = ['bottle', 'mouse', 'sunglass', 'pen'];
// for(var i = 0; i < items.length; i++){
//     var item = items[i];
//     console.log(item);
// }

// bottle
// mouse
// sunglass
// pen


// for(var i = 1; i <= 20; i++){
//     console.log(i);
//     if(i>100){
//         break;
//     }
// }


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
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20


// for(var i = 1; i <= 20; i++){
//     console.log(i);
//     if(i>5){
//         break;
//     }
// }

// 1
// 2
// 3
// 4
// 5
// 6


// var roastGiven = 0;
// while(roastGiven < 10){
//     console.log('Roast Done, Gift Items Ready!!!');
//     roastGiven++;
// }

// Roast Done, Gift Items Ready!!!
// Roast Done, Gift Items Ready!!!
// Roast Done, Gift Items Ready!!!
// Roast Done, Gift Items Ready!!!
// Roast Done, Gift Items Ready!!!
// Roast Done, Gift Items Ready!!!
// Roast Done, Gift Items Ready!!!
// Roast Done, Gift Items Ready!!!
// Roast Done, Gift Items Ready!!!
// Roast Done, Gift Items Ready!!!



// var roastGiven = 0;
// while (roastGiven < 10) {
//     console.log('Roast Done, Gift Items Ready!!!');
//     roastGiven++;

//     if(roastGiven > 4){
//         break;
//     }
// }

// Roast Done, Gift Items Ready!!!
// Roast Done, Gift Items Ready!!!
// Roast Done, Gift Items Ready!!!
// Roast Done, Gift Items Ready!!!
// Roast Done, Gift Items Ready!!!




// var items = ['bottle', 'mouse', 'sunglass', 'pen'];
// for(var i = 0; i < items.length; i++){
//     var item = items[i];
//     console.log(item);
// }

// bottle
// mouse
// sunglass
// pen






// var items = ['bottle', 'mouse', 'sunglass', 'pen'];
// for(var i = 0; i < items.length; i++){
//     var item = items[i];
//     if(item == 'pen'){
//         break;
//     }
//     console.log(item);
// }

// bottle
// mouse
// sunglass





// var numbers = [45, 87, 79, 56, 87, 98, 46, 45, 987, 33, 89];

// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     if(number > 100){
//         break;
//     }
//     console.log(number);
// }

// 45
// 87
// 79
// 56
// 87
// 98
// 46
// 45



// var numbers = [45, 87, 79, 56, 87, 98, 46, 45, 987, 33, 89];

// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     if (number > 100) {
//         continue; // directly stop this step then going front
//     }
//     console.log(number);
// }

// 45
// 87
// 79
// 56
// 87
// 98
// 46
// 45
// 33
// 89



// // reverse way ---> while
// var num = 10;
// while(num > 1){
//     console.log(num);
//     num--;
// }

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2


// var num = 10;
// while (num >= 1) {
//     console.log(num);
//     num--;
// }


// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1



// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }

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



// for(var i = 10; i > 1; i--){
//     console.log(i);
// }

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2



// for (var i = 10; i >= 1; i--) {
//     console.log(i);
// }

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1




// var moneyGiven = 1000;
// var applePrice = 400;
// var orangePrice = 300;

// var expense = applePrice + orangePrice;
// console.log(expense); // 700


// var giveBack = moneyGiven - expense;
// console.log(giveBack); // 300


// 75.25
// Mathematics, Biology, Chemistry, Physics, and Bangla

// var mathMarks = 75.25;
// var biologyMarks = 65;
// var chemistryMarks = 80;
// var physicsMarks = 35.45;
// var banglaMarks = 99.50;

// var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
// console.log(totalMarks); // 355.2

// var average = totalMarks / 5;
// console.log(average); // 71.03999999999999






// 75.25, 71.04, 80, 35.45, and 99.50
// Mathematics, Biology, Chemistry, Physics, and Bangla

// var mathMarks = 75.25;
// var biologyMarks = 71.04;
// var chemistryMarks = 80;
// var physicsMarks = 35.45;
// var banglaMarks = 99.50;

// var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
// console.log(totalMarks); // 355.2

// var average = totalMarks / 5;
// var averageTwoDecimal = average.toFixed(2);
// console.log(averageTwoDecimal); // 71.04



// var firstLine = "I am going to be";
// var secondLine = "an awesome web developer";
// var fullSentences = firstLine + ' ' +secondLine;
// console.log(fullSentences);

// I am going to be an awesome web developer



// divided and remainder
// var number = 119;
// var divided = number / 5;
// console.log(divided);

// 23.8


// var number = 119;
// var remainder = number % 5;
// console.log(remainder);

// 4

// var fruits = ['Apple', 'Banana', 'Orange'];
// Find the index of the array indexing
// var bananaIndex = fruits.indexOf('Banana');

// console.log(bananaIndex); // 1


// Banana replace in Mange
// var fruits = ['Apple', 'Banana', 'Orange'];
// Find the index of the array indexing
// var bananaIndex = fruits.indexOf('Banana');

// fruits[bananaIndex] = 'Mange'
// console.log(fruits); // [ 'Apple', 'Mange', 'Orange' ]


// Orange remove then addeded  in Watermelon
// var fruits = ['Apple', 'Banana', 'Orange'];
// Find the index of the array indexing
// var bananaIndex = fruits.indexOf('Banana');

// fruits[bananaIndex] = 'Mange'
// console.log(fruits); // [ 'Apple', 'Mange', 'Orange' ]
// fruits.pop();
// console.log(fruits); // [ 'Apple', 'Mange' ]
// fruits.push('Watermelon');
// console.log(fruits); // [ 'Apple', 'Mange', 'Watermelon' ]

/* 

0 to 32 is 'F' Grade
33 to 39 is 'D' Grade
40 to 59 is 'F' Grade
60 to 32 is 'F' Grade
0 to 32 is 'F' Grade
0 to 32 is 'F' Grade
0 to 32 is 'F' Grade


*/

// var jonaidMarks = 85;
// var tomMarks = 66;
// var janeMarks = 95;
// var peterMarks = 56;
// var johnMarks = 40;


// var num1 = 13;
// var num2 = 79;
// var num3 = 45;

// if(num1 > num2){
//     if(num1 > num3){
//         console.log(num1);
//     }
//     else{
//         console.log(num3);
//     }
// }
// else{
//     if(num2 > num3){
//     console.log(num2);
//     }
//     else{
//         console.log(num3);
//     }
// }

//79


// var num1 = 13;
// var num2 = 79;
// var num3 = 145;

// if (num1 > num2) {
//     if (num1 > num3) {
//         console.log(num1);
//     }
//     else {
//         console.log(num3);
//     }
// }
// else {
//     if (num2 > num3) {
//         console.log(num2);
//     }
//     else {
//         console.log(num3);
//     }
// }

//145

// var num1 = 113;
// var num2 = 79;
// var num3 = 45;

// if (num1 > num2) {
//     if (num1 > num3) {
//         console.log(num1);
//     }
//     else {
//         console.log(num3);
//     }
// }
// else {
//     if (num2 > num3) {
//         console.log(num2);
//     }
//     else {
//         console.log(num3);
//     }
// }

//113



// var side1 = 9;
// var side2 = 8;
// var side3 = 9;

// if(side1 == side2 || side1 == side2 || side2 == side3){
//     console.log('isosceles');

// }
// else{
//     console.log('Not isosceles');
// }

// Not isosceles
