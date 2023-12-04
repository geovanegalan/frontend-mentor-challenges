const shareButton = document.querySelector("#share")
const shareFooter = document.querySelector("#share-footer")

shareButton.addEventListener("click", function() {
    if (shareFooter.style.display === 'flex') {
        shareFooter.style.display = 'none'
    } else {
        shareFooter.style.display ='flex'
    }


    
})