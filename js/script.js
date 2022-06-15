let galleryItem = document.querySelectorAll('.gallery_item')
let desc = document.querySelectorAll('.gallery_item_description')
galleryItem.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        for (let i = 0; i < galleryItem.length; i++) {
            galleryItem[i].classList.add('active-work')
            galleryItem[i].childNodes[1].style.opacity = "1";
            if (i != index) {
                galleryItem[i].classList.remove('active-work')
                galleryItem[i].childNodes[1].style.opacity = "0";
            }
        }
    })
})


// BURGER MENU
const burgerWrap = document.getElementById('burger-container')
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.header-nav');
burgerWrap.addEventListener('click', toggleOpen);

function toggleOpen() {
    hamburger.classList.toggle('open')
    navList.classList.toggle('open')
}; // BURGER MENU