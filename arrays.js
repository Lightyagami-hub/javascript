const arr = [1,2,3,4,5]//it is pretty flexible ..we can modify ,it can contain diffrent data type
const myheroes=["batman","spiderman"]

// console.log(arr[0])
// arr.push(6)
// arr.push(7)
// arr.pop();

arr.unshift(7);//adds 7 in the start
arr.shift();

// console.log(arr.includes(9)) //false
// console.log(arr.indexOf(3)) //2
const newArr = arr.join()
console.log(newArr)//type is string
console.log(arr)

const myn1 = arr.slice(1,3)
console.log(myn1)//index 3 is not included
console.log(arr);//not modify the main arr
const myn2 = arr.splice(1,3)
console.log(myn2);//3 is include 
console.log(arr);//it will modify the main arr



