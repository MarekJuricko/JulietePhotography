const galleryImages = document.querySelector("#galleryImages")
const galleryImg = document.querySelectorAll(".galleryImg")
const imgPreview = document.querySelector("#imgPreview")
const preview = document.querySelector("#preview")
const removeActive = document.querySelector("#removeActive")
const arrowPrevious = document.querySelector("#arrowPrevious")
const arrowNext = document.querySelector("#arrowNext")
let path
let previousPath
let nextPath

window.onload = function start(){
    galleryImages.classList.toggle("active")
    imgPreview.classList.toggle("non-active")
}

function showHide(){
    galleryImages.classList.toggle("active")
    galleryImg.forEach(x => x.classList.toggle("non-active"))
    imgPreview.classList.toggle("active")
    preview.classList.add("active")
}

function showPreviewImg(){
    preview.style.backgroundImage = `url(${path})`

    previousPath = event.path[0].previousElementSibling.currentSrc
    nextPath = event.path[0].nextElementSibling.currentSrc

    console.log(nextPath)
}




galleryImages.addEventListener("click", function(event){
    showHide()
    path = event.target.currentSrc
    showPreviewImg()
})




removeActive.addEventListener("click", function(event){
    showHide()
})




arrowPrevious.addEventListener("click", function(event){
    path = previousPath
    showPreviewImg()
    console.log(previousPath)
})




arrowNext.addEventListener("click", function(event){
    path = nextPath
    showPreviewImg()
})
