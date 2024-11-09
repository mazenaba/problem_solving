
//   // Q 1---->
// var x = window.prompt("(problem 1) enter your number");
// console.log(x); 

// // Q 2 --------
// var num = Number(window.prompt("(problem 2)enter your number"));

// if (num % 3 == 0 && num % 4 == 0) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
// // q3-------->
// var num1 = Number(window.prompt("(problem 3)enter your first number"));
// var num2 = Number(window.prompt("enter your second number"));

// if (num1 > num2) {
//   console.log(num1);
// } else if (num1 < num2) {
//   console.log(num2);
// } else {
//   console.log("equal numbers");
// }

// // q4...........>

//   var userInput = parseInt(window.prompt("(problem 4)Enter an integer:"));

// if (userInput < 0) {
//   console.log("negative");
// } else if (userInput > 0) {
//   console.log("positive");
// } else {
//   console.log("The number is zero.");
// }

// Q5..............>
// var num_1 = parseInt(window.prompt("(problem 5)Enter 1st integer:"));
// var num_2 = parseInt(window.prompt("Enter 2nd integer:"));
// var num_3 = parseInt(window.prompt("Enter 3rd integer:"));
// var max = Math.max(num_1, num_2, num_3);
// var min = Math.min(num_1, num_2, num_3);
// console.log("max element is :", max);
// console.log("min element is :", min);

// Q6 ---------------->>

// var number = parseInt(window.prompt("(problem 6)Enter an integer:"));
// if (number % 2 == 0)
//    {console.log("even");}
//  else 
// {console.log("odd");}

// // Q7  ((((-----No question Added-------))))
// ''''''''''''''''''''''''''''''//
// // Q8 ---------------->>>
// var char = window.prompt("enter a character :");

// if (
//   char === "a" ||
//   char === "e" ||
//   char === "i" ||
//   char === "o" ||
//   char === "u"
//                   ) 
// {console.log("vowel");} 
// else 
// { console.log("consonant");}
// Q9 -----loops------->>>>
// var count = parseInt(window.prompt("(problem 8) enter the number :"));
// for (var i = 1; i <= count; i++)
//    {console.log(i); }
// Q10 ------------>>>
  //  var count =parseInt(window.prompt("porplem 10) enter the number:"));
  //  for (let i = 1; i <= 12; i++)  {
  //    console.log(i * count )
  //  }
//  Q11 --------------->>> 
// var number = parseInt(window.prompt("(problem 11)Enter an integer:"));
// for( var i=1 ; i <= number ; i++ )
//   {
//     if (i % 2 == 0)
//       console.log(i)
//   }
// Q12 ------------>>

// var number_1 = parseInt(window.prompt("enter a number :"));
// var number_2 = parseInt(window.prompt("enter the number to the power :"));
// var result = Math.pow(number_1, number_2);
// console.log(result);

//Q13 ----------->>
// var subject_1 = parseInt(window.prompt("enter your first subject marks :"));
// var subject_2 = parseInt(window.prompt("enter your second subject marks :"));
// var subject_3 = parseInt(window.prompt("enter your third subject marks :"));
// var subject_4 = parseInt(window.prompt("enter your fourth subject marks :"));
// var subject_5 = parseInt(window.prompt("enter your fifth subject marks :"));

// var total = subject_1 + subject_2 + subject_3 + subject_4 + subject_5;

// var average = total / 5;
// var percentage = (total / 500) * 100;

// console.log("total marks is = ", total);
// console.log("average marks is :", average);
// console.log("your percentage is :", percentage);
// Q14----------------->>
// var month_number = parseInt(window.prompt("enter your month  number :"));
// if (
//   month_number == 1 ||
//   month_number == 3 ||
//   month_number == 5 ||
//   month_number == 7 ||
//   month_number == 8 ||
//   month_number == 10 ||
//   month_number == 12
// ) {
//   console.log("days in month = 31 ");
// } else if (month_number < 0 || month_number > 12) {
//   console.log("please enter valid month");
// } else {
//   console.log("days in month = 30 ");
// }
//  Q15 ------------>>>
// var physics = Number(window.prompt("enter your physics subject marks :"));
// var chemistry = Number(window.prompt("enter your chemistry subject marks :"));
// var biology = Number(window.prompt("enter your biology subject marks :"));
// var Mathematics = Number(window.prompt("enter your Mathematics subject marks :"));
// var computer = Number(window.prompt("enter your computer subject marks :"));

// var result = physics + chemistry + biology + Mathematics + computer;
// var percentage = (result / 500) * 100;

// console.log("percentage :", percentage);
// if (percentage >= 90) {
//   console.log("Grade A");
// } 
// else if (percentage >= 80 && percentage < 90) {
//   console.log("Grade B");
// }
//  else if (percentage >= 70 && percentage < 80) {
//   console.log("Grade C");
// }
//  else if (percentage >= 60 && percentage < 70) {
//   console.log("Grade D");
// }
//  else if (percentage >= 50 && percentage < 60) {
//   console.log("Grade E");
// }
//  else if (percentage < 40) {
//   console.log("Grade F");
// }
//  else {
//   console.log("not in range");
// }


// -----------------switch case -----------------

//   Q16-------->
//  var month_number = parseInt(window.prompt("enter your month  number :"));
//  switch (month_number) {
//    case 1:     
//    case 2:     
//    case 3:
//    case 4:
//    case 5:
//    case 6:
//    case 7:
//    case 8:
//    case 9:
//    case 10:
//    case 11:
//    case 12:

//      console.log("31 days");
//      break;
//      default:
//        console.log("please enter valid month");
//        break
//  }
 // Q17 ------------>>
// var userInput = prompt("Please enter a single alphabet character:");
// var char = userInput.toLowerCase();
// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
//    {
//   console.log("Output: vowel");
// } else if (char >= 'a' && char <= 'z') {
//   console.log("Output: consonant");
// } else {
//   console.log("Output: Please enter a valid alphabet character.");
// }
// ------------switch case----------------
// var character = window.prompt("enter your alphabet");
// switch (character) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("The entered alphabet is a vowel.");
//     break;

//   default:
//     console.log("The entered alphabet is a consonant.");
//     break;
// }
// Q18 ------------>>

// var number1 = parseInt(window.prompt("enter first  number :"));
// var number2 = parseInt(window.prompt("enter seconde  number :"));

// switch (number1 > number2) {
//   case true:
//     console.log("the maximum number is ", number1);
//     break;
//   case false:
//     console.log("the maximum number is ", number2);
//     break;
// }
// Q19 ------------>>
// var x = parseInt(window.prompt("enter a number to check if even or odd :"));
// switch (x % 2 == 0) {
//   case true:
//     console.log("this number is even ");
//     break;
//   case false:
//     console.log("this number is odd");
//     break;
// }
// Q20----------------->
// var n = parseInt(
//   window.prompt("enter a number to check if postive or negative or zero :")
// );

// switch (true) {
//   case n > 0:
//     console.log("positive number");
//     break;
//   case n < 0:
//     console.log("negative number");
//     break;
//   case n === 0:
//     console.log("zero");
//     break;
// }

// Q21 ----Calculator------------>
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Choose an operation (+, -, *, /):");

var result;
if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  if (num2 !== 0) {
      result = num1 / num2;
  } else {
      result = "Error: Division by zero";
  }
} else {
  result = "Invalid operation";
}

// Display the result
console.log("Output:", result);


// ===========================================================================
var number_1 = parseFloat(window.prompt("enter the first number :"));
var operator = window.prompt("Enter an operator (+, -, *, /):");
var number_2 = parseFloat(window.prompt("enter the second number :"));
var result;
switch (operator) {
  case "+":
    result = number_1 + number_2;
    console.log(result);
    break;
  case "-":
    result = number_1 - number_2;
    console.log(result);
    break;
  case "*":
    result = number_1 * number_2;
    console.log(result);
    break;
  case "/":
    if (number_2 != 0) {
      result = number_1 / number_2;
      console.log(result);
    } else {
      console.log("Error! Division by Zero");
    }
    break;
  default:
    console.log("Invalid operator.");
    break;
}
