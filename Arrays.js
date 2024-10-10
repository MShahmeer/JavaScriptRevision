// Javascript array copy operation creates the shallow copy
/*
    What is Shallow copy?
    copy whos values shares the same reference point, this means that whatever we will change in the copy orignal array will
    also be changed

    What is Deep copy?
    Properties don't share the same reference point.
*/

const myArr = [1,2,3,4,5]

myArr.unshift(0);
console.log("After using unshift: ",myArr); // 0 is added to the start because of that we need to shift all the values to the next index

myArr.shift()
console.log("After using shift: ",myArr) //this will remove the 0 that we added using unshift

let myArrayString = myArr.join() //this will convert the array values to the string
console.log("After using the join: ", myArrayString)

console.log("\n\n---------- Array.slice and Array.splice section -----------\n")

console.log("Orignal Array: ", myArr);
let arraySlice = myArr.slice(1,3)
console.log("\nAfter using the array.slice: ",arraySlice)

console.log("\nAgain orignal array after array.slice: ",myArr)

let arraySplice = myArr.splice(1,3);
console.log("\nAfter using the array.splice: ", arraySplice)

console.log("\nOrignal Array after using the array.splice: ", myArr)

console.log("\nSo the difference in the array.slice and array.splice is that the last index is inclusive the array.splice but not in array.slice\nfurther array.splice also manipulates the orignal array and remove the elements on index used in array.splice\n\n")



