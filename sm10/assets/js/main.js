function showLink(x){
    console.log('link'+x)
}
let inputName = document.querySelector('.name')
let inputDate = document.querySelector('.date')
let error = document.querySelector('.error')
let error2 = document.querySelector('.error2')
let submit = document.querySelector('.btn')


let isError = false

document.querySelector(".form").addEventListener('input', (e) => {
    if (e.target.name === 'name') {
        if (inputName.value == '') {
            inputName.style.border = '3px solid red'
            error.innerHTML = 'Заполните поле'
            isError = true
        } else if (inputName.value.length < 2) {
            inputName.style.border = '3px solid red'
            error.innerHTML = 'Не менее 2-x символов'
            isError = true
        } else {
            inputName.style.border = '3px solid green'
            error.innerHTML = ''
            isError = false
        }
    } else {
        if (inputDate.value == '') {
            inputDate.style.border = '3px solid red'
            error2.innerHTML = 'Заполните поле'
            isError = true
        } else if (inputDate.value.length < 4) {
            inputDate.style.border = '3px solid red'
            error2.innerHTML = 'Не менее 4-x символов'
            isError = true
        } else if (2023 - +inputDate.value < 18){
            inputDate.style.border = '3px solid red'
            error2.innerHTML = 'Вам нет 18'
            isError = true
        } else {
            inputDate.style.border = '3px solid green'
            error2.innerHTML = ''
            isError = false
        }
    
    }

    if (isError){
        submit.disabled = true;
    } else{
        showLink(123)
        submit.disabled = false;
    }
})

let form = document.querySelector('.form')
let link = document.querySelector('.link')

form.addEventListener('submit', function(event){
    event.preventDefault()
    
    if (!isError){
        link.innerHTML = 'https://club.z-go.ru/'
    }
    
})
