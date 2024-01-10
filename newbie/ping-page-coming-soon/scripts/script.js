const emailInput = document.querySelector('#email')
const btn = document.querySelector('#btn')
const errorMsg = document.querySelector('.error-msg')
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn.addEventListener("click", function () {
    if (emailInput.value.trim() === '' || !emailInput.value.match(emailValidation)) {
        errorMsg.style.display = 'inline'
        emailInput.style.borderColor = 'red'
    } else {
        errorMsg.style.display = 'none'
    }
})

