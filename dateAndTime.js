//Dates

let mydate = new Date()
console.log(mydate.toISOString());//2026-03-22T16:19:15.645Z
console.log(mydate.toJSON());//2026-03-22T16:19:15.645Z
console.log(mydate.toDateString())//Sun Mar 22 2026
console.log(mydate.toLocaleString());//3/22/2026, 9:49:15 PM

let mycreateddate= new Date(2023,0,23)
console.log(mycreateddate.toDateString());//Mon Jan 23 2023

//  mycreateddate=new Date(2023,0,24,5,3)
// console.log(mycreateddate.toLocaleString());

//  mycreateddate=new Date("2023-01-14")
// console.log(mycreateddate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

let newDate = new Date();

console.log(newDate.toLocaleString('default',{weekday:"long"}))//sunday





