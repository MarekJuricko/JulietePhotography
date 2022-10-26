const toggleButton = document.querySelector("#toggle-button")
const navLinks = document.querySelectorAll(".btn")

toggleButton.addEventListener("click", () => {
    navLinks.forEach(x => x.classList.toggle("active"))
})

window.addEventListener("scroll", () =>{
    navLinks.forEach(x => x.classList.remove("active")) 
})