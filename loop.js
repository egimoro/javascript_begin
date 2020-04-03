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
let html = MyArr.map(function(value,index){
    console.log(value);
    console.log(index);  
    return '<div>'+index+' '+value+'</div>';

});
let myStr1 = html.join('');
output1.innerHTML = myStr1;
console.log(myStr1);
console.log(html);