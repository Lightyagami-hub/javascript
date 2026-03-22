const sym = Symbol("key1")
const jsUser = {
  name:"Adtiya",
  "full name":"Aditya raj",//can never access this via . because of space
  age: 21,
  [sym]:"mykey1",
  location: "Mysore",
  email:"abc@gamil.com",
  isLoggedIn : false,
  lastLoginDays: ["Monday" , "Saturday"]
}
//accessing
console.log(jsUser.email);
console.log(jsUser[sym]);//can only be accessed like this
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(typeof sym);
//Object.freeze(jsUser);//values are fixed now we cant change it
console.log(jsUser);
jsUser.greeting = function(){
  console.log("hello js user");
}
jsUser.greeting2 = function(){
  console.log(`hello js user ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());





