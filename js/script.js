let galleryItem = document.querySelectorAll('.gallery_item')
let desc = document.querySelectorAll('.gallery_item_description')
galleryItem.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        for (let i = 0; i < galleryItem.length; i++) {
            galleryItem[i].style.minWidth = "530px";
            galleryItem[i].childNodes[1].style.opacity = "1";
            if (i != index) {
                galleryItem[i].style.minWidth = "150px";
                galleryItem[i].childNodes[1].style.opacity = "0";
            }
        }
    })
})