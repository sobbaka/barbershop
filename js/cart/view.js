export default class View {
  elements = {
    cartLink: document.querySelector(".cart__link"),
    cartModal: document.querySelector(".modal-cart"),
  }

  showCartModal() {
    this.elements.cartModal.classList.remove("hidden");
  }

  hideCartModal() {
    this.elements.cartModal.classList.add("hidden");
  }
}
