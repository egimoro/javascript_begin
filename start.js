/*var myValue = 'Hello World';
var myNum = 10;

let a = 100;
let b = 200;
const c = 300;

if(a){
    console.log(a);
    let d = 'Anything';
    console.log(d);
}
console.log(d);*/



//console.log(a,b,c);

//let result = prompt('What is your name?');

//console.log(result);
//console.log(document);
//console.dir(document);

/* let myObj={first: "wer", last: "Sort"};
console.log(myObj);
myObj.first='Jol';
console.log(myObj);

let myChair = {color: 'blue', wheels: 4, age: 14}

console.log(myChair);

myObj['second'] = 'second';

let holder = 1;

myObj['a'+holder] ='third';
console.log(myObj);

console.log(document.lastModified);

 */


let myArray = ['Hello', 'World', 50, false];
console.log(myArray);
console.log(myArray[0]+""+myArray[1]);

myArray[myArray.length] = 'New item';

console.log(myArray);
let lastone = myArray.push('At the End');
console.log(lastone);

//myArray.pop();
//console.log(myArray);
//let firstone = myArray.shift();
//console.log(firstone);

/* let rep = myArray.splice();
console.log(rep);
 */

let res = myArray.slice(3);
myArray[3]=true;
console.log(res);
let myStr = myArray.toString();
let myArray2 = myStr.split(',');
let myArray3 = myArray.join('-');
console.log(myStr);
console.log(myArray2);
console.log(myArray3);

let x = 100;

console.log(x+x);

let y = x;
console.log(y);

let a, b, c;
a = 5;
b = c = a + 5;

let num = 1;


testOne();
testOne();

function testOne(){
    let num = 1; 
    num++
    console.log('Hello' + num);

}


