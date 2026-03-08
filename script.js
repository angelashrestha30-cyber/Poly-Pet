// NAV SCROLL

function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"})
}


// PET SYSTEM

let xp=0
let level=1
let streak=0

function updatePet(){

document.getElementById("level").textContent=level
document.getElementById("streak").textContent=streak
document.getElementById("xp-fill").style.width=(xp%100)+"%"

}

function completeLesson(){

xp+=20
streak++

if(xp>=level*100){

level++
launchConfetti()

}

updatePet()

}

function renamePet(){

let name=document.getElementById("pet-name-input").value

if(name){

document.getElementById("pet-name-display").textContent=name

}

}



// FLASHCARDS

let flashcards=[

["Hola","Hello"],
["Perro","Dog"],
["Gato","Cat"],
["Agua","Water"],
["Libro","Book"],
["Casa","House"],
["Amigo","Friend"],
["Escuela","School"],
["Comida","Food"],
["Gracias","Thank You"]

]

let cardIndex=0
let flipped=false

function loadFlashcards(){

cardIndex=0
flipped=false
showCard()

}

function showCard(){

let card=document.getElementById("flashcard")

card.textContent=flipped?
flashcards[cardIndex][1]:
flashcards[cardIndex][0]

}

function flipCard(){

flipped=!flipped
showCard()

}

function nextCard(){

cardIndex=(cardIndex+1)%flashcards.length
flipped=false
showCard()

}



// PRACTICE

let practice=[

["hola","hello"],
["perro","dog"],
["gato","cat"],
["agua","water"],
["libro","book"],
["casa","house"],
["amigo","friend"],
["escuela","school"],
["comida","food"],
["gracias","thank you"]

]

let practiceIndex=0

function nextPractice(){

let q=practice[practiceIndex]

document.getElementById("practiceQuestion").textContent=
"Translate "+q[0]

practiceIndex++

}

function checkPractice(){

let answer=document.getElementById("practiceInput").value.toLowerCase()

let correct=practice[practiceIndex-1][1]

document.getElementById("practiceResult").textContent=

answer===correct?"Correct":"Wrong"

}



// UNIT TEST

let questions=[]

for(let i=0;i<25;i++){

questions.push({
q:"Translate hola",
options:["Hello","Bye","Dog","Cat"],
answer:"Hello"
})

}

let container=document.getElementById("unitTest")

questions.forEach((q,i)=>{

let div=document.createElement("div")

div.innerHTML=`

<p>${i+1}. ${q.q}</p>

<label><input type="radio" name="q${i}" value="Hello">Hello</label>

<label><input type="radio" name="q${i}" value="Bye">Bye</label>

<label><input type="radio" name="q${i}" value="Dog">Dog</label>

<label><input type="radio" name="q${i}" value="Cat">Cat</label>

`

container.appendChild(div)

})

function submitTest(){

let score=0

questions.forEach((q,i)=>{

let selected=document.querySelector(
`input[name=q${i}]:checked`
)

if(selected && selected.value===q.answer){

score++

}

})

document.getElementById("testResult").textContent=
"Score "+score+"/25"

}



// RESOURCE SWITCH

function showResource(id){

document.querySelectorAll(".resource-content")
.forEach(sec=>sec.style.display="none")

document.getElementById(id).style.display="block"

}

showResource("video")



// WORLD CLOCK

let zones=[
["Japan","Asia/Tokyo"],
["Spain","Europe/Madrid"],
["China","Asia/Shanghai"]
]

function renderClocks(){

let container=document.getElementById("clock-container")

container.innerHTML=""

zones.forEach(z=>{

let div=document.createElement("div")

div.className="clock-box"

div.innerHTML=`<h4>${z[0]}</h4><p id="${z[1]}"></p>`

container.appendChild(div)

})

}

function updateClocks(){

zones.forEach(z=>{

let el=document.getElementById(z[1])

if(el){

el.textContent=new Date().toLocaleTimeString(
"en-US",{timeZone:z[1]}
)

}

})

}

function addClock(){

let country=document.getElementById("new-country").value
let tz=document.getElementById("new-tz").value

zones.push([country,tz])

renderClocks()

}

renderClocks()
setInterval(updateClocks,1000)



// SCHEDULE

function scheduleLesson(){

let date=document.getElementById("lesson-date").value

let li=document.createElement("li")

li.textContent="Lesson on "+date

document.getElementById("lesson-list").appendChild(li)

}

function filterSchedule(type){

let events=document.querySelectorAll(".event")

events.forEach(e=>{

if(type==="all"||e.classList.contains(type))
e.style.display="block"
else
e.style.display="none"

})

}



// CONFETTI

const canvas=document.getElementById("confettiCanvas")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let confetti=[]

function launchConfetti(){

for(let i=0;i<100;i++){

confetti.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:5,
speed:3
})

}

animate()

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

confetti.forEach(p=>{

p.y+=p.speed

ctx.fillStyle="#ff7f7f"
ctx.fillRect(p.x,p.y,p.size,p.size)

})

requestAnimationFrame(animate)

}
