const firstName = document.querySelector('#name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

const nameError = document.querySelector('#name-error')
const lastNameError = document.querySelector('#l-name-error')
const emailError = document.querySelector('#email-error')
const pswdError = document.querySelector('#pswd-error')

const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const btn = document.querySelector('.btn')

btn.addEventListener("click", function () {
    if (firstName.value === '' || firstName.value.length < 4 || firstName.value.length > 15) {
        nameError.style.display = 'inline'
    } else {
        nameError.style.display = 'none'
    }

    if (lastName.value === '') {
        lastNameError.style.display = 'inline'
    } else {
        lastNameError.style.display = 'none'
    }

    if (email.value === '' || !email.value.match(emailValidation)) {
        emailError.style.display = 'inline'
    } else {
        emailError.style.display = 'none'
    }

    if (password.value===''){
        pswdError.style.display='inline'
    } else {
        pswdError.style.display='none'
        
    }
})

