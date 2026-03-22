//stack->primitive   heap-> non-primitive
let myYoutubename = "adityaraj"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename)
console.log(anothername)//stack provide the copy of the primitive data type variable so the actual data doesnt change

let user1 = {
    email:"abc@gmail.com",
    upi:"user@ybl"
}
let user2 = user1
user2.email="xyz@gmail.com"
console.table(user1)
console.table(user2)
//so here data is stored in heap memory and it provides the refrence to all the variables
//so both the values will change 