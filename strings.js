const name = "aditya"
const repoCount = 50
//console.log(name+repoCount+" value")//outdated
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Elden-ring-dlc")
console.log(gameName)

console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName[2])
console.log(gameName.charAt(2))
//here both return charcter at index but the key diffrence is when the index is out of bouns then 
//first one will return undefined and second one will return ""(empty string)

console.log(gameName.indexOf('d'))

const newString = gameName.substring(0,3)
console.log(newString)

const anotherString = gameName.slice(-5,8)//" ri"
console.log(anotherString)

const newString2= "   aditya   "
console.log(newString2)
console.log(newString2.trim())

const url = "https://www.google.com/aditya%20raj"
console.log(url.replace('%20','-'))
console.log(url.includes('aditya'))

console.log(gameName.split('-'))