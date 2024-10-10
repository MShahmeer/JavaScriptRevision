//Singleton Objects are created when we create using constuctor like Object.create

//Object Lietrals

const mySymb = Symbol() //Interview question: symbol lo, aur object ki keys main print kra k dekha do

const jsUser = {
    name: "Shahmeer",
    "full name": "Muhammad Shahmeer", //this can't be accessed as object.fullname but as object["full name"]
    [mySymb]: "Key1",
    age: 24,
    location: "Mianwali",
    email: "Abc@gmail.com",
    lastLoginDays: ["Monday", "Sunday"]
}

console.log("User Email as jsUser.email: ", jsUser.email)
console.log("User Email as jsUser['email']: ", jsUser["email"])

console.log("\nUser Full Name: ", jsUser["full name"])

console.log("\n--Use the symbol and print in the user object--")

console.log("My Symbol in Object: ", jsUser[mySymb]);


console.log("\n----------Attach Method with object--------")
jsUser.greetings = () =>{
    // console.log("Greetings from Arrow Function");
    console.log(`Greetings from Arrow Function ${jsUser["full name"]}`); //we can't use this keyword here because here it will not reference to the current object

}

jsUser.greetingsTwo = function(){
    // console.log("Greetings from Arrow Function");
    console.log(`\nGreetings from Normal Function ${this["full name"]}`);

}

console.log(jsUser.greetings())

console.log(jsUser.greetingsTwo())