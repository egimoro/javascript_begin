// variables (let, const)


// datatypes (String, Numbers, Boolean, null, undefined)

const name = 'Gaius';

const age = 28;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// Concatenation
console.log('My name is '+name+' and I am '+ age)
//Template String
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello)

const s = 'Hello World!';
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.substring(0, 5))
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));


// Arrays

/* Multiple

lines */

// Arrays - variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears'];

console.log(fruits);

console.log(fruits[1]);

fruits[3] = 'grapes';

console.log(fruits);

fruits.push('mangoes')
fruits.unshift('strawberries');
fruits.pop('');

console.log(Array.isArray('hello'))

console.log(fruits.indexOf('oranges'));

console.log(fruits);

