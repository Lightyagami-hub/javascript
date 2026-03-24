// const tinderuser  = new object()
const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false
//console.log(tinderuser);
const regularUser = {
  email : "abc@gmail.com",
  fullname:{
    userfullname:{
      firstname:"aditya",
      lastname:"raj"
    }
  }
}
//console.log(regularUser.fullname?.userfullname.firstname);//aditya
const obj1 = {1:"a",2:"b"}
const obj2 = {2:"c",4:"d"}

//const obj3 = {obj1 , obj2}//output->{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);

console.log(Object.keys(tinderuser))//important
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('name'));
const course = {
  coursenane:"js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}
//to access we use course.courseInstructor
//otherways
const {courseInstructor} = course
console.log(courseInstructor);


const {courseInstructor:CI} = course
console.log(CI);