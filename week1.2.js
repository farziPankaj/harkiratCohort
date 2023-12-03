// interpreted vs compiled

console.log(">>>>>>>>>>>>>>> " + "Hello World!!!");
// console.log(a);

// strict vs dynamic (loosly typed) language

// variable => var, let & const
var a = 10;
console.log(">>>>>>>>>>", a);

a = 100;
console.log(">>>>>>>>>>", a);

let b = 10;
console.log(">>>>>>>>>>", b);

b = 100;
console.log(">>>>>>>>>>", b);

const c = 10;
console.log(">>>>>>>>>>", c);

// c = 100;
// console.log(">>>>>>>>>>", c);

// datatype => string, number & boolean
let firstName = "harkirat";
let age = 18;
let isMarried = false;

console.log("This person name is " + firstName + "and his age is " + age);

// if else statement
if(isMarried){
    console.log(firstName + " is married");
} else {
    console.log(firstName + " not married");
};

// loops
for(i=0;i<=100;i++){
    console.log(i)
};

let sum = 0;
for(j=0;j<=100;j++){
    sum = sum+j;    
    console.log(sum)
};

// array
const personArray = ["harkiart", "aman", "rafter"];
console.log(personArray[0]);
console.log(personArray[1]);
console.log(personArray[2]);
console.log(personArray);

const age1 = [30,21,22,33,23,24,36,28,25,26,27,28,25,29];
for(i=0;i<age1.length;i++){
    if(age1[i]%2==0){
        console.log(age1[i]);
    };
};

let bigNumber = -1;
for(i=0;i<age1.length;i++){
    if(age1[i]>bigNumber){
        bigNumber=age1[i];
    };
};
console.log("bigNumer:" + bigNumber);

// objects
const user = {
    firstName: "harkiet",
    age: 18
};
console.log(user["firstName"]);
console.log(user["age"]);

const arrayOfObject = [{
    firstName: "harkirat",
    gender: "male"
}, {
    firstName: "raman",
    gender: "male", 
    metaData: {
        age: 18,
        add: "yes"
    }
}, {
    firstName: "bishnoi",
    gender: "female"
}];

for(i=0;i<arrayOfObject.length;i++){
    if(arrayOfObject[i]["gender"] == "male") {
        console.log(arrayOfObject[i]["firstName"])
    }
};

// function
function findSum(a,b) {
    return a+b;
};

console.log(">>>>>>>>>>>>  "+findSum(10,20));

// callback => function can take other function as input
// a function can callback another function
function sum9(num1, num2, fnToCall){
    let result = num1 + num2;
    fnToCall(result);
};

function displayResult(data){
    console.log("Result of the sum is:" + data);
};

function displayPaasiveResult(data){
    console.log("Sum's result is: "+ data);
};

// const ans = sum(1,2);
// displayResult(ans);

const ans = sum9(1,2,displayResult);
const ans1 = sum9(1,2,displayPaasiveResult);

function greet(){
    console.log("<<<<<<<<<<<<< Timeout 3 sec, Hello World")
};

setTimeout(greet, 2*1000);

setTimeout(() => {
    console.log("*************** 1 Second delay")
}, 1*1000);

// 