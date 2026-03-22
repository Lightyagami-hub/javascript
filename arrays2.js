const marvel_heros = ["thor" , "IronMan" , "spiderMan"]
const dc_heros = ["superman" , "batman" ,"flash"]
//marvel_heros.push(dc_heros)
console.log(marvel_heros); //here it will add the arr as one element inside the other arr
//but when we use concat it will return  a new arr with the elemnts of both the arrays
const newArr = marvel_heros.concat(dc_heros)
console.log(newArr)

const all_new_heros = [...marvel_heros,...dc_heros]//this way is more useful because here we can concatenate multiple arrays in a single line ,which we cant do with concat
console.log(all_new_heros)

const another_arr = [1,2,[3,4],[4,5,[6,7]]]
const real_another_arr = another_arr.flat(Infinity)//.flat return a new array with all the arrays concatenated into it recursively
//infity is depth 
console.log(real_another_arr)

console.log(Array.from("Aditya"))//convert the string inside the param into an array
console.log(Array.from({name:"aditya"}))//it will not convert it into the array
//Array.from will create an array from an iterable object 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))//return a new array with a set of elements