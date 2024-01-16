const btn = document.querySelector('.btn')

let showYears = document.querySelector('#years-number')
let showMonths = document.querySelector('#months-number')
let showDays = document.querySelector('#days-number')

const errorMsg = document.querySelectorAll('.error-msg')

btn.addEventListener("click", basicValidation);

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

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
    } else if (monthInput < 1 || monthInput > 12) {
        errorMsg[1].innerHTML = 'Invalid month'
    } else if ((monthInput === '4' || monthInput === '6' || monthInput === '9' || monthInput === '11') && dayInput > 30) {
        errorMsg[0].innerHTML = 'April, June, September, and November have 30 days';
    } else if (monthInput === '2' && (dayInput > 28 || (dayInput > 29 && !isLeapYear(yearInput)))) {
        errorMsg[0].innerHTML = 'February has 28 days (or 29 in a leap year)';
    } else if (dayInput > 31) {
        errorMsg[0].innerHTML = 'Invalid day for the selected month';
    }

    if (yearInput === '') {
        errorMsg[2].innerHTML = 'This field is required'
    } else if (!/^\d+$/.test(yearInput) || yearInput.length !== 4) {
        errorMsg[2].innerHTML = 'Invalid year format';
    } 
}

