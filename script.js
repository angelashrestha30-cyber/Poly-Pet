let xp = 0
let level = 1

const pet = document.getElementById("pet")
const xpText = document.getElementById("xp")
const levelText = document.getElementById("level")

function gainXP(amount){

xp += amount

if(xp >= 100){
xp = 0
level++
evolvePet()
}

xpText.innerText = xp
levelText.innerText = level

}

function evolvePet(){

if(level >= 5){
pet.innerText = "🐲"
}
else if(level >= 3){
pet.innerText = "🐉"
}

}

/* Flashcards */

const cards = [
{front:"Hola",back:"Hello"},
{front:"Adiós",back:"Goodbye"},
{front:"Gracias",back:"Thank you"}
]

let current = 0
let flipped = false

function flipCard(){

const word = document.getElementById("word")

if(flipped){
word.innerText = cards[current].front
}
else{
word.innerText = cards[current].back
gainXP(10)
}

flipped = !flipped

}

function nextCard(){

current++

if(current >= cards.length){
current = 0
}

flipped = false

document.getElementById("word").innerText = cards[current].front

}

/* Quiz */

function answer(choice){

const result = document.getElementById("result")

if(choice === "Hello"){
result.innerText = "Correct!"
gainXP(20)
}
else{
result.innerText = "Try again!"
}

}

/* Map */

const map = document.getElementById("worldMap")

map.addEventListener("click", function(event){

const x = event.offsetX
const y = event.offsetY

let language = ""
let greeting = ""

if(x < 200 && y > 150){
language = "Spanish 🇪🇸"
greeting = "Hola!"
}
else if(x > 450 && y < 150){
language = "Japanese 🇯🇵"
greeting = "こんにちは (Konnichiwa)"
}
else if(x > 450 && y > 150){
language = "Mandarin 🇨🇳"
greeting = "你好 (Nǐ hǎo)"
}
else{
language = "French 🇫🇷"
greeting = "Bonjour!"
}

document.getElementById("languageOutput").innerHTML = `
<h3>${language}</h3>
<p>Greeting: <b>${greeting}</b></p>
<p>Practice this language to level up your PolyPet!</p>
`

})
