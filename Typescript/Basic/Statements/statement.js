/*
control statements
if, if_else, nested if_elese switch,
continue, break.
*/
var count1 = 2;
if (count1 < 4) {
    console.log("Condition is true.");
}
var count2 = 3;
if (count2 > 0) {
    console.log("Number is Positive.");
}
else {
    console.log("Number is negative.");
}
var age = 5;
if (age > 0) {
    if (count2 > 18) {
        console.log("You are above 18 so eligible for vote.");
    }
    else {
        console.log("You are bellow 18 so not eligible for vote.");
    }
}
else {
    console.log("Invalid Age.");
}
var choice = 1;
switch (choice) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Foure");
        break;
    default:
        console.log("Your choice is above 4");
}
