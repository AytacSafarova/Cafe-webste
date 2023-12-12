let lists=document.querySelectorAll('li')
lists.forEach(element => {
    element.addEventListener('mouseover',()=>upEvent(element))
    element.addEventListener('mouseout',()=>downEvent(element))
});
function upEvent(element) {
    element.classList.add("hover");
    // element.style.top='-10px'
}
function downEvent(element) {
    element.classList.remove("hover");
    // element.style.top='+10px'
}