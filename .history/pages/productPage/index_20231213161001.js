let lists = document.querySelectorAll("li");
lists.forEach((element) => {
  element.addEventListener("mouseover", () => upEvent(element));
  element.addEventListener("mouseout", () => downEvent(element));
});
function upEvent(element) {
  element.querySelector("p").classList.add("hover");
  // element.style.top='-10px'
  // element.querySelector('p').style.display= 'block'
}
function downEvent(element) {
  element.querySelector("p").classList.remove("hover");
  // element.querySelector('p').style.display= 'block'

}
