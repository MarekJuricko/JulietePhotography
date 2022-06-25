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
    window.scrollTo(top)
    galleryImages.classList.toggle("active")
    galleryImg.forEach(x => x.classList.toggle("non-active"))
    imgPreview.classList.toggle("active")
    preview.classList.add("active")
}

function showPreviewImg(){
    preview.style.backgroundImage = `url(${path})`

}


function check(){
    console.log(previousPath)
    console.log(path)
    console.log(nextPath)
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
                console.log(previousPath)
                console.log(path)
                console.log(nextPath)
            }
        }
    }catch(e){
    }

    if(path === allGalleryImg[0].currentSrc){
        previousPath = allGalleryImg[allGalleryImg.length-1].currentSrc
        nextPath = allGalleryImg[1].currentSrc
    }

    if(path === allGalleryImg[allGalleryImg.length-1].currentSrc){
        previousPath = allGalleryImg[allGalleryImg.length-2].currentSrc
        nextPath = allGalleryImg[0].currentSrc
    }
}



galleryImages.addEventListener("click", function(event){
    showHide()
    path = event.target.currentSrc
    showPreviewImg()
    check()
})


removeActive.addEventListener("click", function(event){
    showHide()
})


arrowPrevious.addEventListener("click", function(event){
    check()
    nextPath = path
    path = previousPath
    showPreviewImg()
})


arrowNext.addEventListener("click", function(event){
    check()
    previousPath = path
    path = nextPath
    showPreviewImg()
})
