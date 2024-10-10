const accountId = 135
let accountEmail = "muhammadshahmeeronline@gmail.com"
var accountPassword = "1233366"
accountCity = "Mianwali"

// accountId = 2 //This will give error

console.table([accountId, accountEmail, accountPassword, accountCity])

// In early days in the javascript there was no concept of the scope, and the variables declared with the var keyword
// don't have the scope, suppose I have declared var check = 0 in the function and I access and modify that outside that
// function I can do that so because of this reason now the var is not recommended to use.

console.log("\n------Scope of var let const-------")


if(true){
    let a = 1
    b = 2;
    var c = 3;
}

// console.log("let a: ", a); //error because of scope
console.log("b: ",b)
console.log("var c: ",c)