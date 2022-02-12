minute = 00
second = 00
let output_minute = document.getElementById('minute')
let output_second = document.getElementById('second')
let add_btn = document.getElementById('add-btn')
let start_btn = document.getElementById('start-btn')
let pause_btn = document.getElementById('pause-btn')
let reset_btn = document.getElementById('reset-btn')
let output = document.getElementById('output')
let interval
start_btn.addEventListener('click', function(){
    clearInterval(interval)
    interval = setInterval(start_time, 1000)
    start_btn.style.display = 'none'
    pause_btn.style.display = 'inline-block'
    add_btn.style.display = 'inline-block'
    reset_btn.style.display = 'inline-block'
    output.style.display = 'block'
})
pause_btn.addEventListener('click', function(){
    clearInterval(interval)
    start_btn.style.display = 'inline-block'
    pause_btn.style.display = 'none'
})
reset_btn.addEventListener('click', function(){
    clearInterval(interval)
    minute = '00'
    second = '00'
    output_minute.innerHTML = minute
    output_second.innerHTML = second
    start_btn.style.display = 'inline-block'
    pause_btn.style.display = 'none'
    output.style.display = 'none'
    add_btn.style.display = 'none'
    reset_btn.style.display = 'none'
})
add_btn.addEventListener('click', function add(){
    let newspan = document.createElement('span')
    newspan.className = 'adds'
    output.appendChild(newspan)
    newspan.innerHTML = `${output_minute.textContent + ':' + output_second.textContent} <button class="delspan">X</button>`
    let delspan = document.querySelector('.delspan')
    delspan.addEventListener('click', function(){
        output.removeChild(newspan)
    })    
})


function start_time(){
    second++
    if(second <= 9){
        output_second.innerHTML = '0' + second
    }
    if(second > 9){
        output_second.innerHTML = second
    }
    if(second > 59){
        minute++
        if(minute <= 9){
            output_minute.innerHTML = '0' + minute
        }
        if(minute > 9){
            output_minute.innerHTML = minute
        }
        second = 0
        output_second.innerHTML = '0' + second
    }
}
