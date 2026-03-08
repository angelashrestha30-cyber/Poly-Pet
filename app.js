let xp = 0
let level = 1

function scrollToSection(id){

document.getElementById(id).scrollIntoView({
behavior:"smooth"
})

}

function updatePetUI(){

document.getElementById("level").textContent = level

document.getElementById("xp-fill").style.width = (xp%100)+"%"

}

function completeLesson(){

xp += 20

if(xp >= level*100){

level++

if(level === 3) evolvePet("🦊")
if(level === 6) evolvePet("🐺")
if(level === 10) evolvePet("🐉")

}

updatePetUI()

}

function evolvePet(newEmoji){

const avatar = document.querySelector(".pet-avatar")

avatar.classList.add("pet-evolve")

setTimeout(()=>{
avatar.textContent=newEmoji
avatar.classList.remove("pet-evolve")
},400)

}

function generateLesson(){

const vocab=[
{es:"perro",en:"dog"},
{es:"gato",en:"cat"},
{es:"casa",en:"house"},
{es:"libro",en:"book"},
{es:"agua",en:"water"}
]

const grammar=[
"Use 'ser' for permanent traits.",
"'El' is masculine article.",
"'La' is feminine article.",
"Add 's' to make plural."
]

let word=vocab[Math.floor(Math.random()*vocab.length)]
let tip=grammar[Math.floor(Math.random()*grammar.length)]

const lesson=`

<h3>Vocabulary</h3>
<p>${word.es} = ${word.en}</p>

<h3>Grammar Tip</h3>
<p>${tip}</p>

<h3>Practice</h3>
<p>Translate "${word.en}" into Spanish.</p>
`

document.getElementById("lessonOutput").innerHTML=lesson

}

let gameScore=0

function startGame(){

gameScore=0
document.getElementById("gameScore").textContent=gameScore

const area=document.getElementById("gameArea")
area.innerHTML=""

let interval=setInterval(spawnFood,1000)

setTimeout(()=>{
clearInterval(interval)
xp+=gameScore*5
updatePetUI()
alert("Game Over! XP Earned: "+gameScore*5)
},15000)

}

function spawnFood(){

const area=document.getElementById("gameArea")

const food=document.createElement("div")
food.className="food"
food.textContent="🍎"

food.style.left=Math.random()*260+"px"
food.style.top="0px"

area.appendChild(food)

let fall=setInterval(()=>{

food.style.top=(food.offsetTop+5)+"px"

if(food.offsetTop>280){

food.remove()
clearInterval(fall)

}

},50)

food.onclick=function(){

gameScore++
document.getElementById("gameScore").textContent=gameScore
food.remove()

}

}

function buyItem(item){

let cost=0

if(item==="hat") cost=50
if(item==="glasses") cost=40
if(item==="crown") cost=100

if(xp < cost){

alert("Not enough XP")
return

}

xp -= cost

const avatar=document.querySelector(".pet-avatar")

if(item==="hat") avatar.textContent="🦊🎩"
if(item==="glasses") avatar.textContent="🦊🕶"
if(item==="crown") avatar.textContent="🦊👑"

updatePetUI()

}

const map=document.getElementById("worldMap")

if(map){

map.addEventListener("click",function(event){

const x=event.offsetX
const y=event.offsetY

let language=""
let greeting=""

if(x < 200 && y > 150){

language="Spanish 🇪🇸"
greeting="Hola!"

}

else if(x > 450 && y < 150){

language="Japanese 🇯🇵"
greeting="こんにちは"

}

else if(x > 450 && y > 150){

language="Mandarin 🇨🇳"
greeting="你好"

}

else{

language="French 🇫🇷"
greeting="Bonjour!"

}

document.getElementById("languageOutput").innerHTML=`

<h3>${language}</h3>
<p>${greeting}</p>
`

})

}
