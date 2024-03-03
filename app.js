
// =========================== chapter #04 ================================

// ====Assignment#02 ====
// === chapter #04 ===
// ====Question #01 =====
// var a, b, c;

// ====Assignment#02 ====
// === chapter #04 ===
// ====Question #02 =====

//*************5 legal variables names************

// 1: Using letters, digits, underscores, and dollar signs:
// var myVariable;

// 2: Starting with letters, underscores, or dollar signs
// var _variableName;

// 3: Using camelCase convention:
// var camelCaseVariable;

// 4: Declaring without assignment:
// var Login;

// 5: Underscore in variable name:
// var user_name;

//*************5 illegal variables names************

// 1: Starting with a number:
// var 1illegal;

// 2: Using spaces:
// var illegal variable;

// 3: Using reserved keywords:
// var break;

// Starting with special characters(except underscore _ or dollar sign $):
// var @illegal;

// Re - declaring with var:
// var x;
// var x; // Error: Identifier 'x' has already been declared

// ====Assignment#02 ====
// === chapter #04 ===
// ====Question #03 =====
// var heading = "<h1>Rules of naming Js Variables</h1></br>"
// document.write(heading)
// document.write("Variable names must start with a letter, an underscore ( _ ) or a dollar sign ( $ ).</br>")
// document.write("Variable names cannot contain spaces.</br>")
// document.write("Variables cannot be the same as reserved keywords such as if or const.</br>")
// document.write("By convention, JavaScript variable names are written in camelCase.</br>")


// =========================== chapter #05 ================================

// ====Assignment#02 ====
// =====chapter #05=====
// ====Question #01 =====
// var num1=3;
// var num2=5;
// var sum=num1+num2;
// document.write("Sum of 3 and 5 is "+sum);


// ====Assignment#02 ====
// =====chapter #05=====
// ====Question #02 =====
// var num1=3;
// var num2=5;
// var sub=num1-num2;
// document.write("Subtraction of 3 and 5 is "+sub);

// var num1=3;
// var num2=5;
// var multiple=num1*num2;
// document.write("multiplication of 3 and 5 is "+multiple);

// var num1=3;
// var num2=5;
// var div=num1*num2;
// document.write("division of 3 and 5 is "+div);

// var num1=3;
// var num2=5;
// var modu=num1%num2;
// document.write("modulus of 3 and 5 is "+modu);



// ====Assignment#02 ====
// =====chapter #05=====
// ====Question #03 =====
// ======== (a) =======
// var myVariable;
// ======== (b) =======
// document.write("value after variable declaration is "+myVariable+"</br>");
// ======== (c) =======
// var number=5;       

// ======== (d) =======
// document.write("Initial value is: "+number+"</br>");

// ======== (e) =======

// ++number;

// ======== (f) =======
// document.write("Value After Increamnt is :"+number+"</br>");

// ======== (g) =======
// var sum=number+7;

// ======== (h) =======
// document.write("value after addition is: "+sum+"</br>")

// ======== (i) =======
// --sum;
// ======== (j) =======
// document.write("value after decreament is :"+sum+"</br>");

// ======== (k) =======
// var remain=sum%3;

// ======== (l) =======
// document.write("The remainder is: "+remain+"</br>")


// ====Assignment#02 ====
// =====chapter #05=====
// ====Question #04 =====

// var costOfMovie="600";
// var totalCostOfMovie= costOfMovie*"5";
// document.write("Total cost to buy 5 tickets to a movie is: "+totalCostOfMovie+"PKR");


// ====Assignment#02 ====
// =====chapter #05=====
// ====Question #05 =====
// document.write("<h1>Table of Any Number</h1>")
// var four="5";
// num="1";
// var product=four*num;
// document.write(four+"x"+num+"="+product+"</br>");

// num++;
// var product=four*num;
// document.write(four+"x"+num+"="+product+"</br>");

// num++;
// var product=four*num;
// document.write(four+"x"+num+"="+product+"</br>");

// num++;
// var product=four*num;
// document.write(four+"x"+num+"="+product+"</br>");

// num++;
// var product=four*num;
// document.write(four+"x"+num+"="+product+"</br>");

// num++;
// var product=four*num;
// document.write(four+"x"+num+"="+product+"</br>");

// num++;
// var product=four*num;
// document.write(four+"x"+num+"="+product+"</br>");

// num++;
// var product=four*num;
// document.write(four+"x"+num+"="+product+"</br>");
// num++;
// var product=four*num;
// document.write(four+"x"+num+"="+product+"</br>");

// num++;
// var product=four*num;
// document.write(four+"x"+num+"="+product+"</br>");

// document.write("<h1>Table of Any Number</h1>")
// var table=10;
// num=1;
// document.write(table+"x" + num++ +"=" +table*1 +"</br>");
// document.write(table+"x" + num++ +"=" +table*2 +"</br>");
// document.write(table+"x" + num++ +"=" +table*3 +"</br>");
// document.write(table+"x" + num++ +"=" +table*4+"</br>");
// document.write(table+"x" + num++ +"=" +table*5+"</br>");
// document.write(table+"x" + num++ +"=" +table*6+"</br>");
// document.write(table+"x" + num++ +"=" +table*7+"</br>");
// document.write(table+"x" + num++ +"=" +table*8+"</br>");
// document.write(table+"x" + num++ +"=" +table*9+"</br>");
// document.write(table+"x" + num++ +"=" +table*10+"</br>");


// ====Assignment#02 ====
// =====chapter #05=====
// ====Question #06 =====
// var Celsius="25";
// var fahrenheit=(Celsius*9/5)+32;
// document.write(Celsius+"'C is "+fahrenheit+"'F"+"</br>");


// var fahrenheit="70";
// var Celsius=(fahrenheit-32)*5/9;
// document.write(fahrenheit+"'C is "+Celsius+"'F");



// ====Assignment#02 ====
// =====chapter #05=====
// ====Question #07 =====
// document.write("<h1>SHOPPING STORE</h1>")
// var priceOfItem1=650;
// var priceOfItem2=100;
// var oderQuantityOfItem1=3;
// var oderQuantityOfItem2=7;
// var shippingCharges=100;

// var totalCostOfOrder=(priceOfItem1*oderQuantityOfItem1)+(priceOfItem2*oderQuantityOfItem2)+shippingCharges;
// document.write("Price of item1 is "+priceOfItem1+"</br>"+"Oder Quantity of item1 is "+oderQuantityOfItem1+"</br>"+"Price of item2 is "+priceOfItem2+"</br>"+"Oder Quantity of item2 is "+oderQuantityOfItem1+"</br>"+"Shipping Charges is "+shippingCharges+"</br>"+"</br>")
// document.write("Total cost of your order is "+totalCostOfOrder);



// ====Assignment#02 ====
// =====chapter #05=====
// ====Question #08 =====
// document.write("<h1>MARKSHEET</h1>")
// var totalMarks="980";
// var obtMarks="804";
// var percentage=obtMarks/totalMarks*100;
// document.write("Total Marks:980"+"</br>"+"Marks Obtained:804"+"</br>")
// document.write("Percentage:"+percentage+"%");


// ====Assignment#02 ====
// =====chapter #05=====
// ====Question #09 =====
// document.write("<h1>Currency IN PKR</h1>")
// var usDollar="10";
// var saudiRiyal="25";
// var rupeesInPkr=(usDollar*104.80)+(saudiRiyal*28);
// document.write("Total Rupees in PKR: "+"Rs "+rupeesInPkr);



// ====Assignment#02 ====
// =====chapter #05=====
// ====Question #10 =====
// var bodmas=(5*10)/2;
// document.write(bodmas);



// ====Assignment#02 ====
// =====chapter #05=====
// ====Question #11 =====
// document.write("<h1>Age Calculator</h1>")
// var currentYear="2024";
// var birthYear="2002";
// var age=currentYear-birthYear;
// document.write("Current Year: "+currentYear+"</br>"+"Birth Year: " +birthYear+"</br>")
// document.write("Your Age is: "+age);



// ====Assignment#02 ====
// =====chapter #05=====
// ====Question #12 =====
// document.write("<h1>The Geometrizer</h1>")
// var radius="20"
// var circum=2*(3.142)*radius;
// var area=3.142*(radius*radius);
// document.write("Radius of a circle: "+radius+"</br>")
// document.write("The Circumference is "+circum+"</br>");
// document.write("The Area is "+area);




// ====Assignment#02 ====
// =====chapter #05=====
// ====Question #13 =====
// document.write("<h1>Life Time Calculator</h1>")
// var age ="15"; 
// var maxAge ="65";
// var snacksPerDay ="3"; 

// var yearsRemaining=maxAge-age;
// var chocolatechip=yearsRemaining * 365 * snacksPerDay;
// document.write("Favorite snacks: Chocolate Chip"+"</br>"+"Current Age: "+age+"</br>"+"Estimated Maximum:"+maxAge+"</br>"+"Amount snacks per day: "+snacksPerDay+"</br>");
// document.write("You will need "+chocolatechip+" " +"chocolate chip to last you until the age of "+maxAge)


// =========================== chapter #06 ================================

// ====Assignment#02 ====
// =====chapter #06=====
// ====Question #1 =====
// document.write("Result:"+"</br>"+"</br>");
// var a=10;


// document.write("The value of a is: "+a+"</br>");
// document.write("---------------------------------------------"+"</br>");
// ++a;
// document.write("The value of a is: "+a+"</br>");
// document.write("Now the value of a is: "+a+"</br>"+"</br>");


// var y=a++;
// document.write("The value of a is: "+y+"</br>");
// document.write("Now the value of a is: "+a+"</br>"+"</br>");

// --a;
// document.write("The value of a is: "+a+"</br>");
// document.write("Now the value of a is: "+a+"</br>"+"</br>");

// var y=a--;
// document.write("The value of a is: "+y+"</br>");
// document.write("Now the value of a is: "+a+"</br>");


// ====Assignment#02 ====
// =====chapter #06=====
// ====Question #02 =====
// var a=2;
// var b=1;
// var result=--a;
// document.write("a is "+a +"</br>");
// document.write("b is "+b +"</br>");
// document.write("result is "+result+"</br>"+"</br>");
// var result=--a - --b;
// document.write("a is "+a +"</br>");
// document.write("b is "+b +"</br>");
// document.write("result is "+result+"</br>"+"</br>");
// var result=--a - --b + ++b;
// document.write("a is "+a +"</br>");
// document.write("b is "+b +"</br>");
// document.write("result is "+result+"</br>"+"</br>");
// var result=--a - --b + ++b + b--;
// document.write("a is "+a +"</br>");
// document.write("b is "+b +"</br>");
// document.write("result is "+result);

// ====Assignment#02 ====
// =====chapter #06=====
// ====Question #03 =====
// var naam= prompt("enter your name");
// document.write("Hello "+ naam + "how are you");

// ====Assignment#02 ====
// =====chapter #06=====
// ====Question #05 =====
// var table =+prompt("Enter a number");
// if(table===0) {
//     table=5;
// }
// document.write("<h2>Multiplication table of "+table+"</h2>");
// document.write(table + " x 1 = " + table * 1 + "</br>");
// document.write(table + " x 2 = " + table * 2 + "</br>");
// document.write(table + " x 3 = " + table * 3 + "</br>");
// document.write(table + " x 4 = " + table * 4 + "</br>");
// document.write(table + " x 5 = " + table * 5 + "</br>");
// document.write(table + " x 6 = " + table * 6 + "</br>");
// document.write(table + " x 7 = " + table * 7 + "</br>");
// document.write(table + " x 8 = " + table * 8 + "</br>");
// document.write(table + " x 9 = " + table * 9 + "</br>");
// document.write(table + " x 10 = " + table * 10);

// ====Assignment#02 ====
// =====chapter #06=====
// ====Question #06 =====
// a) Take three subjects names from the user and store them in 3 different variables.
// var subject1 = prompt("Enter name of first subject:");
// var subject2 = prompt("Enter name of second subject:");
// var subject3 = prompt("Enter name of third subject:");

// // b) Total marks for each subject is 100, store it in another variable.
// var totalMarks = 100;

// // c) Take obtained marks for the first subject from the user and store it in a different variable.
// var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

// // d) Take obtained marks for the remaining 2 subjects from the user and store them in variables.
// var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// // e) Now calculate total marks and percentage and show the result in the browser
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// // Displaying the result in a table format
// document.write("<h2>Result</h2>");
// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><td colspan='3'>Total Obtained Marks: " + totalObtainedMarks + "</td></tr>");
// document.write("<tr><td colspan='3'>Percentage: " + totalPercentage.toFixed(2) + "%</td></tr>");
// document.write("</table>");

var subject1= prompt("Enter First subject name");
var subject2= prompt("Enter Second subject name");
var subject3= prompt("Enter Third subject name");
var totalMarks=100;
var obtMarks1=+prompt("Enter obtained marks for "+subject1);
var obtMarks2=+prompt("Enter obtained marks for "+subject2);
var obtMarks3=+prompt("Enter obtained marks for "+subject3);
var percentage1= obtMarks1/totalMarks*100;
var percentage2= obtMarks2/totalMarks*100;
var percentage3= obtMarks3/totalMarks*100;
var obtainedMarks= obtMarks1 + obtMarks2 + obtMarks3;
var percentage= (obtainedMarks/(totalMarks*3))*100;

document.write("<h2>Result</h2>");

document.write("<table border='2'>");
document.write("<tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr>");
document.write("<tr> <td>"+subject1+"</td> <td>"+totalMarks+"</td> <td>"+obtMarks1+"</td> <td>"+percentage1+"%"+"</td></tr>");
document.write("<tr> <td>"+subject2+"</td> <td>"+totalMarks+"</td> <td>"+obtMarks2+"</td> <td>"+percentage2+"%"+"</td></tr>");
document.write("<tr> <td>"+subject3+"</td> <td>"+totalMarks+"</td> <td>"+obtMarks3+"</td><td>"+percentage3+"%"+"</td></tr>");
document.write("<tr> <td>Total Marks "+totalMarks*3+"</td> <td> Obtained marks "+obtainedMarks+"</td> <td colspan='3'>Percentage " +percentage+"%"+"</td></tr>");
document.write("</table>");
