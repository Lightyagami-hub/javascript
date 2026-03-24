if(true){
  let a = 10
  const b =20
  var c =30
}

//console.log(a);// it will not print 
//console.log(b);// not print 
console.log(c);// it will print 


function one(){
  const username = "Aditya"

  function two(){
    const website = "youtube"
    console.log(username)
  }
 // console.log(website);
  two()
}
one();

// +++++++++++++++++interesting++++++++++++++++
addOne(5)//this is fine 
function addOne(nums)
{
  return nums+1
}

addtwo(5)//this will throw error
const addtwo = function(num){
  return num+2
}
