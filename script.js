const progrees = document.querySelector(".progrees")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1


prev.addEventListener('click', ()=>{
    currentActive--

    if (currentActive < 1 ) {
        currentActive = 1
    }
    update()

})

next.addEventListener('click', ()=>{
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()

})

function update(){
    circles.forEach((circle, idx) => {
        if (idx <  currentActive) {            
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progrees.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
}