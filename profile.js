let colorBtn = document.querySelector("#color")
let placeBtn = document.querySelector("#place")
let ritualBtn = document.querySelector("#ritual")
let questionBtn = document.querySelector("#question-button") //yes i know its spelled wrong

colorBtn.addEventListener('click', colorAlert)
placeBtn.addEventListener('click', placeAlert)
ritualBtn.addEventListener('click', ritualAlert)
questionBtn.addEventListener('click', questionAlert)


function colorAlert() {
   
    alert('My favorite color is brown!')
}

function placeAlert() {
   
    alert('My favorite place to go is Clarksdale, Mississippi! That\'s where my resturaunt is!')
}

function ritualAlert() {
   
    alert('I always listen to jazz music when I have the time')
}

function questionAlert() {
   
    alert('Have questions?')
}

