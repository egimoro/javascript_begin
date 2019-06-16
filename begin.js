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