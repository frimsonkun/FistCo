const toggle = document.querySelector('.toggle');
let html = document.querySelector('html');

toggle.addEventListener('change', e => {
    if (e.target.checked) {
        html.style.setProperty('--background', 'black');
        html.style.setProperty('--text', 'white');
    } else {
        root.style.setProperty('--background', 'white');
        root.style.setProperty('--text', 'black');
    }
})