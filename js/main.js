window.onload = function() {
    const menu = document.querySelector('.navigation')
    const btn = document.querySelector('.hamburger')

    btn.onclick = () => {
        menu.classList.toggle('is-active')
        btn.classList.toggle('is-active')
    }
}