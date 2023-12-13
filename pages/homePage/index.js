let btn=document.querySelector(".order-btn")
btn.addEventListener('mouseout',noText)
btn.addEventListener('mouseover',yesText)

function yesText(){
    btn.style.color="white"
}
noText()
function noText(){
    btn.style.color="#2f2105"
}
yesText()