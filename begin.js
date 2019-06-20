/* Data types:
undefined, null, boolean, string, symbol, number, and object */

var a;

var b = 2;

console.log(a);

a = 7;

b = a;

console.log(a)

//Initializing a value

var a = 5;

var b = 10;

var c = "I am a";

a = a + 1;

b = b + 5;

c = c + " String!";

console.log(a);

console.log(b);

console.log(c);

//Case sensitive variables
// Declarations
var studlyCapVar;

var properCamelCase;

var titleCaseOver;

//Assignments
studlyCapVar = 10;

properCamelCase = "A String";

titleCaseOver = 9000;

//adding numbers
var sum = 10 + 10;

console.log(sum);

// Subtracting numbers

var subtraction = 30 - 15;

console.log(subtraction);

// incrementing numbers

var myVar = 87;

myVar++;

console.log(myVar);

//decrementing numbers

var myVar = 11;

myVar--;

console.log(myVar);

//multiply decimoals

var product = 2.0 * 2.5;

console.log(product);

//dividing decimal numbers

var quotient = 4.4 / 2.0;

console.log(quotient); 

// remainder

var remainder;

remainder = 11 % 3;

console.log(remainder);

// compound assignment with augmented addition

var a = 3;

var b = 17;

var c = 12;

a += 12;

b += 9;

c += 7

console.log(a,b,c)

// compound assignment with augmented subtraction

var a = 11;

var b = 9;

var c = 3;

a -= 6;

b -= 15;

c -= 1;

console.log(a,b,c)

// compound assignment with augmented multiplication

var a = 15;

var a = 5;

var b = 12;

var c = 4.6;

a *= 5;

b *= 3;

c *= 10;

// compound assignment with augmented division

var a = 48;

var b = 108;

var c = 33;

a /= 12;

b /= 4;

c /= 11;

console.log(a,b,c);

// Declare string variables

var myFirstName = "Lorte";

console.log(myFirstName);

//Escaping literal quotes in strings

var mystr = "I am a \"double quoted\" string inside \"double quotes\"";

console.log(mystr);

// Quoting strings with single quotes

var mystr = '<a href="http://www.example.com" target="_blank">Link</a>';

console.log(mystr);

// Escape Sequences in Strings

/*****
  Code output
\' single quote
\"" double quote
\\ backlash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*****/

var myStr = "FirstLine\n\t\SecondLine\nThirtirdLine";

console.log(myStr);

// Concatenating strings with  plus operators

var ourStr = "I come first. " + "I come second.";

console.log(ourStr);

// Concatenating strings with plus += operators

var ourStr = "I come first. ";

ourStr += "I come second.";

console.log(ourStr);

//Constructing strings with variables

var ourName = "freecodecamp";

var ourStr = "Hello, our name is " + ourName + ", how are you?";

console.log(ourStr)

var myName = "Huey";

var myStr = "My name is " + myName + " and I am well!!!1"

console.log(myStr)

//Appending variables to strings

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

//Find length of string

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);

//Bracket Notation to Find First character in string

var firstLetterOfLastName = "";
var lastName = "Dinace";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

//String immutability

var myStr = "Jello World";
myStr = "Hello World";
console.log(myStr);

//Bracket notation to find Nth Character in String

var lastName = "Dinace";
var thirdLetterofLastName = lastName[2];
console.log(thirdLetterofLastName);

// Bracket Notation to find last Character in String

var lastName = "Dinace";
var lastLetterofLastName = lastName[lastName.length-1];
console.log(lastLetterofLastName);


// Bracket Notation to find Nth-to-last Character in String

var lastName = "Dinace";
var secondToLastLetterOfLastName = lastName[lastName.length-2];
console.log(secondToLastLetterOfLastName);

//Word blanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb +"."
  return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

//Srore multiple values with arrays

var myArray = ["Quincty", 1];
console.log(myArray);

//Nested arrays

var myArray = [["Bulls", 23], ["White Sox"]];
console.log(myArray);

//Access Array Data with Indexes

var myArray = [50,60,70];
var myData = myArray[0];
console.log(myData);

//Modify array data with indexes

var myArray = [18,64,99];
myArray[1] = 45;
console.log(myArray);

//Access multi-dimensional arrays with indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
console.log(myData);

// Manipulate array with push()

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 23]);
console.log(myArray);

// Manipulate array with pop()
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray);

// Manipulate array with shift()
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.shift();
console.log(myArray);

// Manipulate array with unshift()
var myArray = [["John", 23], ["cat", 2]];
myArray.shift();
myArray.unshift(["Paul", 35]);
console.log(myArray);

//Shopping list
var myList = [["cereal",3], ["milk", 2], ["juice", 2], ["eggs", 12]];
console.log(myList);

//Write Reusable code with functions
function ourReusableFunction() {
  console.log("Heya, World");
}

ourReusableFunction();

//Passing values to functions with arguments
function functionWithArgs(a,b) {
  console.log(a-b);
}

functionWithArgs(10, 5);

// Global scope and functions
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

// local scope and functions
function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();

// Global vs local scope and functions
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

console.log(myOutfit());
console.log(outerWear)

// Return a value from a Function with Return
function minusSeven(num) {
  return num -7;
}

console.log(minusSeven(10));

function timesFive(num) {
  return num * 5;
}
console.log(timesFive(5));

// Understanding Undefined value returned from a function

var sum = 0;
function addThree() {
  sum += 3;
}

console.log(addThree(6));

//Assignment with a Returned Value
var changed = 0;

function change(num) {
  return (num + 5)/3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
  return (num +3)/5;
}

processed = processArg(7)
console.log(processed)

// Stand in line

function nextInLine(arr, item) {
  arr.push(item)
  return arr.shift(); //removes and returns first item which is 1
}

var testArr = [1,2,3,4,5];

console.log("Before:" + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Boolean values
function ourTrueorFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, that is true";
  }
  return "No, it is false";
}
console.log(ourTrueorFalse(true));

// Comparison with the Equality Operator

function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));

//Comparison with the strict equality operator

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict(10));

//Practice comparing different values
function compareEquality(a,b) {
  if (a == b){
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(10, "10"));

// Comparison with the inequality operator
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual(10));

// Comparison with the Strict Inequality operator
function testStrictNotEqual(val) {
  if (val != 17) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testStrictNotEqual(10));

// Comparisons with the logical and operators
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
console.log(testGreaterThan(10));

//Comparison with Greater than or Equal to Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }
  return "Less than 10";
}
console.log(testGreaterOrEqual(10));

//Comparison with the less than operator
function testLessThan(val) {
  if (val < 20) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under 55";
  }
  return "55 or Over";
}
console.log(testLessThan(10));

// Comparison with the less than or equal to operator
function testLessOrEqual(val) {
  if (val < 12) {
    return "Smaller Than  or Equal to 12";
  }
  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }
  return "More than 24";
}
console.log(testLessOrEqual(10));

// Comparisons with the logical and operator

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(29));

// Comparisons with the logical or operator
function testLogicalOr(val) {
  if (val < 10 || val>20) {
    return "Outside";
  }

  return "Inside";
}

console.log(testLogicalOr(15));

//Else statements
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  } 
  return result;
  }
  console.log(testElse(66));

// Else if statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
  
}
console.log(testElseIf(7));

// Logical order in If else statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 5) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(orderMyLogic(3));

// Chaining if Else Statements

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testSize(99));

// Golf code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes <= par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}

console.log(golfScore(7,2));

// Switch statements

function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
console.log(caseInSwitch(6));

// Default option in switch statements
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
        answer = "bird";
        break;
    case "c":
        answer = "cat";
        break;
        default:
          answer = "stuff";
  }
  return answer;
}
console.log(switchOfStuff("c"));

// Multiple identicaloptions in switch statements
function sequentialSizes(val) {
  var answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;

  }
  return answer;
}

console.log(sequentialSizes(8));

// Replacing if else chains with switch
function chainToSwitch(val) {
  var answer = "";
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much";
      break;
    case 7:
      answer = "Ate Nine";
      break;   
  }
  return answer; 
}
console.log(chainToSwitch(7));

// Returning boolean values from functions
function isLess(a,b) {
  return a < b;
}
console.log(isLess(5,6));

// Returning early pattern from functions
function abTest(a, b){
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2, 2));

// Counting cards

var count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
      
  }
  var holdbet = 'Hold';
  if (count > 0) {
    holdbet = "Bet"
  }
  return count + " " + holdbet;
}
cc(2); cc('K'); cc(7); cc('K'); cc('A');
console.log(cc(4));

// Build javascript objects

var myDog = {
  "name": "Rantino",
  "legs": 2,
  "hands": 2,
  "friends": ["Some", 5]
};
console.log(myDog);

// Accessing object properties with dot notation

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue);
console.log(shirtValue);

// Accessing object properties with bracket notation
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];
console.log(entreeValue, drinkValue);

// Accessing object properties with variables

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playNumber = 16;
var player = testObj[playNumber];
console.log(player);

// Updating object properties

var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 9,
  "friends": ["freeCode Campers", 100]
};
console.log(myDog.name);
myDog.name = "Frappy Lapper";
console.log(myDog);

// Add new properties to an object
var myDog = {
  "name": "Frappy Lapper",
  "legs": 4,
  "tails": 9,
  "friends": ["freeCodeCamp Campers", 100]
};
myDog["bark"] = "arf!";
console.log(myDog);

// Delete properties from an object

delete myDog.bark;
console.log(myDog);

// Using objects for lookups

function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "frank"
};
result = lookup[val];
return result;
};
console.log(phoneticLookup("foxtrot"));

//Testing objects for properties
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "not found";
  }
};
console.log(checkObj("bed"));

// Manipulating complex objects


