export default class View {

  elements = {
    menu: document.querySelector('.navigation'),
    button: document.querySelector('.hamburger')
  }

  isActive() {
    return this.elements.button.classList.contains('is-active');
  }

  changeState() {
    this.elements.menu.classList.toggle('is-active')
    this.elements.button.classList.toggle('is-active')
  }

}
