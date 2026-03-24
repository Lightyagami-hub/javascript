function saymyname(){
  console.log("Aditya");
}
//saymyname()

function addtwonumber(num1,num2) {
   return num1+num2  
}
const result =addtwonumber(3,5)
console.log(addtwonumber(3,5));

function loginUserMessage(username) {
  if(username===undefined){
    console.log("Please enter a username");
    return 
  }
     return `${username} just logged in`
}
console.log(loginUserMessage());//if we do not pass anything in the parameter then it will print undefined just logged in.so we should add a block of code which prints please enter a username

function calculateCartPrice(...num1){//... is called rest operator in this case
    return num1
}
console.log(calculateCartPrice(200,400,500));


const user = {
  userName : "aditya",
  price:199
}
function handleObject(anyobject){
  console.log(` Username is ${anyobject.userName} and price is ${anyobject.price}`);
}
//handleObject(user)

handleObject({
  userName:"sam",
  price:399
})

const newArr = [200,400,100,600]
function returnSecondValue(abc) {
    return abc[1];
}
//console.log(returnSecondValue(newArr))
console.log(returnSecondValue([200,300,1500,1600]));
