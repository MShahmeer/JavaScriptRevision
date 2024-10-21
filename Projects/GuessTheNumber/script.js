const randomNumber = parseInt(Math.random() * 100 + 1 )

const submit =  document.querySelector('#subt')
const userInput =  document.querySelector('#guessField')
const guessSlot =  document.querySelector('.guesses')
const remaining =  document.querySelector('.lastResult')
const lowOrHi =  document.querySelector('.lowOrHi')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault() //default behavior ko rokna hay takay server pr file na bhej dey
        const guess = parseInt(userInput.value)
        console.log("Guess: ", guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){

}

function checkGuess(guess){
    
}

function displayGuess(guess){

}

function displayMessage(message){

}

function newGame(){

}

function endGame(){

}