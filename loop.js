let b = 20;
do{
    console.log('Do loop b is '+b);
    b++
}
while(b<10);

let myArray = ["Hello", "world",6,2,233,4771];
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