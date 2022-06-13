const toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
let mainArticle = document.querySelector('.main_article')
let buttons = document.querySelectorAll('.order-btn');
let articles = document.querySelectorAll('.article_text');
let aboutBlocks = document.querySelectorAll('.about_block');

toggle.addEventListener('change', e => {
    if (e.target) {
        toggleTheme()
    }
})

function toggleTheme() {
    body.classList.toggle('dark');
    mainArticle.classList.toggle('dark');

    buttons.forEach(element => {
        element.classList.toggle('dark-theme_btn');
    })
    articles.forEach(element => {
        element.classList.toggle('dark-theme-text');
    })
    aboutBlocks.forEach(element => {
        element.classList.toggle('dark-theme_about');
    })

}