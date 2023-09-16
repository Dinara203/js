document.addEventListener('keydown', (event)=>{
    if(event.key.toLowerCase() == 'r') document.body.style.background = 'red'
    else if (event.key.toLowerCase() == 'g') document.body.style.background = 'green'
    else if (event.key.toLowerCase() == 'b') document.body.style.background = 'blue'
})
document.addEventListener('keyup',()=> document.body.style.background = '')

let block = document.querySelector('.block')
document.addEventListener('keydown', (event)=>{
    if (event.key.toLowerCase() == 'w') block.style.top = (block.offsetTop-1)+"px"
    else if (event.key.toLowerCase() == 'd') {
        block.style.left = (block.offsetLeft+1)+"px"
    }
    else if (event.key.toLowerCase() == 'a') block.style.left = (block.offsetLeft-1)+"px"
    else if (event.key.toLowerCase() == 's') block.style.top = (block.offsetTop+1)+"px"
})