const menu = document.querySelector('.navigation')
const btn = document.querySelector('.hamburger')

btn.addEventListener("click", (e) => {
  menu.classList.toggle('is-active')
  btn.classList.toggle('is-active')
})
