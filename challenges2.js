// -- VERY EASY ---// Write a function named min that takes two arguments and returns their minimum

var num1;
var num2; 
var result; 
function min(num1, num2){

    if(num1 > num2){
        result = num2; 
    }
    else if(num1 == num2){
        result = "no minimum found, both arguments are equal";
    }
    else{
        result = num1; 
    }
    
    return result + " is the minimum"; 
}

console.log(min(11, 10)); // Example input

// --- EASY ---// 
//Create an array of students holding their last name, first name, and age with 3 students.
//To validate, please log a greeting with the first name, last name and age of the 2nd 
//student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

const  studentArray = [['Doe', 'John', 19], ['Banks', 'Joe', 21], ['Ooga', 'Morris', 10]]; 

console.log("Hello, my name is " + studentArray[0][1] + " " + studentArray[0][0] +
            " and I'm " + studentArray[0][2] + " years old.");


// --- MEDIUM --- // 
//Create a program that accepts a number (1-12) as input and logs to the console that number
//and its corresponding month. For example: if the user enters the number 3, then it should
//return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1
//or greater than 12).

function monthGetter(){
    const monthsYear  = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                     'September', 'October', 'November', 'December'];

    var chooseMonth = prompt("Enter the month number: ");

    if(chooseMonth < 1 || chooseMonth > 12){
        var result = "INVALID MONTH INPUT";
    }
    else{
        var result = monthsYear[chooseMonth - 1];
    }

    return result; 

}

console.log(monthGetter());



// --- HARD --- // 
//Given the information below for Tom and Jerry. 
//Tom - 	height:  9in   	mass: 8 g
//Jerry - 	height: 10in 	mass: 45 g
//Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//BMI = mass / height ^2 = mass / (height * height)

//Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s.
//Create a Boolean variable containing information about whether Tom has a higher
//BMI than Jerry. Print a string to the console with the variable from step 3
//( e.g. Is Tom’s BMI higher than Jerry’s? false).


var tomHeight = 9; // WHY IS TOM SMALLER THAN JERRY AND 9 INCHES TALL???? 
var tomMass = 8;

var jerryHeight = 10; 
var jerryMass = 45; 

var tomBMI = calcBMI(tomHeight, tomMass); 
var jerryBMI = calcBMI(jerryHeight, jerryMass); 


function calcBMI(height, mass){
    var BMI = (mass)/(height * height);
    return BMI;
}

function compareBMI(bmi1, bmi2){
    var isLarger = Boolean(tomBMI > jerryBMI);
    var result = "Is Tom's BMI higher than Jerry's? " +  isLarger; 

    return result;
}

console.log(compareBMI(tomBMI, jerryBMI)); 