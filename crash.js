/*
// variables (let, const)


// datatypes (String, Numbers, Boolean, null, undefined)

const name = 'Gaius';

const age = 28;

const rating = 4.5;

const isCool = true;

const x = null;

const y = undefined;

let z;

console.log('Type of variable age')

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

console.log(s.toUpperCase());

console.log(s.toLowerCase());

console.log(s.substring(0, 5));

console.log(s.substring(0, 5).toUpperCase());

console.log(s.split(''));


// Arrays

/* Multiple



// Arrays - variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears'];

console.log(fruits);

console.log(fruits[1]);

fruits[3] = 'grapes';

console.log(fruits);

fruits.push('mangoes');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray('hello'))

console.log(fruits.indexOf('oranges'));

console.log(fruits);

//Object literals

const person = {
    firstName: 'John',
    lastName: 'Moe',
    age: '28',
    hobbies: ['music', 'movies', 'sports'],
    address: {
    street: 'Fo West st',
    city: 'Compton',
    State: 'CA'
}
}

console.log(person);

console.log(person.firstName, person.lastName);

console.log(person.hobbies[1]);

const { firstName, lastName} = person;

console.log(firstName);

person.email ='Moe@down.co';

console.log(person);

// Arrays

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meet with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Orthopedic appt',
        isCompleted: true
    }
];

console.log(todos);

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);


// for loop

for(let i=0; i<10; i++) {
    console.log(i);
}

for(let i=0; i<10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// While loop

let i = 0;
while(i<10) {
    console.log(`For While Number: ${i}`);
    i++;
}

for(let i=0; i<todos.length; i++) {
    console.log(todos[i].text);
}

for(let todo of todos) {
    console.log(todo.text);
}

for(let todo of todos) {
    console.log(todo.id);
}

// high order arrays ForEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);
/*
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted);



const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);

 */

// conditionals

/*

const x=10;

if(x == 10) {
    console.log('x is 10');
}

*/

/*
const x='10';

if(x === 10) {
    console.log('x is 10');
}
*/

/*
const x=10;

if(x === 10) {
    console.log('x is 10');
}
*/

/*
const x=20;

if(x === 10) {
    console.log('x is 10');
} else {
    console.log('x is Not 10');
}
*/

/*
const x=20;

if(x === 10) {
    console.log('x is 10');
} else {
    console.log('x is Not 10');
}
*/

/*
const x=6;

if(x === 10) {
    console.log('x is 10');
} else if(x>10) {
    console.log('x is greater 10');
} else {
    console.log('x is less than 10')
}
*/

//functions

function addNums(num1, num2) {
    console.log(num1+num2);
}

addNums(5,4);

function addNums(num1, num2) {
    return(num1+num2);
}

 console.log(addNums(5,4));