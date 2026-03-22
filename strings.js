const name = "aditya"
const repoCount = 50
//console.log(name+repoCount+" value")//outdated
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Elden ring")
console.log(gameName)

console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName[2])
console.log(gameName.charAt(2))
//here both return charcter at index but the key diffrence is when the index is out of bouns then 
//first one will return undefined and second one will return ""(empty string)

console.log(gameName.indexOf('d'))
