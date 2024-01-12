const btn = document.querySelector('.btn')

let showYears = document.querySelector('#years-number')
let showMonths = document.querySelector('#months-number')
let showDays = document.querySelector('#days-number')

const errorMsg = document.querySelectorAll('.error-msg')

btn.addEventListener("click", basicValidation);

function basicValidation() {
    let dayInput = document.querySelector('#day').value
    let monthInput = document.querySelector('#month').value
    let yearInput = document.querySelector('#year').value

    // Limpar mensagens de erro anteriores
    for (let i = 0; i < 3; i++) {
        errorMsg[i].innerHTML = ''
    }

    if (dayInput === '') {
        errorMsg[0].innerHTML = 'This field is required'
    }

    if (monthInput === '') {
        errorMsg[1].innerHTML = 'This field is required'
    }

    if (yearInput === '') {
        errorMsg[2].innerHTML = 'This field is required'
    }
}




