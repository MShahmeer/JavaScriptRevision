const myArr = [1,2,3,4]

const myArr2 = [5,6,7,8]

// Now we have to concat these arrays or merge arrays in single array

// myArr.push(myArr2)
// console.log("Using push: ", myArr) //this will also not work as expected because it will only push the first element

let concatArray = myArr.concat(myArr2)
console.log("Using concat: ",concatArray) // this will merge the two arrays but insted of this we use the spread operator

let spreadArray = [...myArr, ...myArr2]
console.log("Using spread Operator: ", spreadArray);

console.log("\nConvert the Multidimentional Array to single dimentional")

let array  = [1,2,3,4,[98,99,89,[5,6,7],8,9],11,12,13]
const singleDimentionArray = array.flat(Infinity);

console.log("\nMain array: ", array);
console.log("\nConverted to Single Dimention using flat: ", singleDimentionArray);

console.log("\n----------Check and Convert to Array----------")

console.log("\nIsArray('Shahmeer'): ", Array.isArray("Shahmeer"))

console.log("\nConvert Shahmeer to Array using Array.from: ", Array.from("Shahmeer"));

console.log("\n----------Convert set of values to array------")

let sum1 = 100;
let sum2 = 200;
let sum3 = 300;

console.log("\nAdded score set to form an array: ", Array.of(sum1,sum2,sum3))