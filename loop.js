let b = 20;
do{
    console.log('Do loop b is '+b);
    b++
}
while(b<10);

let myArray = ["Hello", "world",6,2,233,4771];

const output = document.getElementById('output');
output.innerHTML = "NEW";
console.dir(output);

let c=0;
while(myArray[c]){
    console.log(myArray[c]);
    c++; 
}

for(let a=0;a<10;a++){
    console.log('a is '+a);
}

for(let b=0;b<myArray.length;b++){
    console.log(myArray[b]);
}

let myObj= {firstName:"Weru", lastName:"Flegis", age:29};

for(let x in myObj){
    console.log(myObj[x]);
    console.log(x);
}

let myStr = "JavaScript Course";
for(let letter of myStr){
    console.log(letter);
}

let myArr2 = myArray.map(function(val){
    console.log(val);
    return typeof val;

});

console.log(myArr2);

let myNumbs = [32,5444,23322,55,3232,3232,322,33];
const newNumbs = myNumbs.map(function(x){
    return x*3;
});
console.log(newNumbs);

const newNumbs2 = myNumbs.map(x=>x*3);
console.log(newNumbs);


let MyArr = ["Hello", "World", 6, 2, 55, 2332, 3434];

const output1 = document.getElementById('output1')
let html = MyArr.map((value,index)=>'<div>'+index+' '+value+'</div>');
let myStr1 = html.join('');
output1.innerHTML = myStr1;

let testMap = new Map();
testMap.set('first', 'Dorty');
testMap.set('last','Kopl');
console.log(testMap);
testMap.set('first', 'Lop');
console.log(testMap.get('first'));
for(let k of testMap.keys()){
    console.log(k);
}
for(let v of testMap.values()){
    console.log(v);
}
for(let v of testMap){
    console.log(v);
}
for (let[k,v] of testMap){
    console.log(k);
    console.log(v);
}

console.log(testMap.size);
console.log(testMap.keys());
console.log(testMap.values());

let mySet = new Set();
mySet.add('my tester string');
mySet.add(55);
mySet.add('hello');
console.log(mySet);

for(let element of mySet){
    console.log(element); 
}

console.log(mySet.size);
console.log(mySet.has('hello2'));

const output2 = document.getElementById('output2');
const clickme = document.getElementById('clickme');
clickme.addEventListener('click', myJSON);

function myJSON(){
    console.log('click');
    const url = 'https://randomuser.me/api?results=50';
    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
        let html1 = '';
        data.results.forEach(person => {
            console.log(person);
            html1 += '<div>'+person.email+'</div>'
        });
        output2.innerHTML = html1;
        console.log(data.results[0].dob.age);
    }).catch(function(e){
        console.log(e);
    })
}

const output3 = document.getElementById('output3');
const clickme1 = document.getElementById('clickme1');
clickme1.addEventListener('click',myJSON1);

function myJSON1(){
    const url1 = 'https://randomuser.me/api?results=50';
    fetch(url1).then(response=>response.json()).then(data=>{
        let html2 ='';
        data.results.forEach(person => html2+= '<div>'+person.email+'</div>');
        output3.innerHTML = html2;
    }).catch(e=>console.log(e));
}