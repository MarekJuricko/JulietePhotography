const galleryImages = document.querySelector("#galleryImages")
const galleryImg = document.querySelectorAll(".galleryImg")
const imgPreview = document.querySelector("#imgPreview")
const preview = document.querySelector("#preview")
const removeActive = document.querySelector("#removeActive")
const arrowPrevious = document.querySelector("#arrowPrevious")
const arrowNext = document.querySelector("#arrowNext")
const allGalleryImg = Array.from(galleryImg)
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

}


function check(){
    let t

    try{
        for(let i = 0; i <= allGalleryImg.length; i++){
            t = allGalleryImg[i].currentSrc.includes(path)
            if(t == false){
                continue
            }else{
                previousPath = allGalleryImg[i].previousElementSibling.currentSrc
                path = allGalleryImg[i].currentSrc
                nextPath = allGalleryImg[i].nextElementSibling.currentSrc
            }
        }
    }catch(e){
    }

}



galleryImages.addEventListener("click", function(event){
    showHide()
    path = event.target.currentSrc
    showPreviewImg()
    check()

    if(previousPath === undefined){
        previousPath = allGalleryImg[allGalleryImg.length-1].currentSrc
    }

    if(nextPath === undefined){
        nextPath = allGalleryImg[1].currentSrc
    }
})


removeActive.addEventListener("click", function(event){
    showHide()
})


arrowPrevious.addEventListener("click", function(event){
    check()
    nextPath = path
    path = previousPath

    showPreviewImg()
    
    if(allGalleryImg[0].currentSrc = path){
        previousPath = allGalleryImg[allGalleryImg.length-1].currentSrc
        nextPath = allGalleryImg[1].currentSrc
    }
})


arrowNext.addEventListener("click", function(event){
    check()
    previousPath = path
    path = nextPath
    showPreviewImg()
    
    if(allGalleryImg[allGalleryImg.length-1].currentSrc = path){
        nextPath = allGalleryImg[0].currentSrc
        previousPath = allGalleryImg[allGalleryImg.length-2].currentSrc
    }
})
