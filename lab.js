//console.warn("something went wrong!")
const users =[{name :'Ram',age:25},{name :'Alexa',age:30},{name :'Levi',age:35}];
console.table(users)

console.time("proceshsTime");
setTimeout(()=>{console.timeEnd("processTime");},1000);