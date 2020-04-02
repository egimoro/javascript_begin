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

let num = 0;


testOne(4);
testOne("New");

function testOne(val){
    console.log(val);
    let hello = val + "Hello world"; 
    num++;
    console.log(hello + num);
    return hello;

}

function test4(x, y = 10){
    console.log(x);
    console.log(y);
    return x*y;
}

console.log(test4(5));

console.log(test4(5,7));

let myFun1 = function(x=10){
    return x*10
}

function myFun2(x=10){
    return x*10;
}

let myFun3 = (x=10) => x*10;

myFun5(3,566,6,99);

function myFun5(a,b=2,c=9){
    console.log(arguments.length);

    console.log(arguments[1]);
}

let messages = {
    welcome : ['Welcome first','Welcome second'],
    hello:function(){
        console.log('Hello how are you');
    },
    goodbye:function(){
        console.log('Thanks for coming Bye now');
    },
    output:function(mes){
        console.log(mes);
    }
}

let k = 5;
let l = 55;
if(k>3 || l<3){
    console.log('k has a value');
}
if(k){
    console.log('k has a value');
}
if(l>10){
    console.log('l has a value');
}
if(0){
    console.log('falsy');
}
if(1){
    console.log('truthy');
}

if(l>10 && l<30){
    console.log('l between 10 and 30');
}else if (k>1 && k<10){
    console.log('k between 1 and 10');
}else{
    console.log('None were true');
}

if(0){
    console.log('falsy');
}else{
    console.log('was a falsy');
}

let e;
if (k>10){
    e="YES";
}
else{
    e="NO";
}
let d = (k>10)?"YES":"NO";
console.log(e,d);

let age = Number(prompt('How old are you?'));
console.log(typeof age); 
let ofAge = age > 18 ?"True can drink":"Under age";
console.log(ofAge);