const progrees = document.querySelector('.progrees')
const circles = document.querySelectorAll('.circle')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let count = 1;
// console.log(count);

next.addEventListener('click', ()=>{
    count++
    if (count > circles.length) {
        count = circles.length
    }
    // console.log(count);
    update()
});

prev.addEventListener('click', ()=>{
    count--
    if (count < 1) {
        count = 1
    }
    // console.log(count);
    update()
});

function update(){
    circles.forEach((circle, id) => {
        if (id < count) {
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    });

    const active = document.querySelectorAll('.active')
    progrees.style.width = (active.length - 1) / (circles.length - 1) * 100 + '%'   
}



