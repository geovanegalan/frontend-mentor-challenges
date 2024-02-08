const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const parentSection = button.parentNode
        const answer = parentSection.querySelector('.answer')
        answer.hidden = false
    })
})