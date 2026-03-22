const { log } = require("node:console");

const score = 400

const balance = new Number(100)
console.log(score)//400
console.log(balance)//[Number: 100]

console.log(balance.toString());//converted to string
console.log(balance.toFixed(2));//100.00

const number = 23.8966
console.log(number.toPrecision(2))//24 

const hundreds =10000000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++Maths+++++++++++++++++++=
console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.36));
console.log(Math.ceil(4.36));
console.log(Math.floor(4.36));
console.log(Math.min(4,3,12,14));
console.log(Math.random())//always between 0 and 1
console.log((Math.random()*10)+1)

const min =10
const max =20

console.log(Math.floor(Math.random() *(max-min +1))+min);//between 10 to 20

