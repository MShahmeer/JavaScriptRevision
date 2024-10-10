//Singleton Objects are created when we create using constuctor like Object.create or const obj = new Object()

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

console.log("---------Spread Operation in Objects Merging---------")

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const assignedObject = Object.assign(obj1, obj2)
console.log("Assigned Object: ", assignedObject);

const spreadObject = {...obj1, ...obj2}
console.log("\nSpread Object: ", spreadObject);

console.log("\n--------Objects Destucturing------")
const {email} = jsUser //now email is destructured from this jsUser object we can use this anywhere in our code

console.log("Destructured User's email: ", email)

const {location: userCity} = jsUser //we can use alias here as well
console.log("\nLocation as userCity: ", userCity)