function AskFromUser(nameOfValue, checkAccuracy = true) {
  while (true) {
    let result = prompt(`Enter ${nameOfValue}: `);

    if (!checkAccuracy) return result;

    if (result == "undefined" || result.length <= 0) {
      alert(`Please Enter ${nameOfValue}`);
      continue;
    }

    return result;
  }
}

function ShowToUser(message) {
  alert(message);
}

function CheckNumberValue(value, nameOfValue, moreThanZero = true) {
  value = Number.parseInt(value);

  if (isNaN(value)) {
    ShowToUser(`You must enter a  ${nameOfValue} value!`);
    return false;
  }

  if (moreThanZero && value < 0) {
    ShowToUser(`${nameOfValue} must be more than 0 !`);
    return false;
  }

  return true;
}

//#region Task Basic

function CalculateAge(birthYear) {
  return CURRENT_YEAR - birthYear;
}

//#region Task_1

// var userName = AskFromUser("Name", true);

// ShowToUser(`Hello, their ${userName}!`);

//#endregion

//#region Task_2

// const CURRENT_YEAR = 2022;

// while (true) {
//   let birthYear = AskFromUser("Birth Year", true);

//   let age = CalculateAge(birthYear);

// if(!CheckNumberValue(age,"Birth Year",false))
// continue;

//   ShowToUser(`Your Age: ${age}`);
// }

//#endregion

//#region Task_3

// while (true) {
//   var lengthSquare = AskFromUser("length of the square", true);

//   if (isNaN(lengthSquare)) {
//     ShowToUser("Length of Square must be a Number !");
//     continue;
//   }

//   ShowToUser(`Perimeter of Square: ${lengthSquare * 4}`);
// }

//#endregion

//#region Task_4

// while (true) {
//   var radiusCircle = AskFromUser("Circle of Radius", true);

//   if (isNaN(radiusCircle)) {
//     ShowToUser("Circle of Radius must be a Number !");
//     continue;
//   }

//   ShowToUser(`Area of Circle: ${3.14 * radiusCircle ** 2}`);
// }

//#endregion

//#endregion Task Basic

//#region Task Branch Operator

//#region Task_1

// function FindUserAgeGroup(age) {
//   if (age >= 0 && age < 12) return "child";
//   else if (age >= 12 && age < 18) return "teenager";
//   else if (age >= 18 && age < 60) return "adult";
//   else return "retiree";
// }

// while (true) {
//   var age = AskFromUser("Age", true);

//   // Check Age
// if(!CheckNumberValue(age,"Age"))
// continue;

//   // Find group
//   var ageGroup = FindUserAgeGroup(age);

//   ShowToUser(`You are a ${ageGroup}`);
// }

//#endregion

//#region Task_2

// function FindSpecialCharacter(selectedNumber) {
//   switch (selectedNumber) {
//     case 0:
//       return "~";
//     case 1:
//       return "!";
//     case 2:
//       return "@";
//     case 3:
//       return "#";
//     case 4:
//       return "$";
//     case 5:
//       return "%";
//     case 6:
//       return "^";
//     case 7:
//       return "?";
//     case 8:
//       return "*";
//     case 9:
//       return "`";
//     default:
//       return "?";
//   }
// }

// while (true) {
//   var userNumber = AskFromUser("Number", true);

// if(!CheckNumberValue(userNumber,"Selected Number"))
// continue;

//   // Find Special Character for Selected Number
//   var specialCharacter = FindSpecialCharacter(userNumber);

//   ShowToUser(`Your Special Character: ${specialCharacter}`);
// }

//#endregion

//#region Task_3

// function AskQuestion(question) {
//   while (true) {
//     let result = prompt(question);

//     if (result == "undefined" || result.length <= 0) {
//       alert(`Please enter ${nameOfValue}`);
//       continue;
//     }

//     result = result.toUpperCase();

//     console.log(result);

//     if (result != "A" && result != "B" && result != "C") {
//       alert("Answer can be A, B, C !");
//       continue;
//     }

//     return result;
//   }
// }

// function CheckAnswer(answer, correctVariant) {
//   if (answer.toUpperCase() == correctVariant.toUpperCase()) return 2;
//   else return 0;
// }

// const question1 =
//   "Which is the best programing language ?\nA)Python\nB)C#\nC)JavaScript (ES6)";

// const question2 = "Which is the best OS?\nA)MacOS\nB)Windows\nC)Linux";

// const question3 =
//   "Do you think this survey is objective?\nA)Of course 100% objective\nB)I didn't see this question\nC)No, this survey is not neutral.";

// var totalPoint = 0;
// // Question 1
// var answer = AskQuestion(question1);
// totalPoint += CheckAnswer(answer, "b");

// // Question 2
// answer = AskQuestion(question2);
// totalPoint += CheckAnswer(answer, "b");

// // Question 3
// answer = AskQuestion(question3);
// totalPoint += CheckAnswer(answer, "b");

// ShowToUser(`Your total score: ${totalPoint}/6`);

//#endregion

//#region Task_4

// function CheckYear(year) {
//   if (year < 4) return false;
//   else if (year == 4 || year == 400) return true;
//   for (let num = 2; num < year / 2; num++) {
//     if (year != 4 ** num) continue;

//     return true;
//   }

//   return false;
// }

// while (true) {
//   var year = AskFromUser("Year", true);

//   if (!CheckNumberValue(year, "Year")) continue;

//   if (CheckYear(year)) ShowToUser(`${year} is leap year`);
//   else ShowToUser(`${year} is not leap year`);
// }

//#endregion

//#endregion

//#region Task Loop

//#region Task_1

// function CalcSumOfNumbers(num) {
//   let sum = 0;
//   for (let index = 1; index <= num; index++) sum += index;
//   return sum;
// }

// while (true) {
//   var num = AskFromUser("Number");

//   if (!CheckNumberValue(num, "Number", true)) continue;

//   var sum = CalcSumOfNumbers(num);

//   ShowToUser(`Sum of All numbers: ${sum}`);
// }

//#endregion

//#region Task_2

// while (true) {
//   var num = AskFromUser("Number", true);

//   if (!CheckNumberValue(num)) continue;

//   ShowToUser(`Digits of number: ${num.length}`);
// }

//#endregion

//#region Task_3
/* 
  1  ~ More
  0  ~ Equal
  -1 ~ Less
*/
// var state = 0;
// var endValue = 100;
// var startValue = 0;
// var currentValue = 50;
// var condition = true;
// var diapason = 0;

// function AskState() {
//   while (true) {
//     let result = prompt(
//       `Your number: \n< ${currentValue} (1)\n== ${currentValue} (0)\n> ${currentValue} (-1)`
//     );

//     result = Number.parseInt(result);

//     if (isNaN(result)) {
//       alert("Invalid Answer Please try again !");
//       continue;
//     }

//     if (result > 0) result = 1;
//     else if (result < 0) result = -1;

//     state = result;
//     break;
//   }
// }

// alert("Welcome To \nGuest the number !!!");
// alert(
//   "Think a number fom 0 to 100 and answer question\nFinally I try to find that number."
// );
// while (condition) {
//   AskState();

//   if (state == 0) break;

//   switch (state) {
//     case 1:
//       diapason = endValue - currentValue;

//       if (diapason <= 1) {
//         condition = false;
//         currentValue = endValue;
//         break;
//       }

//       startValue = currentValue;
//       currentValue += Number.parseInt(diapason / 2);

//       if (currentValue == endValue) condition = false;

//       break;
//     case 0:
//       condition = false;
//       break;
//     case -1:
//       endValue = currentValue;
//       diapason = endValue - startValue;

//       if (diapason <= 1) {
//         condition = false;
//         currentValue = startValue;
//         break;
//       }

//       currentValue -= Number.parseInt(diapason / 2);

//       if (currentValue == startValue) condition = false;

//       break;
//     default:
//       break;
//   }
// }

// alert(`Yes !\nI find your number !\nYour number is ${currentValue}`);

//#endregion

//#endregion

//#region  Task Function

//#region Task_1

// function FindFactorial(number) {
//   let result = 1;
//   for (let index = 1; index <= number; index++) result *= index;

//   return result;
// }
// var num;
// var result;
// while (true) {
//   var num = AskFromUser("Number", true);

//   if (!CheckNumberValue(num, "Number")) continue;
//   result = FindFactorial(num);
//   ShowToUser(`${num}! = ${result}`);
// }

//#endregion

//#region Task_2

// function ConcatDigits(value) {
//   let digit = 1;
//   let result = 0;
//   let num;
//   for (let index = value.length - 1; index >= 0; index--) {
//     num = Number.parseInt(value[index]);
//     if (isNaN(num)) continue;

//     result += num * digit;
//     digit *= 10;
//   }

//   return result;
// }

// var num;
// while (true) {
//   let inputNumber = AskFromUser(
//     "Number Text (write as you want ;) except negative number) "
//   );
//   num = ConcatDigits(inputNumber);
//   ShowToUser(`Number is : ${num}`);
// }

//#endregion

//#region  Task_3

// function ExtractNumber(stringValue, readFromEnd = false) {
//   let digit = 1;
//   let start = 0;
//   let result = NaN;
//   let num;

//   if (readFromEnd) {
//     start = stringValue.length - 1;
//   }
//   for (
//     let index = readFromEnd ? stringValue.length - 1 : 0;
//     readFromEnd ? index >= 0 : index < stringValue.length;
//     readFromEnd ? index-- : index++
//   ) {
//     num = Number.parseInt(stringValue[index]);
//     console.log(`num: ${num}`);
//     if (isNaN(num)) return result;

//     if (isNaN(result)) result = 0;
//     result += num * digit;
//     digit *= 10;
//   }

//   return result;
// }

// function CalculateArea() {
//   let valueLenght = ExtractNumber(inputNumber);
//   let valueWidth = ExtractNumber(inputNumber, true);
//   console.log(`lenght: ${valueLenght}`);
//   console.log(`width: ${valueWidth}`);
//   if (isNaN(valueLenght)) return false;

//   if (isNaN(valueWidth)) {
//     num = valueLenght * 2;
//     nameOfFigure = "Square";
//   } else {
//     num = valueLenght * valueWidth;
//     nameOfFigure = "Rectangle";
//   }
//   return true;
// }

// var inputNumber;
// var nameOfFigure;
// var num;
// while (true) {
//   inputNumber = AskFromUser("Area values -> (X Y) or (Y)");

//   if (!CalculateArea()) {
//     ShowToUser("Please enter correctly values !");
//     continue;
//   }

//   ShowToUser(`Area of ${nameOfFigure}: ${num}`);
// }

//#endregion

//#endregion
