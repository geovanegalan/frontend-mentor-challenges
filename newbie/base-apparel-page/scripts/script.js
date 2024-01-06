const btn = document.querySelector("#btn")
const errorMsg = document.querySelector(".error-msg")
const errorIcon = document.querySelector(".error-icon")
const emailInput = document.querySelector("#email")
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



btn.addEventListener("click", function () {
    if (emailInput.value.trim() === '' || !emailInput.value.match(emailValidation)) {
        errorMsg.innerHTML = "Please provide a valid email"
        errorIcon.style.display = "inline"
    } else {
        errorMsg.innerHTML = ""
    }
})



