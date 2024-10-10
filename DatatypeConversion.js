// Data type conversion in JS can be a nightmare

console.log("---------------- Score = 33 --------------------")
let score = 33

console.log(typeof score); // this will output as number as we all know


console.log("---------------- unknown = '33' --------------------")
let unknown = "33" //imagine this as response from api where we don't knows its datatype

let changedDt = Number(unknown)
console.log("Type is: ",typeof(changedDt)) //this will still output as number 

console.log("---------------- unknown2 = '33abc' --------------------")
//let change the unknown and add something in that because its the response from the API
let unknown2 = "33abc"
let changedDt2 = Number(unknown2)
console.log("Type is: ",typeof(changedDt2)) //this will still output as the number

console.log("But stored variable value is: ",changedDt2," a nightmare") //this will give NAN that is the reason type conversion in js is nightmare sometime

console.log("---------------- unknown3 = 'null' --------------------")
// let do the same with null value
let unknown3  = null
let changedDT3 = Number(unknown3)
console.log("Type is: ",typeof(changedDT3))
console.log("But stored variable value is: ",changedDT3)


console.log("------------ Conversion of string to Boolean ---------")
let a =""
let changedDT4 = Boolean(a)
console.log("Stored in changedDT4: ", changedDT4) //this will output as false

let b ="Test"
let changedDT5 = Boolean(b)
console.log("Stored in changedDT5: ", changedDT5) //this will output as true
