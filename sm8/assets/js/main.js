let body = document.querySelector('body')
let button1 = document.querySelector('.button1')
button1.addEventListener('mousedown', function(){
    button1.style.background = "#CD5C5C"
})
let button2 = document.querySelector('.button2')
button2.addEventListener('mouseover', function(){
    button2.style.background = "#191970"
})
let button3 = document.querySelector('.button3')
button3.addEventListener('mouseup', function(){
    button3.style.background = "#F4A460"
})
let button4 = document.querySelector('.button4')
button4.addEventListener('mousemove', function(){
    button4.style.background = "linear-gradient(90deg, #DF1A1A 0.3%, rgba(189, 43, 202, 0.20)"
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }
    console.log(getRandomInt(999))
    document.body.style.background = `rgb(${getRandomInt(999)}, ${getRandomInt(999)}, ${getRandomInt(999)})`
})
let button5 = document.querySelector('.button5')
button5.addEventListener('dblclick', function(){
    button5.style.background = "#696969"
})
let button6 = document.querySelector('.button6')
button6.addEventListener('mouseout', function(){
    button6.style.background = "#D2691E"
})