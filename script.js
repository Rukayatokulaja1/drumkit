let input = document.querySelector("body")
let hihat1 = new Audio ("sounds/hihat.wav")
let tom1 = new Audio ("sounds/tom.wav")
let ride1 = new Audio ("sounds/ride.wav")
let tink1 = new Audio ("sounds/tink.wav")
let kick1 = new Audio ("sounds/kick.wav")

const hihat = document.getElementById ("hihat")
const tom = document.getElementById ("tom")
const ride = document.getElementById ("ride")
const tink = document.getElementById ("tink")
const kick = document.getElementById ("kick")

hihat.addEventListener("click", ()=>{
    hihat1.play()
})
input.addEventListener("keypress", (event)=>{
    if (event.key == "A" || event.key == "a") {
       hihat1.play() 
    }
})
tom.addEventListener("click", ()=>{
    tom1.play()
})
input.addEventListener("keypress", (event)=>{
    if (event.key == "F" || event.key == "f") {
       tom1.play() 
    }
})
ride.addEventListener("click", ()=>{
    ride1.play()
})
input.addEventListener("keypress", (event)=>{
    if (event.key == "R" || event.key == "r") {
       ride1.play() 
    }
})
tink.addEventListener("click", ()=>{
    tink1.play()
})
input.addEventListener("keypress", (event)=>{
    if (event.key == "O" || event.key == "o") {
       tink1.play() 
    }
})
kick.addEventListener("click", ()=>{
    kick1.play()
})
input.addEventListener("keypress", (event)=>{
    if (event.key == "B" || event.key == "b") {
       kick1.play() 
    }
})