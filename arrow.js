const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function(){
      console.log(`${this.username} , welcome to website`)//this is used for current context
      console.log(this);
      
  }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
//console.log(this);//here this refers to object so it will print a null object


const chai = () => {        // arrow  function 
  let username = "hitesh"
  console.log(username);
}
chai();

const addTwo = (num1,num2) => num1+num2 //implicit return ,here no need to type return ,used for one line code
  

console.log(addTwo(3,4));
