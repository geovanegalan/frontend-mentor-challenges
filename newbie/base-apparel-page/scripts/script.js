const emailInput = document.querySelector("#email")
const btn = document.querySelector("#btn")
const errorMsg = document.getElementsByClassName(".error-msg")

btn.addEventListener("click", teste)

function teste() {
    if (emailInput === '') {
        alert('salve')
    }
}
