const btn = document.querySelector('.btn')

btn.addEventListener('click', function () {


    let dayInput = document.querySelector('#day').value
    let monthInput = document.querySelector('#month').value
    let yearInput = document.querySelector('#year').value

    let years = document.querySelector('#years-number')
    let months = document.querySelector('#months-number')
    let days = document.querySelector('#days-number')

    let date = new Date()
    let d2 = date.getDate()
    let m2 = date.getMonth()
    let y2 = date.getFullYear()

    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (dayInput > d2) {
        d2 = d2 + month[m2 - 1]
        m2 = m2 - 1
    } if (monthInput > m2) {
        m2 = m2 + 12
        y2 = y2 - 1
    }
    let d = d2 - dayInput
    let m = m2 - monthInput
    let y = y2 - yearInput

    days.innerHTML = d

})
