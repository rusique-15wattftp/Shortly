const errMsg = document.getElementById('err-msg')
const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')

const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

const formSubmit = e => {
    e.preventDefault()
    console.log(input.value)

    if (input.value === '') {
        errMsg.innerHTML = 'Please enter something'
        input.classList.add('border-red')
    } else {
        errMsg.innerHTML = ''
        input.classList.remove('border-red')
        alert('Success')
    }
}

linkForm.addEventListener('submit', formSubmit)

navToggle = () => {
    menuBtn.classList.toggle('open')
    menu.classList.toggle('hidden')
    menuBtn.classList.toggle('flex')
}

menuBtn.addEventListener('click', navToggle)
