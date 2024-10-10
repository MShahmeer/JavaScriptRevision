//use of rest/spread operator as function parameter to return multiple values from a function
//when you don't know how many arguments will be passed

function calculateCartPrice(...items) {
    return items
}

console.log(calculateCartPrice(200, 300, 400))

console.log("\n------Nested Scoping-------")

function Parent() {
    let userName = "Shahmeer"

    function child() {
        let childUserName = "Child"
        console.log("Parent Name: ", userName)
    }

    // console.log("Child Name: ",childUserName) this will give error because of scope level

    child()
}

Parent()


console.log("\n------Hoisting Concept in JS--------\n")

addOne(5) //at this line the addone will run and will not give any error
function addOne(number) {
    return number + 1;
}

// addTwo() // this will give error because here function is used as expression and called before declaration and this is the concept of hoisting
const addTwo = function (number) {
    return number + 2;
}

addTwo()// here it will not give any error


console.log("\n-------Arrow Functions---------")

let user = {
    name: "Shahmeer",
    email: "Shahmiraltaf@gmail.com",
    greeting: function () {
        return `${this.name} greeting from normal function`
    },
    arrowGreeting: () => {
        return `${this.name} greeting from arrow function`
    }
}

console.log(user.greeting())
console.log(user.arrowGreeting())


console.log("\n--- Immediately Invoked Functions Expressions ----");
// we use IIFE to avoid global scope variable pollutoion
(function iife() {
    console.log("IIFE called without parameter with named IIFE");
})(); //this semicolon is very important to end the IIEF

((name) => {
    console.log(`IIFE called with the name: ${name}`)
})("Shahmeer");