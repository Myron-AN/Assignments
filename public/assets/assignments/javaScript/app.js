
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// Chapter1

function AQ1() {
  window.alert("Greetings!");
}

function AQ2() {
  window.alert("Error! Please enter a valid password");
}

function AQ3() {
  window.alert("Welcome to JS land..\nHappy Coding!");
}

function AQ4() {
  window.alert("Welcome to JS Land...");
  window.alert("Happy Coding!");
}

function AQ5() {
  window.alert("Hello... I can run JS through my web browser's console");
}


// Chapter2


function VS1() {
  var username
  console.log(username);
}

function VS2() {
  var myName = "Myron";
  console.log(myName);
}

function VS3() {
  var message = "Hello World";
  alert(message);
}

function VS4() {
  var stName = "Jhone Doe";
  var age = "15 years old";
  var course = "Certified Mobile Application Development";
  alert(stName);
  alert(age);
  alert(course);
}

function VS5() {
  var food = "Pizza\nPizz\nPiz\nPi\nP";
  alert(food);
}

function VS6() {
  var email = "example@example.com"
  alert("My eamil address is" + " " + email);
}

function VS7() {
  var book = "A smarter way to learn JavaScript";
  alert("I am trying to learn from the Book" + "\n" + book);
}

function VS8() {
  var txt = "Yah! I can write HTML content through JavaScript";
  document.write(txt);
}

function VS9() {
  var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
  alert(a);
}


// Chapter 3

function VN1() {
  var age = 24;
  alert("i'm " + age + " years old");
}

function VN2() {
  var T = 15;
  alert("you have visited this site " + T + " times");
}

function VN3() {
  var birthYear = 1996;
  document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number");
}

function VN4() {
  var visitorName = "John Doe";
  var productTitile = "T-shirt(s)";
  var qty = 5;
  document.write(visitorName + " ordered " + qty + productTitile + " on XYZ Clothing store");
}





// Chapter 4

function ILL1() {
  var firstVariable = "Letters";
  var secondVariable = "Numbers";
  var thirdVariable = "Symbols";
  console.log(firstVariable + " " + secondVariable + " " + thirdVariable);
}

// // legal Variables
// var $name;
// var _name;
// var firstName;
// var myName0;
// var $my_1stName;
// // Illegal Varibale
// var my name;
// var alert;
// var $&62##;
// var 1st_name;
// var my-name;

function ILL2() {
  document.write("<strong>Rules for Naming JS variables!</strong>" + "<br><br>");
  document.write("Variable names can only contain numbers, letters, $ and _. For example: $my_1stVariable. <br>");
  document.write("Variable must begin with a letter, $ or _. For example: $name, _name or name. <br>");
  document.write("Variable name are case sensitive. <br>");
  document.write("Variable name should not be JS keywords. <br>");
}


// Chapter 5

function ME1() {
  var a = 5;
  var b = 5;
  var c = a + b;
  document.write("Sum of 5 and 5 is " + c + "<br>");
}

function ME2() {
  var d = 10;
  var e = 5;
  var f = d - e;
  document.write("Subtraction of 10 and 5 is " + f + "<br>");
  var g = 2;
  var h = 2;
  var i = g * h;
  document.write("Multiplication of 2 and 2 is " + i + "<br>");
  var j = 9;
  var k = 3;
  var l = j / k;
  document.write("Division of 9 and 3 is " + l + "<br>");
  var m = 8;
  var n = 2;
  var o = m % n;
  document.write("Modulus of 8 and 2 is " + o + "<br>");
}

function ME3() {
  var a;
  document.write("Value after variable declaration is " + a);
  a = 5;
  document.write("<br>Initial value " + a);
  ++a;
  document.write("<br>Value after increment is " + a);
  var b = a + 7;
  document.write("<br>Value after addition is " + b);
  --b;
  document.write("<br>Value after decrement is " + b);
  var c = 3 / b;
  console.log(c);
  document.write("<br>The remainder is: " + c);
}

function ME4() {
  var ticketPrice = 600;
  var ticketPurchased = 5;
  var total = ticketPrice * ticketPurchased;
  document.write("Total cost to buy " + ticketPurchased + " tickets to a movie is " + total + "PKR");
}


function ME5() {
  var a = 5;
  document.write("Table of " + a)
  var b = a * 1;
  document.write("<br>5 x 1 = " + b);
  var c = a * 2;
  document.write("<br>5 x 2 = " + c);
  var d = a * 3;
  document.write("<br>5 x 3 = " + d);
  var e = a * 4;
  document.write("<br>5 x 4 = " + e);
  var f = a * 5;
  document.write("<br>5 x 5 = " + f);
  var g = a * 6;
  document.write("<br>5 x 6 = " + g);
  var h = a * 7;
  document.write("<br>5 x 7 = " + h);
  var i = a * 8;
  document.write("<br>5 x 8 = " + i);
  var j = a * 9;
  document.write("<br>5 x 9 = " + j);
  var k = a * 10;
  document.write("<br>5 x 10 = " + k);
}

function ME6() {
  var tempInC = 25;
  var tempInF = (tempInC * 9 / 5) + 31;
  document.write(tempInC + "&#8451 is " + tempInF + "&#8457 <br>");
  var tempInF = 70;
  var tempInC = (tempInF - 32) * 5 / 9;
  document.write(tempInF + "&#8457 is " + tempInC + "&#8451");
}


function ME7() {
  var itemOnePrice = 650;
  var itemTwoPrice = 100;
  var qty1 = 3;
  var qty2 = 7;
  var shipCharges = 100;
  var total = (650 * 3) + (100 * 7) + 100;
  document.write(
    "<h1>Shopping Cart</h1>" +
    "<br>" +
    "Price of item 1 is " + itemOnePrice +
    "<br>" +
    "Quantity of item is " + qty1 +
    "<br>" +
    "Price of item 2 is " + itemTwoPrice +
    "<br>" +
    "Quantity of item is " + qty2 +
    "<br>" +
    "Shipping Charges " + shipCharges +
    "<br><br>" +
    "Total cost of your order is " + total
  );
}

function ME8() {
  var totalMarks = 980;
  var marksObt = 804;
  var percentage = marksObt / totalMarks * 100;
  document.write(
    "<h1>Mark Sheet</h1>" +
    "<br>" +
    "Total Marks: " + totalMarks +
    "<br>" +
    "Marks obtained: " + marksObt +
    "<br>" +
    "Percentage: " + percentage
  );
}

function ME9() {
  var usDollar = 104.80;
  var saudiRiyal = 28;
  var totalPkr = 10 * 104.80 + 25 * 28;
  document.write(
    "<h1>Currency in PKR</h1>" +
    "<br>" +
    "Total Currency in PKR: " + totalPkr
  );
}

function ME10() {
  var num = 7;
  var result = (7 + 5 * 10) / 2;
  alert("(7 + 5 * 10) / 2 = " + result)
}

function ME11() {
  var currentYear = 2020;
  var birthYear = 1996;
  var age = currentYear - birthYear;
  document.write(
    "<h1>Age Calculator</h1>" +
    "<br>" +
    "Current Year: " + currentYear +
    "<br>" +
    "Birth Year: " + birthYear +
    "<br>" +
    "Your Age is: " + age
  );
}

function ME12() {
  var radius = 20;
  var circumference = 2 * 3.142 * 20;
  var area = 3.142 * radius * radius;
  document.write(
    "<h1>The Geometrizer</h1>" +
    "<br>" +
    "Radius of a Circle: " + radius +
    "<br>" +
    "The Circumference is: " + circumference +
    "<br>" +
    "The Area is: " + area
  );
}

function ME13() {
  var snack = "Chocolate Chip";
  var currentAge = 24;
  var maximumAge = 84;
  var estAmount = 2;
  var supply = (maximumAge - currentAge) * estAmount;
  document.write(
    "<h1>The Lifetime Supply Calculator</h1>" +
    "<br>" +
    "Favourite Snack: " + snack +
    "<br>" +
    "Current Age: " + currentAge +
    "<br>" +
    "Edtimated Maximum Age: " + maximumAge +
    "<br>" +
    "Amount if snack per day: " + estAmount +
    "<br>" +
    "you You will need " + supply + " to last you until the ripe old age of " + maximumAge
  )
}

// Chapter 6-9

// Q1
function MEP1() {

  var a = prompt("Enter a random number");
  document.write("Result:" + "<br>" + "The Value of a is: " + a + "<br><br>" +
    "--------------------------" + "<br>")

  var b = ++a;
  document.write(
    "<br> The Value of ++a is: " + b +
    "<br> Now the value of a is : " + a +
    "<br>"
  )

  var c = a++;
  document.write(
    "<br> The Value of a++ is: " + c +
    "<br> Now the value of a is : " + a +
    "<br>"
  )

  var d = --a;
  document.write(
    "<br> The Value of --a is: " + d +
    "<br> Now the value of a is : " + a +
    "<br>"
  )

  var e = a--;
  document.write(
    "<br> The Value of a-- is: " + e +
    "<br> Now the value of a is : " + a +
    "<br>"
  )

}

// Q2
function MEP2() {

  var a = 2;
  var b = 1;
  document.write(
    "a = " + a +
    "<br>" +
    "b = " + b +
    "<br><br>"
  )

  var c = --a;
  document.write(
    "Value of --a is: " + c +
    "<br>" +
    "Now the value of a is: " + a +
    "<br><br>"
  )

  var d = --b;
  document.write(
    "Value of --b is: " + d +
    "<br>" +
    "Now the value of b is: " + b +
    "<br><br>"
  )

  var e = c - d;
  document.write(
    "Value of --a - --b is: " + e +
    "<br><br>"
  )

  var f = ++b;
  document.write(
    "Value of ++b is: " + f +
    "<br>" +
    "Now the value of b is: " + b +
    "<br><br>"
  )

  var g = c - d + f;
  document.write(
    "value of --a - --b + ++b is: " + g +
    "<br><br>"
  )

  var h = b--;
  document.write(
    "Value of b-- is: " + f +
    "<br>" +
    "Now the value of b is: " + b +
    "<br><br>"
  )

  var i = c - d + f + h;
  document.write(
    "Result of --a - --b + ++b + b-- is: " + i
  )

}

// Q3
function MEP3() {

  var name = prompt("Enter Your Name", "username");
  alert("Greetings " + name + "!");
}


// Q4
function MEP4() {

  var a = prompt("Enter a random number", "5");

  document.write("Table of " + a)
  var b = a * 1;
  document.write("<br>5 x 1 = " + b);
  var c = a * 2;
  document.write("<br>5 x 2 = " + c);
  var d = a * 3;
  document.write("<br>5 x 3 = " + d);
  var e = a * 4;
  document.write("<br>5 x 4 = " + e);
  var f = a * 5;
  document.write("<br>5 x 5 = " + f);
  var g = a * 6;
  document.write("<br>5 x 6 = " + g);
  var h = a * 7;
  document.write("<br>5 x 7 = " + h);
  var i = a * 8;
  document.write("<br>5 x 8 = " + i);
  var j = a * 9;
  document.write("<br>5 x 9 = " + j);
  var k = a * 10;
  document.write("<br>5 x 10 = " + k);

}

// Q5 
function MEP5() {

  var subOne = prompt("1st Subject Name");
  var totalMarks1 = +prompt("Total Marks");
  var obtMarks1 = +prompt("Obtained Marks");
  var resultOne = (obtMarks1 / totalMarks1) * 100;

  var subTwo = prompt("2nd Subject Name");
  var totalMarks2 = +prompt("Total Marks");
  var obtMarks2 = +prompt("Obtained Marks");
  var resultTwo = (obtMarks2 / totalMarks2) * 100;

  var subThree = prompt("3rd Subject Name");
  var totalMarks3 = +prompt("Total Marks");
  var obtMarks3 = +prompt("Obtained Marks");
  var resultThree = (obtMarks3 / totalMarks3) * 100;

  var overAllTotal = totalMarks1 + totalMarks2 + totalMarks3;
  var overAllObt = obtMarks1 + obtMarks2 + obtMarks3;
  var overAllPercentage = (overAllObt / overAllTotal) * 100;

  document.write(
    "<table style='width:40%'>" +

    "<tr>" +
    "<th>Subject</th>" +
    "<th>Total Marks</th>" +
    "<th>Obtained Marks</th>" +
    "<th>Percentage</th>" +
    "</tr>" +

    "<tr>" +
    "<td>" + subOne + "</td>" +
    "<td>" + totalMarks1 + "</td>" +
    "<td>" + obtMarks1 + "</td>" +
    "<td>" + resultOne + "%</td>" +
    "</tr>" +

    "<tr>" +
    "<td>" + subTwo + "</td>" +
    "<td>" + totalMarks2 + "</td>" +
    "<td>" + obtMarks2 + "</td>" +
    "<td>" + resultTwo + "%</td>" +
    "</tr>" +

    "<tr>" +
    "<td>" + subThree + "</td>" +
    "<td>" + totalMarks3 + "</td>" +
    "<td>" + obtMarks3 + "</td>" +
    "<td>" + resultThree + "%</td>" +
    "</tr>" +

    "<tr>" +
    "<th>" + "</th>" +
    "<th>" + overAllTotal + "</th>" +
    "<th>" + overAllObt + "</th>" +
    "<th>" + overAllPercentage + "%</th>" +
    "</tr>" +

    "<table>"
  )

}



// Chapter 9-11

// Q1

function UIC1() {
  var x = prompt("Enter your city name");
  if (x === "Karachi") {
    alert("Welcome to city of lights");
  }
}

function UIC2() {
  var gender = prompt("Enter your gender.");
  if (gender === "male") {
    alert("Good Morning Sir!");
  }
  else {
    alert("Good Morning Ma'am!");
  }
}

function UIC3() {
  var color = prompt("Traffic Light Color?");
  if (color === "red") {
    alert("Must Stop!");
  }
  else if (color === "yellow") {
    alert("Ready to move");
  }
  else if (color === "green") {
    alert("Move now!");
  }
  else {
    alert("Wrong Color!");
  }
}

function UIC4() {
  var fuel = +prompt("Current fuel?", "e.g: 0.05, 0.25, 1, 3, 5");
  if (fuel <= 0.25) {
    alert("Please refill the fuel in your car!");
  }
  else {
    alert("your good to go!");
  }
}

function UIC5() {
  var a = 4;
  if (++a === 5) {
    alert("given condition for variable a is true");
  }

  var b = 82;
  if (b++ === 83) {
    alert("given condition for variable b is true");
  }

  var c = 12;
  if (c++ === 13) {
    alert("condition 1 is true");
  }
  if (c === 13) {
    alert("condition 2 is true");
  }
  if (++c < 14) {
    alert("condition 3 is true");
  }
  if (c === 14) {
    alert("condition 4 is true");
  }

  var materialCost = 20000;
  var laborCost = 2000;
  var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
  }
  if (true) {
    alert("True");
  }
  if (false) {
    alert("False");
  }
}

function UIC6() {

  var english = +prompt("Marks Obtained in English", "total marks 100");
  var mathamatics = +prompt("Marks Obtained in Mathamatics", "total marks 85");
  var physics = +prompt("Marks Obtained in physics", "total marks 75");
  var totalMarks = 100 + 85 + 75;
  var totalObt = english + mathamatics + physics;
  var percentage = Math.round((totalObt / totalMarks) * 100);
  var grade;
  var remarks;

  if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent!"
  }
  else if (percentage >= 70) {
    grade = "A";
    remarks = "Good"
  }
  else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve"
  }
  else if (percentage < 60) {
    grade = "Fail";
    remarks = "Sorry"
  }
  else {
    alert("wrong input!");
  }

  document.write(
    "<h1>Mark Sheet</h1>" +
    "<br>" +
    "Total marks: " + totalMarks +
    "<br>" +
    "Marks obtained: " + totalObt +
    "<br>" +
    "Percentage: " + percentage + "%" +
    "<br>" +
    "Grade: " + grade +
    "<br>" +
    "Remarks: " + remarks +
    "<br>"
  )


}

function UIC7() {
  var guess = +prompt("Guess the secret number", "(range from 1-10)");
  var num = 7;
  var num2 = ++num;
  var num3 = --num;
  if (guess === num) {
    alert("Bingo!");
  }
  else if (guess === num2 || guess === --num) {
    alert("Close enough to the correct answer");
  }

  else {
    alert("Try agin");
  }
}

function UIC8() {
  var num = +prompt("Enter a random number");
  if (num % 3 === 0) {
    alert("Number is divisible by 3");
  }
  else {
    alert("Not divisible!");
  }
}

function UIC9() {
  var num = +prompt("Enter a number"); 150
  if (num % 2 === 0) {
    alert("Even Number");
  }
  else {
    alert("Odd Number");
  }
}

function UIC10() {
  var temp = +prompt("Enter the tempreature");
  if (temp > 40) {
    alert("It is too hot outside.");
  }
  else if (temp > 30) {
    alert("The Weather today is Normal.");
  }
  else if (temp > 20) {
    alert("Today’s Weather is cool.");
  }
  else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
  }
  else if (temp < 10) {
    alert("Freezing!");
  }
  else {
    alert("Wrong input!");
  }
}

function UIC11() {
  var firstNum = +prompt("first num");
  var operator = prompt("operator");
  var secondNum = +prompt("second num");
  var result;

  if (operator === "+") {
    result = firstNum + secondNum;
    alert(result);
  }
  else if (operator === "-") {
    result = firstNum - secondNum;
    alert(result);
  }
  else if (operator === "/") {
    result = firstNum / secondNum;
    alert(result);
  }
  else if (operator === "%") {
    result = firstNum % secondNum;
    alert(result);
  }

}




