// map in js

const map = new Map() //maps are key value pairs in js

map.set('Pak', "Pakistan")
map.set('USA', "United States of America")
map.set('IN', "India")

console.log(map)

console.log("\n-------using loop---------")
//maps are iterateable so we can also use the loop in map
for (const [key, value] of map) { //array destructuring
    console.log(key, ': ', value)
}

// we can use forin loop on objects 

console.log("\n------forin loop on object-----")
const languages = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const language in languages) {
    console.log(`${language} stands for ${languages[language]}`)
}

console.log("\n-------Using Foreach---------")
const myArr = ['js', 'ruby', 'java', 'c++', 'python', 'c#']
myArr.forEach((item) => {
    console.log("Item using forEach: ", item)
})


console.log("\n------Filter Map and Reduce------")
/* The map function does not return any thing even if we give the return statement and store in a variable it will print as undefiend */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8]
const greater = myNums.filter((num) => {
    return num > 5
})

console.log("greater than 5 using filter: ", greater)

const books = [
    {
        title: 'test1',
        genre: 'Fiction',
        publish: 1987,
        edition: 2010
    },
    {
        title: 'test2',
        genre: 'History',
        publish: 1982,
        edition: 2012
    },
    {
        title: 'test3',
        genre: 'History',
        publish: 1983,
        edition: 2013
    },
    {
        title: 'test3',
        genre: 'Science',
        publish: 1988,
        edition: 2019
    }
]

const filteredBooks = books.filter((book) => {
    return book.genre == 'History'
})

console.log("\nFiltered Books with History Genre: ", filteredBooks)

const addTen = myNums.map((num) => {
    return num + 10
})

console.log("\nAdding 10 using map: ", addTen)


console.log("\n----------------REDUCE---------------\n")
const toReduce = [1,2,3,4,5,6,7,8]

const intialValue = 0;

const sumWithInitialValue = toReduce.reduce((acc, currentValue)=>{ // the accumulator will contain the initial value that we will supply
    return acc + currentValue
}, intialValue)

console.log("Sum using reduced: ", sumWithInitialValue)